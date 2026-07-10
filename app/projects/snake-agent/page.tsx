import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autonomous Snake RL Agent",
  description:
    "Deep Reinforcement Learning agent that learns to play Snake using DQN, CNN-based state representation, replay memory, and PyTorch.",
  openGraph: {
    title: "Autonomous Snake RL Agent · Lior Yanwo",
    url: "/projects/snake-agent",
  },
};

const technologies = [
  "Python",
  "PyTorch",
  "Deep Q-Learning",
  "CNN",
  "Reinforcement Learning",
  "Replay Memory",
  "Pygame",
];

const highlights = [
  {
    title: "Problem",
    text: "A Snake agent must learn navigation, food collection, collision avoidance, and long-term survival from delayed rewards.",
  },
  {
    title: "Approach",
    text: "I built and improved a Deep Q-Learning agent using richer state representations, convolutional layers, replay memory, and reward engineering.",
  },
  {
    title: "Evaluation",
    text: "The project compares the original baseline agent with an improved model across score, stability, exploration, and training behavior.",
  },
];

export default function SnakeAgentPage() {
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
            Reinforcement Learning · Deep Learning
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Autonomous Snake RL Agent
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
            A Deep Reinforcement Learning agent that learns to play Snake
            through repeated interaction, reward feedback, and neural-network
            based decision making.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/nadav0912/RF-Snake-game"
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
              Snake appears simple, but it requires the agent to balance
              immediate rewards with long-term survival. A move that brings the
              agent closer to food may also trap it or cause a future collision.
            </p>

            <p>
              The challenge was to create a model that could understand the
              board, recognize danger, choose useful actions, and improve its
              strategy through experience.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <p className="font-mono text-sm text-accent">$ cat solution.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">The solution</h2>

          <div className="mt-6 max-w-3xl space-y-5 leading-8 text-muted">
            <p>
              The agent uses Deep Q-Learning to estimate the expected reward of
              each possible action. Training examples are stored in replay
              memory and sampled repeatedly to improve learning stability.
            </p>

            <p>
              The improved version adds a richer representation of the game
              board, convolutional feature extraction, late-fusion inputs, and
              improved training logic to help the agent reason about both local
              danger and global board structure.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <p className="font-mono text-sm text-accent">$ cat pipeline.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">Training pipeline</h2>

          <div className="mt-8 rounded-2xl border border-line bg-card p-6 font-mono text-sm leading-8 text-muted sm:p-8">
            <p>
              <span className="text-accent">01.</span> Observe game state
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">02.</span> Encode board and
              directional features
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">03.</span> Select action using the
              epsilon-greedy policy
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">04.</span> Receive reward and next
              state
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">05.</span> Store experience in
              replay memory
            </p>
            <p className="pl-6 text-faint">↓</p>
            <p>
              <span className="text-accent">06.</span> Update the Q-network
            </p>
          </div>
        </section>

        <section id="results" className="mt-20 scroll-mt-20">
          <p className="font-mono text-sm text-accent">$ cat results.txt</p>
          <h2 className="mt-4 text-3xl font-semibold">Results</h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-faint">
                Learning method
              </p>
              <p className="mt-3 text-2xl font-semibold text-accent">DQN</p>
            </div>

            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-faint">
                State representation
              </p>
              <p className="mt-3 text-2xl font-semibold text-accent">
                CNN + features
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-faint">
                Training strategy
              </p>
              <p className="mt-3 text-2xl font-semibold text-accent">
                Experience replay
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-3xl leading-8 text-muted">
            The improved architecture produced more informed movement behavior
            and a stronger ability to use spatial information than the original
            baseline model.
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
              <span className="text-accent">▸</span> Reward design strongly
              influences the strategy learned by an RL agent.
            </li>
            <li>
              <span className="text-accent">▸</span> A richer state
              representation can significantly improve decision quality.
            </li>
            <li>
              <span className="text-accent">▸</span> Stable training requires
              careful control of exploration, replay sampling, and model
              updates.
            </li>
          </ul>
        </section>
      </article>

    </main>
  );
}