import LegalPage from '../_components/LegalPage';

export const metadata = {
  title: 'Privacy Policy | Rajkumaran Builders Pvt Ltd',
  description: 'How Rajkumaran Builders Pvt Ltd collects, uses and protects personal information shared through this website.',
};

const contactBlock = (
  <address className="legal-address">
    <strong>Rajkumaran Builders Pvt Ltd</strong><br />
    23, Chetty Street, Porur, Chennai 600116, Tamil Nadu, India<br />
    Email: <a href="mailto:rajkumaran.malar@gmail.com">rajkumaran.malar@gmail.com</a><br />
    Phone: <a href="tel:+914424825565">044-24825565</a>, <a href="tel:+914424829133">044-24829133</a><br />
    Office hours: Mon-Sat 9.30AM - 5.30PM
  </address>
);

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>This Privacy Policy explains how Rajkumaran Builders Pvt Ltd (formerly known as M/s Chitra Constructions) (&quot;Rajkumaran Builders&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) collects, uses, shares and protects personal information when you visit this website, send us an enquiry, or contact us by phone or email.</p>
        <p>We process personal data in accordance with applicable Indian law, including the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 and the rules made under them. By using this website or sharing your information with us, you agree to the practices described in this policy.</p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    content: (
      <>
        <p><strong>Information you give us.</strong> When you fill in an enquiry or estimate form, call us, or email us, we may collect:</p>
        <ul>
          <li>your name, phone number and email address;</li>
          <li>the type of project or service you are interested in;</li>
          <li>details you choose to share about your project, such as location, requirements, timeline and budget;</li>
          <li>any documents, drawings or other information you send us in connection with a project.</li>
        </ul>
        <p><strong>Information collected automatically.</strong> Like most websites, our hosting provider may record basic technical information when you visit, such as your IP address, browser type, device type, the pages you view and the date and time of your visit. This is used to keep the website secure and working properly.</p>
        <p>We do not knowingly collect sensitive personal data, such as financial account details or health information, through this website. Please do not send us such information through the enquiry forms.</p>
      </>
    ),
  },
  {
    id: 'how-we-use-information',
    title: 'How we use your information',
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>respond to your enquiries and requests for quotes or estimates;</li>
          <li>arrange site visits, consultations and meetings;</li>
          <li>plan, deliver and manage construction, consultancy and valuation services you engage us for;</li>
          <li>communicate with you about your project, including updates, approvals and documentation;</li>
          <li>maintain the security and performance of our website;</li>
          <li>meet our legal, regulatory, tax and accounting obligations.</li>
        </ul>
        <p>We only use your information for purposes connected with your enquiry or our services. We do not sell, rent or trade your personal information.</p>
      </>
    ),
  },
  {
    id: 'sharing-information',
    title: 'How we share information',
    content: (
      <>
        <p>We may share your information only where needed, with:</p>
        <ul>
          <li>our engineers, structural designers, consultants and site teams who work on your project;</li>
          <li>service providers who help us run our business and website, such as hosting and email providers, under appropriate confidentiality obligations;</li>
          <li>professional advisers such as lawyers, auditors and accountants;</li>
          <li>government authorities, regulators or courts, where required by law or to obtain approvals for your project.</li>
        </ul>
        <p>Confidentiality is one of the standards we follow on every project, and we expect the same of everyone we share information with.</p>
      </>
    ),
  },
  {
    id: 'third-party-services',
    title: 'Third-party services',
    content: (
      <>
        <p>Some parts of this website use services provided by third parties:</p>
        <ul>
          <li><strong>Google Maps</strong> is embedded on our Contact page to show our office location. When you view the map, Google may collect information such as your IP address and may set cookies.</li>
          <li><strong>Google Fonts</strong> is used to display the website&apos;s typefaces. Your browser connects to Google&apos;s servers to load the fonts, which shares your IP address with Google.</li>
        </ul>
        <p>These services are governed by their own privacy policies, including the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. We do not control the information they collect.</p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: (
      <>
        <p>This website does not use advertising or tracking cookies of its own. Third-party services embedded on the site, such as Google Maps, may set their own cookies when you use them.</p>
        <p>You can block or delete cookies through your browser settings. Blocking cookies may affect how embedded services such as the map work.</p>
      </>
    ),
  },
  {
    id: 'data-retention',
    title: 'How long we keep information',
    content: (
      <p>We keep personal information only for as long as it is needed for the purposes described in this policy. Enquiry details are kept for as long as needed to respond and follow up. Information related to projects we carry out, including contracts, approvals and invoices, is kept for the period required by law and for our legitimate business records. When information is no longer needed, we delete it or make it anonymous.</p>
    ),
  },
  {
    id: 'security',
    title: 'How we protect information',
    content: (
      <p>We take reasonable technical and organisational measures to protect your personal information against loss, misuse, unauthorised access, disclosure or alteration. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    content: (
      <>
        <p>Subject to applicable law, you have the right to:</p>
        <ul>
          <li>ask for a summary of the personal information we hold about you and how we use it;</li>
          <li>ask us to correct, complete or update inaccurate information;</li>
          <li>ask us to erase information we no longer need;</li>
          <li>withdraw your consent where we rely on consent, without affecting processing already carried out;</li>
          <li>raise a grievance with us about how your information is handled.</li>
        </ul>
        <p>To exercise any of these rights, contact us using the details below. We will respond within a reasonable time. If you are not satisfied with our response, you may approach the Data Protection Board of India once it is available to hear complaints.</p>
      </>
    ),
  },
  {
    id: 'children',
    title: "Children's privacy",
    content: (
      <p>This website and our services are intended for adults. We do not knowingly collect personal information from children under 18. If you believe a child has shared personal information with us, please contact us and we will delete it.</p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    content: (
      <p>We may update this Privacy Policy from time to time. The latest version will always be available on this page, with the &quot;Last updated&quot; date shown at the top. We encourage you to review it periodically.</p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    content: (
      <>
        <p>If you have any questions about this Privacy Policy, want to exercise your rights, or have a grievance about how your information is handled, please contact us:</p>
        {contactBlock}
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="LEGAL"
      title="Privacy Policy"
      intro="How we collect, use and protect the information you share with us."
      updated="29 September 2026"
      sections={sections}
    />
  );
}
