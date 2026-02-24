import Link from "next/link";

const comparisons = [
  { step: "Intake", before: "Ad-hoc chat threads", after: "Structured request queue" },
  { step: "Scoping", before: "Context in scattered docs", after: "Single criteria packet" },
  { step: "Approval", before: "Untracked signoff", after: "Timestamped decisions" },
  { step: "Release", before: "Manual follow-up", after: "Automated digest" },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#111110] px-5 py-8 text-[#f2eee5] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between border-b border-[#32312d] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">All variants</Link>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.15fr_1fr]">
          <article className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c99745]">Scenario compare</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">See the operational delta in one glance.</h1>
            <p className="mt-5 max-w-xl text-[#b8b4aa]">A dark technical treatment centered on before/after workflow evidence.</p>
            <pre className="mt-7 overflow-x-auto border border-[#32312d] bg-[#171714] p-4 font-mono text-xs text-[#d5b57c]">
{`$ intake status --window=today
19 requests active
5 awaiting owner response
2 blocked on metric definition`}
            </pre>
          </article>

          <aside className="fade-rise border border-[#32312d] bg-[#171714] p-5" style={{ ["--delay" as string]: "180ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#c99745]">States</p>
            <div className="mt-4 space-y-3 text-sm text-[#b8b4aa]">
              <div className="state-skeleton h-10 rounded bg-[#262520]" />
              <p>Empty: no pending approvals.</p>
              <p>Error: duplicate KPI key detected in intake schema.</p>
            </div>
          </aside>
        </section>

        <section className="mt-8 overflow-hidden border border-[#32312d]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1a1a17] text-[#d5b57c]">
              <tr>
                <th className="px-4 py-3">Stage</th>
                <th className="px-4 py-3">Before</th>
                <th className="px-4 py-3">With platform</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr key={row.step} className="border-t border-[#2c2b27] bg-[#141412]">
                  <td className="px-4 py-3 font-medium">{row.step}</td>
                  <td className="px-4 py-3 text-[#bbb8ad]">{row.before}</td>
                  <td className="px-4 py-3 text-[#e9dbc1]">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
