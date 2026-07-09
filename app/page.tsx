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
    <main className="relative mx-auto w-full max-w-5xl flex-1 overflow-hidden px-6 py-10">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <Nav />

      <section className="mt-24 sm:mt-32">
        <p className="font-mono text-sm text-accent">$ whoami</p>

        <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Lior Yanwo
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
          Third-year Computer Science student building intelligent systems —
          from reinforcement learning agents and RAG security research to
          full-stack apps with Next.js.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:bg-transparent hover:text-accent"
          >
            View projects →
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-muted transition hover:border-foreground hover:text-foreground"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="mt-20 overflow-hidden rounded-2xl border border-line bg-card/80 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-line px-5 py-3 font-mono text-xs text-faint">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3">lior@vercel — zsh</span>
        </div>

        <div className="space-y-3 p-5 font-mono text-sm leading-7 sm:p-7 sm:text-base">
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
            className="rounded-full border border-line px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-accent"
          >
            {social.label} ↗
          </a>
        ))}
      </section>

      <Footer />
    </main>
  );
}