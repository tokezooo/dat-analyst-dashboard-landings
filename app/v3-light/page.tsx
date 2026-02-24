import Link from "next/link";

const sections = [
  {
    title: "Requests arrive with context",
    body: "Capture requester goal, target KPI, and decision deadline at intake.",
  },
  {
    title: "Scope gets clarified",
    body: "Track unresolved assumptions and acceptance checks before assignment.",
  },
  {
    title: "Delivery stays visible",
    body: "Release status and handoff notes remain attached to the original ask.",
  },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#fcfcf9] px-5 py-8 text-[#19201b] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1320px]">
        <header className="flex items-center justify-between border-b border-[#d9dfd8] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">All variants</Link>
        </header>

        <section className="mt-8 fade-rise" style={{ ["--delay" as string]: "70ms" }}>
          <p className="font-mono text-xs uppercase tracking-[0.23em] text-[#996b3a]">Alternating story</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            A lightweight narrative that alternates content rhythm by section.
          </h1>
        </section>

        <section className="mt-8 space-y-5">
          {sections.map((item, index) => (
            <article
              key={item.title}
              className="fade-rise grid gap-4 border border-[#d9dfd8] bg-white p-5 md:grid-cols-2"
              style={{ ["--delay" as string]: `${150 + index * 80}ms` }}
            >
              <h2 className={`text-2xl font-semibold tracking-tight ${index % 2 === 1 ? "md:order-2" : ""}`}>{item.title}</h2>
              <p className={`text-sm leading-relaxed text-[#47524a] ${index % 2 === 1 ? "md:order-1" : ""}`}>{item.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
