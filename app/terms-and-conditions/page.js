import Link from 'next/link';
import LegalPage from '../_components/LegalPage';

export const metadata = {
  title: 'Terms & Conditions | Rajkumaran Builders Pvt Ltd',
  description: 'The terms that apply to your use of the Rajkumaran Builders Pvt Ltd website.',
};

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of these terms',
    content: (
      <>
        <p>These Terms & Conditions govern your use of this website, which is operated by Rajkumaran Builders Pvt Ltd (formerly known as M/s Chitra Constructions), 23, Chetty Street, Porur, Chennai 600116, Tamil Nadu, India (&quot;Rajkumaran Builders&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).</p>
        <p>By accessing or using this website, you agree to these terms. If you do not agree, please do not use the website.</p>
      </>
    ),
  },
  {
    id: 'about-website',
    title: 'About this website',
    content: (
      <p>This website provides general information about Rajkumaran Builders and our construction, consultancy and valuation services, and lets you contact us with enquiries. It does not offer online purchases or payments.</p>
    ),
  },
  {
    id: 'website-information',
    title: 'Information on this website',
    content: (
      <>
        <p>We try to keep the information on this website accurate and up to date, but it is provided for general information only. In particular:</p>
        <ul>
          <li>descriptions of services, project details, figures and project values are indicative and may not reflect the full scope or current status of any project;</li>
          <li>photographs and images may be illustrative and may not show the exact finish, materials or specifications of a particular project;</li>
          <li>nothing on this website is an offer, quotation or professional advice for your specific situation.</li>
        </ul>
        <p>You should not rely on the website alone when making decisions about a construction project. Please contact us for advice specific to your requirements.</p>
      </>
    ),
  },
  {
    id: 'enquiries-quotations',
    title: 'Enquiries, estimates and quotations',
    content: (
      <>
        <p>Submitting an enquiry or estimate form, or contacting us by phone or email, does not create a contract between you and Rajkumaran Builders.</p>
        <p>Any estimate or quotation we provide is subject to a site assessment, confirmation of your requirements, applicable approvals and prevailing material and labour costs. Our services are provided only under a separate written agreement, and the terms of that agreement will apply to the work. If there is any conflict between these terms and a signed agreement, the signed agreement will prevail.</p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual property',
    content: (
      <>
        <p>The content of this website, including text, the Rajkumaran Builders name and logo, layouts and graphics, is owned by or licensed to Rajkumaran Builders and is protected by applicable intellectual property laws. Some images may be used under licence from third parties.</p>
        <p>You may view and print pages for your personal, non-commercial use. You may not copy, reproduce, modify, distribute or use any content for commercial purposes without our prior written permission.</p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    content: (
      <>
        <p>When using this website, you agree not to:</p>
        <ul>
          <li>use the website for any unlawful, fraudulent or harmful purpose;</li>
          <li>submit false, misleading or another person&apos;s information through our forms;</li>
          <li>send spam, advertising or unsolicited messages through our forms;</li>
          <li>attempt to gain unauthorised access to the website, its servers or related systems, or interfere with how it works;</li>
          <li>introduce viruses, malware or any other harmful code.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'privacy',
    title: 'Privacy',
    content: (
      <p>Any personal information you share with us through this website is handled in line with our <Link href="/privacy-policy">Privacy Policy</Link>, which forms part of these terms.</p>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-party links and services',
    content: (
      <p>This website may include links to, or embedded content from, third-party websites and services, such as Google Maps and social media platforms. We do not control and are not responsible for the content, availability or privacy practices of those third parties. Using them is at your own risk and subject to their terms.</p>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    content: (
      <p>This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the extent permitted by law, we make no warranties of any kind, express or implied, about the website, including that it will be uninterrupted, error-free, secure or free of viruses, or that the information on it is complete or accurate.</p>
    ),
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of liability',
    content: (
      <p>To the extent permitted by law, Rajkumaran Builders will not be liable for any direct, indirect, incidental or consequential loss or damage arising from your use of, or inability to use, this website or from your reliance on any information on it. Nothing in these terms limits any liability that cannot be limited under applicable law.</p>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing law and jurisdiction',
    content: (
      <p>These terms are governed by the laws of India. Any dispute arising out of or in connection with these terms or your use of this website will be subject to the exclusive jurisdiction of the courts at Chennai, Tamil Nadu.</p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    content: (
      <p>We may update these Terms & Conditions from time to time. The latest version will always be available on this page, with the &quot;Last updated&quot; date shown at the top. Your continued use of the website after changes are published means you accept the updated terms.</p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    content: (
      <>
        <p>If you have any questions about these Terms & Conditions, please contact us:</p>
        <address className="legal-address">
          <strong>Rajkumaran Builders Pvt Ltd</strong><br />
          23, Chetty Street, Porur, Chennai 600116, Tamil Nadu, India<br />
          Email: <a href="mailto:rajkumaran.malar@gmail.com">rajkumaran.malar@gmail.com</a><br />
          Phone: <a href="tel:+914424825565">044-24825565</a>, <a href="tel:+914424829133">044-24829133</a><br />
          Office hours: Mon-Sat 9.30AM - 5.30PM
        </address>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="LEGAL"
      title="Terms & Conditions"
      intro="The terms that apply when you use this website."
      updated="29 September 2026"
      sections={sections}
    />
  );
}
