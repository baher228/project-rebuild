import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ardivia" },
      {
        name: "description",
        content:
          "Selected projects from Ardivia: bespoke residences, commercial interiors and heritage renovations across London and the UK.",
      },
      { property: "og:title", content: "Projects — Ardivia" },
      {
        property: "og:description",
        content: "A selected portfolio of bespoke residential, commercial and heritage work.",
      },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
      },
    ],
  }),
  component: ProjectsPage,
});

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Cat = "all" | "residential" | "commercial" | "heritage";

const projects: {
  img: string;
  type: string;
  name: string;
  loc: string;
  cat: Exclude<Cat, "all">;
}[] = [
  {
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1100&q=80",
    type: "Bespoke Residential",
    name: "Highgate Residence",
    loc: "North London · 2023",
    cat: "residential",
  },
  {
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1100&q=80",
    type: "Commercial Interior",
    name: "The Strand HQ",
    loc: "Aldwych, London · 2024",
    cat: "commercial",
  },
  {
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1100&q=80",
    type: "Heritage Renovation",
    name: "Cotswolds Manor",
    loc: "Gloucestershire · 2023",
    cat: "heritage",
  },
  {
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1100&q=80",
    type: "Bespoke Residential",
    name: "Hampstead New Build",
    loc: "London NW3 · 2024",
    cat: "residential",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1100&q=80",
    type: "Commercial Interior",
    name: "Marsh & Partners Studio",
    loc: "Soho, London · 2023",
    cat: "commercial",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1100&q=80",
    type: "Heritage Renovation",
    name: "Chelsea Mews",
    loc: "London SW3 · 2022",
    cat: "heritage",
  },
];

const filters: { id: Cat; label: string }[] = [
  { id: "all", label: "All projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "heritage", label: "Heritage" },
];

function ProjectsPage() {
  useReveal();
  const [filter, setFilter] = useState<Cat>("all");

  const visible = projects.filter((p) => filter === "all" || p.cat === filter);

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
            A curated selection of recent work — each commission represents months of careful
            collaboration with clients who demand the extraordinary.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-gold">
              Start a project <Arrow />
            </Link>
            <Link to="/clients" className="btn-ghost">
              Client stories →
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
        <div className="project-filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`filter-btn${filter === f.id ? " active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="project-full-grid">
          {visible.map((p, i) => (
            <div key={p.name} className={`proj-full-card reveal${i % 3 ? ` d${i % 3}` : ""}`}>
              <img className="proj-full-img" src={p.img} alt={p.name} />
              <div className="proj-full-info">
                <div className="project-type">{p.type}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-loc">{p.loc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
