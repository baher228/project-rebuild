"use client";

import { useState } from "react";

type Category = "all" | "residential" | "commercial" | "heritage";

const projects: { img: string; type: string; name: string; loc: string; cat: Exclude<Category, "all"> }[] = [
  { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1100&q=80", type: "Bespoke Residential", name: "Highgate Residence", loc: "North London - 2023", cat: "residential" },
  { img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1100&q=80", type: "Commercial Interior", name: "The Strand HQ", loc: "Aldwych, London - 2024", cat: "commercial" },
  { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1100&q=80", type: "Heritage Renovation", name: "Cotswolds Manor", loc: "Gloucestershire - 2023", cat: "heritage" },
  { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1100&q=80", type: "Bespoke Residential", name: "Hampstead New Build", loc: "London NW3 - 2024", cat: "residential" },
  { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1100&q=80", type: "Commercial Interior", name: "Marsh & Partners Studio", loc: "Soho, London - 2023", cat: "commercial" },
  { img: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1100&q=80", type: "Heritage Renovation", name: "Chelsea Mews", loc: "London SW3 - 2022", cat: "heritage" },
];

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "heritage", label: "Heritage" },
];

export function ProjectsGallery() {
  const [filter, setFilter] = useState<Category>("all");
  const visible = projects.filter((project) => filter === "all" || project.cat === filter);

  return (
    <>
      <div className="project-filters">
        {filters.map((filterOption) => (
          <button
            key={filterOption.id}
            className={`filter-btn${filter === filterOption.id ? " active" : ""}`}
            onClick={() => setFilter(filterOption.id)}
          >
            {filterOption.label}
          </button>
        ))}
      </div>
      <div className="project-full-grid">
        {visible.map((project, index) => (
          <div key={project.name} className={`proj-full-card reveal${index % 3 ? ` d${index % 3}` : ""}`}>
            <img className="proj-full-img" src={project.img} alt={project.name} />
            <div className="proj-full-info">
              <div className="project-type">{project.type}</div>
              <div className="project-name">{project.name}</div>
              <div className="project-loc">{project.loc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
