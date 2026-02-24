import Link from "next/link";

const sequence = [
  { label: "Capture", detail: "Stakeholder notes, SQL references, and decision context enter one queue." },
  { label: "Clarify", detail: "The workspace drafts acceptance criteria and unresolved assumptions." },
  { label: "Commit", detail: "Owners approve scope and delivery dates without opening three different tools." },
];

const states = [
  { title: "Loading", text: "Requirements ingesting from intake channels." },
  { title: "Empty", text: "No active requests. Add a dashboard ask to start." },
  { title: "Error", text: "Metric definition conflict: retention_30d appears in two forms." },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#f6f7f3] px-5 py-8 text-[#171c17] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between border-b border-[#d4d7ce] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link className="btn-press underline underline-offset-4" href="/">
            All variants
          </Link>
        </div>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.45fr_0.9fr]">
          <div className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5e654f]">Minimal narrative</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Scope dashboard work before delivery pressure appears.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#454c40]">
              This variant uses quiet structure and high-contrast type to move analysts from intake to approved execution
              in one page flow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="btn-press border border-[#6f7d40] bg-[#6f7d40] px-6 py-3 font-semibold text-white hover:bg-[#5f6d35]">
                Start free
              </button>
              <button className="btn-press border border-[#c8cdbd] bg-white px-6 py-3 font-semibold hover:border-[#6f7d40]">
                Review workflow
              </button>
            </div>
          </div>

          <aside className="fade-rise border border-[#cfd3c8] bg-white p-5" style={{ ["--delay" as string]: "180ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#5e654f]">Delivery sequence</p>
            <ol className="mt-5 space-y-5">
              {sequence.map((step, index) => (
                <li key={step.label} className="border-l border-[#b8beaa] pl-4">
                  <p className="font-mono text-xs text-[#6b7358]">0{index + 1}</p>
                  <h2 className="mt-1 text-lg font-semibold">{step.label}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-[#4e5647]">{step.detail}</p>
                </li>
              ))}
            </ol>
          </aside>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-[1fr_1fr_1fr]">
          {states.map((state, index) => (
            <article key={state.title} className="fade-rise border border-[#cfd3c8] bg-white p-4" style={{ ["--delay" as string]: `${240 + index * 70}ms` }}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b7358]">{state.title}</p>
              <p className="mt-2 text-sm text-[#4a5343]">{state.text}</p>
              {state.title === "Loading" ? <div className="state-skeleton mt-3 h-2 rounded bg-[#e6eadf]" /> : null}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
