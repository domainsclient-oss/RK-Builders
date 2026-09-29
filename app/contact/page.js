import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  Clock,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from 'lucide-react';
import SiteHeader from '../_components/SiteHeader';
import SiteFooter from '../_components/SiteFooter';
import { mapsLink } from '../_data/site';
import ContactForm from './ContactForm';

const mapEmbed = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.0433651063327!2d80.157203!3d13.0329105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261156e169035%3A0xe874a912f655c8eb!2sRAJKUMARAN%20BUILDERS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1790581599336!5m2!1sen!2sin';

const contactDetails = [
  {
    icon: Phone,
    label: 'Call us',
    lines: [
      [{ text: '044-24829133', href: 'tel:+914424829133' }, { text: '044-24825565', href: 'tel:+914424825565' }],
      [{ text: '98840 34823', href: 'tel:+919884034823' }, { text: '96001 69118', href: 'tel:+919600169118' }],
    ],
  },
  {
    icon: Mail,
    label: 'Email us',
    lines: [[{ text: 'rajkumaran.malar@gmail.com', href: 'mailto:rajkumaran.malar@gmail.com' }]],
  },
  {
    icon: MapPin,
    label: 'Visit us',
    lines: [[{ text: '23, Chetty Street, Porur, Chennai 600116, India', href: mapsLink, external: true }]],
  },
  {
    icon: Clock,
    label: 'Working hours',
    lines: [[{ text: 'Mon-Sat 9.30AM - 5.30PM' }]],
  },
];

export const metadata = {
  title: 'Contact Rajkumaran Builders | Get in touch',
  description: 'Contact Rajkumaran Builders in Porur, Chennai for construction, consultancy, valuation, and project enquiries.',
};

function DetailLine({ items }) {
  return (
    <span className="contact-page-line">
      {items.map((item, index) => (
        <span key={item.text}>
          {index > 0 && ', '}
          {item.href
            ? <a href={item.href} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{item.text}</a>
            : item.text}
        </span>
      ))}
    </span>
  );
}

export default function ContactPage() {
  return (
    <div className="about-page contact-page">
      <SiteHeader current="Contact" quoteHref="#enquiry" />
      <main>
        <section className="about-banner contact-page-banner">
          <Image
            className="about-banner-image"
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=85"
            alt="Construction workers on a building site"
            fill
            priority
            sizes="100vw"
          />
          <div className="about-banner-shade" />
          <div className="about-banner-content shell">
            <span className="about-kicker"><i /> GET IN TOUCH</span>
            <h1>Contact Us</h1>
            <p>Have a project in mind? Talk to our team and let&apos;s turn your vision into reality.</p>
            <Link className="about-banner-link" href="#enquiry">Send an enquiry <ArrowDown size={16} /></Link>
            <div className="about-banner-meta">
              <span><Phone size={15} /> 044-24825565</span>
              <span><Mail size={15} /> rajkumaran.malar@gmail.com</span>
              <span><Clock size={15} /> Mon-Sat 9.30AM - 5.30PM</span>
            </div>
          </div>
        </section>

        <section className="contact-page-main section-pad" id="enquiry">
          <div className="shell contact-page-layout">
            <div className="contact-page-intro">
              <span className="about-eyebrow">CONTACT INFORMATION</span>
              <h2>Let&apos;s build something great together.</h2>
              <p>Reach us by phone, email, or visit our office. Or send an enquiry and our team will get back to you.</p>
              <ul className="contact-page-details">
                {contactDetails.map(({ icon: Icon, label, lines }) => (
                  <li key={label}>
                    <span className="contact-page-icon"><Icon size={20} strokeWidth={1.75} /></span>
                    <div>
                      <small>{label}</small>
                      {lines.map((items) => <DetailLine key={items[0].text} items={items} />)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="contact-page-map-section">
          <div className="shell">
            <div className="about-section-heading">
              <div><span className="about-eyebrow">FIND US</span><h2>Visit our office</h2></div>
              <p>23, Chetty Street, Porur, Chennai 600116, India.</p>
            </div>
            <div className="contact-page-map">
              <iframe
                title="Map showing Rajkumaran Builders office in Porur, Chennai"
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="contact-page-map-card">
                <span className="contact-page-icon"><MapPin size={20} strokeWidth={1.75} /></span>
                <div>
                  <strong>Rajkumaran Builders Pvt Ltd</strong>
                  <span>23, Chetty Street, Porur, Chennai 600116</span>
                  <a href={mapsLink} target="_blank" rel="noopener noreferrer">Get directions <Navigation size={14} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
