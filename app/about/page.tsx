import Link from "next/link";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About — Lior Yanwo",
  description:
    "About Lior Yanwo — third-year Computer Science student at HIT working on AI security, computer vision, and full-stack development.",
};

const toolbox = [
  "Python",
  "TypeScript",
  "Next.js & React",
  "Tailwind CSS",
  "Machine & deep learning",
  "Computer vision",
  "NLP & RAG",
  "Git & GitHub",
  "Vercel",
];

export default function About() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <Nav />

      <section className="mt-16 sm:mt-20">
        <p className="font-mono text-sm text-accent">~/about</p>
        <h1 className="mt-3 text-3xl font-medium sm:text-4xl">About me</h1>
        <div className="mt-6 space-y-4 leading-relaxed text-muted">
          <p>
            I&apos;m Lior Yanwo, a third-year Computer Science student at HIT —
            Holon Institute of Technology. I&apos;m drawn to the space where
            artificial intelligence meets real products: systems that
            don&apos;t just work in a notebook, but actually ship.
          </p>
          <p>
            Lately my work centers on AI security and computer vision —
            designing retrieval-stage defenses against semantic spoofing in
            RAG systems, building classical vision pipelines for industrial
            defect inspection, and experimenting with generative models, like
            diffusion-based inpainting that visualizes vacant parking spots
            from street imagery.
          </p>
          <p>
            My goal is to become an AI engineer who combines research with
            real-world product development. This site is part of that practice
            — designed and built in collaboration with an AI agent, and
            deployed on Vercel.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-mono text-sm text-accent">$ cat toolbox.txt</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {toolbox.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-mono text-sm text-accent">$ cat now.txt</h2>
        <ul className="mt-4 space-y-2 text-muted">
          <li>
            <span className="text-accent">▸</span> Third year of my CS degree
            at HIT
          </li>
          <li>
            <span className="text-accent">▸</span> Researching retrieval-stage
            security for RAG systems
          </li>
          <li>
            <span className="text-accent">▸</span> Building this site in
            public, one page at a time
          </li>
        </ul>
      </section>

      <section className="mt-14 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="rounded-lg border border-accent px-4 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-background"
        >
          View my projects →
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-foreground hover:text-foreground"
        >
          Get in touch
        </Link>
      </section>

      <Footer />
    </main>
  );
}
