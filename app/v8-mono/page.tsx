import Link from "next/link";

const chapters = [
  ["Intake", "Collect request intent, owner, and target KPI in one record."],
  ["Scope", "Expose assumptions and acceptance checks before work begins."],
  ["Build", "Track implementation status without leaving intake context."],
  ["Review", "Publish delivery notes and quality evidence in-thread."],
] as const;

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#f7f7f4] px-5 py-8 text-[#1a1a1a] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1360px]">
        <header className="flex items-center justify-between border-b border-[#d8d8d3] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">All variants</Link>
        </header>

        <section className="mt-8 grid gap-10 md:grid-cols-[0.85fr_1.45fr]">
          <aside className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#616161]">Editorial columns</p>
            <p className="mt-4 border-l-2 border-[#6d6d6d] pl-4 text-lg leading-relaxed text-[#3f3f3f]">
              A strict monochrome treatment for teams that prefer hierarchy and copy over decorative UI.
            </p>
          </aside>

          <article className="fade-rise" style={{ ["--delay" as string]: "170ms" }}>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">A readable operating manual as a landing page.</h1>
            <div className="mt-8 space-y-7">
              {chapters.map(([title, text], index) => (
                <section key={title} className="grid gap-3 border-t border-[#d6d6d0] pt-5 md:grid-cols-[90px_1fr]">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#666]">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#474747]">{text}</p>
                  </div>
                </section>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
