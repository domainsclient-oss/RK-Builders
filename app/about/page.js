import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Building,
  Building2,
  Check,
  Construction,
  Factory,
  Hammer,
  IndianRupee,
  MapPin,
  Route,
  Ruler,
  ShieldCheck,
  Shirt,
  UserRound,
  Wrench,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import SiteHeader from '../_components/SiteHeader';
import SiteFooter from '../_components/SiteFooter';
import CtaBand from '../_components/CtaBand';
import { projectRecord as milestones } from '../_data/site';

const skills = [
  'Construction planning and delivery',
  'Project management and coordination',
  'Architectural and structural design',
  'Valuation and technical consultancy',
  'Renovation and retrofitting',
  'Approvals and documentation',
];

const specializations = [
  { icon: Building2, number: '01', title: 'Construction', text: 'Residential and commercial building work supported by practical project coordination.' },
  { icon: Ruler, number: '02', title: 'Design & engineering', text: 'Architectural and structural design shaped around site, function, and long-term use.' },
  { icon: Hammer, number: '03', title: 'Renovation', text: 'Retrofitting and renewal that improve the way existing spaces perform.' },
  { icon: ShieldCheck, number: '04', title: 'Consultancy & valuation', text: 'Technical guidance, valuation, approvals, and documentation in one place.' },
];

const responsibilities = [
  { icon: Factory, text: 'Industrial buildings for Automobile and other manufacturing units' },
  { icon: Shirt, text: 'Mid-Range Factories such as garments factory, etc.' },
  { icon: Building2, text: 'Public building construction like hotels, schools and shopping malls, etc.' },
  { icon: Construction, text: 'Erection works for transformers, girders, cranes, windmills, etc.' },
  { icon: Route, text: 'Laying of Roads both flexible (bitumen) and non-flexible (concrete)' },
  { icon: Building, text: 'Individual and High rise residential apartments' },
  { icon: Wrench, text: 'Other civil and mechanical works' },
];

// Add a portrait to public/images/team/ and set `photo` (e.g. '/images/team/malarvannan.jpg').
// Members without a photo show a placeholder. Replace the '#' social links with real profile URLs.
const team = [
  { name: 'Mr. V. Malarvannan', role: 'Proprietor', photo: '', socials: { linkedin: '#', facebook: '#', instagram: '#' } },
  { name: 'Team member', role: 'Structural Design Lead', photo: '', socials: { linkedin: '#', facebook: '#', instagram: '#' } },
  { name: 'Team member', role: 'Project Manager', photo: '', socials: { linkedin: '#', facebook: '#', instagram: '#' } },
];

const socialIcons = [
  { key: 'linkedin', label: 'LinkedIn', icon: FaLinkedinIn },
  { key: 'facebook', label: 'Facebook', icon: FaFacebookF },
  { key: 'instagram', label: 'Instagram', icon: FaInstagram },
];

