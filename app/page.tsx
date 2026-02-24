import Link from "next/link";

const variants = [
  { href: "/v1-minimal", name: "V1", style: "Narrative rail" },
  { href: "/v2-gradient", name: "V2", style: "Operator split" },
  { href: "/v3-light", name: "V3", style: "Problem workshop" },
  { href: "/v4-dark-grid", name: "V4", style: "Dense command ledger" },
  { href: "/v5-startup", name: "V5", style: "Roadmap + commercial" },
  { href: "/v6-corporate", name: "V6", style: "Governance brief" },
  { href: "/v7-neon", name: "V7", style: "Terminal operations" },
  { href: "/v8-mono", name: "V8", style: "Editorial system" },
  { href: "/v9-glass", name: "V9", style: "Refraction stack" },
  { href: "/v10-playful", name: "V10", style: "Storyboard suite" },
];

export default function LandingVariantsIndex() {
  return (
    <main className="min-h-[100dvh] bg-[#f4f7f4] px-5 py-10 text-[#11201e] md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <section className="grid gap-8 border border-[#d5ddda] bg-white p-6 md:grid-cols-[1.5fr_1fr] md:p-10">
          <div className="fade-rise" style={{ ["--delay" as string]: "60ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#3f6f68]">Landing Directory</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Premium landing directions for one analytics product message.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#405350]">
              Each variant has a different information architecture, motion rhythm, and conversion framing. Desktop
              layouts stay intentionally asymmetric and collapse to one safe mobile column.
            </p>
          </div>

          <aside className="fade-rise border border-[#d5ddda] bg-[#f7fbfa] p-5" style={{ ["--delay" as string]: "180ms" }}>
            <p className="text-sm font-medium text-[#264c46]">Build focus</p>
            <ul className="mt-4 space-y-3 text-sm text-[#3e4f4c]">
              <li>Single accent per page</li>
              <li>No center-biased heroes</li>
              <li>Clear loading, empty, and error surfaces</li>
              <li>Tactile `:active` responses on controls</li>
            </ul>
          </aside>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-[2fr_1fr_1fr]">
          {variants.map((variant, index) => (
            <Link
              key={variant.href}
              href={variant.href}
              className="btn-press fade-rise group border border-[#d5ddda] bg-white p-5 hover:border-[#2f7f72]"
              style={{ ["--delay" as string]: `${220 + index * 60}ms` }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#3f6f68]">{variant.name}</p>
              <p className="mt-3 text-xl font-semibold tracking-tight">{variant.style}</p>
              <p className="mt-2 text-sm text-[#4d5d5b]">Open variant</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
