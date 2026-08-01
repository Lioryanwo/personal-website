"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <nav aria-label="Main">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-mono text-sm text-accent">
              lior<span className="text-faint">.dev</span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-7 text-sm md:flex">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`transition-colors hover:text-foreground ${
                      active
                        ? "font-medium text-accent"
                        : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="text-2xl text-muted transition-colors hover:text-foreground md:hidden"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile navigation */}
          {isOpen && (
            <div className="flex flex-col gap-4 border-t border-line py-4 text-sm md:hidden">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`transition-colors hover:text-foreground ${
                      active
                        ? "font-medium text-accent"
                        : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}