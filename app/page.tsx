import Link from "next/link";

const variants = [
  { href: "/v1-minimal", name: "V1 · Minimal Narrative" },
  { href: "/v2-gradient", name: "V2 · Split Hero + Metrics" },
  { href: "/v3-light", name: "V3 · Problem/Solution + FAQ" },
  { href: "/v4-dark-grid", name: "V4 · Dark Bento Grid" },
  { href: "/v5-startup", name: "V5 · Roadmap + Pricing" },
  { href: "/v6-corporate", name: "V6 · Corporate Case Studies" },
  { href: "/v7-neon", name: "V7 · Neon Compare Table" },
  { href: "/v8-mono", name: "V8 · Monochrome Editorial" },
  { href: "/v9-glass", name: "V9 · Glassmorphism Stack" },
  { href: "/v10-playful", name: "V10 · Playful Story Cards" },
];

export default function LandingVariantsIndex() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold md:text-4xl">dat-analyst-dashboard landing variants</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Ten structurally different App Router pages for the same product message.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {variants.map((variant) => (
            <Link
              key={variant.href}
              href={variant.href}
              className="rounded-xl border border-white/15 bg-white/[0.03] p-4 transition hover:border-cyan-300/60 hover:bg-white/10"
            >
              {variant.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
