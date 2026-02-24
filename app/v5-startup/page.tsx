import Link from "next/link";

const roadmap = [
  { phase: "Week 1", detail: "Import 90-day request backlog and map ownership." },
  { phase: "Week 2", detail: "Deploy criteria generation and approval checkpoint." },
  { phase: "Week 3", detail: "Publish rollout digest for product and finance leads." },
  { phase: "Week 4", detail: "Enable SLA tracking for executive review cadence." },
];

const plans = [
  { name: "Studio", rate: "$39", notes: "Up to 4 analysts, shared intake board." },
  { name: "Scale", rate: "$129", notes: "Unlimited collaborators, policy controls, review trails." },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#f8f4ef] px-5 py-8 text-[#1e1713] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between border-b border-[#dfd1c6] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">
            All variants
          </Link>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.3fr_0.9fr]">
          <div className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.23em] text-[#9b4d22]">Roadmap + commercial</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Launch planning and pricing in one conversion frame.
            </h1>
            <p className="mt-5 max-w-2xl text-[#5a4639]">
              A startup-ready structure for teams that want an immediate rollout plan before discussing cost.
            </p>

            <div className="mt-7 border border-[#dfd1c6] bg-white">
              {roadmap.map((step) => (
                <article key={step.phase} className="grid gap-3 border-b border-[#efe4db] p-4 md:grid-cols-[110px_1fr]">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#9b4d22]">{step.phase}</p>
                  <p className="text-sm text-[#5a4639]">{step.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="fade-rise border border-[#dfd1c6] bg-white p-5" style={{ ["--delay" as string]: "180ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#9b4d22]">Plans</p>
            <div className="mt-4 space-y-4">
              {plans.map((plan) => (
                <article key={plan.name} className="border border-[#ead8cb] p-4">
                  <h2 className="text-xl font-semibold">{plan.name}</h2>
                  <p className="mt-1 text-3xl font-semibold tracking-tight">{plan.rate}</p>
                  <p className="mt-1 text-sm text-[#5a4639]">per analyst / month</p>
                  <p className="mt-3 text-sm text-[#5a4639]">{plan.notes}</p>
                </article>
              ))}
            </div>
            <button className="btn-press mt-5 w-full border border-[#9b4d22] bg-[#9b4d22] px-5 py-3 font-semibold text-white hover:bg-[#7e3e1c]">
              Start free trial
            </button>
          </aside>
        </section>
      </div>
    </main>
  );
}
