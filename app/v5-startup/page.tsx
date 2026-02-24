import Link from "next/link";

const rollout = [
  "Week 1: import backlog and define owners",
  "Week 2: enable scope rules and approval checks",
  "Week 3: launch status digest for product leaders",
  "Week 4: track SLA by team and priority",
];

const plans = [
  { name: "Starter", price: "$49", note: "Up to 5 analysts" },
  { name: "Growth", price: "$149", note: "Unlimited collaborators" },
  { name: "Scale", price: "$349", note: "Governance + SSO" },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#f9f3ee] px-5 py-8 text-[#221a14] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1380px]">
        <header className="flex items-center justify-between border-b border-[#e0d3c8] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">All variants</Link>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <article className="fade-rise" style={{ ["--delay" as string]: "70ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.23em] text-[#a15329]">Roadmap + pricing</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Ship the process, then pick the plan.</h1>
            <ul className="mt-6 space-y-3">
              {rollout.map((item) => (
                <li key={item} className="border-l border-[#d5b9a6] pl-4 text-sm text-[#5b493d]">{item}</li>
              ))}
            </ul>
          </article>

          <aside className="fade-rise border border-[#e0d3c8] bg-white p-5" style={{ ["--delay" as string]: "170ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a15329]">Plans</p>
            <div className="mt-4 space-y-3">
              {plans.map((plan) => (
                <article key={plan.name} className="border border-[#ecded2] p-4">
                  <p className="text-xl font-semibold">{plan.name}</p>
                  <p className="mt-1 text-3xl font-semibold tracking-tight">{plan.price}</p>
                  <p className="mt-1 text-sm text-[#664f42]">{plan.note}</p>
                </article>
              ))}
            </div>
            <button className="btn-press mt-5 w-full border border-[#a15329] bg-[#a15329] px-5 py-3 font-semibold text-white hover:bg-[#834321]">Start free</button>
          </aside>
        </section>
      </div>
    </main>
  );
}
