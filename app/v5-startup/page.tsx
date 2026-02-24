import Link from "next/link";

const roadmap = [
  { week: "Week 1", item: "Import current request backlog and map owners." },
  { week: "Week 2", item: "Enable AI requirement summaries and approval flow." },
  { week: "Week 3", item: "Publish stakeholder digest and SLA dashboard." },
];

const tiers = [
  { name: "Starter", price: "$29", points: ["Up to 3 analysts", "Request triage board", "Weekly digest"] },
  { name: "Growth", price: "$99", points: ["Unlimited contributors", "AI scope drafting", "Custom workflow rules"] },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between text-sm text-orange-100/90">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="underline">All variants</Link>
        </div>

        <h1 className="mt-8 max-w-4xl text-4xl font-bold md:text-6xl">Startup execution page with a launch roadmap and pricing.</h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="text-2xl font-semibold">30-day rollout timeline</h2>
            <div className="mt-5 space-y-4">
              {roadmap.map((step) => (
                <article key={step.week} className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <p className="text-sm text-orange-200">{step.week}</p>
                  <p className="mt-1 font-medium">{step.item}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Pricing</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {tiers.map((tier) => (
                <article key={tier.name} className="rounded-2xl border border-white/20 bg-gradient-to-b from-orange-500/20 to-pink-500/10 p-5">
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <p className="mt-2 text-3xl font-bold">{tier.price}</p>
                  <p className="text-sm text-white/70">per analyst / month</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {tier.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <button className="mt-6 rounded-lg bg-orange-400 px-6 py-3 font-semibold text-slate-900">Start free trial</button>
          </section>
        </div>
      </section>
    </main>
  );
}
