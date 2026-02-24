"use client";

import Link from "next/link";

const font = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export default function TaskforceV2() {
  return (
    <main style={{ fontFamily: font, background: "#f4f5ff", color: "#101014", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px 80px" }}>
        <nav style={{ padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 22 }}>Taskforce v2</div>
          <div style={{ display: "flex", gap: 14 }}>
            <Link href="/taskforce" style={{ color: "#4b5563", textDecoration: "none" }}>v1</Link>
            <Link href="/" style={{ color: "#4b5563", textDecoration: "none" }}>All</Link>
          </div>
        </nav>

        <section style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 28, alignItems: "end", padding: "40px 0 34px" }}>
          <div>
            <p style={{ fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "#596272" }}>21st-inspired structure</p>
            <h1 style={{ fontSize: 78, lineHeight: .94, letterSpacing: "-.04em", margin: "8px 0 14px", fontWeight: 700 }}>Organize your work, effortlessly.</h1>
            <p style={{ fontSize: 21, color: "#5d6470", maxWidth: 680 }}>
              Taskforce converts noisy communication into clear execution paths with microtasks, workflow automation, and approval gates.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              <button style={btn}>Start pilot</button><button style={{ ...btn, background: "#fff", color: "#111" }}>See platform demo</button>
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: 20, padding: 18, boxShadow: "0 20px 30px -20px rgba(0,0,0,.35)" }}>
            <p style={{ margin: 0, color: "#5b6270", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase" }}>Live status</p>
            <h3 style={{ margin: "8px 0 0", fontSize: 28 }}>Workflow execution board</h3>
            <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
              {[
                ["Inbox parsed", "132 artifacts", "#16a34a"],
                ["Microtasks generated", "34 ready", "#2563eb"],
                ["Human approvals", "7 pending", "#ca8a04"],
              ].map(([a, b, c]) => <div key={a} style={{ background: "#f6f7fb", borderRadius: 12, padding: "10px 12px", display: "flex", justifyContent: "space-between" }}><span>{a}</span><span style={{ color: c as string, fontWeight: 600 }}>{b}</span></div>)}
            </div>
          </div>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12, marginTop: 10 }}>
          {[
            ["Conversation mining", "Extract commitments from calls and chats."],
            ["Context graph", "Link task mentions to docs and decisions."],
            ["Workflow templates", "Standardize recurring operating processes."],
            ["Approval mode", "Critical edits require explicit human consent."],
            ["Audit trail", "Every AI suggestion is tracked and reviewable."],
          ].map(([t, d], i) => (
            <article key={t} style={{ background: "white", borderRadius: 18, padding: 18, border: i===0?"2px solid #3b82f6":"1px solid #eceff3" }}>
              <h3 style={{ margin: 0, fontSize: 20 }}>{t}</h3><p style={{ marginTop: 8, color: "#616977" }}>{d}</p>
            </article>
          ))}
        </section>

        <section style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div style={panel}><h3 style={h3}>Execution timeline</h3><ol style={{ color: "#4b5563", lineHeight: 1.8 }}><li>Capture events from connected tools</li><li>Generate ranked microtasks</li><li>Run workflow with evidence</li><li>Approve and sync back</li></ol></div>
          <div style={panel}><h3 style={h3}>Built for cross-tool stacks</h3><div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}><Slack /><Atlassian /><span style={{ color: "#6b7280" }}>+ Azure / tracker integrations</span></div></div>
        </section>

        <section style={{ marginTop: 26 }}>
          <h2 style={h2}>Pricing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
            {[["Pilot","$990/mo","3 integrations + weekly support"],["Growth","$2,900/mo","5 teams + analytics + templates"],["Enterprise","Custom","Private deployment, SSO, SLA"]].map(([n,p,d],i)=><article key={n} style={{ ...panel, border: i===1?"2px solid #3b82f6":"1px solid #e9edf3"}}><p style={{margin:0,color:'#6b7280',textTransform:'uppercase',fontSize:12}}>{n}</p><p style={{fontSize:38,fontWeight:700,margin:'10px 0'}}>{p}</p><p style={{color:'#616977'}}>{d}</p><button style={{...btn,width:'100%',marginTop:14}}>{n==='Enterprise'?'Talk to sales':'Choose plan'}</button></article>)}
          </div>
        </section>

        <section style={{ marginTop: 26 }}>
          <h2 style={h2}>FAQ</h2>
          <div style={{ display: "grid", gap: 8 }}>
            {[["How fast is onboarding?","Typically 7–14 days for the first working workflow."],["Can we pilot one team?","Yes. Most customers start with product or ops."],["Does it replace Jira/Azure?","No, it orchestrates work and syncs back."]].map(([q,a])=> <details key={q} style={{...panel,padding:'14px 16px'}}><summary style={{fontWeight:600,cursor:'pointer'}}>{q}</summary><p style={{marginTop:8,color:'#616977'}}>{a}</p></details>)}
          </div>
        </section>
      </div>
    </main>
  );
}

const btn: React.CSSProperties = { padding: "12px 20px", borderRadius: 12, background: "#3b82f6", color: "white", border: "none", fontWeight: 600 };
const panel: React.CSSProperties = { background: "white", borderRadius: 18, padding: 18, border: "1px solid #e9edf3", boxShadow: "0 16px 24px -20px rgba(0,0,0,.4)" };
const h2: React.CSSProperties = { fontSize: 36, margin: "0 0 10px", letterSpacing: "-.03em" };
const h3: React.CSSProperties = { margin: "0 0 10px", fontSize: 24, letterSpacing: "-.02em" };

function Slack(){return <svg width="26" height="26" viewBox="0 0 2447.6 2452.5"><path d="M897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8V245.2C1142.4 109.9 1032.8.1 897.4 0M897.4 654H244.8C109.5 654.1-.1 763.9 0 899.2c-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"/></svg>}
function Atlassian(){return <svg width="26" height="26" viewBox="0 0 256 256"><path d="M76 118c-4-4-10-4-13 1L1 245a7 7 0 0 0 6 10h88c3 0 5-1 6-4 19-39 8-98-25-133Z" fill="#0052CC"/><path d="M122 4c-35 56-33 117-10 163l42 84c1 3 4 4 7 4h87a7 7 0 0 0 7-10L134 4c-2-5-9-5-12 0Z" fill="#2681FF"/></svg>}
