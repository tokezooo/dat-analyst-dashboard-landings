import Link from "next/link";

const cards = [
  { label: "Open requests", value: "28" },
  { label: "Awaiting approval", value: "6" },
  { label: "Blocked", value: "3" },
  { label: "Ready to ship", value: "9" },
  { label: "Median cycle", value: "5.7d" },
  { label: "SLA met", value: "94%" },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-[#0f1311] px-5 py-8 text-[#ebf0eb] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="flex items-center justify-between border-b border-[#293129] pb-4 text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="btn-press underline underline-offset-4">All variants</Link>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-[0.95fr_1.4fr]">
          <article className="fade-rise" style={{ ["--delay" as string]: "80ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d0a866]">Command matrix</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Dense operational view for fast triage.</h1>
            <p className="mt-5 text-[#b1bcb2]">A dashboard-first landing that leads with hard numbers and compact control surfaces.</p>
            <button className="btn-press mt-7 border border-[#d0a866] bg-[#d0a866] px-6 py-3 font-semibold text-[#141814] hover:bg-[#b98f4d]">Launch command center</button>
          </article>

          <section className="fade-rise grid gap-4 md:grid-cols-3" style={{ ["--delay" as string]: "170ms" }}>
            {cards.map((card) => (
              <article key={card.label} className="border border-[#2d352e] bg-[#141a15] p-4">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#d0a866]">{card.label}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight">{card.value}</p>
              </article>
            ))}
          </section>
        </section>
      </div>
    </main>
  );
}
