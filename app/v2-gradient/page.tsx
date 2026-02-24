import Link from "next/link";

const metrics = [
  { value: "47.2%", label: "shorter signoff cycle" },
  { value: "2.8h", label: "saved per intake" },
  { value: "14", label: "parallel scoped requests" },
];

const board = [
  "Parsing ticket handoff",
  "Generating criteria draft",
  "Waiting for stakeholder approval",
  "Ready for analyst assignment",
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#eef6f2] px-5 py-8 text-[#10231c] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">
            All variants
          </Link>
        </div>

        <section className="mt-8 grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <article className="fade-rise border border-[#bfddd0] bg-gradient-to-br from-[#d7efe5] to-[#edf8f3] p-6" style={{ ["--delay" as string]: "70ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#2b6b53]">Operator split</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
              Run intake operations with fewer meetings and clearer rules.
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-[#284539]">
              This layout pairs narrative copy with a live control surface to show throughput, blockers, and approval
              state in one sweep.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="btn-press border border-[#2b8a66] bg-[#2b8a66] px-6 py-3 font-semibold text-white hover:bg-[#236f53]">
                Open workspace
              </button>
              <button className="btn-press border border-[#9fc8b6] bg-white px-6 py-3 font-semibold hover:border-[#2b8a66]">
                See process map
              </button>
            </div>
          </article>

          <aside className="fade-rise border border-[#bfddd0] bg-white p-6" style={{ ["--delay" as string]: "170ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2b6b53]">Control board</p>
            <ul className="mt-4 space-y-3">
              {board.map((item, index) => (
                <li key={item} className="flex items-start gap-3 border-b border-[#e2efe9] pb-3 text-sm text-[#314d43]">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-[#2b8a66]" />
                  <span>{index + 1}. {item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-[2fr_1fr_1fr]">
          {metrics.map((item, index) => (
            <article key={item.label} className="fade-rise border border-[#bfddd0] bg-white p-5" style={{ ["--delay" as string]: `${230 + index * 70}ms` }}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2b6b53]">Metric</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">{item.value}</p>
              <p className="mt-1 text-sm text-[#355247]">{item.label}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
