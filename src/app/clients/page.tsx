import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Clients & Testimonials",
  description:
    "71% of Ardivia clients return for a second or third commission. Read unsolicited testimonials and the trust commitments behind every project.",
};

const testimonials = [
  {
    quote:
      "Ardivia did not just build our home - they interpreted a vision we could not fully articulate and made it real. The level of care, the quality of every material, and the absolute calm through a complex build was extraordinary.",
    name: "Catherine & Edward Forsythe",
    role: "Private Residential Clients",
    project: "Highgate Residence - London N6 - 2023",
  },
  {
    quote:
      "What sets Ardivia apart is the complete absence of drama. Every problem was resolved before it reached us. We moved in on time, on budget, and fell completely in love with the result.",
    name: "Marcus Gillespie",
    role: "Director, Gillespie Capital",
    project: "Chelsea Mews Renovation - London SW3 - 2022",
  },
  {
    quote:
      "Our brief was complex - Grade II listed, English Heritage involvement, and our own very particular vision. Ardivia navigated every obstacle with intelligence and never once compromised the design.",
    name: "Lady Constance Hale",
    role: "Private Client",
    project: "Cotswolds Manor - Grade II Listed - 2023",
  },
  {
    quote:
      "We briefed five architects. Ardivia was the only practice that listened to us rather than pitching their portfolio. That listening produced something we could never have imagined ourselves.",
    name: "Dr & Mrs Harrington",
    role: "Private Residential Clients",
    project: "Hampstead New Build - London NW3 - 2024",
  },
  {
    quote:
      "Three years on, we find new things to love about what Ardivia designed for us. That is the measure of exceptional architecture - it rewards you more, not less, over time.",
    name: "The Rothbury Family",
    role: "Repeat Clients (3 projects)",
    project: "Richmond & Surrey - 2019-2024",
  },
  {
    quote:
      "Our London studio was transformed from a tired commercial space into an environment that genuinely reflects who we are as a brand. The project came in ahead of schedule and below budget.",
    name: "Helena Marsh, CEO",
    role: "Marsh & Partners LLP",
    project: "Commercial Studio - Soho, London - 2023",
  },
];

const repeats = [
  {
    num: "3x",
    name: "The Rothbury Family",
    projects:
      "Richmond townhouse (2019) - Surrey country home (2021) - Kensington pied-a-terre (2024)",
  },
  {
    num: "2x",
    name: "Marcus Gillespie",
    projects: "Chelsea mews renovation (2022) - Mayfair office refurbishment (2024)",
  },
  {
    num: "2x",
    name: "Dr & Mrs Harrington",
    projects: "Hampstead new build (2024) - Dorset weekend retreat (in progress, 2025)",
  },
  {
    num: "2x",
    name: "Marsh & Partners LLP",
    projects: "Soho studio (2023) - Edinburgh office fitout (2025)",
  },
];

const trust = [
  {
    title: "RIBA Chartered Practice",
    body: "Ardivia has held RIBA chartered practice status since 2006. All our architects are individually RIBA registered, bound by the Code of Professional Conduct.",
  },
  {
    title: "Full confidentiality",
    body: "We treat all client information, project briefs, and site addresses as confidential. We do not photograph, discuss, or publish any project without explicit written consent.",
  },
  {
    title: "£10M professional indemnity",
    body: "We carry £10 million professional indemnity insurance and £5 million public liability cover on all projects. Full schedule available on request.",
  },
  {
    title: "Fixed-price contracts",
    body: "We work on fixed-price design-and-build contracts wherever possible, removing the risk of cost overrun and providing genuine budget certainty for our clients.",
  },
  {
    title: "Transparent fee structure",
    body: "Our fees are quoted in full at the outset of every engagement. No hidden charges, no variation orders without prior written agreement, no end-of-project surprises.",
  },
  {
    title: "10-year structural warranty",
    body: "All Ardivia new-build projects carry a 10-year structural warranty. We stand behind the quality of our work long after the project completes and you take the key.",
  },
];

