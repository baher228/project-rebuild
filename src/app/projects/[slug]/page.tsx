import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  return project
    ? { title: project.name, description: project.summary }
    : { title: "Project not found" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const relatedProjects = projects.filter((item) => item.slug !== project.slug);

  return (
    <main className="case-study-page">
      <section className="cs-hero">
        <img src={project.images[0]} alt={project.name} />
        <div className="cs-hero-content">
          <Link href="/projects" className="sd-back">
            All projects
          </Link>
          <div className="tag muted">{project.service}</div>
          <h1>{project.name}</h1>
        </div>
      </section>

      <section className="cs-overview">
        <div className="cs-ov-left">
          <h2>Project overview</h2>
          {project.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="cs-ov-meta">
          <div className="tag dk">Project details</div>
          <div className="cs-meta-list">
            {project.details.map(([label, value]) => (
              <div className="cs-meta-row" key={label}>
                <span className="cs-meta-k">{label}</span>
                <span className="cs-meta-v">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-gallery" aria-label={`${project.name} photo gallery`}>
        <img src={project.images[1]} alt={`${project.name} — exterior view`} loading="lazy" />
        <div className="cs-g-stack">
          <img src={project.images[2]} alt={`${project.name} — project detail`} loading="lazy" />
          <img
            src={project.images[3]}
            alt={`${project.name} — completed landscape`}
            loading="lazy"
          />
        </div>
      </section>

      <section className="sd-specs">
        <h2>At a glance</h2>
        <div className="spec-grid">
          {project.details.map(([label, value]) => (
            <div className="spec-row" key={label}>
              <span className="spec-key">{label}</span>
              <span className="spec-val">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sd-related">
        <h2>More projects</h2>
        <div className="rel-grid">
          {relatedProjects.map((related) => (
            <Link className="rel-card" href={`/projects/${related.slug}`} key={related.slug}>
              <img src={related.images[0]} alt={related.name} loading="lazy" />
              <div className="rel-info">
                <div className="rel-type">{related.service}</div>
                <h3 className="rel-name">{related.name}</h3>
                <div className="rel-loc">
                  {related.location} · {related.year}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
