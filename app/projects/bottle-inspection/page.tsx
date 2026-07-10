import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bottle Inspection Pipeline",
  description:
    "Classical computer vision pipeline for bottle defect inspection on the MVTec AD dataset — registration, preprocessing, morphology, and evaluation.",
  openGraph: {
    title: "Bottle Inspection Pipeline · Lior Yanwo",
    url: "/projects/bottle-inspection",
  },
};

const technologies = [
  "Python",
  "OpenCV",
  "NumPy",
  "Image Registration",
  "Morphological Operations",
  "Computer Vision",
  "MVTec AD",
];

const highlights = [
  {
    title: "Problem",
    text: "Manufacturing inspection requires reliable identification of defects despite differences in image position, lighting, and bottle appearance.",
  },
  {
    title: "Approach",
    text: "I built a classical computer-vision pipeline using alignment, preprocessing, image differencing, morphology, and region analysis.",
  },
  {
    title: "Evaluation",
    text: "The pipeline was evaluated quantitatively on the MVTec AD Bottle dataset using normal and defective samples.",
  },
];

export default function BottleInspectionPage() {
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
            Computer Vision · Quality Inspection
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Bottle Inspection Pipeline
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
            A classical computer-vision system for detecting bottle defects
            using registration, preprocessing, morphological analysis, and
            quantitative evaluation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/Lioryanwo/bottle-inspection-dip-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:bg-transparent hover:text-accent"
            >
              View GitHub ↗
            </a>

            <a
              href="#pipeline"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-muted transition hover:border-foreground hover:text-foreground"
            >
              View pipeline ↓
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
              Industrial inspection systems must identify small defects while
              avoiding false alarms caused by harmless variation in position,
              scale, lighting, and texture.
            </p>

            <p>
              Bottle images may not be perfectly aligned, so direct pixel
              comparison can incorrectly classify normal differences as
              defects.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <p className="font-mono text-sm text-accent">$ cat solution.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">The solution</h2>

          <div className="mt-6 max-w-3xl space-y-5 leading-8 text-muted">
            <p>
              The pipeline first aligns each inspected image with a normal
              reference. It then applies preprocessing and image differencing
              to expose suspicious regions.
            </p>

            <p>
              Morphological operations remove noise and connect related defect
              pixels. The remaining regions are analyzed using size, shape, and
              location measurements to determine whether the bottle is
              defective.
            </p>
          </div>
        </section>

        <section id="pipeline" className="mt-20 scroll-mt-20">
          <p className="font-mono text-sm text-accent">$ cat pipeline.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">Inspection pipeline</h2>

          <div className="mt-8 rounded-2xl border border-line bg-card p-6 font-mono text-sm leading-8 text-muted sm:p-8">
            <p>
              <span className="text-accent">01.</span> Load reference and test
              images
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">02.</span> Register and align the
              bottle
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">03.</span> Normalize and preprocess
              the image
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">04.</span> Compute image difference
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">05.</span> Apply thresholding and
              morphology
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">06.</span> Analyze regions and
              classify defects
            </p>
          </div>
        </section>

        <section className="mt-20">
          <p className="font-mono text-sm text-accent">$ cat evaluation.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">
            Evaluation and analysis
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-faint">
                Dataset
              </p>
              <p className="mt-3 text-2xl font-semibold text-accent">
                MVTec AD
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-faint">
                Method
              </p>
              <p className="mt-3 text-2xl font-semibold text-accent">
                Classical CV
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-faint">
                Output
              </p>
              <p className="mt-3 text-2xl font-semibold text-accent">
                Defect regions
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-3xl leading-8 text-muted">
            The evaluation examines both detection quality and failure cases,
            including alignment errors, lighting variation, and small defects
            that may be removed during morphological filtering.
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
              <span className="text-accent">▸</span> Accurate image registration
              is essential before comparing industrial images.
            </li>
            <li>
              <span className="text-accent">▸</span> Morphological operations
              must balance noise removal with preservation of small defects.
            </li>
            <li>
              <span className="text-accent">▸</span> Classical computer vision
              can remain effective when the pipeline is carefully designed and
              evaluated.
            </li>
          </ul>
        </section>
      </article>

    </main>
  );
}