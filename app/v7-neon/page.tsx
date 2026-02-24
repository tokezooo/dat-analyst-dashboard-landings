import Link from "next/link";

const comparisons = [
  { label: "Manual docs", old: "Scattered", now: "Unified spec board" },
  { label: "Priority reviews", old: "Weekly meetings", now: "Live impact scoring" },
  { label: "Status updates", old: "Ad-hoc messages", now: "Auto digest" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-lime-100">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between text-sm text-lime-300/80">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="underline">All variants</Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-lime-300 md:text-6xl">Neon ops mode for fast-moving analytics teams.</h1>
            <p className="mt-5 max-w-xl text-lime-100/80">Swap long status threads for one live control panel that tracks scope, owners, and risk.</p>
            <button className="mt-8 rounded-lg border border-lime-400 bg-lime-300 px-6 py-3 font-semibold text-black shadow-[0_0_24px_rgba(163,230,53,0.55)]">
              Enter neon mode
            </button>
          </div>

          <pre className="overflow-x-auto rounded-2xl border border-lime-500/40 bg-zinc-950 p-5 text-sm text-lime-300">
{`> queue sync
4 new requests scored
2 blockers escalated
1 scope approved

> next best action
Draft acceptance criteria
for "weekly retention health"`}
          </pre>
        </div>

        <section className="mt-12 overflow-hidden rounded-2xl border border-lime-500/30">
          <table className="w-full text-left text-sm">
            <thead className="bg-lime-900/40 text-lime-300">
              <tr>
                <th className="px-4 py-3">Workflow</th>
                <th className="px-4 py-3">Before</th>
                <th className="px-4 py-3">With dat-analyst-dashboard</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item) => (
                <tr key={item.label} className="border-t border-lime-500/20 bg-black/40">
                  <td className="px-4 py-3 text-lime-100">{item.label}</td>
                  <td className="px-4 py-3 text-lime-100/70">{item.old}</td>
                  <td className="px-4 py-3">{item.now}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}
