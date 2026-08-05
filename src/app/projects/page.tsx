import type { Metadata } from "next";

import { ProjectsGallery } from "@/components/ProjectsGallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of residential landscape and outdoor living projects across Moscow, Indiana and Wisconsin.",
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="proj-hero">
        <div className="tag muted reveal visible">Selected projects</div>
        <h1 className="disp light reveal visible d1">Projects.</h1>
        <p className="reveal visible d2">
          A selection of private gardens, outdoor living spaces and estate landscapes designed for
          enduring use and enjoyment.
        </p>
      </section>

      <ProjectsGallery />
    </main>
  );
}
