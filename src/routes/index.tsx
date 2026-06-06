import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { EnquiryForm } from "@/components/EnquiryForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ardivia — Architecture that endures" },
      { name: "description", content: "London design-and-build studio crafting exceptional residences, commercial interiors and heritage renovations." },
      { property: "og:title", content: "Ardivia — Architecture that endures" },
      { property: "og:description", content: "Bespoke design and build for those who demand the extraordinary." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80" },
    ],
  }),
  component: HomePage,
});

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const projects = [
  { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", type: "Bespoke Residential", name: "Highgate Residence", loc: "North London · 8,400 sq ft · 2023" },
  { img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80", type: "Commercial Interior", name: "The Strand HQ", loc: "Aldwych, London · 12,000 sq ft · 2024" },
  { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80", type: "Heritage Renovation", name: "Cotswolds Manor", loc: "Gloucestershire · Grade II Listed · 2023" },
];

const services = [
  { num: "01", name: "Bespoke Residential Design", desc: "Architecture conceived entirely around the way you live — from initial concept through planning permission and detailed design." },
  { num: "02", name: "Commercial Interior Architecture", desc: "Environments that communicate brand values with spatial intelligence — offices, hospitality, and considered retail." },
  { num: "03", name: "Full Project Management", desc: "End-to-end stewardship with a dedicated principal leading every stage, from contractor selection through to handover." },
  { num: "04", name: "Materials Sourcing & Specification", desc: "Access to exceptional materials, rare stone, bespoke joinery, and hand-crafted finishes through our curated artisan network." },
  { num: "05", name: "Contractor & Artisan Relationships", desc: "Twenty years of trusted relationships with the finest contractors, specialist trades, and craft artisans across Britain and Europe." },
  { num: "06", name: "Completion & Snagging", desc: "Forensic attention to the final mile — ensuring every element meets our exacting standards before we hand you the key." },
];

const articles = [
  { img: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1100&q=80", cat: "Design thinking", title: "Why the relationship between architect and client defines everything about a project's outcome", date: "12 March 2025" },
  { img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=700&q=80", cat: "Materials", title: "The quiet resurgence of polished plaster in modern British homes", date: "28 Feb 2025" },
  { img: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=700&q=80", cat: "Heritage", title: "Listed building renovations: balancing conservation with contemporary living", date: "14 Jan 2025" },
];

function HomePage() {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="arch-hero">
        <div className="arch-hero-left">
          <div className="hero-eyebrow">Bespoke Design &amp; Build — London</div>
          <h1 className="hero-title">Architecture<br />that <em>endures.</em></h1>
          <p className="hero-sub">
            We design and build exceptional spaces for discerning clients — where precision craftsmanship meets considered design, from first sketch to final key.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-gold">View Our Work <Arrow /></Link>
            <Link to="/process" className="btn-ghost">Our process →</Link>
          </div>
        </div>
        <div className="arch-hero-right">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80" alt="Ardivia residential project" />
          <div className="scroll-hint"><div className="scroll-line" /><span>Scroll</span></div>
        </div>
      </section>

      {/* AWARDS */}
      <div className="awards-strip">
        <div className="awards-label">Recognition</div>
        <span className="award-item">RIBA Award 2024</span>
        <span className="award-dot">·</span>
        <span className="award-item">FMB Master Builder</span>
        <span className="award-dot">·</span>
        <span className="award-item">Grand Designs Shortlist</span>
        <span className="award-dot">·</span>
        <span className="award-item">Dezeen Top Studio</span>
        <span className="award-dot">·</span>
        <span className="award-item">House &amp; Garden Featured</span>
      </div>

      {/* STATS */}
      <div className="stats-band">
        <div className="stat-item reveal"><div className="stat-num">18</div><div className="stat-label">Years of practice</div></div>
        <div className="stat-item reveal d1"><div className="stat-num">94</div><div className="stat-label">Projects completed</div></div>
        <div className="stat-item reveal d2"><div className="stat-num">£2.4B</div><div className="stat-label">Value delivered</div></div>
        <div className="stat-item reveal d3"><div className="stat-num">100%</div><div className="stat-label">Client retention</div></div>
      </div>

      {/* PROJECTS */}
      <section className="projects">
        <div className="projects-header">
          <div>
            <div className="section-eyebrow reveal">Selected work</div>
            <h2 className="section-title projects-title reveal d1">Recent projects.</h2>
          </div>
          <Link to="/projects" className="view-all reveal">View all projects →</Link>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Link to="/projects" key={p.name} className={`project-card reveal${i ? ` d${i}` : ""}`}>
              <img className="project-img" src={p.img} alt={p.name} />
              <div className="project-always">
                <div className="project-type">{p.type}</div>
                <div className="project-name">{p.name}</div>
              </div>
              <div className="project-info">
                <div className="project-type">{p.type}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-loc">{p.loc}</div>
                <span className="project-cta">View case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="services-header">
          <div>
            <div className="section-eyebrow reveal">What we do</div>
            <h2 className="section-title services-title reveal d1">Complete design<br />&amp; build mastery.</h2>
          </div>
          <p className="services-intro reveal d2">
            An integrated service that removes the complexity of managing separate design and construction teams. One point of contact. Absolute accountability. Exceptional outcomes.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.num} className={`service-card reveal${i % 3 ? ` d${i % 3}` : ""}`}>
              <div className="service-num">{s.num}</div>
              <svg className="service-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.1">
                <rect x="5" y="20" width="30" height="16" rx="1" />
                <path d="M5 20L20 6l15 14" />
              </svg>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
              <Link to="/services" className="service-link">Explore →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <p className="testi-quote reveal">
          "Ardivia didn't just build our home — they interpreted a vision we couldn't fully articulate and made it real. The level of care, the quality of every material, and the absolute calm through a complex build was extraordinary."
        </p>
        <div className="reveal d1">
          <div className="testi-line" />
          <div className="testi-name">Catherine &amp; Edward Forsythe</div>
          <div className="testi-role">Private clients · Highgate Residence · London</div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="journal">
        <div className="journal-header">
          <div>
            <div className="section-eyebrow reveal">From the studio</div>
            <h2 className="section-title journal-title reveal d1">Journal.</h2>
          </div>
          <Link to="/journal" className="view-all reveal">All articles →</Link>
        </div>
        <div className="journal-grid">
          {articles.map((a, i) => (
            <Link to="/journal" key={a.title} className={`journal-card reveal${i ? ` d${i}` : ""}`}>
              <img className="journal-card-img" src={a.img} alt="" />
              <div className="journal-card-body">
                <div className="journal-cat">{a.cat}</div>
                <div className="journal-title-card">{a.title}</div>
                <div className="journal-date">{a.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-cta">
        <div>
          <div className="section-eyebrow reveal">Start a project</div>
          <h2 className="section-title cta-title reveal d1">Let's build<br />something<br /><em>remarkable.</em></h2>
        </div>
        <div>
          <p className="cta-body reveal">
            We take on a limited number of projects each year to ensure every client receives our full attention. If you have a project in mind, we'd love to hear from you.
          </p>
          <EnquiryForm
            fields={[
              { name: "name", placeholder: "Your name" },
              { name: "email", type: "email", placeholder: "Email address" },
              { name: "project", placeholder: "Project type & location", full: true },
              { name: "message", placeholder: "Tell us about your project", textarea: true },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
