import Link from "next/link";

const variants = [
  { href: "/v1-minimal", name: "V1 · Minimal Blue" },
  { href: "/v2-gradient", name: "V2 · Violet Gradient" },
  { href: "/v3-light", name: "V3 · Clean Light" },
  { href: "/v4-dark-grid", name: "V4 · Dark Grid" },
  { href: "/v5-startup", name: "V5 · Startup Punch" },
  { href: "/v6-corporate", name: "V6 · Corporate Calm" },
  { href: "/v7-neon", name: "V7 · Neon" },
  { href: "/v8-mono", name: "V8 · Monochrome" },
  { href: "/v9-glass", name: "V9 · Glass" },
  { href: "/v10-playful", name: "V10 · Playful" },
];

export default function LandingVariantsIndex() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">10 React Landing Variants</h1>
        <p className="mt-3 text-slate-300">Quick, simple landing options for dat-analyst-dashboard.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {variants.map((variant) => (
            <Link key={variant.href} href={variant.href} className="rounded-xl border border-white/15 p-4 hover:bg-white/5">
              {variant.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
