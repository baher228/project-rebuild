import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "All Services",
  description:
    "Fourteen design, build and delivery capabilities across Ardivia's core, expanded and premium residential services.",
};

function CardIcon({ type }: { type: string }) {
  const paths: Record<string, React.ReactNode> = {
    build: (
      <>
        <rect x="3" y="3" width="22" height="22" />
        <path d="M3 10h22M10 10v15M3 16h7" />
      </>
    ),
    management: (
      <>
        <circle cx="14" cy="14" r="10" />
        <path d="M14 6v6l4 3" />
      </>
    ),
    materials: (
      <>
        <path d="M4 22l4-5 4 4 5-6 4 5" />
        <circle cx="21" cy="7" r="4" />
      </>
    ),
    lighting: (
      <>
        <circle cx="14" cy="14" r="4" />
        <path d="M14 4v3M14 21v3M4 14H7M21 14h3M6 6l2 2M20 20l2 2M6 22l2-2M20 8l2-2" />
      </>
    ),
    heritage: (
      <>
        <path d="M4 24h20M7 24V13l7-8 7 8v11M11 24v-6h6v6" />
      </>
    ),
    acquisition: (
      <>
        <path d="M4 22h20M7 11h14M14 4v7M9 16h10M9 20h6" />
        <rect x="9" y="11" width="10" height="11" />
      </>
    ),
    art: (
      <>
        <path d="M4 22h20M7 8h14v14H7z" />
        <path d="M10 8V6h8v2" />
      </>
    ),
    acoustic: (
      <>
        <circle cx="14" cy="14" r="8" />
        <path d="M14 8v5l-3 4" />
        <circle cx="14" cy="14" r="3" />
      </>
    ),
    wellness: (
      <>
        <path d="M14 3s-7 6-7 11a7 7 0 0014 0c0-5-7-11-7-11z" />
        <path d="M10 16c2-3 5-4 7-2" />
      </>
    ),
  };

  return (
    <svg
      className="s3c-icon"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="integrated-services">
      <header className="services-hero">
        <div className="tag muted reveal">All services — Ardivia</div>
        <h1 className="display light reveal d1">
          Every service.
          <br />
          One <em>standard.</em>
        </h1>
        <p className="reveal d2">
          Fourteen capabilities. Three tiers. One team responsible for all of them. From initial
          design to the final piece of furniture placed — Ardivia holds it.
        </p>
      </header>

      <section aria-labelledby="core-services">
        <div className="svc-tier-bar">
          <div className="stb-left">
            <h2 className="stb-title" id="core-services">
              Core Services
            </h2>
          </div>
          <div className="stb-sub">The foundation of every Ardivia commission</div>
        </div>

        <article className="svc-split">
          <div className="svc-img">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
              alt="Contemporary architecture by Ardivia"
            />
          </div>
          <div className="svc-content">
            <h3 className="svc-title dark reveal d1">
              Architecture
              <br />
              &amp; Design
            </h3>
            <p className="svc-body dark reveal d2">
              From RIBA Stage 1 brief through to technical design and planning permission. New
              build, extension, conversion, and listed building — all handled in-house by our
              RIBA-chartered team.
            </p>
            <ul className="svc-features reveal d3">
              <li className="svc-feat dark">Concept through RIBA Stages 1–7</li>
              <li className="svc-feat dark">Planning &amp; listed building consents</li>
              <li className="svc-feat dark">Building regulations and technical design</li>
              <li className="svc-feat dark">Structural and M&amp;E coordination</li>
            </ul>
            <div className="stags reveal d4">
              <span className="stag d">RIBA 1–7</span>
              <span className="stag d">Planning</span>
              <span className="stag d">Listed Buildings</span>
            </div>
          </div>
        </article>

        <article className="svc-split reverse">
          <div className="svc-img">
            <img
              src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=900&q=80"
              alt="Ardivia interior architecture"
            />
          </div>
          <div className="svc-content on-dark">
            <h3 className="svc-title light reveal d1">
              Interior
              <br />
              Architecture
            </h3>
            <p className="svc-body light reveal d2">
              Space planning, material specification, bespoke joinery design, kitchen and bathroom
              architecture. Designed by the same team as the architecture — one language, one
              scheme, no coordination gap.
            </p>
            <ul className="svc-features reveal d3">
              <li className="svc-feat light">Space planning and flow</li>
              <li className="svc-feat light">Full material and finish specification</li>
              <li className="svc-feat light">Bespoke joinery design</li>
              <li className="svc-feat light">Colour and palette development</li>
            </ul>
          </div>
        </article>

        <div className="svc-three-heading dark-section">
          <h2 className="display light reveal d1">Build, manage, deliver.</h2>
        </div>
        <div className="svc-3 dark-section">
          <article className="s3c bg-ink reveal">
            <CardIcon type="build" />
            <h3 className="s3c-name">Full Design &amp; Build</h3>
            <p className="s3c-desc">
              Architecture, interiors, PM, and construction. One contract. One price. One team.
            </p>
          </article>
          <article className="s3c bg-ink reveal d1">
            <CardIcon type="management" />
            <h3 className="s3c-name">Project Management</h3>
            <p className="s3c-desc">
              Contractor procurement, programme, cost control, and site supervision. Dedicated PM on
              every project.
            </p>
          </article>
          <article className="s3c bg-ink reveal d2">
            <CardIcon type="materials" />
            <h3 className="s3c-name">Materials Sourcing</h3>
            <p className="s3c-desc">
              Rare stone, bronze, reclaimed timber — sourced through 18 years of artisan
              relationships.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="expanded-services">
        <div className="svc-tier-bar linen">
          <div className="stb-left">
            <div className="stb-num">II</div>
            <h2 className="stb-title" id="expanded-services">
              Expanded Services — 06 to 10
            </h2>
          </div>
          <div className="stb-sub">Every surface. Every opening. Every piece of furniture.</div>
        </div>

        <article className="svc-split">
          <div className="svc-img">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80"
              alt="Bespoke windows and doors"
            />
            <div className="svc-img-lbl">06 — Windows &amp; Doors</div>
          </div>
          <div className="svc-content">
            <div className="svc-id reveal">06 — Expanded</div>
            <h3 className="svc-title dark reveal d1">
              Windows &amp; Doors
              <br />
              Restoration &amp;
              <br />
              Bespoke Manufacture
            </h3>
            <p className="svc-body dark reveal d2">
              We restore original joinery where it can be saved — sash windows, casements, period
              ironmongery — and manufacture bespoke hardwood, steel, and bronze systems where it
              cannot. Every opening treated as an architectural statement.
            </p>
            <ul className="svc-features reveal d3">
              <li className="svc-feat dark">Original sash window and casement restoration</li>
              <li className="svc-feat dark">Bespoke hardwood windows — oak, accoya, iroko</li>
              <li className="svc-feat dark">Steel Crittall-style systems to specification</li>
              <li className="svc-feat dark">Bronze and patinated metal door systems</li>
              <li className="svc-feat dark">Listed building consent coordination</li>
              <li className="svc-feat dark">Secondary glazing for heritage buildings</li>
            </ul>
            <div className="stags reveal d4">
              <span className="stag d">Restoration</span>
              <span className="stag d">Bespoke Joinery</span>
              <span className="stag d">Steel Systems</span>
              <span className="stag d">Heritage</span>
            </div>
          </div>
        </article>

        <aside className="callout light-callout">
          <blockquote className="callout-q">
            “A window is not a hole in a wall. It is a lens through which architecture frames the
            world outside. We treat every opening as an architectural decision.”
          </blockquote>
          <div className="callout-src">Ardivia · Windows &amp; Doors</div>
        </aside>

        <article className="svc-split reverse">
          <div className="svc-img">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80"
              alt="Bespoke furniture"
            />
            <div className="svc-img-lbl">07 — Bespoke Furniture</div>
          </div>
          <div className="svc-content on-dark">
            <div className="svc-id muted reveal">07 — Expanded</div>
            <h3 className="svc-title light reveal d1">
              Bespoke Furniture
              <br />
              Design &amp; Commissioning
            </h3>
            <p className="svc-body light reveal d2">
              We design and commission bespoke furniture as an integrated part of every interior
              commission. Dining tables, built-in libraries, upholstered pieces, antique sourcing,
              and loose furniture procurement — all considered as part of the architecture.
            </p>
            <ul className="svc-features reveal d3">
              <li className="svc-feat light">Bespoke dining tables, desks, case furniture</li>
              <li className="svc-feat light">Built-in libraries, wardrobes, media units</li>
              <li className="svc-feat light">Upholstered pieces to specification</li>
              <li className="svc-feat light">Antique and vintage sourcing and restoration</li>
              <li className="svc-feat light">
                Hardware specification: brass, bronze, blackened steel
              </li>
            </ul>
          </div>
        </article>

        <div className="svc-three-heading light-section">
          <div className="tag reveal">08 → 10 — Expanded Services</div>
          <h2 className="display dark reveal d1">Light, heritage, acquisition.</h2>
        </div>
        <div className="svc-3 light-section">
          <article className="s3c bg-white reveal">
            <div className="s3c-ghost">08</div>
            <CardIcon type="lighting" />
            <h3 className="s3c-name">Architectural Lighting Design</h3>
            <p className="s3c-desc">
              Designed at RIBA Stage 2, not specified at fit-out. KNX, Lutron, circadian-aware.
              Architecturally invisible infrastructure.
            </p>
            <div className="stags">
              <span className="stag d">KNX</span>
              <span className="stag d">Lutron</span>
              <span className="stag d">Circadian</span>
            </div>
          </article>
          <article className="s3c bg-white reveal d1">
            <div className="s3c-ghost">09</div>
            <CardIcon type="heritage" />
            <h3 className="s3c-name">Heritage Restoration &amp; Masonry</h3>
            <p className="s3c-desc">
              Lime mortar, stonework, brickwork, chimney restoration, original plasterwork repair.
              Conservation-approved craftsmen only.
            </p>
            <div className="stags">
              <span className="stag d">Lime Mortar</span>
              <span className="stag d">Conservation</span>
            </div>
          </article>
          <article className="s3c bg-white reveal d2">
            <div className="s3c-ghost">10</div>
            <CardIcon type="acquisition" />
            <h3 className="s3c-name">Property Acquisition Consultancy</h3>
            <p className="s3c-desc">
              We advise before you buy — identifying planning potential, heritage constraints,
              structural viability. Pre-purchase assessment guarantees the right building for your
              brief.
            </p>
            <div className="stags">
              <span className="stag d">Pre-purchase</span>
              <span className="stag d">Viability</span>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="premium-services" className="premium-services">
        <div className="svc-tier-bar premium-tier">
          <div className="stb-left">
            <div className="stb-num">III</div>
            <h2 className="stb-title" id="premium-services">
              Premium Services — 11 to 14
            </h2>
          </div>
          <div className="stb-sub">Rare capabilities for complete commissions</div>
        </div>
        <div className="premium-content">
          <div className="svc-3 premium-cards">
            <article className="s3c bg-ink reveal">
              <div className="s3c-ghost">11</div>
              <CardIcon type="art" />
              <h3 className="s3c-name">Art Advisory &amp; Curation</h3>
              <p className="s3c-desc">
                Commission brokerage, placement design, framing and installation. Art considered as
                the final material of every interior scheme.
              </p>
            </article>
            <article className="s3c bg-ink reveal d1">
              <div className="s3c-ghost">12</div>
              <CardIcon type="acoustic" />
              <h3 className="s3c-name">Acoustic Design</h3>
              <p className="s3c-desc">
                Home cinemas, music rooms, open-plan privacy. Designed from structural drawings —
                architecturally invisible sound isolation and reverberation control.
              </p>
            </article>
            <article className="s3c bg-ink reveal d2">
              <div className="s3c-ghost">13</div>
              <CardIcon type="wellness" />
              <h3 className="s3c-name">Wellness Architecture</h3>
              <p className="s3c-desc">
                Spa, sauna, pool, and cold plunge designed as architecture — not contractor
                afterthoughts. Planned at structural stage.
              </p>
            </article>
          </div>
          <div className="complete-house">
            <div>
              <div className="complete-house-id">14 — The Complete House</div>
              <h3>
                Energy sovereignty. Water independence. Estate ecology. Responsive architecture.
              </h3>
              <p>
                The highest expression of the Ardivia standard — applied to everything a house
                touches. The building generates its own power, manages its own water, sustains its
                own land, and responds to the people who live in it.
              </p>
            </div>
            <Link href="/contact" className="services-btn">
              Discover Complete House <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="brand-table" aria-labelledby="positioning-title">
        <div className="tag muted reveal">Strategic positioning</div>
        <h2 className="display light reveal d1" id="positioning-title">
          One company.
          <br />
          One contract.
        </h2>
        <dl className="bt-grid">
          <div className="bt-row">
            <dt className="bt-label">What we do</dt>
            <dd className="bt-value light">
              Design, build and deliver residential properties — from a single flat to a full block
            </dd>
          </div>
          <div className="bt-row">
            <dt className="bt-label">How we do it</dt>
            <dd className="bt-value gold">
              With in-house design teams and directly employed builder brigades — no subcontractor
              relay races
            </dd>
          </div>
          <div className="bt-row">
            <dt className="bt-label">Why it matters</dt>
            <dd className="bt-value light">
              One point of accountability, faster delivery, fixed costs, and no blame gap between
              architect and contractor
            </dd>
          </div>
          <div className="bt-row">
            <dt className="bt-label">Who it&apos;s for</dt>
            <dd className="bt-value light">
              Homeowners who want certainty · Landlords who want yield · Developers who want
              delivery
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
