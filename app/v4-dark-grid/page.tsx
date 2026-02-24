import Link from "next/link";

const blocks = [
  { title: "Intake Inbox", text: "Score incoming asks by business impact and effort." },
  { title: "Definition Vault", text: "Reuse metric logic and avoid duplicate debates." },
  { title: "Owner Matrix", text: "See who owns discovery, build, and review." },
  { title: "Risk Radar", text: "Flag dependencies and stale assumptions early." },
  { title: "Weekly Digest", text: "Auto-summary for PM, eng, and exec stakeholders." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span className="font-semibold text-zinc-200">dat-analyst-dashboard</span>
          <Link href="/" className="underline">All variants</Link>
        </div>

        <h1 className="mt-8 max-w-3xl text-4xl font-bold md:text-6xl">A dark bento command center for analytics delivery.</h1>

        <div className="mt-12 grid auto-rows-[140px] gap-4 md:grid-cols-4">
          <article className="rounded-2xl border border-zinc-700 bg-zinc-900 p-5 md:col-span-2 md:row-span-2">
            <h2 className="text-2xl font-semibold">Plan once, update everywhere.</h2>
            <p className="mt-3 text-zinc-300">Every requirement update propagates to tickets, summaries, and review checklists.</p>
            <button className="mt-6 rounded-lg bg-emerald-500 px-5 py-2 font-semibold text-black">Start free</button>
          </article>

          {blocks.map((block) => (
            <article key={block.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
              <h3 className="font-semibold">{block.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{block.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
