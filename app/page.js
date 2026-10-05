'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { featuredProjects, mapsLink, projectCategories, services, socialLinks } from './_data/site';
import SiteHeader from './_components/SiteHeader';
import EnquiryForm from './_components/EnquiryForm';

const imageBase = 'https://images.unsplash.com';

const values = [
  { icon: ShieldCheck, title: 'Quality', text: 'Meticulous standards and trusted materials at every stage of delivery.' },
  { icon: Building2, title: 'Integrity', text: 'Clear commitments, honest communication, and accountability in every detail.' },
  { icon: Sparkles, title: 'Innovation', text: 'Smarter processes and thoughtful design that move projects forward.' },
  { icon: ShieldCheck, title: 'Safety', text: 'A disciplined culture that protects people, property, and peace of mind.' },
  { icon: MessageCircle, title: 'Customer Focus', text: 'A collaborative experience shaped around your goals and expectations.' },
  { icon: Trees, title: 'Sustainability', text: 'Responsible choices that create enduring value for places and people.' },
];

const testimonials = [
  { name: 'Arun & Meera', project: 'The Courtyard House', quote: 'Rajkumaran Builders gave us confidence from the first conversation. The quality, transparency, and attention to detail were exceptional throughout.', initials: 'AM' },
  { name: 'Vikram Narayanan', project: 'Northstar Commercial', quote: 'They managed a complex commercial build with calm professionalism. Every milestone was communicated clearly and delivered with care.', initials: 'VN' },
  { name: 'Priya S.', project: 'The Palm Residence', quote: 'Our renovation felt personal, organized, and genuinely collaborative. The finished home is more beautiful and functional than we imagined.', initials: 'PS' },
];

