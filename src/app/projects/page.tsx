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
    </main>
  );
}
