import Link from "next/link";

const compare = [
  { flow: "Request intake", before: "Slack threads", after: "Structured queue with owners" },
  { flow: "Priority review", before: "Weekly meeting", after: "Continuous impact scoring" },
  { flow: "Scope approval", before: "Ad-hoc docs", after: "Tracked criteria + assumptions" },
  { flow: "Delivery update", before: "Manual status pings", after: "Auto-generated digest" },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#111110] px-5 py-8 text-[#f0eee7] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between border-b border-[#35342f] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">
            All variants
          </Link>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.15fr_1fr]">
          <article className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c89a4a]">Terminal operations</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              A command-surface comparison for execution teams.
            </h1>
            <p className="mt-5 max-w-2xl text-[#b5b2a8]">
              The visual direction remains dark and technical, but avoids neon-glow clichés by relying on restrained
              contrast and one amber accent.
            </p>
            <pre className="mt-7 overflow-x-auto border border-[#35342f] bg-[#171714] p-4 font-mono text-xs text-[#dbc08d]">
{`$ queue status --today
17 requests in active scope
4 blocked by data model
3 ready for release review`}
            </pre>
          </article>

          <aside className="fade-rise border border-[#35342f] bg-[#171714] p-5" style={{ ["--delay" as string]: "180ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#c89a4a]">Interactive states</p>
            <div className="mt-4 space-y-3 text-sm text-[#b9b5aa]">
              <div className="state-skeleton h-9 rounded bg-[#28261f]" />
              <p>Empty: no pending approvals in this window.</p>
              <p>Error: event schema drift detected in `orders_completed`.</p>
            </div>
            <button className="btn-press mt-6 w-full border border-[#c89a4a] bg-[#c89a4a] px-5 py-3 font-semibold text-[#171714] hover:bg-[#b1843b]">
              Run live demo
            </button>
          </aside>
        </section>

        <section className="mt-8 overflow-hidden border border-[#35342f]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1a1a17] text-[#d7b67f]">
              <tr>
                <th className="px-4 py-3">Workflow</th>
                <th className="px-4 py-3">Before</th>
                <th className="px-4 py-3">With dat-analyst-dashboard</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((row) => (
                <tr key={row.flow} className="border-t border-[#35342f] bg-[#131311]">
                  <td className="px-4 py-3 text-[#e8e5dc]">{row.flow}</td>
                  <td className="px-4 py-3 text-[#b8b4a9]">{row.before}</td>
                  <td className="px-4 py-3 text-[#dbc08d]">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
