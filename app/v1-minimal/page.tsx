import Link from "next/link";

const steps = [
  "Capture request context and owner in one intake form.",
  "Generate scope draft with metric boundaries.",
  "Approve criteria before dashboard work starts.",
  "Track release notes in the same request thread.",
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#f8f9f6] px-5 py-8 text-[#162018] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1380px]">
        <header className="flex items-center justify-between border-b border-[#d4dacd] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">All variants</Link>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.45fr_0.9fr]">
          <article className="fade-rise" style={{ ["--delay" as string]: "70ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5f704d]">Split rail</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Remove ambiguity before analysts write a single query.
            </h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-[#42503f]">
              A quiet left-rail narrative with a procedural right column for teams that want direct, low-noise onboarding.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="btn-press border border-[#627a3d] bg-[#627a3d] px-6 py-3 font-semibold text-white hover:bg-[#536733]">Start trial</button>
              <button className="btn-press border border-[#c7d0bc] bg-white px-6 py-3 font-semibold hover:border-[#627a3d]">View template</button>
            </div>
          </article>

          <aside className="fade-rise border border-[#d4dacd] bg-white p-5" style={{ ["--delay" as string]: "170ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#5f704d]">Workflow</p>
            <ol className="mt-4 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="border-l border-[#bec8b1] pl-4 text-sm text-[#445241]">
                  <p className="font-mono text-xs text-[#60704e]">0{index + 1}</p>
                  <p className="mt-1">{step}</p>
                </li>
              ))}
            </ol>
          </aside>
        </section>
      </div>
    </main>
  );
}
