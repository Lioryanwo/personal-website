import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ParkScope",
  description:
    "Street-parking detection on KITTI — YOLO-based vehicle detection combined with diffusion-based inpainting to generate vacant parking spaces.",
  openGraph: {
    title: "ParkScope · Lior Yanwo",
    url: "/projects/parkscope",
  },
};

const technologies = [
  "Python",
  "Computer Vision",
  "OpenCV",
  "Deep Learning",
  "Segmentation",
  "Image Processing",
  "Generative AI",
];

const highlights = [
  {
    title: "Problem",
    text: "Drivers and parking systems need a reliable way to identify vacant parking spaces from street-level imagery.",
  },
  {
    title: "Approach",
    text: "The project combines computer vision, image understanding, and generative visualization to detect and display available parking spaces.",
  },
  {
    title: "Goal",
    text: "Build a practical visual system that can transform raw street imagery into understandable parking availability information.",
  },
];

export default function ParkScopePage() {
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
            Computer Vision · Smart Mobility
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            ParkScope
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
            A computer-vision project for detecting vacant parking spaces and
            visualizing parking availability from street imagery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/Lioryanwo/street_parking_detection_genai"
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
              Parking availability is difficult to determine from a single
              street image because vehicles, perspective, shadows, road
              markings, and partial occlusion can make empty spaces difficult
              to identify.
            </p>

            <p>
              The project explores how computer vision can convert street
              imagery into useful visual information for drivers and parking
              applications.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <p className="font-mono text-sm text-accent">$ cat solution.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">The solution</h2>

          <div className="mt-6 max-w-3xl space-y-5 leading-8 text-muted">
            <p>
              The system analyzes the road scene, identifies relevant parking
              regions, and estimates which spaces are occupied or vacant.
            </p>

            <p>
              A generative visualization stage can then illustrate how the
              scene might appear with vacant spaces highlighted or reconstructed
              for clearer presentation.
            </p>
          </div>
        </section>

        <section id="pipeline" className="mt-20 scroll-mt-20">
          <p className="font-mono text-sm text-accent">$ cat pipeline.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">Vision pipeline</h2>

          <div className="mt-8 rounded-2xl border border-line bg-card p-6 font-mono text-sm leading-8 text-muted sm:p-8">
            <p>
              <span className="text-accent">01.</span> Input street image
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">02.</span> Image preprocessing
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">03.</span> Road and parking-region
              analysis
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">04.</span> Vehicle and occupancy
              detection
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">05.</span> Vacant-space estimation
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">06.</span> Visual output and
              generative reconstruction
            </p>
          </div>
        </section>

        <section className="mt-20">
          <p className="font-mono text-sm text-accent">$ cat challenges.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">Key challenges</h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-sm text-accent">Perspective</p>
              <p className="mt-3 leading-7 text-muted">
                Parking spaces change shape and scale depending on the camera
                position.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-sm text-accent">Occlusion</p>
              <p className="mt-3 leading-7 text-muted">
                Vehicles, trees, and street objects may hide important parts of
                the scene.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-sm text-accent">Lighting</p>
              <p className="mt-3 leading-7 text-muted">
                Shadows and changing weather conditions affect visual
                consistency.
              </p>
            </div>
          </div>
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
              <span className="text-accent">▸</span> Real-world computer vision
              requires handling perspective, lighting, and occlusion.
            </li>
            <li>
              <span className="text-accent">▸</span> Visual output must be
              understandable, not only technically correct.
            </li>
            <li>
              <span className="text-accent">▸</span> Combining detection and
              generative techniques can create more useful demonstrations.
            </li>
          </ul>
        </section>
      </article>

    </main>
  );
}