import Link from "next/link";

const cases = [
  { team: "Fintech Growth", result: "Cut analytics request cycle time from 11 days to 6 days." },
  { team: "Marketplace Ops", result: "Eliminated duplicate KPI definitions across 4 squads." },
  { team: "B2B Product", result: "Improved release confidence with standardized acceptance criteria." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-300 bg-white p-4">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <nav className="flex items-center gap-5 text-sm text-slate-600">
            <span>Platform</span>
            <span>Security</span>
            <span>Case Studies</span>
            <Link href="/" className="underline">All variants</Link>
          </nav>
        </header>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">Enterprise-ready planning for analytics organizations.</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Standardize intake, approvals, and release communication without adding process overhead.
            </p>
            <button className="mt-8 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white">Request enterprise demo</button>
          </div>

          <article className="rounded-2xl border border-slate-300 bg-white p-6">
            <h2 className="text-xl font-semibold">Governance snapshot</h2>
            <div className="mt-5 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg bg-slate-100 p-4">
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-sm text-slate-600">workflow uptime</p>
              </div>
              <div className="rounded-lg bg-slate-100 p-4">
                <p className="text-2xl font-bold">SOC 2</p>
                <p className="text-sm text-slate-600">controls aligned</p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Selected results</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {cases.map((item) => (
              <article key={item.team} className="rounded-xl border border-slate-300 bg-white p-5">
                <h3 className="font-semibold">{item.team}</h3>
                <p className="mt-2 text-slate-600">{item.result}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