export const metadata = {
  title: 'About Rajkumaran Builders | Established 1983',
  description: 'Learn about Rajkumaran Builders, established in 1983, and its work across construction, consultancy, valuation, design, and project delivery.',
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <SiteHeader current="About" />
      <main>
        <section className="about-banner">
          <Image
            className="about-banner-image"
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=85"
            alt="Construction team at work on a building site"
            fill
            priority
            sizes="100vw"
          />
          <div className="about-banner-shade" />
          <div className="about-banner-content shell">
            <span className="about-kicker"><i /> ESTABLISHED 1983</span>
            <h1>Rajkumaran<br />Builders</h1>
            <p>Building with purpose. Trusted through generations.</p>
            <p>Creating quality urban lifestyles, building stronger communities.</p>
            <Link className="about-banner-link" href="#company">Discover our story <ArrowDown size={16} /></Link>
            <div className="about-banner-meta">
              <span><strong>35</strong> years of experience</span>
              <span>Construction <i /> Consultancy <i /> Valuation</span>
              <span>Serving projects across India</span>
            </div>
          </div>
        </section>

        <section className="about-company" id="company">
          <div className="shell about-company-layout">
            <div className="about-company-copy">
              <span className="about-eyebrow">35 YEARS OF EXPERIENCE</span>
              <h2>Improving quality of life with an integrated unified approach.</h2>
              <p>We M/s Rajkumaran Builders Pvt Ltd (formerly known as M/s Chitra Constructions) introduce ourselves a renowned name in Construction, Consultants and Valuation, established in year 1983 is a single window facility to get variety of modern construction and techno-economic services at one place.</p>
              <Link className="about-text-link" href="/#services">Explore our services <ArrowUpRight size={16} /></Link>
            </div>
            <div className="about-company-media">
              <div className="about-company-image-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
                  alt="Carefully designed contemporary home"
                  fill
                  sizes="(max-width: 840px) 100vw, 48vw"
                />
              </div>
              <span className="about-image-note"><strong>1983</strong><small>Our foundation</small></span>
            </div>
          </div>
          <div className="shell about-company-details">
            <article className="about-company-card">
              <span className="about-company-card-icon"><ShieldCheck size={22} strokeWidth={1.75} /></span>
              <p>The company has been maintaining high standards of professional practice and is known for its Competence, Integrity and Professionalism with realistic and unbiased opinion. "M/s Rajkumaran Builders Pvt Ltd", a multi-disciplinary team can study and analyse the needs of the work and provide best and accurate budgets and in completion of works. M/s Rajkumaran Builders Pvt Ltd” has systematic and analytical approach and works with principle of forward integration since last 35 years.</p>
            </article>
            <article className="about-company-card">
              <span className="about-company-card-icon"><Hammer size={22} strokeWidth={1.75} /></span>
              <p>Construction is a combination of Art and Science, which involves skill, dedication and punctuality; V.Malarvannan our proprietor has 30 years of rich experience in the field of construction, consultation and structural designs and valuation process. He has executed large works such as roads, bridges, maintenance’s and structural stability works. He has been certified by “The Industrial Safety and Health Department “of government of Tamilnadu as the “Competent Person for examinations and certification of buildings and factories under factory act 1948.</p>
            </article>
            <div className="about-company-practice">
              <p>We have a team of highly qualified &amp; experienced Engineers, Structural designers, market research analysts, financial analysts, and management consultants, who work directly on the assignments. Our objectives are to offer result-oriented services. While undertaking a construction work , we consider ourselves as a part of your organization. We maintain high degree of standards and unbiased reports .</p>
              <div className="about-founder">
                <span className="about-founder-avatar" aria-hidden="true">VM</span>
                <div><strong>Mr. V. Malarvannan</strong><span>Proprietor</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-responsibilities section-pad" id="responsibilities">
          <div className="shell">
            <div className="about-section-heading">
              <div><span className="about-eyebrow">WHAT WE BUILD</span><h2>Our Responsibilities</h2></div>
              <p>Rajkumaran Builders Pvt Ltd offers its construction expertise for diverse range of projects. Our areas of specifications include:</p>
            </div>
            <ul className="about-responsibility-grid">
              {responsibilities.map(({ icon: Icon, text }, index) => (
                <li className="about-responsibility-item" key={text}>
                  <div className="about-responsibility-top">
                    <span className="about-responsibility-icon"><Icon size={22} strokeWidth={1.75} /></span>
                    <span className="about-responsibility-index">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about-skills">
          <div className="shell about-skills-layout">
            <div className="about-skills-intro">
              <span className="about-eyebrow about-eyebrow--light">OUR SKILLS</span>
              <h2>Practical expertise.<br />Connected thinking.</h2>
              <p>Multiple disciplines, working together to move projects from early planning through delivery.</p>
            </div>
            <div className="about-skill-list">
              {skills.map((skill, index) => <div className="about-skill" key={skill}><span>0{index + 1}</span><strong>{skill}</strong><Check size={17} /></div>)}
            </div>
          </div>
        </section>

        <section className="about-specialization section-pad">
          <div className="shell">
            <div className="about-section-heading">
              <div><span className="about-eyebrow">OUR SPECIALIZATION</span><h2>One trusted partner.<br />From brief to build.</h2></div>
              <p>Construction and technical services, thoughtfully brought together for clearer decisions and more coordinated delivery.</p>
            </div>
            <div className="about-specialization-grid">
              {specializations.map(({ icon: Icon, number, title, text }) => (
                <article className="about-specialization-item" key={title}>
                  <div className="about-specialization-top"><Icon size={22} strokeWidth={1.6} /><span>{number}</span></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-team section-pad">
          <div className="shell">
            <div className="about-team-heading">
              <span className="about-eyebrow">OUR TEAM</span>
              <h2>Different expertise.<br />One shared standard.</h2>
              <p>Every project benefits from people who understand both the detail and the bigger picture.</p>
            </div>
            <div className="about-team-grid">
              {team.map((member) => (
                <article className="about-team-card" key={member.role}>
                  <div className="about-team-photo">
                    {member.photo
                      ? <Image src={member.photo} alt={`${member.name}, ${member.role}`} fill sizes="(max-width: 600px) 100vw, 33vw" />
                      : <span className="about-team-placeholder" aria-hidden="true"><UserRound size={64} strokeWidth={1.25} /></span>}
                  </div>
                  <div className="about-team-body">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <div className="about-team-socials">
                      {socialIcons.filter(({ key }) => member.socials[key]).map(({ key, label, icon: Icon }) => (
                        <a key={key} href={member.socials[key]} aria-label={`${member.name} on ${label}`} target={member.socials[key] === '#' ? undefined : '_blank'} rel="noopener noreferrer"><Icon size={14} /></a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-history section-pad">
          <div className="shell about-history-layout">
            <div className="about-history-heading">
              <span className="about-eyebrow">OUR HISTORY</span>
              <h2>A foundation built to last.</h2>
              <p>From our beginnings in 1983 to a connected set of services for modern projects.</p>
            </div>
            <ol className="about-timeline">
              {milestones.map((milestone, index) => (
                <li className="about-milestone" key={`${index}-${milestone.title}`}>
                  <span className="about-milestone-marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <article className="about-milestone-card">
                    <span className="about-milestone-year">{milestone.year}</span>
                    <h3>{milestone.title}</h3>
                    <dl className="about-milestone-meta">
                      <div><dt><MapPin size={15} /><span>Location</span></dt><dd>{milestone.location}</dd></div>
                      <div><dt><IndianRupee size={15} /><span>Project value</span></dt><dd>{milestone.value}</dd></div>
                    </dl>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}