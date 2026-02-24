import Link from "next/link";

const journey = [
  { stage: "Submit", text: "Product lead submits dashboard ask with objective." },
  { stage: "Clarify", text: "Team resolves metric definitions and assumptions." },
  { stage: "Approve", text: "Stakeholders sign off on criteria and owner." },
  { stage: "Ship", text: "Release summary is published with context." },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#fff4eb] px-5 py-8 text-[#2a1710] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between border-b border-[#efd3c6] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">All variants</Link>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <article className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#c35e32]">Storyboard funnel</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">A playful frame for serious delivery outcomes.</h1>
            <p className="mt-5 max-w-xl text-[#62483c]">This route uses card rhythm and narrative sequencing to keep momentum from first click to activation.</p>
            <button className="btn-press mt-7 border border-[#c35e32] bg-[#c35e32] px-6 py-3 font-semibold text-white hover:bg-[#a44f2a]">Start in story mode</button>
          </article>

          <aside className="fade-rise border border-[#efd3c6] bg-white p-5" style={{ ["--delay" as string]: "180ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#c35e32]">States</p>
            <div className="mt-4 space-y-3 text-sm text-[#62483c]">
              <p>Loading: assembling handoff notes.</p>
              <p>Empty: no submissions yet today.</p>
              <p>Error: missing business objective in intake form.</p>
            </div>
          </aside>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          {journey.map((item, index) => (
            <article
              key={item.stage}
              className="fade-rise border border-[#efd3c6] bg-white p-5"
              style={{ ["--delay" as string]: `${230 + index * 70}ms` }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c35e32]">{item.stage}</p>
              <p className="mt-3 text-sm text-[#62483c]">{item.text}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
