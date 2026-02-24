import Link from "next/link";

const stories = [
  {
    title: "Morning triage",
    text: "A PM drops six requests. The dashboard groups them by impact before standup.",
    tone: "bg-rose-200",
  },
  {
    title: "Scope check",
    text: "AI drafts success criteria so analysts and stakeholders agree in minutes.",
    tone: "bg-amber-200",
  },
  {
    title: "Launch recap",
    text: "The team ships with a clean summary instead of assembling updates by hand.",
    tone: "bg-sky-200",
  },
];

const faq = [
  { q: "Is this only for large teams?", a: "No. Small analytics teams use it to protect focus and reduce context-switching." },
  { q: "Can non-analysts submit requests?", a: "Yes. Any stakeholder can submit requests with guided prompts." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-rose-50 text-rose-950">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="underline">All variants</Link>
        </div>

        <div className="mt-10 rounded-3xl border-4 border-rose-300 bg-white p-8 shadow-[10px_10px_0px_#fda4af]">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">A playful storyboard for serious analytics delivery.</h1>
          <p className="mt-4 max-w-2xl text-lg text-rose-900/80">
            Walk the whole team from raw request to shipped dashboard in a visual sequence.
          </p>
          <button className="mt-7 rounded-full bg-rose-500 px-7 py-3 font-semibold text-white">Try it free</button>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {stories.map((story) => (
            <article key={story.title} className={`${story.tone} rounded-2xl border-2 border-rose-300 p-5`}>
              <h2 className="text-xl font-semibold">{story.title}</h2>
              <p className="mt-2">{story.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border-2 border-dashed border-rose-300 bg-white p-6">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-3">
            {faq.map((item) => (
              <article key={item.q} className="rounded-xl bg-rose-100 p-4">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-1 text-rose-900/80">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
