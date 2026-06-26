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

type Project = {
  img: string;
  type: string;
  name: string;
  loc: string;
  category: Exclude<Category, "all">;
  badges: string[];
};

const projects: Project[] = [
  {
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1100&q=80",
    type: "Bespoke Residential - 8,400 sq ft",
    name: "Highgate Residence",
    loc: "North London - Full renovation, double-storey extension & loft - 2023",
    category: "renovations",
    badges: ["Full Renovation", "Extension"],
  },
  {
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
    type: "Side-return - Kitchen",
    name: "Clapham Side-Return",
    loc: "London SW4 - 2024",
    category: "extensions",
    badges: ["Extension"],
  },
  {
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
    type: "Dormer - Master suite",
    name: "Islington Loft",
    loc: "London N1 - 2024",
    category: "lofts",
    badges: ["Loft"],
  },
  {
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=700&q=80",
    type: "Excavation - Pool & gym",
    name: "Notting Hill Basement",
    loc: "London W11 - 2023",
    category: "basements",
    badges: ["Basement"],
  },
  {
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
    type: "Grade II Listed Renovation",
    name: "Cotswolds Manor",
    loc: "Gloucestershire - 2023",
    category: "heritage",
    badges: ["Heritage", "Listed"],
  },
  {
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80",
    type: "Orangery - Garden Room",
    name: "Hampstead Garden Room",
    loc: "London NW3 - 2024",
    category: "extensions",
    badges: ["Extension", "Glazed"],
  },
  {
    img: "https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=700&q=80",
    type: "Hip-to-gable",
    name: "Wandsworth Conversion",
    loc: "London SW18 - 2023",
    category: "lofts",
    badges: ["Loft"],
  },
  {
    img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=700&q=80",
    type: "EPC D to B - Whole house",
    name: "Dulwich Retrofit",
    loc: "London SE21 - 2024",
    category: "retrofit",
    badges: ["Retrofit"],
  },
  {
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
    type: "24-unit BTR block",
    name: "Tottenham Hale",
    loc: "London N17 - On site",
    category: "new-build",
    badges: ["New Build"],
  },
];

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "extensions", label: "Extensions" },
  { id: "lofts", label: "Loft Conversions" },
  { id: "basements", label: "Basements" },
  { id: "renovations", label: "Full Renovations" },
  { id: "new-build", label: "New Build" },
  { id: "heritage", label: "Heritage" },
  { id: "retrofit", label: "Retrofit" },
];

function cardSize(project: Project, index: number, filter: Category) {
  if (filter !== "all") return "med";
  if (project.name === "Highgate Residence") return "big";
  if (index === 1 || index === 4 || index === 5) return "med";
  if (index >= 7) return "med";
  return "third";
}

export function ProjectsGallery() {
  const [filter, setFilter] = useState<Category>("all");
  const visible = projects.filter((project) => filter === "all" || project.category === filter);

  return (
    <>
      <div className="proj-filters" aria-label="Project filters">
        {filters.map((filterOption) => (
          <motion.button
            key={filterOption.id}
            className={`pfilter${filter === filterOption.id ? " active" : ""}`}
            onClick={() => setFilter(filterOption.id)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {filterOption.label}
          </motion.button>
        ))}
      </div>
      <motion.div className="proj-grid">
        {visible.map((project, index) => {
          const size = cardSize(project, index, filter);

          return (
            <motion.a
              href="#case-study"
              key={project.name}
              className={`pcard ${size}`}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={project.img} alt={project.name} />
              <div className="pcard-meta">
                {project.badges.map((badge) => (
                  <span className="pcard-tag" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
              <div className="pcard-info">
                <div className="pcard-type">{project.type}</div>
                <div className="pcard-name">{project.name}</div>
                <div className="pcard-detail">{project.loc}</div>
                {project.name === "Highgate Residence" ? (
                  <div className="pcard-cta">View case study -&gt;</div>
                ) : null}
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </>
  );
}
