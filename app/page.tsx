import Link from "next/link";
import type { Metadata } from "next";
import Container from "./components/Container";
import Section from "./components/Section";
import Terminal from "./components/Terminal";
import ProjectCard from "./components/ProjectCard";
import { profile } from "../content/profile";
import { featuredProjects } from "../content/projects";

export const metadata: Metadata = {
  title: {
    absolute: "Lior Yanwo — CS Student & AI Engineer",
  },
  description:
    "Lior Yanwo — third-year Computer Science student at HIT building intelligent systems: AI security, machine learning, computer vision, and full-stack development.",
  openGraph: {
    url: "/",
  },
};

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Ambient glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[900px] -translate-x-1/3 rounded-full bg-accent/10 blur-3xl"
      />

      <Container>
        {/* Hero */}
        <section className="grid items-center gap-12 pb-8 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-sm text-accent">Hi, my name is</p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
              Lior Yanwo
            </h1>

            <p className="mt-4 text-lg font-medium text-muted sm:text-xl">
              {profile.title}
            </p>

            <p className="mt-6 max-w-xl leading-8 text-muted">
              {profile.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition hover:bg-transparent hover:text-accent"
              >
                View my projects →
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-line px-6 py-3 text-sm text-muted transition hover:border-foreground hover:text-foreground"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-faint transition-colors hover:text-accent"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>

          <Terminal />
        </section>

        {/* Focus */}
        <Section eyebrow="Focus" title="What I work on">
          <div className="grid gap-5 md:grid-cols-2">
            {profile.focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-line bg-card/70 p-6 transition hover:-translate-y-1 hover:border-accent/50"
              >
                <h3 className="text-xl font-semibold">{area.title}</h3>
                <p className="mt-4 leading-7 text-muted">{area.description}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Now */}
        <Section eyebrow="Currently" title="Now">
          <div className="rounded-2xl border border-line bg-card/70 p-7 sm:p-8">
            <p className="font-mono text-sm text-accent">$ cat now.txt</p>
            <p className="mt-4 text-lg font-medium text-foreground">
              {profile.now.heading}
            </p>
            <p className="mt-3 max-w-3xl leading-8 text-muted">
              {profile.now.text}
            </p>
          </div>
        </Section>

        {/* Featured projects */}
        <Section eyebrow="Selected work" title="Featured projects">
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/projects"
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              All projects →
            </Link>
          </div>
        </Section>
      </Container>
    </main>
  );
}
