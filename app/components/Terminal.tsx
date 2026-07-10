type TermLine =
  | { kind: "cmd"; text: string; lineDelay: number; typeDelay: number }
  | { kind: "out"; text: string; lineDelay: number; accentWords?: boolean };

const session: TermLine[] = [
  { kind: "cmd", text: "whoami", lineDelay: 0.4, typeDelay: 0.55 },
  { kind: "out", text: "Lior Yanwo — CS student & aspiring AI engineer", lineDelay: 1.3 },
  { kind: "cmd", text: "cat focus.txt", lineDelay: 1.7, typeDelay: 1.85 },
  { kind: "out", text: "AI security · RL agents · computer vision · full-stack", lineDelay: 2.7 },
  { kind: "cmd", text: "ls projects/", lineDelay: 3.1, typeDelay: 3.25 },
  {
    kind: "out",
    text: "rag-spoofing-defense  snake-rl-agent  parkscope  bottle-inspection",
    lineDelay: 4.1,
    accentWords: true,
  },
];

function Prompt() {
  return (
    <span className="text-accent">
      lior@hit<span className="text-faint">:</span>
      <span className="text-muted">~</span>
      <span className="text-faint">$</span>{" "}
    </span>
  );
}

export default function Terminal() {
  return (
    <div
      aria-label="Terminal session introducing Lior Yanwo"
      className="w-full overflow-hidden rounded-2xl border border-line bg-card/90 shadow-2xl shadow-black/40"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span aria-hidden className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
        <span aria-hidden className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
        <span aria-hidden className="h-3 w-3 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 font-mono text-xs text-faint">lior@hit: ~</span>
      </div>

      {/* Session */}
      <div className="space-y-2 overflow-x-auto p-5 font-mono text-[13px] leading-6 sm:text-sm">
        {session.map((line, i) =>
          line.kind === "cmd" ? (
            <div
              key={i}
              className="term-line whitespace-nowrap"
              style={{ "--d": `${line.lineDelay}s` } as React.CSSProperties}
            >
              <Prompt />
              <span
                className="term-cmd text-foreground"
                style={
                  {
                    "--n": line.text.length,
                    "--d": `${line.typeDelay}s`,
                  } as React.CSSProperties
                }
              >
                {line.text}
              </span>
            </div>
          ) : (
            <div
              key={i}
              className={`term-line whitespace-nowrap ${
                line.accentWords ? "text-accent" : "text-muted"
              }`}
              style={{ "--d": `${line.lineDelay}s` } as React.CSSProperties}
            >
              {line.text}
            </div>
          ),
        )}

        {/* Final prompt with blinking caret */}
        <div
          className="term-line whitespace-nowrap"
          style={{ "--d": "4.5s" } as React.CSSProperties}
        >
          <Prompt />
          <span
            className="term-caret"
            style={{ "--d": "4.5s" } as React.CSSProperties}
          />
        </div>
      </div>
    </div>
  );
}
