import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAG Spoofing Defense",
  description:
    "Research project defending Retrieval-Augmented Generation systems against semantic spoofing attacks using retrieval-stage verification, reranking, and Reverse-QA.",
  openGraph: {
    title: "RAG Spoofing Defense · Lior Yanwo",
    url: "/projects/rag-spoofing-defense",
  },
};

const technologies = [
  "Python",
  "PyTorch",
  "FAISS",
  "BM25",
  "Sentence Transformers",
  "Cross-Encoder",
  "RAG",
  "LLMs",
];

const highlights = [
  {
    title: "Problem",
    text: "RAG systems can retrieve malicious or misleading documents that look semantically relevant but do not contain trustworthy evidence for the user’s question.",
  },
  {
    title: "Approach",
    text: "I designed a retrieval-stage defense that combines dense retrieval, BM25, query-aware filtering, reranking, and Reverse-QA verification.",
  },
  {
    title: "Evaluation",
    text: "The project compares clean retrieval, attacked retrieval, and defended retrieval across multiple retrievers and ranking configurations.",
  },
];

export default function RagSpoofingDefensePage() {
  return (
    <main className="relative mx-auto w-full max-w-5xl flex-1 overflow-hidden px-6 py-10">
      <div className="pointer-events-none absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />


      <article className="mt-20 sm:mt-28">
        <Link
          href="/projects"
          className="font-mono text-sm text-muted transition hover:text-accent"
        >
          ← Back to projects
        </Link>

        <header className="mt-10 max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
            AI Security · Research
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            RAG Spoofing Defense
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
            A research project focused on protecting Retrieval-Augmented
            Generation systems from semantic spoofing attacks at the retrieval
            stage.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/Lioryanwo/rag-injection-guard-nlp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:bg-transparent hover:text-accent"
            >
              View GitHub ↗
            </a>

            <a
              href="#results"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-muted transition hover:border-foreground hover:text-foreground"
            >
              View results ↓
            </a>
          </div>
        </header>

        <section className="mt-16 overflow-hidden rounded-2xl border border-line bg-card/80">
          <div className="border-b border-line px-6 py-4 font-mono text-xs text-faint">
            project-overview.md
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-3 md:p-8">
            {highlights.map((item) => (
              <div key={item.title}>
                <h2 className="font-mono text-sm text-accent">
                  {item.title}
                </h2>
                <p className="mt-3 leading-7 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="font-mono text-sm text-accent">$ cat problem.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">The problem</h2>

          <div className="mt-6 max-w-3xl space-y-5 leading-8 text-muted">
            <p>
              Retrieval-Augmented Generation improves language-model answers by
              retrieving external documents before generation. However, the
              retriever can be manipulated by documents that repeat relevant
              keywords, entities, and phrasing without providing valid evidence.
            </p>

            <p>
              These spoofed documents may rank above the real source and cause
              the downstream model to answer using misleading context. The goal
              of this project was to detect and demote these documents before
              they reached the generation stage.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <p className="font-mono text-sm text-accent">$ cat solution.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">The solution</h2>

          <div className="mt-6 max-w-3xl space-y-5 leading-8 text-muted">
            <p>
              The system evaluates retrieved chunks using multiple signals
              rather than relying only on semantic similarity. Dense retrieval
              and BM25 generate candidate documents, while a Cross-Encoder
              reranks the most relevant results.
            </p>

            <p>
              Reverse-QA adds another verification layer by generating or
              estimating questions that a document can answer and comparing
              them with the original user query. Documents that appear relevant
              but cannot support the query receive a lower score.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <p className="font-mono text-sm text-accent">$ cat pipeline.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">System pipeline</h2>

          <div className="mt-8 rounded-2xl border border-line bg-card p-6 font-mono text-sm leading-8 text-muted sm:p-8">
            <p>
              <span className="text-accent">01.</span> User query
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">02.</span> Dense / BM25 / Hybrid
              retrieval
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">03.</span> Query-aware evidence and
              suspicion scoring
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">04.</span> Reverse-QA verification
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">05.</span> Cross-Encoder reranking
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">06.</span> Trusted context for the
              language model
            </p>
          </div>
        </section>

        <section id="results" className="mt-20 scroll-mt-20">
          <p className="font-mono text-sm text-accent">$ cat results.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">Results</h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-faint">
                Clean hybrid recall@5
              </p>
              <p className="mt-3 text-3xl font-semibold text-accent">0.893</p>
            </div>

            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-faint">
                Attack top-1 spoof win
              </p>
              <p className="mt-3 text-3xl font-semibold text-accent">95.67%</p>
            </div>

            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-faint">
                Defended top-5 recall
              </p>
              <p className="mt-3 text-3xl font-semibold text-accent">0.220</p>
            </div>
          </div>

          <p className="mt-5 max-w-3xl leading-8 text-muted">
            The experiments showed how vulnerable retrieval systems can become
            under semantic spoofing attacks and demonstrated that query-aware
            defense signals can improve retrieval quality over naive filtering.
          </p>
        </section>

        <section className="mt-20">
          <p className="font-mono text-sm text-accent">$ cat stack.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">Technology stack</h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-line bg-card px-4 py-2 font-mono text-xs text-muted"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="font-mono text-sm text-accent">
            $ cat lessons-learned.txt
          </p>
          <h2 className="mt-4 text-3xl font-semibold">What I learned</h2>

          <ul className="mt-6 max-w-3xl space-y-4 leading-8 text-muted">
            <li>
              <span className="text-accent">▸</span> High semantic similarity
              does not necessarily imply trustworthy evidence.
            </li>
            <li>
              <span className="text-accent">▸</span> Combining sparse, dense,
              and reranking signals creates a more robust retrieval pipeline.
            </li>
            <li>
              <span className="text-accent">▸</span> Evaluation pipelines must
              be carefully validated because document identifiers and corpus
              construction can strongly affect the reported results.
            </li>
          </ul>
        </section>
      </article>

    </main>
  );
}