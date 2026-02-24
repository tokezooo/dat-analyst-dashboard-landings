import Link from "next/link";

const layers = [
  { title: "Request Layer", text: "Incoming asks, business goals, and stakeholders." },
  { title: "Analysis Layer", text: "Scope, acceptance criteria, dependencies, and estimates." },
  { title: "Delivery Layer", text: "Execution state, risks, and executive summary." },
];

const plans = [
  { name: "Team", cost: "$79", cta: "Start team trial" },
  { name: "Scale", cost: "$199", cta: "Talk to sales" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between text-sm text-cyan-100/80">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="underline">All variants</Link>
        </div>

        <h1 className="mt-8 max-w-3xl text-4xl font-bold md:text-6xl">Layered glass layout for analytics planning clarity.</h1>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {layers.map((layer) => (
              <article key={layer.title} className="rounded-2xl border border-cyan-200/20 bg-white/10 p-5 backdrop-blur-lg">
                <h2 className="text-xl font-semibold">{layer.title}</h2>
                <p className="mt-2 text-cyan-50/80">{layer.text}</p>
              </article>
            ))}
          </div>

          <aside className="rounded-2xl border border-cyan-200/25 bg-cyan-500/10 p-5 backdrop-blur-lg">
            <h2 className="text-xl font-semibold">Choose a plan</h2>
            <div className="mt-4 space-y-3">
              {plans.map((plan) => (
                <article key={plan.name} className="rounded-xl border border-white/20 bg-black/20 p-4">
                  <p className="font-semibold">{plan.name}</p>
                  <p className="mt-1 text-2xl font-bold">{plan.cost}</p>
                  <button className="mt-3 w-full rounded-lg bg-cyan-300 px-4 py-2 font-semibold text-slate-900">{plan.cta}</button>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
