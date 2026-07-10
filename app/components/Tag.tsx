export default function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-line bg-card px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent">
      {children}
    </span>
  );
}
