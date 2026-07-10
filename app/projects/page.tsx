import type { Metadata } from "next";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected AI, machine learning, computer vision, and full-stack projects by Lior Yanwo — including RAG security research, an RL Snake agent, and vision pipelines.",
  openGraph: {
    title: "Projects · Lior Yanwo",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <Container>
        <section className="pt-16 sm:pt-24">
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-accent">
            Work
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Selected projects
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-muted">
            A focused collection of AI, machine learning, computer vision, and
            full-stack projects I have built while studying Computer Science
            and exploring real-world engineering problems.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </Container>
    </main>
  );
}
