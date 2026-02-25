"use client";

import Link from "next/link";

const font = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const logos = [
  "https://svgl.app/library/github_wordmark_light.svg",
  "https://svgl.app/library/vercel_wordmark.svg",
  "https://svgl.app/library/openai_wordmark_light.svg",
  "https://svgl.app/library/supabase_wordmark_light.svg",
  "https://svgl.app/library/nvidia-wordmark-light.svg",
  "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
];

export default function TaskforceV3() {
  return (
    <main style={{ fontFamily: font, background: "#f3f4ff", color: "#101114", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 90px" }}>
        <nav style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 22 }}>Taskforce v3</div>
          <div style={{ display: "flex", gap: 14 }}>
            <Link href="/taskforce-v2" style={lnk}>v2</Link>
            <Link href="/taskforce" style={lnk}>v1</Link>
            <Link href="/" style={lnk}>All</Link>
          </div>
        </nav>

        <section style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 16, alignItems: "stretch", marginTop: 22 }}>
          <article style={heroCard}>
            <p style={overline}>workflow orchestration</p>
            <h1 style={{ fontSize: 80, lineHeight: 0.92, letterSpacing: "-.04em", margin: "8px 0 12px" }}>Organize your work, effortlessly.</h1>
            <p style={{ fontSize: 20, color: "#5e6675", maxWidth: 640 }}>
              Taskforce transforms conversations, meeting notes, and ticket comments into microtasks with guided workflows and human approval gates.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              <button style={btn}>Start pilot</button>
              <button style={{ ...btn, background: "white", color: "#111", border: "1px solid #e5e8ef" }}>Get implementation plan</button>
            </div>
          </article>
          <article style={{ ...panel, padding: 18 }}>
            <p style={overline}>operations board</p>
            <h3 style={{ margin: "8px 0 0", fontSize: 28, letterSpacing: "-.02em" }}>Execution status</h3>
            <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
              {[
                ["Signals captured", "214", "#16a34a"],
                ["Microtasks auto-created", "61", "#2563eb"],
                ["Approvals pending", "9", "#ca8a04"],
                ["Synced to source tools", "53", "#0891b2"],
              ].map(([t, v, c]) => (
                <div key={t} style={{ background: "#f7f8fd", borderRadius: 12, padding: "10px 12px", display: "flex", justifyContent: "space-between" }}>
                  <span>{t}</span><strong style={{ color: c as string }}>{v}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section style={{ marginTop: 16 }}>
          <div style={{ ...panel, overflow: "hidden" }}>
            <p style={{ ...overline, marginBottom: 12 }}>trusted stack</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0,1fr))", gap: 18, alignItems: "center" }}>
              {logos.map((src) => <img key={src} src={src} alt="logo" style={{ width: "100%", maxHeight: 20, objectFit: "contain", filter: "grayscale(1)" }} />)}
            </div>
          </div>
        </section>

        <section style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 12 }}>
          <div style={{ ...panel, gridColumn: "span 5" }}><p style={overline}>bento</p><h3 style={h3}>Context graph</h3><p style={txt}>All evidence attached: ticket mentions, meeting snippets, and chat decisions.</p></div>
          <div style={{ ...panel, gridColumn: "span 7" }}><p style={overline}>bento</p><h3 style={h3}>Workflow templates</h3><p style={txt}>Reusable flows for requirements updates, handoffs, release checks, and incident follow-up.</p></div>
          <div style={{ ...panel, gridColumn: "span 4" }}><p style={overline}>bento</p><h3 style={h3}>Approval gates</h3><p style={txt}>No blind writes. Human review on every sensitive action.</p></div>
          <div style={{ ...panel, gridColumn: "span 4" }}><p style={overline}>bento</p><h3 style={h3}>Audit trail</h3><p style={txt}>Every AI suggestion remains traceable and reversible.</p></div>
          <div style={{ ...panel, gridColumn: "span 4" }}><p style={overline}>bento</p><h3 style={h3}>Team rollout</h3><p style={txt}>Start with one squad, expand with proven playbooks.</p></div>
        </section>

        <section style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <article style={panel}>
            <h2 style={h2}>Execution timeline</h2>
            <ol style={{ color: "#5f6774", lineHeight: 1.8, marginTop: 6 }}>
              <li>Connect Jira/Azure + comms tools</li>
              <li>Parse signals into ranked microtasks</li>
              <li>Run workflow with contextual suggestions</li>
              <li>Approve and sync to system of record</li>
            </ol>
          </article>
          <article style={panel}>
            <h2 style={h2}>Pilot metrics</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {["Activation", "D1/D3 Retention", "Workflow completion", "Time-to-value"].map((m) => <div key={m} style={{ background: "#f6f8fc", padding: "12px", borderRadius: 10 }}>{m}</div>)}
            </div>
          </article>
        </section>

        <section style={{ marginTop: 16 }}>
          <h2 style={h2}>Pricing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
            {[ ["Pilot", "$990/mo", ["3 integrations", "Weekly onboarding", "Basic analytics"]], ["Growth", "$2,900/mo", ["5 teams", "Workflow library", "Priority support"]], ["Enterprise", "Custom", ["Private deployment", "SSO + ACL", "Security review"]] ].map(([n,p,features],i)=>(
              <article key={n as string} style={{ ...panel, border: i===1 ? "2px solid #3b82f6" : "1px solid #e9edf3" }}>
                <p style={overline}>{n as string}</p>
                <p style={{ fontSize: 42, fontWeight: 700, margin: "8px 0 10px", letterSpacing: "-.03em" }}>{p as string}</p>
                <ul style={{ color: "#5f6774", margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                  {(features as string[]).map((f)=> <li key={f}>{f}</li>)}
                </ul>
                <button style={{ ...btn, width: "100%", marginTop: 14 }}>{n === "Enterprise" ? "Talk to sales" : "Choose plan"}</button>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 16 }}>
          <h2 style={h2}>Customer stories</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
            {[
              ["“We cut context-switching by 42% in 3 weeks.”", "Product Lead, B2B SaaS"],
              ["“Taskforce made our requirement updates actually predictable.”", "Senior Analyst, Fintech"],
              ["“The approval flow solved trust issues around AI edits.”", "Operations Manager"],
            ].map(([quote, role]) => (
              <article key={quote} style={{ ...panel, background: "#111319", color: "white" }}>
                <p style={{ fontSize: 18, lineHeight: 1.45 }}>{quote}</p>
                <p style={{ marginTop: 14, color: "#9aa2b1" }}>{role}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 16 }}>
          <h2 style={h2}>FAQ</h2>
          <div style={{ display: "grid", gap: 8 }}>
            {[
              ["How long does onboarding take?", "Most teams launch in 7–14 days."],
              ["Do you replace Jira/Azure?", "No. Taskforce orchestrates and syncs back."],
              ["Can we run in private infrastructure?", "Yes, enterprise deployment options are supported."],
              ["Can one team start first?", "Yes, pilot one function and scale gradually."],
            ].map(([q,a]) => (
              <details key={q} style={{ ...panel, padding: "14px 16px" }}>
                <summary style={{ cursor: "pointer", fontWeight: 600 }}>{q}</summary>
                <p style={{ marginTop: 8, color: "#5f6774" }}>{a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

const lnk: React.CSSProperties = { color: "#5d6675", textDecoration: "none", fontWeight: 500 };
const overline: React.CSSProperties = { margin: 0, fontSize: 11, textTransform: "uppercase", letterSpacing: ".14em", color: "#6a7282" };
const heroCard: React.CSSProperties = { background: "white", borderRadius: 22, padding: 22, border: "1px solid #e9edf3", boxShadow: "0 18px 26px -22px rgba(0,0,0,.45)" };
const panel: React.CSSProperties = { background: "white", borderRadius: 18, padding: 18, border: "1px solid #e9edf3", boxShadow: "0 16px 24px -20px rgba(0,0,0,.4)" };
const btn: React.CSSProperties = { padding: "12px 18px", borderRadius: 12, border: "none", background: "#3b82f6", color: "white", fontWeight: 600, cursor: "pointer" };
const h2: React.CSSProperties = { margin: "0 0 10px", fontSize: 34, letterSpacing: "-.03em" };
const h3: React.CSSProperties = { margin: "6px 0 8px", fontSize: 24, letterSpacing: "-.02em" };
const txt: React.CSSProperties = { margin: 0, color: "#5f6774" };
