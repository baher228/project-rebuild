import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Founded in 2006 in London - architects, artisans, and project stewards. Meet the team and philosophy behind Ardivia.",
  openGraph: {
    title: "Studio - Ardivia",
    description: "Craft elevated to an art form. The people and principles behind Ardivia.",
    images: ["https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=1400&q=80"],
  },
};

const team = [
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    name: "James Ardmore",
    role: "Founding Director",
    bio: "RIBA Part III. 20 years practice. Specialist in residential and listed building architecture across London and the South East.",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    name: "Sarah Whitfield",
    role: "Head of Design",
    bio: "Interior architecture specialist. Formerly Heatherwick Studio. Leads all interiors commissions and material specification programmes.",
  },
  {
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    name: "Oliver Crane",
    role: "Project Director",
    bio: "Construction management specialist. Manages all principal contractor relationships and site delivery for Ardivia's residential portfolio.",
  },
];

const values = [
  {
    num: "01",
    title: "Absolute accountability",
    body: "We are the single point of responsibility across design and build. We do not blame consultants, contractors, or circumstance. We own the outcome.",
  },
  {
    num: "02",
    title: "Material honesty",
    body: "We specify only materials we believe in and have personally experienced. We do not recommend what we would not use in our own homes.",
  },
  {
    num: "03",
    title: "Radical restraint",
    body: "The most considered design is often the most edited. We resist the superfluous. Every element must earn its place in the design.",
  },
  {
    num: "04",
    title: "Client discretion",
    body: "We treat every project as confidential. We never disclose client information or use projects for our own publicity without explicit permission.",
  },
];

export default function StudioPage() {
  return (
    <main>
      <section className="arch-hero">
        <div className="arch-hero-left">
          <div className="hero-eyebrow">The Studio - London</div>
          <h1 className="hero-title">
            Craft elevated
            <br />
            to an <em>art form.</em>
          </h1>
          <p className="hero-sub">
            Founded in 2006, we are architects, artisans, and project stewards - a single point of
            accountability from first sketch to final key.
          </p>
          <div className="hero-actions">
            <Link href="/projects" className="btn-gold">
              Our work <ArrowIcon />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get in touch -&gt;
            </Link>
          </div>
        </div>
        <div className="arch-hero-right">
          <img
            src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=1600&q=80"
            alt="Studio interior"
          />
          <div className="scroll-hint">
            <div className="scroll-line" />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      <section className="section-pad bg-forest">
        <div
          className="philosophy-grid split-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
        >
          <div>
            <div className="section-eyebrow reveal">Our philosophy</div>
            <h2
              className="section-title reveal d1"
              style={{ fontSize: "clamp(36px,4vw,56px)", color: "var(--linen)", marginBottom: 30 }}
            >
              Architecture should
              <br />
              outlast its <em style={{ fontStyle: "italic", color: "var(--gold)" }}>architects.</em>
            </h2>
            <p
              className="reveal d2"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 17,
                color: "rgba(232,226,213,.6)",
                lineHeight: 1.85,
                marginBottom: 24,
              }}
            >
              We founded Ardivia on a single conviction: that architecture designed with patience,
              executed with precision, and built with the finest materials will always outlast its
              moment. We reject the transient. We build for permanence.
            </p>
            <p
              className="reveal d2"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 17,
                color: "rgba(232,226,213,.6)",
                lineHeight: 1.85,
                marginBottom: 40,
              }}
            >
              Every project we take on receives our{" "}
              <strong style={{ color: "var(--linen)", fontWeight: 400 }}>
                full and undivided attention
              </strong>
              . We deliberately limit the number of commissions we accept each year to protect this
              commitment.
            </p>
            <div className="reveal d3">
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontStyle: "italic",
                  color: "var(--gold)",
                }}
              >
                James Ardmore
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 10,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "rgba(232,226,213,.4)",
                  marginTop: 5,
                }}
              >
                Founding Director, Ardivia
              </div>
            </div>
          </div>
          <div className="reveal d1">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80"
              alt="Craftsmanship"
              style={{
                width: "100%",
                aspectRatio: "3 / 4",
                objectFit: "cover",
                filter: "brightness(.8) saturate(.7)",
              }}
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-sage">
        <div className="section-eyebrow reveal">The team</div>
        <h2
          className="section-title reveal d1"
          style={{ fontSize: "clamp(36px,4vw,56px)", color: "var(--linen)", marginBottom: 16 }}
        >
          The people
          <br />
          behind <em style={{ fontStyle: "italic", color: "var(--gold)" }}>the work.</em>
        </h2>
        <p
          className="reveal d2"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 17,
            color: "rgba(232,226,213,.6)",
            lineHeight: 1.75,
            maxWidth: 580,
          }}
        >
          We are a small, deliberately sized studio of fifteen. Each member of our team is selected
          for their craft as much as their character.
        </p>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={member.name} className={`team-card reveal${index ? ` d${index}` : ""}`}>
              <img className="team-img" src={member.img} alt={member.name} />
              <div className="team-always">
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
              </div>
              <div className="team-info">
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <div className="team-bio">{member.bio}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-forest">
        <div
          className="split-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end" }}
        >
          <div>
            <div className="section-eyebrow reveal">What we stand for</div>
            <h2
              className="section-title reveal d1"
              style={{ fontSize: "clamp(36px,4vw,54px)", color: "var(--linen)" }}
            >
              Four values.
              <br />
              One <em style={{ fontStyle: "italic", color: "var(--gold)" }}>standard.</em>
            </h2>
          </div>
          <p
            className="reveal d2"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 17,
              color: "rgba(232,226,213,.55)",
              lineHeight: 1.85,
              alignSelf: "end",
            }}
          >
            These are not aspirational statements. They are the operating principles that govern
            every decision we make - from who we work with to how we source a stone.
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={value.num} className={`value-card reveal${index ? ` d${index}` : ""}`}>
              <div className="value-num">{value.num}</div>
              <div className="value-title">{value.title}</div>
              <div className="value-body">{value.body}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
