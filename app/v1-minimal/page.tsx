import Link from "next/link";

const steps = [
  { title: "Capture", detail: "Drop meeting notes, SQL snippets, and requests in one stream." },
  { title: "Clarify", detail: "AI turns rough asks into scoped, testable dashboard requirements." },
  { title: "Ship", detail: "Assign owners, due dates, and blockers without leaving the page." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">dat-analyst-dashboard</span>
          <Link href="/" className="underline">All variants</Link>
        </div>

        <h1 className="mt-10 text-4xl font-bold leading-tight md:text-6xl">
          Turn fuzzy analytics asks into approved dashboard work.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          A minimal workspace for analyst teams that need tighter requirements and faster handoffs.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white">Start free</button>
          <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold">See workflow</button>
        </div>

        <ol className="mt-16 space-y-6 border-l border-slate-300 pl-6">
          {steps.map((step, index) => (
            <li key={step.title}>
              <p className="text-sm text-slate-500">Step {index + 1}</p>
              <h2 className="text-xl font-semibold">{step.title}</h2>
              <p className="mt-1 text-slate-600">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
