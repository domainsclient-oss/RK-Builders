import Image from 'next/image';
import Link from 'next/link';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { mapsLink, socialLinks } from '../_data/site';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand brand--footer" href="/"><span className="brand-logo"><Image src="/logo/footer-logo.png" alt="Rajkumaran Builders" fill sizes="180px" /></span></Link>
          <p>We, M/s Rajkumaran Builders Pvt Ltd, (formerly known as M/s Chitra Constructions) introduce ourselves a renowned name in Construction, Consultants and Valuation, established in year 1983 is a single window facility to get variety of modern construction and techno-economic services at one place.</p>
          <div className="socials"><a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF size={17} /></a><a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={17} /></a><a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube size={17} /></a></div>
        </div>
        <div><h4>Explore</h4><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></div>
        <div><h4>Services</h4><Link href="/services">Residential construction</Link><Link href="/services">Commercial construction</Link><Link href="/services">Renovation</Link><Link href="/services">Project management</Link></div>
        <div>
          <h4>Contact</h4>
          <p className="footer-contact-item"><Phone size={15} /><span><a href="tel:+914424829133">044-24829133</a>, <a href="tel:+914424825565">044-24825565</a></span></p>
          <p className="footer-contact-item"><Phone size={15} /><span><a href="tel:+919884034823">98840 34823</a>, <a href="tel:+919600169118">96001 69118</a></span></p>
          <a className="footer-contact-item" href="mailto:rajkumaran.malar@gmail.com"><Mail size={15} />rajkumaran.malar@gmail.com</a>
          <p className="footer-contact-item"><Clock size={15} /><span>Mon-Sat 9.30AM - 5.30PM</span></p>
          <a className="footer-contact-item" href={mapsLink} target="_blank" rel="noopener noreferrer"><MapPin size={15} /><span>23, Chetty Street, Porur<br />Chennai 600116, India</span></a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Rajkumaran Builders. All rights reserved.</span><div><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-and-conditions">Terms & conditions</Link></div></div>
    </footer>
  );
}
