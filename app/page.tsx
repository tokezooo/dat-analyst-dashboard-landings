import Link from "next/link";

const variants = [
  { href: "/v1-minimal", name: "V1", shape: "Split Rail" },
  { href: "/v2-gradient", name: "V2", shape: "Band + Metrics" },
  { href: "/v3-light", name: "V3", shape: "Alternating Story" },
  { href: "/v4-dark-grid", name: "V4", shape: "Command Matrix" },
  { href: "/v5-startup", name: "V5", shape: "Roadmap + Pricing" },
  { href: "/v6-corporate", name: "V6", shape: "Executive Brief" },
  { href: "/v7-neon", name: "V7", shape: "Scenario Compare" },
  { href: "/v8-mono", name: "V8", shape: "Editorial Columns" },
  { href: "/v9-glass", name: "V9", shape: "Layered Panels" },
  { href: "/v10-playful", name: "V10", shape: "Storyboard Funnel" },
  { href: "/taskforce", name: "Taskforce", shape: "Project Landing" },
  { href: "/taskforce-v2", name: "Taskforce V2", shape: "21st-inspired" },
  { href: "/taskforce-v3", name: "Taskforce V3", shape: "21st-only components" },
];

export default function LandingIndexPage() {
  return (
    <main className="min-h-[100dvh] bg-[#f3f6f4] px-5 py-10 text-[#10201c] md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <section className="grid gap-6 border border-[#d3ddd8] bg-white p-6 md:grid-cols-[1.5fr_1fr] md:p-9">
          <div className="fade-rise" style={{ ["--delay" as string]: "50ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#2e6a5d]">Landing Suite</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Ten rebuilt landing variants for one analytics product.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#3f5650]">
              Every route uses a different information architecture so you can test narrative-first, metric-first,
              and operations-first conversion patterns without changing core messaging.
            </p>
          </div>

          <aside
            className="fade-rise border border-[#d3ddd8] bg-[#f7fbf9] p-5"
            style={{ ["--delay" as string]: "160ms" }}
          >
            <p className="text-sm font-semibold text-[#1f4f45]">Review checklist</p>
            <ul className="mt-4 space-y-3 text-sm text-[#3f5751]">
              <li>Distinct layout composition per variant</li>
              <li>Single accent per page</li>
              <li>Mobile-safe collapse behavior</li>
              <li>Clear loading/empty/error demonstrations</li>
            </ul>
          </aside>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-[2fr_1fr_1fr]">
          {variants.map((variant, index) => (
            <Link
              key={variant.href}
              href={variant.href}
              className="btn-press fade-rise border border-[#d3ddd8] bg-white p-5 hover:border-[#2e6a5d]"
              style={{ ["--delay" as string]: `${210 + index * 55}ms` }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2e6a5d]">{variant.name}</p>
              <p className="mt-3 text-xl font-semibold tracking-tight">{variant.shape}</p>
              <p className="mt-2 text-sm text-[#4a615b]">Open landing</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
