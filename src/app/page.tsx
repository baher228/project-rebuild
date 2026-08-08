import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Property Improvement Specialists",
  description:
    "Ardivia renovates, improves and maintains homes inside and out, managing every aspect of your project from start to finish.",
};

const pillars = [
  {
    number: "01",
    title: "Interior Improvements",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
    alt: "Light-filled interior improvement",
    description:
      "Everything that modernises the inside of your home — from a fresh kitchen or bathroom to a full refurbishment.",
    tags: ["Kitchens", "Bathrooms", "Flooring", "Joinery", "Decorating"],
    link: "See interior services",
  },
  {
    number: "02",
    title: "Exterior Improvements",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=900&q=80",
    alt: "Garden exterior improvement",
    description:
      "Everything that lifts kerb appeal and creates outdoor space built for relaxing, entertaining, and adding value.",
    tags: ["Landscaping", "Patios", "Driveways", "Fencing", "Decking"],
    link: "See exterior services",
  },
  {
    number: "03",
    title: "Property Upgrades",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80",
    alt: "Practical home-office property upgrade",
    description:
      "Projects that make your home more functional and more valuable — converting, extending use, and future-proofing.",
    tags: ["Garage conversions", "Home offices", "Utility rooms", "Insulation"],
    link: "See upgrade services",
  },
  {
    number: "04",
    title: "Repairs & Maintenance",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=900&q=80",
    alt: "Tools for property maintenance work",
    description:
      "Keeping your property in top condition — from roofs and gutters to damp, repointing, and landlord maintenance.",
    tags: ["Roofing", "Guttering", "Damp", "Repointing", "Landlord care"],
    link: "See maintenance services",
  },
  {
    number: "05",
    title: "Full Project Management",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80",
    alt: "Plans and materials for a managed home project",
    description:
      "On bigger projects, you deal with one trusted contractor instead of chasing several trades. We handle planning, scheduling, procurement, quality, budgets and timelines — so you don't have to.",
    tags: [],
    link: "How we manage your project",
  },
] as const;

const steps = [
  [
    "1",
    "Get in touch",
    "Tell us what you'd like to improve. We'll arrange a visit at a time that suits you.",
  ],
  [
    "2",
    "Free quote",
    "We assess the work and give you a clear, fixed quote — no jargon, no hidden costs.",
  ],
  [
    "3",
    "We do the work",
    "Our vetted team delivers to schedule, keeping you updated at every stage.",
  ],
  [
    "4",
    "Enjoy the result",
    "We finish, clean up, and check you're delighted. Backed by our workmanship guarantee.",
  ],
] as const;

const benefits = [
  [
    "One point of contact",
    "No chasing separate trades or refereeing between them. You deal with us, and we handle the rest.",
  ],
  [
    "Fixed, transparent pricing",
    "A clear quote before we start. You know exactly what you're paying, with no surprises.",
  ],
  [
    "Managed start to finish",
    "Planning, scheduling, materials, trades, and quality control — all coordinated by us.",
  ],
  [
    "Guaranteed workmanship",
    "Fully insured, FMB-accredited, and backed by our workmanship guarantee on every job.",
  ],
] as const;

