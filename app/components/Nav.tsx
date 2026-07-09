import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="font-mono text-sm text-accent">
        lior<span className="text-faint">.dev</span>
      </Link>
      <div className="flex gap-5 text-sm text-muted sm:gap-7">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
