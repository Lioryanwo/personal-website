import Container from "./Container";
import { profile, site } from "../../content/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line py-10">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-muted transition-colors hover:text-accent"
            >
              {link.label} ↗
            </a>
          ))}
          <a
            href={site.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            Source ↗
          </a>
        </div>

        <p className="text-xs text-faint">
          © 2026 Lior Yanwo · Built with Next.js, deployed on Vercel
        </p>
      </Container>
    </footer>
  );
}
