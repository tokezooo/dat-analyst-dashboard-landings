import Link from "next/link";

const metrics = [
  { value: "41%", label: "faster signoff" },
  { value: "2.3h", label: "saved per request" },
  { value: "11", label: "teams onboarded" },
];

const lanes = ["Incoming", "Clarification", "Approval", "Delivery", "Review"];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#edf7f2] px-5 py-8 text-[#10221a] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">All variants</Link>
        </header>

        <section className="mt-8 overflow-hidden border border-[#c3dfd1] bg-gradient-to-br from-[#d8efe4] to-[#edf8f3] p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#2c6f56]">Band + metrics</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            One operational canvas for intake, scoping, and release readiness.
          </h1>
          <p className="mt-4 max-w-2xl text-[#325147]">
            This variant starts with a full-width hero band, then moves into a compact metric strip and lane visualization.
          </p>
          <button className="btn-press mt-7 border border-[#2c8a67] bg-[#2c8a67] px-6 py-3 font-semibold text-white hover:bg-[#236f52]">Open workspace</button>
        </section>

        <section className="mt-5 grid gap-4 md:grid-cols-[1fr_1fr_1fr]">
          {metrics.map((item, index) => (
            <article key={item.label} className="fade-rise border border-[#c3dfd1] bg-white p-5" style={{ ["--delay" as string]: `${100 + index * 70}ms` }}>
              <p className="text-4xl font-semibold tracking-tight">{item.value}</p>
              <p className="mt-1 text-sm text-[#3c5a50]">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="mt-5 border border-[#c3dfd1] bg-white p-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2c6f56]">Pipeline lanes</p>
          <div className="mt-4 grid gap-3 md:grid-cols-5">
            {lanes.map((lane) => (
              <div key={lane} className="border border-[#d7ebe2] bg-[#f7fcfa] p-3 text-sm text-[#38564c]">{lane}</div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