function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-intro ${light ? 'section-intro--light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function CountUp({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  // Start counting when the number scrolls into view, not on page load.
  useEffect(() => {
    const duration = 1600;
    let frame;
    const run = () => {
      const start = performance.now();
      const animate = (timestamp) => {
        const progress = Math.min((timestamp - start) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * easedProgress));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    };

    if (!('IntersectionObserver' in window)) {
      run();
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      run();
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <strong ref={ref}>{count.toLocaleString('en-IN')}</strong>;
}

const HERO_SLIDE_MS = 7000;

const heroSlides = [
  {
    image: `${imageBase}/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=90`,
    alt: 'Modern architectural structure under construction',
    eyebrow: 'BUILDING TRUST. CREATING LEGACIES.',
    title: 'Welcome To',
    highlight: 'Rajkumaran Builders Pvt Ltd',
    text: 'A TRADITION OF TRUST, WE CREATE, WE DESIGN, WE EXECUTE WITH PASSION AND ACCURACY.',
    tagline: true,
  },
  {
    image: `${imageBase}/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=2200&q=90`,
    alt: 'Architect working on building plans',
    title: 'From concept',
    highlight: 'to creation.',
    text: 'We have a team of highly qualified & experienced Engineers, who work directly on the assignments.',
  },
  {
    image: `${imageBase}/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=2200&q=90`,
    alt: 'Multi-storey building frame under construction',
    title: 'You Dream',
    highlight: 'We build',
    text: 'We maintain high degree of standards and unbiased reports .',
  },
];

function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const touchStart = useRef(null);
  const slide = heroSlides[active];
  const count = heroSlides.length;
  const go = (index) => setActive((index + count) % count);

  const remaining = useRef(HERO_SLIDE_MS);

  // No autoplay for visitors who prefer reduced motion; they can use the arrows.
  useEffect(() => {
    setAutoplay(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  // A fresh slide gets the full time.
  useEffect(() => {
    remaining.current = HERO_SLIDE_MS;
  }, [active]);

  // Autoplay timer; pausing keeps the time left so the progress bar and timer stay in step.
  useEffect(() => {
    if (!autoplay || paused) return undefined;
    const startedAt = Date.now();
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % count), remaining.current);
    return () => {
      window.clearTimeout(timer);
      remaining.current = Math.max(0, remaining.current - (Date.now() - startedAt));
    };
  }, [active, paused, autoplay, count]);

  const onTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(distance) > 50) go(active + (distance < 0 ? 1 : -1));
  };

  return (
    <section
      className="hero"
      id="home"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
      onTouchEnd={onTouchEnd}
    >
      {heroSlides.map((item, index) => (
        <Image key={item.image} className={`hero-image ${index === active ? 'is-active' : ''}`} src={item.image} alt={index === active ? item.alt : ''} fill priority={index === 0} sizes="100vw" />
      ))}
      <div className="hero-shade" />
      <div className="hero-content shell">
        <div className="hero-top">
          <div className="hero-copy" key={active} aria-live={autoplay ? 'off' : 'polite'}>
            {slide.eyebrow && <span className="eyebrow eyebrow--gold">{slide.eyebrow}</span>}
            <h1>{slide.title} <em>{slide.highlight}</em></h1>
            <p className={slide.tagline ? undefined : 'hero-lead'}>{slide.text}</p>
            <div className="hero-actions">
              <a className="button button--gold" href="#projects">Explore Our Projects <ArrowUpRight size={17} /></a>
              <a className="button button--outline-light" href="#contact">Get a Free Consultation</a>
            </div>
          </div>
          <div className="hero-slider-nav">
            <span className="hero-slider-count"><strong>{String(active + 1).padStart(2, '0')}</strong> / {String(count).padStart(2, '0')}</span>
            <div className="hero-slider-bars">
              {heroSlides.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  className={`hero-slider-bar ${index === active ? 'is-active' : ''} ${index < active ? 'is-done' : ''} ${paused ? 'is-paused' : ''} ${autoplay ? '' : 'is-manual'}`}
                  onClick={() => go(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === active ? 'true' : undefined}
                >
                  <span />
                </button>
              ))}
            </div>
            <div className="hero-slider-arrows">
              <button type="button" onClick={() => go(active - 1)} aria-label="Previous slide"><ArrowLeft size={18} /></button>
              <button type="button" onClick={() => go(active + 1)} aria-label="Next slide"><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>EST. 1983 <i /></span>
          <div className="hero-stats">
            <div><strong>35+</strong><span>Years experience</span></div>
            <div><strong>63+</strong><span>Projects completed</span></div>
            <div><strong>50+</strong><span>Happy clients</span></div>
          </div>
          <a className="scroll-cue" href="#about">Scroll to discover <ChevronDown size={16} /></a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section shell section-pad" id="about">
      <div className="about-media">
        <Image src={`${imageBase}/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85`} alt="Warm, light-filled contemporary home interior" fill sizes="(max-width: 800px) 100vw, 50vw" />
        <div className="experience-badge"><strong>35<span>+</span></strong><small>Years of<br />excellence</small></div>
        <span className="media-caption">01 <i /> Crafting with purpose</span>
      </div>
      <div className="about-copy">
        <SectionIntro eyebrow="ABOUT RAJKUMARAN BUILDERS" title="Turning vision into strong foundations." />
        <p className="lead">We, M/s Rajkumaran Builders Pvt Ltd, formerly known as M/s Chitra Constructions, introduce ourselves as a renowned name in Construction, Consultants and Valuation. Established in 1983, we are a single-window facility providing a variety of modern construction and techno-economic services at one place.</p>
        <p className="lead">The company has maintained high standards of professional practice and is known for its competence, integrity, and professionalism, with realistic and unbiased opinions. Our multi-disciplinary team studies and analyses the needs of every project to provide accurate budgets and support the successful completion of works. With a systematic and analytical approach, M/s Rajkumaran Builders Pvt Ltd has worked on the principle of forward integration for the last 35 years.</p>
        <a className="text-link" href="#values">Know more about us <ArrowUpRight size={17} /></a>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="values-section section-pad" id="values">
      <div className="shell">
        <SectionIntro eyebrow="WHAT GUIDES US" title="Built on values. Driven by excellence." text="We believe in customer satisfaction and happiness. We extend our services all over India with the expert guidance of our directors." />
        <div className="values-stats">
          <div><Building2 className="values-stat-icon" size={25} strokeWidth={1.5} /><CountUp value={63} /><span>Projects Completed</span></div>
          <div><Ruler className="values-stat-icon" size={25} strokeWidth={1.5} /><CountUp value={100000} /><span>Total Square Feet Constructed</span></div>
          <div><Sparkles className="values-stat-icon" size={25} strokeWidth={1.5} /><CountUp value={2} /><span>Upcoming Projects</span></div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="mission-section">
      <Image src={`${imageBase}/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=85`} alt="Builders working on a construction site" fill sizes="100vw" />
      <div className="mission-shade" />
      <div className="shell mission-inner">
        <div className="mission-copy"><span className="eyebrow eyebrow--gold">OUR MISSION</span><h2>Create better spaces.<br /><em>Build a better future.</em></h2><p>Our mission is to create high-quality spaces that combine thoughtful design, strong engineering, reliable execution, and lasting value for every client.</p><a className="button button--gold" href="#contact">Start a conversation <ArrowUpRight size={17} /></a></div>
        <div className="mission-points">
          <div className="mission-points-head"><strong>Site Areas</strong><small>What we follow</small></div>
          {['IS (Indian Standards) codes for construction and testing', 'Strictly abide by CMDA norms and regulations', 'Good quality of construction', 'Confidentiality', 'Fulfilment of commitments', 'Result-oriented services', 'Study of updated government rules and regulations'].map((point) => <span key={point}><Check size={16} />{point}</span>)}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-section section-pad shell" id="services">
      <SectionIntro eyebrow="WHAT WE DO" title="Our services" text="Our objectives are to offer result-oriented services. While undertaking construction work, we consider ourselves a part of your organization." />
      <div className="services-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={title}><span className="service-number">{number}</span><Icon className="service-icon" size={27} strokeWidth={1.35} /><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}>Learn more <ArrowUpRight size={15} /></a></article>)}</div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', ...projectCategories];
  const visible = filter === 'All' ? featuredProjects : featuredProjects.filter((project) => project.category === filter);
  return (
    <section className="projects-section section-pad" id="projects">
      <div className="shell"><div className="projects-head"><SectionIntro eyebrow="SELECTED WORK" title="Featured projects" text="A showcase of spaces built with precision, passion, and purpose." /><div className="filter-tabs" role="tablist">{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}</div></div>
        <div className="projects-grid">{visible.length ? visible.map((project) => <article className="project-card" key={project.title}><div className="project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span>{project.category}</span></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.location}</p></div><p className="project-text">{project.text}</p><a href="#contact" aria-label={`View ${project.title}`}>View project <ArrowUpRight size={15} /></a></div></article>) : <p className="projects-empty">No featured projects in this category yet.</p>}</div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];
  return (
    <section className="testimonials-section section-pad" id="testimonials">
      <div className="shell testimonial-layout">
        <div className="testimonial-intro">
          <SectionIntro light eyebrow="CLIENT STORIES" title="What our clients say" text="The measure of our work is how it lives in the hands of the people we build for." />
          <ul className="testimonial-clients">
            {testimonials.map((item, index) => (
              <li key={item.name}>
                <button type="button" className={index === active ? 'is-active' : ''} onClick={() => setActive(index)} aria-pressed={index === active}>
                  <span className="avatar">{item.initials}</span>
                  <span><strong>{item.name}</strong><small>{item.project}</small></span>
                </button>
              </li>
            ))}
          </ul>
          <div className="testimonial-controls">
            <button onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial"><ChevronLeft size={18} /></button>
            <span>0{active + 1} <i /> 0{testimonials.length}</span>
            <button onClick={() => setActive((active + 1) % testimonials.length)} aria-label="Next testimonial"><ChevronRight size={18} /></button>
          </div>
        </div>
        <div className="testimonial-card" key={active} aria-live="polite">
          <div className="testimonial-card-top">
            <span className="quote-mark" aria-hidden="true"><Quote size={26} fill="currentColor" strokeWidth={0} /></span>
            <div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={16} fill="currentColor" />)}</div>
          </div>
          <blockquote>{testimonial.quote}</blockquote>
          <div className="client"><span className="avatar">{testimonial.initials}</span><span><strong>{testimonial.name}</strong><small>{testimonial.project}</small></span></div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-pad" id="contact"><div className="shell contact-wrap"><div className="contact-intro"><SectionIntro light eyebrow="LET'S TALK" title="Let's build something great together." text="Have a project in mind? Talk to our team and let's turn your vision into reality." /><div className="contact-details"><a href="tel:+914424825565"><Phone size={17} /><span><small>Call us</small>044-24825565</span></a><a href="mailto:rajkumaran.malar@gmail.com"><Mail size={17} /><span><small>Email us</small>rajkumaran.malar@gmail.com</span></a><a href={mapsLink} target="_blank" rel="noopener noreferrer"><Building2 size={17} /><span><small>Visit us</small>23, Chetty Street, Porur, Chennai 600116</span></a></div></div><EnquiryForm title="Start a conversation" source="Home page" /></div></section>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><a className="brand brand--footer" href="#home"><span className="brand-logo"><Image src="/logo/footer-logo.png" alt="Rajkumaran Builders" fill sizes="180px" /></span></a><p>We, M/s Rajkumaran Builders Pvt Ltd, (formerly known as M/s Chitra Constructions) introduce ourselves a renowned name in Construction, Consultants and Valuation, established in year 1983 is a single window facility to get variety of modern construction and techno-economic services at one place.</p><div className="socials"><a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF size={17} /></a><a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={17} /></a><a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube size={17} /></a></div></div><div><h4>Explore</h4><a href="#home">Home</a><a href="/about">About</a><a href="/services">Services</a><a href="/projects">Projects</a><a href="/contact">Contact</a></div><div><h4>Services</h4><a href="#services">Residential construction</a><a href="#services">Commercial construction</a><a href="#services">Renovation</a><a href="#services">Project management</a></div><div><h4>Contact</h4><p className="footer-contact-item"><Phone size={15} /><span><a href="tel:+914424829133">044-24829133</a>, <a href="tel:+914424825565">044-24825565</a></span></p><p className="footer-contact-item"><Phone size={15} /><span><a href="tel:+919884034823">98840 34823</a>, <a href="tel:+919600169118">96001 69118</a></span></p><a className="footer-contact-item" href="mailto:rajkumaran.malar@gmail.com"><Mail size={15} />rajkumaran.malar@gmail.com</a><p className="footer-contact-item"><Clock size={15} /><span>Mon-Sat 9.30AM - 5.30PM</span></p><a className="footer-contact-item" href={mapsLink} target="_blank" rel="noopener noreferrer"><MapPin size={15} /><span>23, Chetty Street, Porur<br />Chennai 600116, India</span></a></div></div><div className="shell footer-bottom"><span>© 2026 Rajkumaran Builders. All rights reserved.</span><div><a href="/privacy-policy">Privacy policy</a><a href="/terms-and-conditions">Terms & conditions</a></div></div></footer>;
}

export default function HomePage() {
  return <><SiteHeader current="Home" homeHref="#home" quoteHref="#contact" /><main><Hero /><About /><Values /><Mission /><Services /><Projects /><Testimonials /><Contact /></main><Footer /></>;
}
