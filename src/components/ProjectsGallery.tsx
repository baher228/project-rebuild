import Link from "next/link";

import { projects } from "@/data/projects";

export function ProjectsGallery() {
  return (
    <div className="proj-grid">
      {projects.map((project) => (
        <Link
          key={project.name}
          href={`/projects/${project.slug}`}
          className="pcard med"
          aria-label={`Explore ${project.name}`}
        >
          <img src={project.images[0]} alt={project.name} />
          <div className="pcard-info">
            <div className="pcard-type">{project.service}</div>
            <h2 className="pcard-name">{project.name}</h2>
            <div className="pcard-detail">
              {project.location} · {project.year}
            </div>
            <span className="pcard-cta">Explore project →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
