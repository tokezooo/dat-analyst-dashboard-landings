import Link from "next/link";

const painPoints = [
  "Stakeholder asks arrive without metric boundaries.",
  "Priority changes are discussed but not recorded.",
  "Done criteria is interpreted differently by each squad.",
];

const faq = [
  {
    q: "Does this replace BI software?",
    a: "No. It governs intake, scope, and approval before dashboard build work starts.",
  },
  {
    q: "Can PM and analytics collaborate in one thread?",
    a: "Yes. Every request keeps owner, metric definitions, dependencies, and decision history together.",
  },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#fafaf7] px-5 py-8 text-[#171b18] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between border-b border-[#dadfd8] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">
            All variants
          </Link>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-[1fr_1.3fr]">
          <aside className="fade-rise border border-[#d7ddd5] bg-white p-5" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.23em] text-[#7c4f1f]">Problem workshop</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Where teams lose time</h2>
            <ul className="mt-4 space-y-4 text-sm leading-relaxed text-[#4a504b]">
              {painPoints.map((pain, index) => (
                <li key={pain} className="border-l border-[#cfb08a] pl-4">
                  <p className="font-mono text-xs text-[#9a6a38]">0{index + 1}</p>
                  <p className="mt-1">{pain}</p>
                </li>
              ))}
            </ul>
          </aside>

          <div className="fade-rise" style={{ ["--delay" as string]: "170ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.23em] text-[#9a6a38]">Solution framing</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Replace interpretation gaps with one shared request contract.
            </h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-[#4a504b]">
              This page is intentionally light and text-driven, with the accent reserved for decision-critical elements.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="btn-press border border-[#9a6a38] bg-[#9a6a38] px-6 py-3 font-semibold text-white hover:bg-[#82582f]">
                Book onboarding
              </button>
              <button className="btn-press border border-[#d7ddd5] bg-white px-6 py-3 font-semibold hover:border-[#9a6a38]">
                Download template
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="fade-rise border border-[#d7ddd5] bg-white p-5" style={{ ["--delay" as string]: "240ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#9a6a38]">FAQ</p>
            <div className="mt-4 space-y-4">
              {faq.map((item) => (
                <article key={item.q} className="border-b border-[#e7ebe5] pb-4">
                  <h3 className="text-lg font-semibold">{item.q}</h3>
                  <p className="mt-1 text-sm text-[#4d534f]">{item.a}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="fade-rise border border-[#d7ddd5] bg-[#fff8ef] p-5" style={{ ["--delay" as string]: "300ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#9a6a38]">Error state sample</p>
            <p className="mt-3 text-sm text-[#5c4a36]">
              Approval blocked: request missing baseline metric definition. Add source table and owner before submit.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}
