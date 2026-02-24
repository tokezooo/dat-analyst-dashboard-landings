import Link from "next/link";

const highlights = [
  "SOC 2 Type II aligned control mapping",
  "Role-based access with quarterly review support",
  "Immutable approval log for dashboard intake",
];

const outcomes = [
  { org: "Northline", result: "47% faster intake-to-scope cycle" },
  { org: "Meridian", result: "31% fewer requirement rework loops" },
  { org: "Halden", result: "Executive status prep cut by 4.2h/week" },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#f3f7f9] px-5 py-8 text-[#152129] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between border-b border-[#cfdbe1] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">All variants</Link>
        </header>

        <section className="mt-8 grid gap-6 border border-[#cfdbe1] bg-white p-6 md:grid-cols-[1.4fr_1fr]">
          <article className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2f708b]">Executive brief</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Govern intake operations with audit-ready visibility.</h1>
            <p className="mt-5 max-w-2xl text-[#435a66]">This enterprise layout mirrors board-readout structure: posture, controls, and proved operating outcomes.</p>
          </article>

          <aside className="fade-rise bg-[#f7fbfd] p-5" style={{ ["--delay" as string]: "170ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2f708b]">Control highlights</p>
            <ul className="mt-4 space-y-3 text-sm text-[#455b66]">
              {highlights.map((item) => (
                <li key={item} className="border-l border-[#98c0d1] pl-3">{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="mt-5 overflow-hidden border border-[#cfdbe1] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#eaf3f7] text-[#2f708b]">
              <tr>
                <th className="px-4 py-3">Organization</th>
                <th className="px-4 py-3">Measured Outcome</th>
              </tr>
            </thead>
            <tbody>
              {outcomes.map((item) => (
                <tr key={item.org} className="border-t border-[#deeaef]">
                  <td className="px-4 py-3 font-medium">{item.org}</td>
                  <td className="px-4 py-3 text-[#455b66]">{item.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
