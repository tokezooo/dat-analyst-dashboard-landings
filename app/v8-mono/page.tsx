import Link from "next/link";

const chapters = [
  { title: "Intake", text: "Collect every dashboard request with owner, metric, and decision deadline." },
  { title: "Refinement", text: "Generate requirement drafts, assumptions, and risk notes from raw context." },
  { title: "Delivery", text: "Track build state and publish updates in a single narrative timeline." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="underline">All variants</Link>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="border-l-4 border-neutral-900 pl-5">
            <p className="text-sm uppercase tracking-widest">Editorial brief</p>
            <p className="mt-4 text-lg">
              Give analysts one black-and-white operating page to reduce ambiguity and increase delivery cadence.
            </p>
          </aside>

          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">Monochrome, text-first landing narrative.</h1>
            <p className="mt-5 text-neutral-700">Designed for teams who prefer clear hierarchy and dense information over decorative UI.</p>
            <button className="mt-8 rounded-none border-2 border-neutral-900 px-6 py-3 font-semibold">Request access</button>
          </div>
        </div>

        <section className="mt-16 space-y-8">
          {chapters.map((chapter, index) => (
            <article key={chapter.title} className="grid gap-2 border-t border-neutral-400 pt-6 md:grid-cols-[120px_1fr]">
              <p className="font-mono text-sm text-neutral-600">0{index + 1}</p>
              <div>
                <h2 className="text-2xl font-semibold">{chapter.title}</h2>
                <p className="mt-1 text-neutral-700">{chapter.text}</p>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