const partners = [
  { name: "Foster + Partners", type: "Structural Engineering Partner" },
  { name: "Arup", type: "M&E Consultants" },
  { name: "English Heritage", type: "Conservation Advisors" },
  { name: "Oblix Stone", type: "Stone & Marble Suppliers" },
  { name: "Barlow & Sons", type: "Principal Contractor" },
  { name: "Davies Keeling", type: "Bespoke Joinery" },
  { name: "RJ Metalworks", type: "Structural Steelwork" },
  { name: "Farrow & Ball", type: "Trade Decorating Partner" },
];

export default function ClientsPage() {
  return (
    <main>
      <section className="arch-hero">
        <div className="arch-hero-left">
          <div className="hero-eyebrow">Clients &amp; Testimonials</div>
          <h1 className="hero-title">
            Built on
            <br />
            <em>trust.</em>
          </h1>
          <p className="hero-sub">
            We work with a small number of clients each year. Every relationship is long-term. Every
            project is personal. Every word below was given freely.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-gold">
              Begin a conversation <ArrowIcon />
            </Link>
            <Link href="/projects" className="btn-ghost">
              View our work -&gt;
            </Link>
          </div>
        </div>
        <div className="arch-hero-right">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
            alt="Client project"
          />
        </div>
      </section>

      <section className="clients-intro-grid">
        <div>
          <div className="section-eyebrow">What our clients say</div>
          <h2
            className="section-title reveal"
            style={{ fontSize: "clamp(34px,3.8vw,52px)", color: "var(--forest)", marginBottom: 28 }}
          >
            Relationships
            <br />
            that <em style={{ fontStyle: "italic", color: "var(--sage)" }}>outlast</em>
            <br />
            the project.
          </h2>
          <p
            className="reveal d1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 17,
              color: "rgba(26,31,26,.6)",
              lineHeight: 1.85,
              marginBottom: 28,
            }}
          >
            We do not solicit testimonials. Every word on this page came directly from clients at
            the close of a project, or years later, when they reached out to brief us again. We
            consider that the most telling endorsement of all.
          </p>
          <p
            className="reveal d1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 17,
              color: "rgba(26,31,26,.6)",
              lineHeight: 1.85,
            }}
          >
            Of the clients we have worked with in the last ten years,{" "}
            <strong style={{ color: "var(--forest)", fontWeight: 400 }}>
              71% have commissioned a second or third project
            </strong>
            . We believe this, more than any award, is the true measure of our work.
          </p>
        </div>
        <div className="reveal d2">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {[
              { n: "71%", l: "Repeat commission rate", bg: "var(--forest)" },
              { n: "100%", l: "Would recommend", bg: "var(--dark-sage)" },
              { n: "18", l: "Years of practice", bg: "var(--dark-sage)" },
              { n: "94", l: "Completed projects", bg: "var(--forest)" },
            ].map((stat) => (
              <div key={stat.l} style={{ background: stat.bg, padding: "40px 36px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 52,
                    fontWeight: 300,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {stat.n}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 9,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "rgba(232,226,213,.5)",
                  }}
                >
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-forest">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 60,
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div className="section-eyebrow reveal">Client voices</div>
            <h2
              className="section-title reveal d1"
              style={{ fontSize: "clamp(36px,4vw,56px)", color: "var(--linen)" }}
            >
              What they <em style={{ fontStyle: "italic", color: "var(--gold)" }}>said.</em>
            </h2>
          </div>
          <div
            className="reveal"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 9,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "rgba(232,226,213,.35)",
            }}
          >
            All testimonials unsolicited - Provided with client permission
          </div>
        </div>
        <div className="testi-full-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`testi-full-card reveal${index % 3 ? ` d${index % 3}` : ""}`}
            >
              <div className="testi-full-quote">"{testimonial.quote}"</div>
              <div className="testi-full-line" />
              <div className="testi-full-client-name">{testimonial.name}</div>
              <div className="testi-full-client-role">{testimonial.role}</div>
              <div className="testi-full-project">{testimonial.project}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonial">
        <p className="testi-quote reveal">
          "We have commissioned Ardivia three times. We will commission them again. That is not
          loyalty to a contractor - that is trust in a creative partner who understands what we are
          trying to live."
        </p>
        <div className="reveal d1">
          <div className="testi-line" />
          <div className="testi-name">The Rothbury Family</div>
          <div className="testi-role">
            Repeat clients - Three projects - 2019-2024 - Richmond &amp; Surrey
          </div>
        </div>
      </section>

      <section className="section-pad bg-sage">
        <div className="section-eyebrow reveal">Long-term relationships</div>
        <h2
          className="section-title reveal d1"
          style={{ fontSize: "clamp(34px,3.8vw,52px)", color: "var(--linen)", marginBottom: 16 }}
        >
          Clients who <em style={{ fontStyle: "italic", color: "var(--gold)" }}>returned.</em>
        </h2>
        <p
          className="reveal d2"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 17,
            color: "rgba(232,226,213,.6)",
            lineHeight: 1.75,
            maxWidth: 520,
          }}
        >
          The following clients have commissioned us more than once. We consider this the most
          authentic expression of satisfaction we can offer.
        </p>
        <div className="repeat-grid">
          {repeats.map((repeat, index) => (
            <div key={repeat.name} className={`repeat-card reveal${index ? ` d${index}` : ""}`}>
              <div className="repeat-num">{repeat.num}</div>
              <div>
                <div className="repeat-client-name">{repeat.name}</div>
                <div className="repeat-projects">{repeat.projects}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-linen">
        <div
          className="split-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end" }}
        >
          <div>
            <div className="section-eyebrow" style={{ color: "var(--gold)" }}>
              Why clients trust us
            </div>
            <h2
              className="section-title reveal"
              style={{ fontSize: "clamp(34px,3.8vw,52px)", color: "var(--forest)" }}
            >
              The standards
              <br />
              behind <em style={{ fontStyle: "italic", color: "var(--sage)" }}>the work.</em>
            </h2>
          </div>
          <p
            className="reveal d1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 17,
              color: "rgba(26,31,26,.6)",
              lineHeight: 1.85,
              alignSelf: "end",
            }}
          >
            Trust is not claimed. It is demonstrated through consistent behaviour, transparent
            communication, and the courage to say no when a project is not right for us or a client
            is not right for the project.
          </p>
        </div>
        <div className="trust-grid">
          {trust.map((item, index) => (
            <div key={item.title} className={`reveal${index % 3 ? ` d${index % 3}` : ""}`}>
              <svg
                className="trust-icon"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <circle cx="20" cy="20" r="14" />
                <path d="M20 12v8l5 5" />
              </svg>
              <div className="trust-title">{item.title}</div>
              <div className="trust-body">{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-dark-sage" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 40,
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div className="section-eyebrow reveal">Professional network</div>
            <h2
              className="section-title reveal d1"
              style={{ fontSize: "clamp(28px,3vw,42px)", color: "var(--linen)" }}
            >
              Our partner &amp; supplier{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>network.</em>
            </h2>
          </div>
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 16,
              color: "rgba(232,226,213,.5)",
              lineHeight: 1.7,
              maxWidth: 360,
              textAlign: "right",
            }}
          >
            Relationships built over two decades with the finest professionals in their field.
          </p>
        </div>
        <div className="partner-grid">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`partner-card reveal${index % 4 ? ` d${index % 4}` : ""}`}
            >
              <div className="partner-name">{partner.name}</div>
              <div className="partner-type">{partner.type}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-cta">
        <div>
          <div className="section-eyebrow" style={{ color: "var(--gold)" }}>
            Start a conversation
          </div>
          <h2 className="section-title cta-title reveal">
            Ready to
            <br />
            work
            <br />
            <em>together?</em>
          </h2>
        </div>
        <div>
          <p className="cta-body reveal">
            We have capacity for a small number of new projects this year. If you have a commission
            in mind, we&apos;d love to hear from you - however early in your thinking.
          </p>
          <EnquiryForm
            fields={[
              { name: "name", placeholder: "Your name" },
              { name: "email", type: "email", placeholder: "Email address" },
              { name: "project", placeholder: "Tell us about your project", full: true },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
