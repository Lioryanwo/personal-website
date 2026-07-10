import type { Metadata } from "next";
import Container from "../components/Container";
import { profile } from "../../content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lior Yanwo — open to AI and software-engineering opportunities, research collaborations, and interesting projects.",
  openGraph: {
    title: "Contact · Lior Yanwo",
    url: "/contact",
  },
};

const openTo = [
  "Internships and junior roles in AI, ML, or software engineering",
  "Research collaborations — especially around RAG security and applied ML",
  "Interesting projects involving intelligent systems",
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <Container>
        <section className="pt-16 sm:pt-24">
          <p className="font-mono text-sm text-accent">~/contact</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Get in touch
          </h1>

          <p className="mt-5 max-w-xl leading-8 text-muted">
            I&apos;m open to opportunities, collaborations, and conversations
            about AI, machine learning, computer vision, and software
            engineering. The fastest way to reach me is email.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition hover:bg-transparent hover:text-accent"
            >
              Send me an email
            </a>
            <span className="font-mono text-sm text-muted">
              {profile.email}
            </span>
          </div>
        </section>

        <section className="mt-16 grid gap-5 md:grid-cols-2">
          <a
            href="https://www.linkedin.com/in/lior-yanwo-0537b6345/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-line bg-card/70 p-6 transition hover:-translate-y-1 hover:border-accent/50"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Professional
            </p>
            <h2 className="mt-4 text-xl font-semibold">LinkedIn ↗</h2>
            <p className="mt-3 leading-7 text-muted">
              Connect with me professionally, or reach out about roles and
              collaborations.
            </p>
          </a>

          <a
            href="https://github.com/Lioryanwo"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-line bg-card/70 p-6 transition hover:-translate-y-1 hover:border-accent/50"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Code
            </p>
            <h2 className="mt-4 text-xl font-semibold">GitHub ↗</h2>
            <p className="mt-3 leading-7 text-muted">
              See the code behind my projects — research, experiments, and this
              site included.
            </p>
          </a>
        </section>

        <section className="mt-16 rounded-2xl border border-line bg-card/70 p-7">
          <p className="font-mono text-sm text-accent">$ cat open-to.txt</p>
          <ul className="mt-5 space-y-3 text-muted">
            {openTo.map((item) => (
              <li key={item} className="flex gap-3 leading-7">
                <span aria-hidden className="text-accent">
                  ▸
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-faint">
            Based in {profile.location} · I usually reply within a day or two.
          </p>
        </section>
      </Container>
    </main>
  );
}
