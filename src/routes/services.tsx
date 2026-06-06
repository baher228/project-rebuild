import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ardivia" },
      { name: "description", content: "Integrated design and build services: bespoke residential, commercial interiors, project management, materials sourcing and heritage renovation." },
      { property: "og:title", content: "Services — Ardivia" },
      { property: "og:description", content: "Six pillars of an integrated design-and-build practice." },
    ],
  }),
  component: ServicesPage,
});

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services = [
  { num: "01", name: "Bespoke Residential Design", desc: "Architecture conceived entirely around the way you live — from initial concept through planning permission and detailed design.", features: ["Concept design & feasibility", "Planning & listed consent", "Detailed design packages", "Interior architecture"] },
  { num: "02", name: "Commercial Interior Architecture", desc: "Environments that communicate brand values with spatial intelligence — offices, hospitality, and considered retail experiences.", features: ["Workplace design", "Hospitality interiors", "Retail environments", "Brand-led specification"] },
  { num: "03", name: "Full Project Management", desc: "End-to-end stewardship with a dedicated principal leading every stage, from contractor selection through to handover.", features: ["Tender & procurement", "Programme & cost control", "Site supervision", "Handover & aftercare"] },
  { num: "04", name: "Materials Sourcing & Specification", desc: "Access to exceptional materials, rare stone, bespoke joinery, and hand-crafted finishes through our curated artisan network.", features: ["Rare stone & marble", "Bespoke joinery", "Specialist metalwork", "Heritage finishes"] },
  { num: "05", name: "Contractor & Artisan Relationships", desc: "Twenty years of trusted relationships with the finest contractors, specialist trades, and craft artisans across Britain and Europe.", features: ["Vetted principal contractors", "Specialist trades", "European artisan network", "Long-term partnerships"] },
  { num: "06", name: "Completion & Snagging", desc: "Forensic attention to the final mile — ensuring every element meets our exacting standards before we hand you the key.", features: ["Pre-completion audit", "Forensic snagging", "12-month defects period", "Aftercare programme"] },
];

function ServicesPage() {
  useReveal();

  return (
    <main>
      <section className="arch-hero">
        <div className="arch-hero-left">
          <div className="hero-eyebrow">Services</div>
          <h1 className="hero-title">Complete design<br />&amp; build <em>mastery.</em></h1>
          <p className="hero-sub">
            An integrated practice — one studio responsible for the entire journey, from first sketch to the moment we hand you the key.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-gold">Discuss your project <Arrow /></Link>
            <Link to="/process" className="btn-ghost">Our process →</Link>
          </div>
        </div>
        <div className="arch-hero-right">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80" alt="Ardivia project detail" />
        </div>
      </section>

      <section className="services">
        <div className="services-header">
          <div>
            <div className="section-eyebrow reveal">Six pillars</div>
            <h2 className="section-title services-title reveal d1">One studio.<br />Six disciplines.</h2>
          </div>
          <p className="services-intro reveal d2">
            Every commission draws on the full breadth of the practice. You retain a single point of accountability — and a single creative vision — across every phase.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.num} className={`service-card reveal${i % 3 ? ` d${i % 3}` : ""}`}>
              <div className="service-num">{s.num}</div>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
              <ul style={{ listStyle: "none", marginTop: 22, display: "flex", flexDirection: "column", gap: 8 }}>
                {s.features.map((f) => (
                  <li key={f} style={{ fontFamily: "var(--font-serif)", fontSize: 15, color: "rgba(232,226,213,.55)", display: "flex", gap: 12 }}>
                    <span style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}>—</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonial">
        <p className="testi-quote reveal">
          "What sets Ardivia apart is the complete absence of drama. Every problem was resolved before it reached us. We moved in on time, on budget, and fell completely in love with the result."
        </p>
        <div className="reveal d1">
          <div className="testi-line" />
          <div className="testi-name">Marcus Gillespie</div>
          <div className="testi-role">Director, Gillespie Capital · Chelsea Mews · 2022</div>
        </div>
      </section>
    </main>
  );
}
