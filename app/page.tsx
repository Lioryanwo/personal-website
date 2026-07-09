import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const socials = [
  { href: "https://github.com/Lioryanwo", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/lior-yanwo-0537b6345/",
    label: "LinkedIn",
  },
  { href: "mailto:lioryanow@gmail.com", label: "Email" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <Nav />

      <section className="mt-20 sm:mt-28">
        <h1 className="mt-3 text-4xl font-medium sm:text-5xl">I&apos;m Lior.</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          Third-year Computer Science student building intelligent systems —
          from reinforcement learning agents and RAG security research to
          full-stack apps with Next.js.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-lg border border-accent px-4 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-background"
          >
            View projects →
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-xl border border-line bg-card">
        <div className="border-b border-line px-4 py-2 font-mono text-xs text-faint">
          lior@vercel — zsh
        </div>
        <div className="space-y-1 p-4 font-mono text-sm leading-7">
          <p>
            <span className="text-accent">$</span> whoami
          </p>
          <p className="text-muted">
            Lior Yanwo — CS student · AI &amp; ML · full-stack
          </p>
          <p>
            <span className="text-accent">$</span> cat interests.txt
          </p>
          <p className="text-muted">
            reinforcement learning · RAG security · web engineering
          </p>
          <p>
            <span className="text-accent">$</span> ls ./site
          </p>
          <p className="text-accent">
            about/&nbsp;&nbsp;projects/&nbsp;&nbsp;writing/&nbsp;&nbsp;contact/
          </p>
          <p>
            <span className="text-accent">$</span>{" "}
            <span className="animate-pulse text-accent">█</span>
          </p>
        </div>
      </section>

      <section className="mt-10 flex flex-wrap gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={
              social.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="rounded-full border border-line px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {social.label} ↗
          </a>
        ))}
      </section>

      <Footer />
    </main>
  );
}
