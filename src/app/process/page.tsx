import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How an Ardivia project unfolds - from first conversation to final handover. A six-stage process built on rigour and patience.",
};

const steps = [
  {
    num: "01",
    title: "Initial conversation",
    desc: "An unhurried discussion of your brief, ambitions and site. We listen far more than we talk.",
  },
  {
    num: "02",
    title: "Feasibility & concept",
    desc: "Spatial studies, planning context and a first articulation of the design idea. Always grounded in your way of living.",
  },
  {
    num: "03",
    title: "Design development",
    desc: "Detailed plans, material palette, and bespoke joinery design. You see and approve every meaningful decision.",
  },
  {
    num: "04",
    title: "Planning & consent",
    desc: "We lead all planning and listed-building applications, and coordinate with conservation officers where required.",
  },
  {
    num: "05",
    title: "Build & site delivery",
    desc: "Our team manages the principal contractor, trades, and artisan suppliers. One point of contact. Weekly site reports.",
  },
  {
    num: "06",
    title: "Completion & aftercare",
    desc: "Forensic snagging, the key handover, and a 12-month aftercare programme. We remain available long after.",
  },
];

export default function ProcessPage() {
  return (
    <main>
      <section className="arch-hero">
        <div className="arch-hero-left">
          <div className="hero-eyebrow">Our Process</div>
          <h1 className="hero-title">
            Patient.
            <br />
            Precise.
            <br />
            <em>Considered.</em>
          </h1>
          <p className="hero-sub">
            Every Ardivia project follows a deliberate six-stage process. It is unhurried by design
            - the time we take at the beginning is what protects the outcome at the end.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-gold">
              Begin a conversation <ArrowIcon />
            </Link>
            <Link href="/services" className="btn-ghost">
              What we do -&gt;
            </Link>
          </div>
        </div>
        <div className="arch-hero-right">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80"
            alt="Process drawing detail"
          />
        </div>
      </section>

      <section className="section-pad bg-forest">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div className="section-eyebrow reveal">Six stages</div>
          <h2
            className="section-title reveal d1"
            style={{ fontSize: "clamp(36px,4vw,56px)", color: "var(--linen)", marginBottom: 24 }}
          >
            From first conversation
            <br />
            to <em style={{ fontStyle: "italic", color: "var(--gold)" }}>final key.</em>
          </h2>
          <p
            className="reveal d2"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 17,
              color: "rgba(232,226,213,.6)",
              lineHeight: 1.85,
            }}
          >
            Each stage has its own rigour, deliverables, and review point. You never wonder where
            the project stands - and you never see a meaningful decision after the fact.
          </p>
          <div className="process-steps">
            {steps.map((step) => (
              <div className="process-step reveal" key={step.num}>
                <div className="step-num">{step.num}</div>
                <div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
