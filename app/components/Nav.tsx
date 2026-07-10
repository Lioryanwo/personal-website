"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <nav
          aria-label="Main"
          className="flex h-16 items-center justify-between"
        >
          <Link href="/" className="font-mono text-sm text-accent">
            lior<span className="text-faint">.dev</span>
          </Link>

          <div className="flex items-center gap-4 text-sm sm:gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`transition-colors hover:text-foreground ${
                    active ? "font-medium text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </Container>
    </header>
  );
}
