import Link from "next/link";
import Container from "./components/Container";

export default function NotFound() {
  return (
    <main>
      <Container>
        <section className="pt-24 sm:pt-32">
          <div className="max-w-xl overflow-hidden rounded-2xl border border-line bg-card/90">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span aria-hidden className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
              <span aria-hidden className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
              <span aria-hidden className="h-3 w-3 rounded-full bg-[#28c840]/80" />
              <span className="ml-3 font-mono text-xs text-faint">
                lior@hit: ~
              </span>
            </div>
            <div className="space-y-2 p-5 font-mono text-sm leading-6">
              <p>
                <span className="text-accent">lior@hit:~$</span>{" "}
                <span className="text-foreground">cd /requested-page</span>
              </p>
              <p className="text-muted">
                bash: cd: /requested-page: No such file or directory{" "}
                <span className="text-faint">(404)</span>
              </p>
            </div>
          </div>

          <h1 className="mt-10 text-3xl font-semibold tracking-tight">
            Page not found
          </h1>
          <p className="mt-3 max-w-md leading-7 text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:bg-transparent hover:text-accent"
          >
            cd ~ (back home)
          </Link>
        </section>
      </Container>
    </main>
  );
}
