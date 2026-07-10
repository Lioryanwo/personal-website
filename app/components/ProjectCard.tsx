import Link from "next/link";
import type { Project } from "../../content/projects";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-card/80 p-7 transition hover:-translate-y-1 hover:border-accent/60 hover:bg-card-hover hover:shadow-2xl hover:shadow-black/30">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {project.category}
      </p>

      <h3 className="mt-5 text-2xl font-semibold text-foreground">
        <Link
          href={`/projects/${project.slug}`}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {project.title}
        </Link>
      </h3>

      <p className="mt-4 flex-1 leading-8 text-muted">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="pointer-events-none mt-7 flex flex-wrap gap-5">
        <span className="text-sm font-medium text-muted transition-colors group-hover:text-accent">
          Case study →
        </span>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto relative z-10 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            GitHub ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}