export default function HomePage() {
  return (
    <main className="property-home">
      <section className="property-home__hero">
        <img
          className="property-home__hero-image"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
          alt="Beautifully improved home"
        />
        <div className="property-home__hero-panel" />
        <div className="property-home__watermark" aria-hidden="true">
          Ardivia
        </div>
        <div className="property-home__hero-content">
          <p className="property-home__hero-label">Property improvement specialists</p>
          <h1>
            Better homes,
            <br />
            inside and out.
          </h1>
          <p className="property-home__hero-copy">
            We renovate, improve and maintain homes inside and out. One trusted company manages
            every stage, from start to finish.
          </p>
          <div className="property-home__hero-actions">
            <Link href="/services" className="property-home__button property-home__button--gold">
              Explore what we do <ArrowIcon />
            </Link>
            <Link href="/contact" className="property-home__button property-home__button--outline">
              Get a free quote
            </Link>
          </div>
        </div>
        <div className="property-home__scroll-hint" aria-hidden="true">
          <span />
          <small>Explore</small>
        </div>
      </section>

      <section className="property-home__promise" aria-label="Our promise">
        <p>
          You don&apos;t want a carpenter, a tiler or a decorator. You want a <em>nicer kitchen</em>
          , a <em>modern bathroom</em>, a garden that looks after itself, and a home that&apos;s
          worth more. We deliver the outcome.
        </p>
      </section>

      <section className="property-home__trust" aria-label="Ardivia credentials">
        {[
          ["15+", "Years improving homes"],
          ["1,200+", "Projects completed"],
          ["4.9★", "Average client rating"],
          ["Fully", "Insured & FMB accredited"],
        ].map(([value, label]) => (
          <div className="property-home__trust-item" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="property-home__pillars" aria-labelledby="home-pillars-title">
        <div className="property-home__section-heading">
          <p>What kind of improvement?</p>
          <h2 id="home-pillars-title">
            Pick where you&apos;d
            <br />
            like to start.
          </h2>
          <span>
            Whatever your home needs, it fits into one of these. Choose a pillar to see everything
            we do.
          </span>
        </div>
        <div className="property-home__pillar-grid">
          {pillars.map((pillar) => (
            <Link
              className={`property-home__pillar${pillar.number === "05" ? " property-home__pillar--wide" : ""}`}
              href="/services"
              key={pillar.number}
            >
              <img src={pillar.image} alt={pillar.alt} />
              <span className="property-home__pillar-overlay" />
              <span className="property-home__pillar-number">{pillar.number}</span>
              <span className="property-home__pillar-content">
                <strong>{pillar.title}</strong>
                <span>{pillar.description}</span>
                {pillar.tags.length ? (
                  <span className="property-home__pillar-tags">
                    {pillar.tags.map((tag) => (
                      <i key={tag}>{tag}</i>
                    ))}
                  </span>
                ) : null}
                <span className="property-home__pillar-link">
                  {pillar.link} <ArrowIcon />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="property-home__process" aria-labelledby="home-process-title">
        <div className="property-home__section-heading property-home__section-heading--light">
          <p>How it works</p>
          <h2 id="home-process-title">
            Simple, from first
            <br />
            call to finished home.
          </h2>
        </div>
        <ol className="property-home__steps">
          {steps.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="property-home__featured" aria-labelledby="home-featured-title">
        <div className="property-home__featured-image">
          <span>Before &amp; after</span>
          <img
            src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1000&q=80"
            alt="Modern kitchen transformation"
          />
        </div>
        <div className="property-home__featured-content">
          <p>Interior improvement · Kitchen renovation</p>
          <h2 id="home-featured-title">
            An outdated kitchen, transformed into a modern living space.
          </h2>
          <div>
            The brief was a kitchen that worked for family life and entertaining. We removed a wall
            to open the space, fitted bespoke cabinetry, new flooring and lighting,
            and managed every trade — completed in four weeks, on budget.
          </div>
          <dl>
            <div>
              <dt>4 wks</dt>
              <dd>Start to finish</dd>
            </div>
            <div>
              <dt>£24k</dt>
              <dd>Fixed price</dd>
            </div>
            <div>
              <dt>+£40k</dt>
              <dd>Value added</dd>
            </div>
          </dl>
          <Link href="/projects" className="property-home__button property-home__button--forest">
            See more of our work <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className="property-home__value" aria-labelledby="home-value-title">
        <div>
          <p className="property-home__kicker">Why one company</p>
          <h2 id="home-value-title">
            One trusted contractor.
            <br />
            Not five separate trades.
          </h2>
          <p className="property-home__value-intro">
            The value we offer isn&apos;t a single trade — it&apos;s taking the entire project off
            your hands. You get one point of contact, one quote, and one company accountable for the
            finished result.
          </p>
        </div>
        <ul className="property-home__benefits">
          {benefits.map(([title, description]) => (
            <li key={title}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="property-home__testimonial">
        <blockquote>
          &ldquo;We&apos;d been putting off doing up the house because we dreaded managing all the
          different trades. Ardivia took the whole thing off our hands — kitchen, bathroom,
          decorating, the lot. It&apos;s the first time a project actually felt easy.&rdquo;
        </blockquote>
        <div>
          <span />
          <strong>Sarah &amp; James Whitfield</strong>
          <p>Whole-house refurbishment · Guildford</p>
        </div>
      </section>
    </main>
  );
}
