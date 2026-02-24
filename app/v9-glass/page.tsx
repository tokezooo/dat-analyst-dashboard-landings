import Link from "next/link";

const layers = [
  {
    title: "Request layer",
    text: "Capture context, owners, and required metrics before sprint planning begins.",
  },
  {
    title: "Decision layer",
    text: "Track assumptions, blockers, and acceptance criteria with timestamped approvals.",
  },
  {
    title: "Delivery layer",
    text: "Publish build status and stakeholder summaries from the same canonical thread.",
  },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#eaf4f6] px-5 py-8 text-[#102028] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between border-b border-[#c5d9df] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">
            All variants
          </Link>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.3fr_1fr]">
          <div className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#2f7a92]">Refraction stack</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Layered planning surfaces with physical glass edges.
            </h1>
            <p className="mt-5 max-w-2xl text-[#3f5460]">
              This variant uses restrained glass materiality with inner border refraction and subtle inset shadows.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="btn-press border border-[#2f7a92] bg-[#2f7a92] px-6 py-3 font-semibold text-white hover:bg-[#235f71]">
                Start team trial
              </button>
              <button className="btn-press border border-[#bdd5dc] bg-white px-6 py-3 font-semibold hover:border-[#2f7a92]">
                Review architecture
              </button>
            </div>
          </div>

          <aside className="fade-rise rounded-[1.75rem] border border-white/40 bg-white/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md" style={{ ["--delay" as string]: "180ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2f7a92]">State feed</p>
            <p className="mt-3 text-sm text-[#405762]">Loading criteria templates from prior releases.</p>
            <div className="state-skeleton mt-3 h-2 rounded bg-white/70" />
            <p className="mt-4 text-sm text-[#405762]">Error sample: unresolved owner in scope packet.</p>
          </aside>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-[1fr_1fr_1fr]">
          {layers.map((layer, index) => (
            <article
              key={layer.title}
              className="fade-rise rounded-[1.75rem] border border-white/40 bg-white/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md"
              style={{ ["--delay" as string]: `${240 + index * 70}ms` }}
            >
              <h2 className="text-xl font-semibold tracking-tight">{layer.title}</h2>
              <p className="mt-2 text-sm text-[#405762]">{layer.text}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
