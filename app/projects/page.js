import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, IndianRupee, MapPin } from 'lucide-react';
import SiteHeader from '../_components/SiteHeader';
import SiteFooter from '../_components/SiteFooter';
import CtaBand from '../_components/CtaBand';
import ProjectGallery from './ProjectGallery';
import { projectRecord } from '../_data/site';

export const metadata = {
  title: 'Projects | Rajkumaran Builders Pvt Ltd',
  description: 'Featured projects and a record of completed residential, commercial, industrial, and institutional works by Rajkumaran Builders.',
};

export default function ProjectsPage() {
  return (
    <div className="about-page">
      <SiteHeader current="Projects" />
      <main>
        <section className="about-banner page-banner">
          <Image
            className="about-banner-image"
            src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=2200&q=85"
            alt="Cranes above a high-rise building under construction"
            fill
            priority
            sizes="100vw"
          />
          <div className="about-banner-shade" />
          <div className="about-banner-content shell">
            <span className="about-kicker"><i /> SELECTED WORK</span>
            <h1>Our Projects</h1>
            <p>A showcase of spaces built with precision, passion, and purpose.</p>
            <Link className="about-banner-link" href="#featured">View our work <ArrowDown size={16} /></Link>
            <div className="about-banner-meta">
              <span><strong>63</strong> projects completed</span>
              <span><strong>1,00,000</strong> sq ft constructed</span>
              <span><strong>2</strong> upcoming projects</span>
            </div>
          </div>
        </section>

        <section className="projects-page-featured section-pad" id="featured">
          <div className="shell">
            <div className="about-section-heading">
              <div><span className="about-eyebrow">FEATURED PROJECTS</span><h2>Spaces built to last.</h2></div>
              <p>Browse our work across residential, commercial, office, and reconstruction projects.</p>
            </div>
            <ProjectGallery />
          </div>
        </section>

        <section className="projects-page-record section-pad" id="record">
          <div className="shell">
            <div className="about-section-heading">
              <div><span className="about-eyebrow">TRACK RECORD</span><h2>Completed works.</h2></div>
              <p>A record of projects we have delivered across Chennai, Sriperumbudur, and beyond.</p>
            </div>
            <div className="projects-record" role="table" aria-label="Completed projects">
              <div className="projects-record-row projects-record-head" role="row">
                <span role="columnheader">Year</span>
                <span role="columnheader">Project</span>
                <span role="columnheader">Location</span>
                <span role="columnheader">Project value</span>
              </div>
              {projectRecord.map((item, index) => (
                <div className="projects-record-row" role="row" key={`${index}-${item.title}`}>
                  <span role="cell" className="projects-record-year">{item.year}</span>
                  <span role="cell" className="projects-record-title">{item.title}</span>
                  <span role="cell" className="projects-record-location"><MapPin size={15} />{item.location}</span>
                  <span role="cell" className="projects-record-value"><IndianRupee size={15} />{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand className="cta-band--spaced" />
      </main>
      <SiteFooter />
    </div>
  );
}
