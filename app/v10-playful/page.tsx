import Link from "next/link";

const storyboard = [
  {
    stage: "Morning triage",
    copy: "A product lead submits six dashboard ideas. The board clusters them by business urgency.",
  },
  {
    stage: "Scope review",
    copy: "Analysts and stakeholders confirm metric definitions and acceptance checks in one thread.",
  },
  {
    stage: "Release recap",
    copy: "Launch notes are published automatically with owner tags and unresolved follow-ups.",
  },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#fff5ef] px-5 py-8 text-[#2a1710] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between border-b border-[#efd1c4] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">
            All variants
          </Link>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <article className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#c45a2c]">Storyboard suite</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              A lively narrative layout for serious delivery work.
            </h1>
            <p className="mt-5 max-w-2xl text-[#604539]">
              This page keeps playful energy through shape, spacing, and sequencing while preserving premium typography
              and disciplined color.
            </p>
            <button className="btn-press mt-7 border border-[#c45a2c] bg-[#c45a2c] px-6 py-3 font-semibold text-white hover:bg-[#a64a24]">
              Start with story mode
            </button>
          </article>

          <aside className="fade-rise border border-[#efd1c4] bg-white p-5" style={{ ["--delay" as string]: "180ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#c45a2c]">Interaction states</p>
            <div className="mt-4 space-y-3 text-sm text-[#62493d]">
              <p>Loading: assembling request narrative.</p>
              <p>Empty: no submissions yet for this week.</p>
              <p>Error: missing business objective in intake form.</p>
            </div>
          </aside>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-[1.2fr_0.8fr_1fr]">
          {storyboard.map((item, index) => (
            <article
              key={item.stage}
              className="fade-rise border border-[#efd1c4] bg-white p-5"
              style={{ ["--delay" as string]: `${240 + index * 70}ms` }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#c45a2c]">{item.stage}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#62493d]">{item.copy}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
