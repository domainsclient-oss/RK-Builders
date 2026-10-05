import { appendRow } from '../../_lib/googleSheets';

export const runtime = 'nodejs';

const LIMITS = { name: 100, phone: 30, email: 150, projectType: 100, message: 3000, source: 60 };
const PROJECT_TYPES = ['Residential Construction', 'Commercial Construction', 'Renovation & Remodeling', 'Project Management'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\d\s-]{7,20}$/;

// Light protection against repeated submissions. Kept in memory, so it resets when the server restarts.
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const recentSubmissions = new Map();

function isRateLimited(key) {
  const now = Date.now();
  const recent = (recentSubmissions.get(key) ?? []).filter((time) => now - time < RATE_LIMIT.windowMs);
  recent.push(now);
  recentSubmissions.set(key, recent);
  return recent.length > RATE_LIMIT.max;
}

function validate(fields) {
  if (!fields.name) return 'Please enter your name.';
  if (!PHONE_PATTERN.test(fields.phone)) return 'Please enter a valid phone number.';
  if (!EMAIL_PATTERN.test(fields.email)) return 'Please enter a valid email address.';
  if (fields.projectType && !PROJECT_TYPES.includes(fields.projectType)) return 'Please choose a project type from the list.';
  if (!fields.message) return 'Please tell us a little about your project.';
  const tooLong = Object.entries(LIMITS).find(([key, max]) => fields[key].length > max);
  if (tooLong) return 'One of the fields is too long. Please shorten it and try again.';
  return null;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Hidden "website" field: people never see it, bots usually fill it in. Pretend success and drop it.
  if (body.website) return Response.json({ ok: true });

  const fields = Object.fromEntries(
    Object.keys(LIMITS).map((key) => [key, typeof body[key] === 'string' ? body[key].trim() : '']),
  );
  const error = validate(fields);
  if (error) return Response.json({ error }, { status: 400 });

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  if (isRateLimited(ip)) {
    return Response.json({ error: 'Too many enquiries in a short time. Please try again later or call us.' }, { status: 429 });
  }

  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });

  try {
    await appendRow([
      submittedAt,
      fields.name,
      fields.phone,
      fields.email,
      fields.projectType || 'Not specified',
      fields.message,
      fields.source || 'Website',
    ]);
  } catch (err) {
    console.error('[enquiry] Could not save to Google Sheets:', err);
    return Response.json({ error: 'Sorry, we could not send your enquiry right now.' }, { status: 500 });
  }

  return Response.json({ ok: true });
}
