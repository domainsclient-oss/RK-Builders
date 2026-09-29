import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Check,
  Construction,
  DoorOpen,
  Download,
  DraftingCompass,
  FileCheck,
  FileText,
  Hammer,
  Handshake,
  HardHat,
  Headset,
  Landmark,
  LifeBuoy,
  Lock,
  Minus,
  PaintRoller,
  Phone,
  Plus,
  ScrollText,
  Sofa,
  Target,
  Wallet,
  Zap,
} from 'lucide-react';
import SiteHeader from '../_components/SiteHeader';
import SiteFooter from '../_components/SiteFooter';
import CtaBand from '../_components/CtaBand';
import { projectCategories, projects, services, siteStandards } from '../_data/site';

// Icons for the "What we follow" list, in the same order as siteStandards.
const standardIcons = [FileCheck, Landmark, Award, Lock, Handshake, Target, ScrollText];

const allServices = [
  { icon: DoorOpen, title: 'Rooms & Halls', text: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions.' },
  { icon: Hammer, title: 'Renovation', text: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions.' },
  { icon: Construction, title: 'Construction', text: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions.' },
  { icon: Sofa, title: 'Interior', text: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions.' },
  { icon: BadgeCheck, title: 'Professional Opinion', text: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions.' },
  { icon: DraftingCompass, title: 'Accurate Engineering', text: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions.' },
  { icon: HardHat, title: 'General Builder', text: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions.' },
  { icon: Zap, title: 'Electricity', text: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions.' },
  { icon: PaintRoller, title: 'Refurbishment', text: 'Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions.' },
];

const featuredProjects = projectCategories.map((category) => projects.find((project) => project.category === category)).filter(Boolean);

const faqs = [
  { question: 'Choose between rates or instant payment', answer: 'Motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci consectetur vel posuere posuere, rutrum eu ipsum. Cost is important.' },
  { question: 'Come to see a live preview', answer: 'Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.' },
  { question: 'Choose the correct service', answer: 'The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.' },
];

export const metadata = {
  title: 'Services | Rajkumaran Builders Pvt Ltd',
  description: 'Building construction and consultancy, renovation and retrofitting, architectural and structural design, and approvals and documentation from Rajkumaran Builders, Chennai.',
};

export default function ServicesPage() {
  return (
    <div className="about-page">
      <SiteHeader current="Services" />
      <main>
        <section className="about-banner page-banner services-page-banner">
          <Image
            className="about-banner-image"
            src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&w=2200&q=85"
            alt="Tower crane over a building under construction"
            fill
            priority
            sizes="100vw"
          />
          <div className="about-banner-shade" />
          <div className="about-banner-content shell">
            <span className="about-kicker"><i /> WHAT WE DO</span>
            <h1>Our Services</h1>
            <p>Our objectives are to offer result-oriented services. While undertaking construction work, we consider ourselves a part of your organization.</p>
            <Link className="about-banner-link" href="#service-list">Explore our services <ArrowDown size={16} /></Link>
            <div className="about-banner-meta">
              <span><strong>35</strong> years of experience</span>
              <span>Construction <i /> Consultancy <i /> Valuation</span>
              <span>Serving projects across India</span>
            </div>
          </div>
        </section>

        <section className="services-page-list section-pad" id="service-list">
          <div className="shell">
            <div className="about-section-heading">
              <div><span className="about-eyebrow">WHAT WE OFFER</span><h2>A single window for<br />every construction need.</h2></div>
              <p>We believe in customer satisfaction and happiness. We extend our services all over India with the expert guidance of our directors.</p>
            </div>
            <div className="services-page-rows">
              {services.map(({ icon: Icon, number, title, text, image }) => (
                <article className="services-page-row" key={title}>
                  <div className="services-page-media">
                    <Image src={image} alt={title} fill sizes="(max-width: 840px) 100vw, 50vw" />
                    <span className="services-page-number">{number}</span>
                  </div>
                  <div className="services-page-copy">
                    <span className="services-page-icon"><Icon size={24} strokeWidth={1.6} /></span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <Link className="about-text-link" href="/contact">Enquire about this service <ArrowUpRight size={16} /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-page-standards">
          <div className="shell">
            <div className="services-page-standards-card">
              <div className="services-page-standards-intro">
                <span className="about-eyebrow about-eyebrow--light">WHAT WE FOLLOW</span>
                <h2>In our work we have pride, quality is what we follow.</h2>
                <div className="services-page-quote">
                  <a className="services-page-quote-call" href="tel:+914424829133">
                    <span><Phone size={20} strokeWidth={1.8} /></span>
                    <div><small>Call For a Quote:</small><strong>044-24829133</strong></div>
                  </a>
                  <Link className="button button--gold" href="/contact#enquiry">Online Estimate Form <ArrowUpRight size={17} /></Link>
                </div>
              </div>
              <ul className="services-page-standards-list">
                {siteStandards.map((item, index) => {
                  const Icon = standardIcons[index] ?? Check;
                  return (
                    <li key={item}>
                      <span className="services-page-standard-icon"><Icon size={20} strokeWidth={1.75} /></span>
                      <span className="services-page-standard-text">{item}</span>
                      <span className="services-page-standard-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="services-page-all section-pad" id="all-services">
          <div className="shell">
            <div className="services-page-all-heading">
              <span className="about-eyebrow">WHAT WE DO</span>
              <h2>All Services</h2>
            </div>
            <div className="services-page-all-grid">
              {allServices.map(({ icon: Icon, title, text }, index) => (
                <article className="services-page-all-card" key={title}>
                  <div className="services-page-all-top">
                    <span className="services-page-icon"><Icon size={24} strokeWidth={1.6} /></span>
                    <span className="services-page-all-index">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link href="/contact">Read More <ArrowUpRight size={15} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-page-faq section-pad">
          <div className="shell services-page-faq-layout">
            <div className="services-page-faq-intro">
              <span className="about-eyebrow">SOME FAQ</span>
              <h2>Frequently asked questions</h2>
              <div className="services-page-faq-list">
                {faqs.map((faq, index) => (
                  <details key={faq.question} open={index === 0}>
                    <summary>{faq.question}<span aria-hidden="true"><Plus className="faq-icon-open" size={18} strokeWidth={2} /><Minus className="faq-icon-close" size={18} strokeWidth={2} /></span></summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <div className="services-page-solutions">
              <span className="about-eyebrow">OUR SOLUTION</span>
              <h3>Choose the correct service</h3>
              <div className="services-page-solution-grid">
                {[
                  { icon: Headset, title: 'Assistance', text: 'Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.' },
                  { icon: Wallet, title: 'Financing', text: 'The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.' },
                ].map(({ icon: Icon, title, text }) => (
                  <article className="services-page-solution" key={title}>
                    <span className="services-page-icon"><Icon size={24} strokeWidth={1.6} /></span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <Link href="/contact">Read More <ArrowUpRight size={15} /></Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="services-page-help">
          <div className="shell services-page-help-grid">
            <article className="services-page-help-card">
              <span className="services-page-icon"><FileText size={24} strokeWidth={1.6} /></span>
              <div>
                <h3>Brochure</h3>
                <p>Typefaces and layouts, and in appearance of different general the content of dorem ipsum dolor sit amet.</p>
              </div>
              <a className="button button--gold" href="/brochure.pdf" download>Download brochure <Download size={17} /></a>
            </article>
            <article className="services-page-help-card services-page-help-card--accent">
              <span className="services-page-icon"><LifeBuoy size={24} strokeWidth={1.6} /></span>
              <div>
                <h3>Let&apos;s help you!</h3>
                <p>There are many variations of passages of lorem available, but the majority have suffered alteration in some form, by inject humour, or randomised words which don&apos;t look even slightly believable.</p>
              </div>
              <Link className="button services-page-help-button" href="/contact">Contact Us <ArrowUpRight size={17} /></Link>
            </article>
          </div>
        </section>

        <section className="services-page-projects section-pad">
          <div className="shell">
            <div className="about-section-heading">
              <div><span className="about-eyebrow">SELECTED WORK</span><h2>Our Projects</h2></div>
              <p>A showcase of spaces built with precision, passion, and purpose.</p>
            </div>
            <div className="projects-grid services-page-projects-grid">
              {featuredProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                    <span>{project.category}</span>
                  </div>
                  <div className="project-info">
                    <div><h3>{project.title}</h3><p>{project.location}</p></div>
                    <p className="project-text">{project.text}</p>
                    <Link href="/projects">View project <ArrowUpRight size={15} /></Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="services-page-projects-more">
              <Link className="button button--gold" href="/projects">View all projects <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </section>

        <CtaBand className="cta-band--spaced" />
      </main>
      <SiteFooter />
    </div>
  );
}
