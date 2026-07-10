import type { ReactNode } from "react";

export default function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mt-24 ${className}`}>
      {eyebrow ? (
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}
