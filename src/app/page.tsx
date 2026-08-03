import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Design. Build. Deliver.",
  description:
    "Ardivia designs, builds and delivers residential properties under one roof, with one contract and one point of accountability.",
};

const trust = [
  ["18", "Years trading"],
  ["340+", "Units delivered"],
  ["12", "Live projects"],
  ["RIBA", "Chartered practice · FMB · NHBC"],
] as const;

const journeys = [
  {
    className: "home",
    image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=800&q=80",
    alt: "A considered contemporary home interior",
    audience: "For homeowners & general public",
    title: "I want my home transformed.",
    description:
      "Flat refurbs, extensions, full renovations, home offices, and bespoke design — in plain English, with one team responsible for everything.",
    cta: "Explore homeowner services",
  },
  {
    className: "land",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "A completed high-end residential refurbishment",
    audience: "For landlords & letting investors",
    title: "I need reliable work that maximises yield.",
    description:
      "HMO conversions, buy-to-let refurbs, EPC upgrades, block improvements — fixed price, no void periods, one contractor from design to handover.",
    cta: "Explore landlord services",
  },
  {
    className: "dev",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    alt: "A large urban residential development",
    audience: "For property developers & investors",
    title: "I'm developing residential property at scale.",
    description:
      "Block contracts, co-development, JV structures, new build and refurb — in-house brigades, fixed costs, programme certainty, and real financial transparency.",
    cta: "Explore developer services",
  },
] as const;

export default function HomePage() {
  return (
    <main className="integrated-home">
      <section className="ih-hero">
        <img
          className="ih-hero-image"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
          alt="Contemporary Ardivia residence at dusk"
        />
        <div className="ih-hero-panel" />
        <div className="ih-hero-watermark" aria-hidden="true">
          Ardivia
        </div>
        <div className="ih-hero-content">
          <div className="ih-kicker">Design · Build · Deliver — London</div>
          <h1 className="ih-display ih-display-light">
            One company.
            <br />
            One contract.
            <br />
            <em>
              From design
              <br />
              to keys.
            </em>
          </h1>
          <p className="ih-hero-copy">
            We design, build and deliver residential properties — from a single flat transformation
            to a full block development — under one roof, with one point of accountability.
          </p>
          <div className="ih-actions">
            <Link href="/contact" className="ih-btn ih-btn-gold">
              Start your project <ArrowIcon />
            </Link>
            <Link href="/services" className="ih-ghost-link">
              All services →
            </Link>
          </div>
        </div>
        <div className="ih-scroll-hint" aria-hidden="true">
          <span className="ih-scroll-line" />
          <span>Explore</span>
        </div>
      </section>

      <section className="ih-trust-bar" aria-label="Ardivia credentials">
        {trust.map(([number, label], index) => (
          <div key={label} className={`ih-trust-item reveal${index ? ` d${index}` : ""}`}>
            <div className="ih-trust-number">{number}</div>
            <div className="ih-trust-label">{label}</div>
          </div>
        ))}
      </section>

      <section className="ih-journeys">
        <div className="ih-journeys-header">
          <div>
            <div className="ih-tag reveal">Who we work with</div>
            <h2 className="ih-display ih-display-dark reveal d1">
              Your journey
              <br />
              starts here.
            </h2>
          </div>
          <p className="ih-body reveal d2">
            We serve three distinct client types. Choose your path — or explore everything we do.
          </p>
        </div>

        <div className="ih-journey-cards">
          {journeys.map((journey, index) => (
            <Link
              href="/services"
              key={journey.title}
              className={`ih-journey-card ${journey.className} reveal${index ? ` d${index}` : ""}`}
            >
              <span className="ih-card-accent" />
              <img className="ih-card-image" src={journey.image} alt={journey.alt} />
              <span className="ih-card-overlay" />
              <span className="ih-card-body">
                <span className="ih-card-audience">{journey.audience}</span>
                <span className="ih-card-title">{journey.title}</span>
                <span className="ih-card-description">{journey.description}</span>
                <span className="ih-card-cta">
                  {journey.cta} <ArrowIcon />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="ih-featured">
        <div className="ih-featured-image">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80"
            alt="Highgate Residence living space"
          />
          <div className="ih-featured-label">Featured project · 2024</div>
        </div>
        <div className="ih-featured-content">
          <div className="ih-featured-type reveal">Bespoke Residential · Highgate, London</div>
          <h2 className="ih-featured-title reveal d1">
            Highgate Residence — Full design, build &amp; delivery
          </h2>
          <p className="ih-featured-copy reveal d2">
            A complete transformation of a 1930s semi-detached property — extended, redesigned, and
            rebuilt to create an 8,400 sq ft family home. Designed by Ardivia&apos;s architecture
            team, built by our in-house brigade, delivered on time and on budget.
          </p>
          <div className="ih-featured-stats reveal d3">
            <div>
              <div className="ih-featured-stat">8,400</div>
              <div className="ih-featured-stat-label">Square feet</div>
            </div>
            <div>
              <div className="ih-featured-stat">14</div>
              <div className="ih-featured-stat-label">Months on site</div>
            </div>
            <div>
              <div className="ih-featured-stat">£0</div>
              <div className="ih-featured-stat-label">Variation orders</div>
            </div>
          </div>
          <div className="reveal d3">
            <Link href="/projects#case-study" className="ih-btn ih-btn-forest">
              View case study <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="ih-contact-strip">
        <div>
          <h2 className="ih-display ih-display-light reveal">Start a conversation.</h2>
          <p className="reveal d1">
            No commitment. Just a conversation about what you&apos;re trying to achieve.
          </p>
        </div>
        <Link href="/contact" className="ih-btn ih-btn-gold reveal d1">
          Get in touch <ArrowIcon />
        </Link>
      </section>
    </main>
  );
}
