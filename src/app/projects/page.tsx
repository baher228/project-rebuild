import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { ProjectsGallery } from "@/components/ProjectsGallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects from Ardivia: bespoke residences, commercial interiors and heritage renovations across London and the UK.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="arch-hero">
        <div className="arch-hero-left">
          <div className="hero-eyebrow">Selected Work</div>
          <h1 className="hero-title">
            Recent
            <br />
            <em>projects.</em>
          </h1>
          <p className="hero-sub">
            A curated selection of recent work - each commission represents months of careful
            collaboration with clients who demand the extraordinary.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-gold">
              Start a project <ArrowIcon />
            </Link>
            <Link href="/clients" className="btn-ghost">
              Client stories -&gt;
            </Link>
          </div>
        </div>
        <div className="arch-hero-right">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
            alt="Featured project"
          />
        </div>
      </section>

      <section className="section-pad bg-forest">
        <ProjectsGallery />
      </section>

      <section className="case-study" id="case-study">
        <div className="case-hero">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
            alt="Highgate Residence"
          />
          <div className="case-hero-content">
            <div className="hero-eyebrow">Full Renovation - Extension - Loft</div>
            <h2>Highgate Residence</h2>
          </div>
        </div>

        <div className="case-overview">
          <div>
            <div className="section-eyebrow reveal visible">The brief</div>
            <h3 className="case-title reveal visible d1">
              A tired 1930s semi, reimagined as an 8,400 sq ft family home.
            </h3>
            <p className="case-copy reveal visible d2">
              Our clients had bought a substantial but dated 1930s property in Highgate with the
              intention of creating their forever home. The house was structurally sound but poorly
              arranged, energy-inefficient, and far smaller than they needed for a family of five.
            </p>
            <p className="case-copy reveal visible d2">
              Ardivia delivered a complete transformation under a single contract: a double-storey
              rear extension, a full loft conversion creating a master suite, a basement excavation
              for a gym and cinema, and a comprehensive renovation and retrofit of the entire
              existing house.
            </p>
            <p className="case-copy reveal visible d3">
              Designed by our architecture team, engineered by our in-house structural engineers,
              and built by our own brigade - delivered on time and to a fixed price, with zero
              variation orders.
            </p>
          </div>
          <aside className="case-meta reveal visible d1">
            <div className="section-eyebrow">Project details</div>
            {[
              ["Location", "Highgate, London N6"],
              ["Size", "8,400 sq ft"],
              ["Scope", "Renovation - Extension - Loft - Basement"],
              ["Duration", "14 months"],
              ["EPC improvement", "E to B"],
              ["Variation orders", "Zero"],
              ["Completed", "2023"],
            ].map(([key, value]) => (
              <div className="case-meta-row" key={key}>
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </aside>
        </div>

        <div className="case-gallery">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1100&q=80"
            alt="Highgate Residence kitchen extension"
          />
          <div>
            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=80"
              alt="Highgate Residence living space"
            />
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=80"
              alt="Highgate Residence dining space"
            />
          </div>
        </div>

        <div className="case-works">
          <div>
            <div className="section-eyebrow reveal visible">The works</div>
            <h3 className="case-title light reveal visible d1">Everything, under one contract.</h3>
          </div>
          <div className="works-grid">
            {[
              ["Double-storey rear extension", "1,200 sq ft added"],
              ["Loft conversion", "Master suite + en-suite"],
              ["Basement excavation", "Gym, cinema, plant"],
              ["Energy retrofit", "ASHP, MVHR, solar PV"],
              ["Climate control", "Concealed ducted, multi-zone"],
              ["Smart home", "Full KNX integration"],
            ].map(([key, value], index) => (
              <div className={`works-row reveal visible${index % 2 ? " d1" : ""}`} key={key}>
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="case-quote">
          <p className="reveal visible">
            "Ardivia took on a project most firms would have split between four different
            contractors - architect, builder, basement specialist, M&amp;E. Having one company own
            all of it, with their own people on site, is the reason it actually worked."
          </p>
          <div className="reveal visible d1">
            <div className="testi-line" />
            <div className="testi-name">Catherine &amp; Edward Forsythe</div>
            <div className="testi-role">Private clients - Highgate Residence</div>
          </div>
        </div>

        <div className="case-related">
          <div className="section-eyebrow reveal visible">More projects</div>
          <h3 className="case-title light reveal visible d1">Explore further.</h3>
          <div className="related-grid">
            {[
              {
                img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=700&q=80",
                type: "Heritage - Listed",
                name: "Cotswolds Manor",
                loc: "Gloucestershire - 2023",
              },
              {
                img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=700&q=80",
                type: "Basement - Pool",
                name: "Notting Hill Basement",
                loc: "London W11 - 2023",
              },
              {
                img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
                type: "Loft - Master suite",
                name: "Islington Loft",
                loc: "London N1 - 2024",
              },
            ].map((project, index) => (
              <Link
                href="#case-study"
                key={project.name}
                className={`related-card reveal visible${index ? ` d${index}` : ""}`}
              >
                <img src={project.img} alt={project.name} />
                <div>
                  <div className="project-type">{project.type}</div>
                  <div className="project-name">{project.name}</div>
                  <div className="project-loc">{project.loc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
