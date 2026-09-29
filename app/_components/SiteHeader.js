'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation } from '../_data/site';

// Same header on every page. On the home page, pass homeHref="#home" and quoteHref="#contact"
// so the logo, Home link and Get a Quote scroll within the page.
export default function SiteHeader({ current, homeHref = '/', quoteHref = '/contact' }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" href={homeHref} onClick={close}>
          <span className="brand-logo"><Image src="/logo/logo.png" alt="Rajkumaran Builders" fill sizes="200px" /></span>
        </Link>
        <nav className={`desktop-nav ${open ? 'desktop-nav--open' : ''}`} aria-label="Main navigation">
          {navigation.map(({ label, href }) => (
            <Link key={label} href={label === 'Home' ? homeHref : href} onClick={close} aria-current={label === current ? 'page' : undefined}>{label}</Link>
          ))}
          <Link className="nav-cta" href={quoteHref} onClick={close}>Get a Quote <ArrowUpRight size={15} /></Link>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
