'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp } from 'lucide-react';

// Elements that animate into view on scroll. "clip" reveals media with a wipe instead of a fade.
const revealGroups = [
  {
    variant: 'up',
    selector: [
      '.section-intro', '.about-section-heading', '.services-page-all-heading', '.about-history-heading',
      '.about-copy', '.about-company-copy', '.about-skills-intro', '.mission-copy', '.mission-points',
      '.testimonial-intro', '.testimonial-card', '.contact-intro', '.enquiry-form', '.contact-page-intro',
      '.services-page-copy', '.services-page-faq-intro', '.services-page-solutions', '.projects-record',
      '.about-company-practice', '.about-contact-card', '.services-page-standards-card',
    ].join(','),
  },
  {
    variant: 'stagger',
    selector: [
      '.values-stats > div', '.service-card', '.project-card', '.about-company-card', '.about-skill',
      '.about-responsibility-item', '.about-specialization-item', '.about-team-card', '.history-entry',
      '.services-page-all-card', '.services-page-help-card', '.contact-quick-grid > li', '.footer-grid > div',
      '.services-page-standards-list li',
    ].join(','),
  },
  {
    variant: 'clip',
    selector: ['.about-media > img', '.about-company-image-wrap', '.services-page-media', '.contact-page-map'].join(','),
  },
];

const REVEAL_MS = 1200;

export default function SiteEffects() {
  const pathname = usePathname();
  const progressRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  // Scroll reveal. Classes are removed once the animation ends so hover transitions work normally.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return undefined;

    const root = document.documentElement;
    root.classList.add('reveal-ready');
    const timers = [];

    // Clipped media is fully hidden at first, so its unclipped parent is observed instead.
    const targets = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        (targets.get(entry.target) ?? []).forEach((el) => {
          el.classList.add('is-visible');
          const delay = parseFloat(el.style.getPropertyValue('--reveal-delay')) || 0;
          timers.push(window.setTimeout(() => {
            el.classList.remove('reveal', 'reveal--up', 'reveal--clip', 'is-visible');
            el.style.removeProperty('--reveal-delay');
          }, REVEAL_MS + delay + 100));
        });
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    const seen = new Set();
    revealGroups.forEach(({ variant, selector }) => {
      document.querySelectorAll(selector).forEach((el) => {
        if (seen.has(el) || el.parentElement?.closest('.reveal')) return;
        seen.add(el);
        el.classList.add('reveal', variant === 'clip' ? 'reveal--clip' : 'reveal--up');
        if (variant === 'stagger') {
          const siblings = Array.from(el.parentElement?.children ?? []).filter((child) => child.matches(selector));
          el.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(el), 5) * 90}ms`);
        }
        const target = variant === 'clip' && el.parentElement ? el.parentElement : el;
        targets.set(target, [...(targets.get(target) ?? []), el]);
        observer.observe(target);
      });
    });

    return () => {
      observer.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.remove('reveal', 'reveal--up', 'reveal--clip', 'is-visible');
        el.style.removeProperty('--reveal-delay');
      });
    };
  }, [pathname]);

  // Scroll progress bar and back-to-top button.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      setShowTop(window.scrollY > 600);
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <button
        type="button"
        className={`back-to-top ${showTop ? 'back-to-top--visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp size={20} strokeWidth={2.2} />
      </button>
    </>
  );
}
