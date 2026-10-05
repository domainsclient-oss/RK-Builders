import { createSign } from 'node:crypto';

// Appends rows to a Google Sheet using a service account.
// Uses Node's crypto and fetch directly, so no Google client library is needed.

const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

let cachedToken = null;

function getConfig() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  // Hosting dashboards often store the key with literal "\n" sequences; turn them back into newlines.
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const tab = process.env.GOOGLE_SHEET_TAB || 'Sheet1';

  if (!clientEmail || !privateKey || !sheetId) {
    throw new Error('Google Sheets is not configured. Set GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_PRIVATE_KEY and GOOGLE_SHEET_ID.');
  }
  return { clientEmail, privateKey, sheetId, tab };
}

const base64url = (value) => Buffer.from(value).toString('base64url');

async function getAccessToken({ clientEmail, privateKey }) {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) return cachedToken.token;

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = base64url(JSON.stringify({ iss: clientEmail, scope: SCOPE, aud: TOKEN_URL, iat: now, exp: now + 3600 }));
  const signer = createSign('RSA-SHA256');
  signer.update(`${header}.${claims}`);
  const signature = signer.sign(privateKey).toString('base64url');

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${header}.${claims}.${signature}`,
    }),
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error(`Google token request failed (${response.status}): ${await response.text()}`);
  }

  const data = await response.json();
  cachedToken = { token: data.access_token, expiresAt: Date.now() + data.expires_in * 1000 };
  return cachedToken.token;
}

// Adds one row to the end of the configured tab. Values are stored as plain text (RAW),
// so nothing a visitor types is ever evaluated as a spreadsheet formula.
export async function appendRow(values) {
  const config = getConfig();
  const token = await getAccessToken(config);
  const range = encodeURIComponent(`'${config.tab.replace(/'/g, "''")}'!A1`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.sheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ values: [values] }),
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error(`Google Sheets append failed (${response.status}): ${await response.text()}`);
  }
}
