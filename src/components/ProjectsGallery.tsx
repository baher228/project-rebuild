"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Category =
  | "all"
  | "extensions"
  | "lofts"
  | "basements"
  | "renovations"
  | "new-build"
  | "heritage"
  | "retrofit";

const projects: {
  img: string;
  type: string;
  name: string;
  loc: string;
  category: Exclude<Category, "all">;
}[] = [
  {
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1100&q=80",
    type: "Bespoke Residential - 8,400 sq ft",
    name: "Highgate Residence",
    loc: "North London - Full renovation, double-storey extension & loft - 2023",
    category: "renovations",
  },
  {
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1100&q=80",
    type: "Side-return - Kitchen",
    name: "Clapham Side-Return",
    loc: "London SW4 - 2024",
    category: "extensions",
  },
  {
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1100&q=80",
    type: "Dormer - Master suite",
    name: "Islington Loft",
    loc: "London N1 - 2024",
    category: "lofts",
  },
  {
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1100&q=80",
    type: "Excavation - Pool & gym",
    name: "Notting Hill Basement",
    loc: "London W11 - 2023",
    category: "basements",
  },
  {
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1100&q=80",
    type: "Grade II Listed Renovation",
    name: "Cotswolds Manor",
    loc: "Gloucestershire - 2023",
    category: "heritage",
  },
  {
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1100&q=80",
    type: "Orangery - Garden Room",
    name: "Hampstead Garden Room",
    loc: "London NW3 - 2024",
    category: "extensions",
  },
  {
    img: "https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=1100&q=80",
    type: "Hip-to-gable",
    name: "Wandsworth Conversion",
    loc: "London SW18 - 2023",
    category: "lofts",
  },
  {
    img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1100&q=80",
    type: "EPC D to B - Whole house",
    name: "Dulwich Retrofit",
    loc: "London SE21 - 2024",
    category: "retrofit",
  },
  {
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1100&q=80",
    type: "24-unit BTR block",
    name: "Tottenham Hale",
    loc: "London N17 - On site",
    category: "new-build",
  },
];

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All projects" },
  { id: "extensions", label: "Extensions" },
  { id: "lofts", label: "Loft conversions" },
  { id: "basements", label: "Basements" },
  { id: "renovations", label: "Full renovations" },
  { id: "new-build", label: "New build" },
  { id: "heritage", label: "Heritage" },
  { id: "retrofit", label: "Retrofit" },
];

export function ProjectsGallery() {
  const [filter, setFilter] = useState<Category>("all");
  const visible = projects.filter((project) => filter === "all" || project.category === filter);

  return (
    <>
      <div className="project-filters">
        {filters.map((filterOption) => (
          <motion.button
            key={filterOption.id}
            className={`filter-btn${filter === filterOption.id ? " active" : ""}`}
            onClick={() => setFilter(filterOption.id)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {filterOption.label}
          </motion.button>
        ))}
      </div>
      <motion.div className="project-full-grid">
        {visible.map((project, index) => {
          const featured = filter === "all" && project.name === "Highgate Residence";

          return (
            <motion.a
              href="#case-study"
              key={project.name}
              className={`proj-full-card${featured ? " featured" : ""} reveal visible${
                index % 3 ? ` d${index % 3}` : ""
              }`}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
            >
              <img className="proj-full-img" src={project.img} alt={project.name} />
              <div className="proj-full-info">
                <div className="project-type">{project.type}</div>
                <div className="project-name">{project.name}</div>
                <div className="project-loc">{project.loc}</div>
                {featured ? <span className="project-cta">View case study -&gt;</span> : null}
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </>
  );
}
