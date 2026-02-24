import Link from "next/link";

const lanes = [
  { lane: "Intake", status: "12 open", note: "3 without metrics" },
  { lane: "Scope", status: "7 active", note: "2 awaiting signoff" },
  { lane: "Build", status: "9 active", note: "1 blocked by event schema" },
  { lane: "Review", status: "4 queued", note: "exec digest due Friday" },
];

const stream = [
  "Revenue bridge request rerouted to growth pod.",
  "Weekly retention definition accepted by platform team.",
  "North America cohort dashboard moved to review.",
  "Attribution cleanup flagged due to missing event map.",
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#0f1311] px-5 py-8 text-[#ecf0ec] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between border-b border-[#2c332e] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">
            All variants
          </Link>
        </div>

        <section className="mt-7 grid gap-8 md:grid-cols-[1.1fr_1.4fr]">
          <aside className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.23em] text-[#d2a968]">Dense command ledger</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Operational clarity without card clutter.
            </h1>
            <p className="mt-5 max-w-xl text-[#b0bbb2]">
              This variant removes oversized boxes and uses line-based groupings for higher information density.
            </p>
            <button className="btn-press mt-7 border border-[#d2a968] bg-[#d2a968] px-6 py-3 font-semibold text-[#121512] hover:bg-[#b48b4f]">
              Enter command mode
            </button>
          </aside>

          <div className="fade-rise border border-[#2b312c] bg-[#121814] p-5" style={{ ["--delay" as string]: "180ms" }}>
            <div className="grid gap-4 md:grid-cols-2">
              {lanes.map((item) => (
                <article key={item.lane} className="border-b border-[#2f3731] pb-4">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d2a968]">{item.lane}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight">{item.status}</p>
                  <p className="mt-1 text-sm text-[#aeb9b0]">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 fade-rise border border-[#2b312c] bg-[#121814] p-5" style={{ ["--delay" as string]: "260ms" }}>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d2a968]">Activity stream</p>
          <ul className="mt-4 divide-y divide-[#2f3731] text-sm">
            {stream.map((item) => (
              <li key={item} className="py-3 text-[#b4beb6]">{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
