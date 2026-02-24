import Link from "next/link";

const metrics = [
  { value: "42%", label: "faster scope signoff" },
  { value: "3.1h", label: "saved per request" },
  { value: "0", label: "lost requirement threads" },
];

const wins = [
  "Auto-generated acceptance criteria",
  "One-click Jira-ready task drafts",
  "Stakeholder summary snapshots",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div>
          <div className="flex items-center justify-between text-sm text-violet-100/90">
            <span className="font-semibold">dat-analyst-dashboard</span>
            <Link href="/" className="underline">All variants</Link>
          </div>
          <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Your analytics backlog, visualized and prioritized in one gradient-powered cockpit.
          </h1>
          <p className="mt-6 text-lg text-violet-100/80">
            Built for product analysts who need to triage requests, align context, and ship faster.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 font-semibold">Start free</button>
            <button className="rounded-xl border border-white/30 px-6 py-3 font-semibold">View demo</button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-fuchsia-600/50 via-indigo-600/40 to-cyan-500/40 p-6">
          <p className="text-sm uppercase tracking-wide text-white/80">Live team snapshot</p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {metrics.map((item) => (
              <article key={item.label} className="rounded-xl bg-black/35 p-4">
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="mt-1 text-xs text-white/70">{item.label}</p>
              </article>
            ))}
          </div>
          <ul className="mt-6 space-y-3">
            {wins.map((win) => (
              <li key={win} className="rounded-lg bg-black/30 px-4 py-3 text-sm">
                {win}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
