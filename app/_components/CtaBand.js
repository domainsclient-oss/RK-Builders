import Link from 'next/link';
import { ArrowUpRight, Clock, Mail, Phone } from 'lucide-react';

export default function CtaBand({ className = '' }) {
  return (
    <section className={`about-contact-band ${className}`.trim()}>
      <div className="shell">
        <div className="about-contact-card">
          <div className="about-contact-copy">
            <span className="about-eyebrow about-eyebrow--light">LET&apos;S BUILD TOGETHER</span>
            <h2>Have a project in mind?</h2>
            <p>Talk to our team and let&apos;s turn your vision into reality.</p>
            <div className="about-contact-actions">
              <Link className="about-contact-button" href="/contact">Talk to our team <ArrowUpRight size={17} /></Link>
              <a className="about-contact-button about-contact-button--ghost" href="tel:+914424825565"><Phone size={16} /> 044-24825565</a>
            </div>
          </div>
          <ul className="about-contact-info">
            <li><span className="about-contact-icon"><Phone size={18} /></span><div><small>Call us</small><a href="tel:+919884034823">98840 34823</a></div></li>
            <li><span className="about-contact-icon"><Mail size={18} /></span><div><small>Email us</small><a href="mailto:rajkumaran.malar@gmail.com">rajkumaran.malar@gmail.com</a></div></li>
            <li><span className="about-contact-icon"><Clock size={18} /></span><div><small>Working hours</small><span>Mon-Sat 9.30AM - 5.30PM</span></div></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
