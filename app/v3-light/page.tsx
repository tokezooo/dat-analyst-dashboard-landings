import Link from "next/link";

const pain = [
  "Requests arrive in chat threads without context.",
  "Analysts spend hours restating the same metric definitions.",
  "Priority shifts are invisible until deadlines are missed.",
];

const faqs = [
  { q: "Does this replace BI tools?", a: "No. It organizes request intake, scope, and delivery workflow before dashboards are built." },
  { q: "Can PMs and analysts collaborate in one view?", a: "Yes. Product, ops, and analytics share the same timeline, owners, and acceptance criteria." },
  { q: "How fast is setup?", a: "Most teams import their active requests and ship their first scoped batch in under one day." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="underline">All variants</Link>
        </div>

        <h1 className="mt-8 text-4xl font-bold md:text-6xl">Stop guessing what stakeholders meant.</h1>
        <p className="mt-4 text-lg text-slate-600">Convert every request into clear scope, owners, and done criteria.</p>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">The common breakdown</h2>
          <ul className="mt-4 space-y-3">
            {pain.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-4">{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-lg bg-slate-50 p-4">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-1 text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
          <button className="mt-8 rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white">Book onboarding call</button>
        </section>
      </section>
    </main>
  );
}
