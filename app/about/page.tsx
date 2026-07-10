import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "../components/Container";
import Section from "../components/Section";
import Tag from "../components/Tag";
import { Timeline, TimelineItem } from "../components/Timeline";
import { profile } from "../../content/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Lior Yanwo — third-year Computer Science student at HIT focused on AI security, machine learning, computer vision, and software engineering.",
  openGraph: {
    title: "About · Lior Yanwo",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <Container>
        {/* Introduction */}
        <section className="grid items-start gap-12 pt-16 sm:pt-24 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="font-mono text-sm text-accent">~/about</p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              About me
            </h1>

            <p className="mt-5 text-lg font-medium text-foreground sm:text-xl">
              Computer Science student focused on AI, research, and real-world
              engineering.
            </p>

            <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-muted sm:text-lg">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-line bg-card lg:mx-0 lg:justify-self-end">
          <Image
            src="/images/profile.png"
            alt="Portrait of Lior Yanwo"
            fill
            priority
            sizes="(min-width: 1024px) 280px, 60vw"
            className="object-cover object-top"
          />
          </div>
        </section>

        {/* Focus areas */}
        <Section eyebrow="Focus areas" title="What I do">
          <div className="grid gap-5 md:grid-cols-2">
            {profile.focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-line bg-card/70 p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/50"
              >
                <h3 className="text-xl font-semibold">{area.title}</h3>

                <p className="mt-4 leading-7 text-muted">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Journey */}
        <Section eyebrow="Timeline" title="Education & project journey">
          <Timeline>
            {profile.journey.map((entry) => (
              <TimelineItem
                key={`${entry.title}-${entry.period}`}
                title={entry.title}
                meta={entry.period}
              >
                <ul className="space-y-2 text-muted">
                  {entry.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <span aria-hidden="true" className="text-accent">
                        ▸
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </TimelineItem>
            ))}
          </Timeline>
        </Section>

        {/* Skills */}
        <Section eyebrow="Technical toolbox" title="Skills">
          <div className="space-y-8">
            {profile.skillGroups.map((group) => (
              <div
                key={group.category}
                className="grid gap-4 border-b border-line pb-8 last:border-b-0 sm:grid-cols-[190px_1fr]"
              >
                <h3 className="font-medium text-foreground">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <section className="mt-24 rounded-2xl border border-line bg-card/70 p-7">
          <p className="font-mono text-sm text-accent">
            $ cat education.txt
          </p>

          <h2 className="mt-5 text-2xl font-semibold">
            Holon Institute of Technology
          </h2>

          <p className="mt-2 text-muted">
            B.Sc. in Computer Science · Third-year student
          </p>

          <p className="mt-5 max-w-2xl leading-7 text-muted">
            Relevant areas include algorithms, computation theory, artificial
            intelligence, deep learning, computer vision, databases, and
            software engineering.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-muted">
            I&apos;m interested in AI and software-engineering opportunities,
            research collaborations, and projects involving intelligent
            systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:bg-transparent hover:text-accent"
            >
              View my projects →
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-muted transition hover:border-foreground hover:text-foreground"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}