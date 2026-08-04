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
