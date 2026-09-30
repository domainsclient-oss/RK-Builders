import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

// Shared layout for the Privacy Policy and Terms & Conditions pages.
export default function LegalPage({ eyebrow, title, intro, updated, sections }) {
  return (
    <div className="about-page">
      <SiteHeader />
      <main>
        <section className="legal-hero">
          <div className="shell">
            <span className="about-kicker"><i /> {eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
            <span className="legal-updated">Last updated: {updated}</span>
          </div>
        </section>
        <section className="legal-body">
          <div className="shell legal-layout">
            <nav className="legal-toc" aria-label="On this page">
              <span>On this page</span>
              <ol>
                {sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}
              </ol>
            </nav>
            <div className="legal-content">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id}>
                  <h2><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</h2>
                  {section.content}
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
