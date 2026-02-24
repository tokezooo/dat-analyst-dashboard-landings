import Link from "next/link";

const features = [
  "Turn meetings into structured requirements",
  "Track priorities and blockers in one place",
  "AI copilots for specs, tasks, and follow-ups",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-sm opacity-80">dat-analyst-dashboard</span>
          <Link href="/" className="text-sm underline opacity-80 hover:opacity-100">All variants</Link>
        </div>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Neon landing for product analysts who ship faster.
        </h1>
        <p className="mt-6 max-w-2xl text-lg opacity-80">
          A lightweight workspace for requirements, workflows, and AI-assisted planning — built to keep teams aligned.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 px-6 py-3 font-semibold text-white shadow-lg">Start free</button>
          <button className="rounded-xl border border-current/30 px-6 py-3 font-semibold">Book demo</button>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {features.map((item) => (
            <article key={item} className="rounded-2xl border border-current/15 bg-white/5 p-5 backdrop-blur">
              <h2 className="text-lg font-semibold">{item}</h2>
              <p className="mt-2 text-sm opacity-75">Simple setup, clear ownership, fast iteration.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
