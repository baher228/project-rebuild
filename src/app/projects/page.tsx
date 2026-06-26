import type { Metadata } from "next";
import Link from "next/link";

import { ProjectsGallery } from "@/components/ProjectsGallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects from Ardivia: bespoke residences, commercial interiors and heritage renovations across London and the UK.",
};

const projectDetails = [
  ["Location", "Highgate, London N6"],
  ["Size", "8,400 sq ft"],
  ["Scope", "Renovation - Extension - Loft - Basement"],
  ["Duration", "14 months"],
  ["EPC improvement", "E to B"],
  ["Variation orders", "Zero"],
  ["Completed", "2023"],
];

const works = [
  ["Double-storey rear extension", "1,200 sq ft added"],
  ["Loft conversion", "Master suite + en-suite"],
  ["Basement excavation", "Gym, cinema, plant"],
  ["Energy retrofit", "ASHP, MVHR, solar PV"],
  ["Climate control", "Concealed ducted, multi-zone"],
  ["Smart home", "Full KNX integration"],
];

const relatedProjects = [
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
];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="proj-hero">
        <div className="tag muted reveal visible">Selected work - Ardivia</div>
        <h1 className="disp light reveal visible d1">Projects.</h1>
        <p className="reveal visible d2">
          Eighteen years of residential transformations across London and the Home Counties - from
          single-room refurbishments to full block developments. Filter by type below.
        </p>
      </section>

      <ProjectsGallery />

      <section className="case-study" id="case-study">
        <div className="cs-hero">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
            alt="Highgate Residence"
          />
          <div className="cs-hero-content">
            <Link href="/projects" className="sd-back">
              All projects
            </Link>
            <div className="tag">Full Renovation - Extension - Loft</div>
            <h1>Highgate Residence</h1>
          </div>
        </div>

        <div className="cs-overview">
          <div className="cs-ov-left">
            <div className="tag dk reveal visible">The brief</div>
            <h2 className="reveal visible d1">
              A tired 1930s semi, reimagined as an 8,400 sq ft family home.
            </h2>
            <p className="reveal visible d2">
              Our clients had bought a substantial but dated 1930s property in Highgate with the
              intention of creating their forever home. The house was structurally sound but poorly
              arranged, energy-inefficient, and far smaller than they needed for a family of five.
            </p>
            <p className="reveal visible d2">
              Ardivia delivered a complete transformation under a single contract: a double-storey
              rear extension, a full loft conversion creating a master suite, a basement excavation
              for a gym and cinema, and a comprehensive renovation and retrofit of the entire
              existing house.
            </p>
            <p className="reveal visible d3">
              Designed by our architecture team, engineered by our in-house structural engineers,
              and built by our own brigade - delivered on time and to a fixed price, with zero
              variation orders.
            </p>
          </div>
          <aside className="cs-ov-meta">
            <div className="tag dk reveal visible">Project details</div>
            <div className="cs-meta-list reveal visible d1">
              {projectDetails.map(([key, value]) => (
                <div className="cs-meta-row" key={key}>
                  <span className="cs-meta-k">{key}</span>
                  <span className="cs-meta-v">{value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="cs-gallery">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1100&q=80"
            alt="Highgate Residence kitchen extension"
          />
          <div className="cs-g-stack">
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

        <div className="sd-specs">
          <div className="tag muted reveal visible">The works</div>
          <h2 className="disp light reveal visible d1">Everything, under one contract.</h2>
          <div className="spec-grid">
            {works.map(([key, value], index) => (
              <div className={`spec-row reveal visible${index % 2 ? " d1" : ""}`} key={key}>
                <span className="spec-key">{key}</span>
                <span className="spec-val">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-quote">
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

        <div className="sd-related">
          <div className="tag muted reveal visible">More projects</div>
          <h2 className="disp light reveal visible d1">Explore further.</h2>
          <div className="rel-grid">
            {relatedProjects.map((project, index) => (
              <Link
                href="#case-study"
                key={project.name}
                className={`rel-card reveal visible${index ? ` d${index}` : ""}`}
              >
                <img src={project.img} alt={project.name} />
                <div className="rel-info">
                  <div className="rel-type">{project.type}</div>
                  <div className="rel-name">{project.name}</div>
                  <div className="rel-loc">{project.loc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
