import Link from "next/link";

const layers = [
  "Request capture layer",
  "Scope and decision layer",
  "Delivery and report layer",
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#e7f2f5] px-5 py-8 text-[#12232b] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between border-b border-[#c5d9df] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">All variants</Link>
        </header>

        <section className="mt-8 relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/35 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md">
          <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[#9bc9d8]/45 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 right-6 h-52 w-52 rounded-full bg-[#7daebf]/35 blur-2xl" />
          <div className="relative z-10 grid gap-8 md:grid-cols-[1.35fr_1fr]">
            <article className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2d778f]">Layered panels</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Glass-inspired flow for planning-heavy teams.</h1>
              <p className="mt-5 max-w-2xl text-[#3e5660]">This variant uses translucent surfaces and depth cues to separate planning layers without visual clutter.</p>
              <button className="btn-press mt-7 border border-[#2d778f] bg-[#2d778f] px-6 py-3 font-semibold text-white hover:bg-[#245f72]">Start team trial</button>
            </article>

            <aside className="fade-rise rounded-[1.3rem] border border-white/45 bg-white/45 p-5" style={{ ["--delay" as string]: "180ms" }}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2d778f]">State panel</p>
              <p className="mt-3 text-sm text-[#425a64]">Loading prior criteria templates.</p>
              <div className="state-skeleton mt-3 h-2 rounded bg-white/75" />
              <p className="mt-4 text-sm text-[#425a64]">Error sample: unresolved owner in approval chain.</p>
            </aside>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {layers.map((item, index) => (
            <article
              key={item}
              className="fade-rise rounded-[1.2rem] border border-white/50 bg-white/45 p-5 backdrop-blur-md"
              style={{ ["--delay" as string]: `${240 + index * 70}ms` }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2d778f]">Layer {index + 1}</p>
              <p className="mt-2 text-sm text-[#3f5660]">{item}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
