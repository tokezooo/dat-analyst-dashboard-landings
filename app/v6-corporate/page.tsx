import Link from "next/link";

const caseStudies = [
  {
    team: "Meridian Payments",
    result: "Cycle time reduced from 10.4 days to 5.9 days across analytics intake.",
  },
  {
    team: "Northline Marketplace",
    result: "Shared definition registry removed duplicate KPI debates in four squads.",
  },
  {
    team: "Halden B2B Platform",
    result: "Release review confidence increased with standardized acceptance checks.",
  },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#f3f6f8] px-5 py-8 text-[#132028] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between border-b border-[#cfd9df] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">
            All variants
          </Link>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.35fr_0.95fr]">
          <div className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.23em] text-[#2f708b]">Governance brief</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Enterprise analytics intake with policy-grade visibility.
            </h1>
            <p className="mt-5 max-w-2xl text-[#40535d]">
              This structure mirrors executive briefs: top-line control posture, then proven outcomes from operating
              teams.
            </p>

            <div className="mt-7 border border-[#cfd9df] bg-white p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2f708b]">Control snapshot</p>
              <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1fr]">
                <div className="border border-[#dde6ea] p-4">
                  <p className="text-3xl font-semibold tracking-tight">99.2%</p>
                  <p className="mt-1 text-sm text-[#4a5d67]">workflow uptime across last 90 days</p>
                </div>
                <div className="border border-[#dde6ea] p-4">
                  <p className="text-3xl font-semibold tracking-tight">SOC 2 Type II</p>
                  <p className="mt-1 text-sm text-[#4a5d67]">control mapping available for audit review</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="fade-rise border border-[#cfd9df] bg-white p-5" style={{ ["--delay" as string]: "180ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2f708b]">Status feed</p>
            <ul className="mt-4 space-y-3 text-sm text-[#40535d]">
              <li className="border-l border-[#8cb7ca] pl-3">Policy exception log exported weekly</li>
              <li className="border-l border-[#8cb7ca] pl-3">Access review reminders synced to compliance team</li>
              <li className="border-l border-[#8cb7ca] pl-3">Scope approval history retained for 365 days</li>
            </ul>
            <button className="btn-press mt-6 w-full border border-[#2f708b] bg-[#2f708b] px-5 py-3 font-semibold text-white hover:bg-[#25596f]">
              Request enterprise demo
            </button>
          </aside>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-[1fr_1fr_1fr]">
          {caseStudies.map((item, index) => (
            <article key={item.team} className="fade-rise border border-[#cfd9df] bg-white p-5" style={{ ["--delay" as string]: `${240 + index * 70}ms` }}>
              <h2 className="text-lg font-semibold tracking-tight">{item.team}</h2>
              <p className="mt-2 text-sm text-[#4a5d67]">{item.result}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
