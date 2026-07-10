import type { ReactNode } from "react";

export function Timeline({ children }: { children: ReactNode }) {
  return <ol className="border-l border-line">{children}</ol>;
}

export function TimelineItem({
  title,
  meta,
  children,
}: {
  title: string;
  meta: string;
  children?: ReactNode;
}) {
  return (
    <li className="relative pb-12 pl-7 last:pb-0">
      <span
        aria-hidden
        className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent"
      />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="font-mono text-sm text-accent">{meta}</p>
      </div>
      {children ? <div className="mt-4">{children}</div> : null}
    </li>
  );
}
