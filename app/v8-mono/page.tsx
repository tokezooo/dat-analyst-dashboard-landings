import Link from "next/link";

const chapters = [
  {
    heading: "Intake",
    body: "Collect every request with an owner, required metric, and decision deadline in one indexed timeline.",
  },
  {
    heading: "Refinement",
    body: "Generate scope drafts and unresolved questions so reviews start from shared language instead of memory.",
  },
  {
    heading: "Delivery",
    body: "Publish final status notes and quality checks in the same thread used for intake and approval.",
  },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#f7f7f5] px-5 py-8 text-[#181818] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between border-b border-[#d7d7d3] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">
            All variants
          </Link>
        </header>

        <section className="mt-8 grid gap-10 md:grid-cols-[0.85fr_1.4fr]">
          <aside className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5d5d5d]">Editorial system</p>
            <p className="mt-4 border-l-2 border-[#6e6e6e] pl-4 text-lg leading-relaxed text-[#3e3e3e]">
              A monochrome, text-first layout for teams that prefer strict hierarchy and concise flow over decorative UI.
            </p>
            <button className="btn-press mt-7 border border-[#444] bg-[#444] px-6 py-3 font-semibold text-white hover:bg-[#323232]">
              Request access
            </button>
          </aside>

          <div className="fade-rise" style={{ ["--delay" as string]: "170ms" }}>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              A structured narrative for analytics operations.
            </h1>
            <div className="mt-8 space-y-8">
              {chapters.map((chapter, index) => (
                <article key={chapter.heading} className="grid gap-3 border-t border-[#d6d6d2] pt-5 md:grid-cols-[100px_1fr]">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6b6b]">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">{chapter.heading}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#474747]">{chapter.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
