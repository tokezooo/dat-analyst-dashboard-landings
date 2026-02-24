"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const sfStack =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const Btn = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px 28px",
        backgroundColor: hovered ? "#0062cc" : "#007AFF",
        color: "white",
        fontWeight: 600,
        fontSize: "16px",
        borderRadius: "14px",
        border: "none",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 10px 20px -5px rgba(0, 122, 255, 0.4)" : "none",
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
};

const Card = ({ title, body }: { title: string; body: string }) => (
  <article
    style={{
      background: "white",
      borderRadius: 24,
      padding: 24,
      boxShadow: "0 14px 30px -15px rgba(0,0,0,0.15)",
      border: "1px solid rgba(0,0,0,0.04)",
    }}
  >
    <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 700 }}>{title}</h3>
    <p style={{ marginTop: 12, fontSize: 15, color: "#666", lineHeight: 1.55 }}>{body}</p>
  </article>
);

export default function TaskforceLandingPage() {
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      @keyframes float {0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-16px)}}
      @keyframes aurora {0%{background-position:0% 0%}100%{background-position:100% 100%}}
      .float-anim{animation:float 6s ease-in-out infinite}
      .aurora-bg{animation:aurora 18s ease infinite alternate;background-size:200% 200%}
    `;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <main
      style={{
        fontFamily: sfStack,
        WebkitFontSmoothing: "antialiased",
        color: "#1D1D1F",
        lineHeight: "1.5",
        overflowX: "hidden",
        minHeight: "100vh",
        background: `
          radial-gradient(at 0% 0%, rgba(190, 225, 255, 1) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(200, 250, 220, 1) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgba(220, 200, 255, 1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(240, 230, 255, 1) 0px, transparent 50%),
          linear-gradient(135deg, #E0F0FF 0%, #F0F4FF 100%)
        `,
        backgroundAttachment: "fixed",
      }}
      className="aurora-bg"
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <nav
          style={{
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 10,
            backdropFilter: "blur(20px)",
          }}
        >
          <div style={{ display: "flex", gap: 10, alignItems: "center", fontWeight: 700, fontSize: 22 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "#007AFF" }} /> Taskforce
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/" style={{ color: "#666", textDecoration: "none", fontWeight: 500 }}>
              All landings
            </Link>
            <Btn style={{ padding: "10px 18px", fontSize: 14 }}>Book demo</Btn>
          </div>
        </nav>

        <section style={{ padding: "90px 0", display: "grid", gridTemplateColumns: "1.12fr 1fr", gap: 52, alignItems: "center" }}>
          <div>
            <h1
              style={{
                fontSize: 80,
                lineHeight: 0.95,
                letterSpacing: "-0.035em",
                margin: 0,
                fontWeight: 700,
                maxWidth: 680,
              }}
            >
              Organize your work, effortlessly.
            </h1>
            <p style={{ marginTop: 18, fontSize: 18, color: "#61616a", maxWidth: 620 }}>
              Taskforce turns messy chats, meetings, and ticket comments into clear next actions with built-in workflows.
              Less context switching. More shipped work.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
              <Btn>Start pilot</Btn>
              <Btn style={{ background: "#fff", color: "#1D1D1F" }}>See live walkthrough</Btn>
            </div>
          </div>

          <div style={{ position: "relative", height: 430 }}>
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: 390,
                height: 400,
                background: "#fff",
                borderRadius: 28,
                boxShadow: "0 18px 40px -12px rgba(0, 0, 0, 0.12)",
                padding: 24,
              }}
              className="float-anim"
            >
              <p style={{ margin: 0, fontSize: 12, color: "#6f6f77", textTransform: "uppercase", letterSpacing: "0.12em" }}>Inbox → Workflow</p>
              <h3 style={{ marginTop: 10, marginBottom: 16, fontSize: 23, fontWeight: 700 }}>Update requirements</h3>
              {["US-142 mention in Azure", "Meeting note: KPI clarified", "PM comment from Telegram"].map((x) => (
                <div
                  key={x}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, background: "#f7f8fb", padding: "11px 12px", borderRadius: 10 }}
                >
                  <span style={{ fontSize: 13 }}>{x}</span>
                  <span style={{ fontSize: 11, color: "#6e6e76" }}>context</span>
                </div>
              ))}
              <div style={{ marginTop: 18, display: "grid", gap: 8 }}>
                <div style={{ fontSize: 13, color: "#52525c" }}>✓ Related requirements found</div>
                <div style={{ fontSize: 13, color: "#52525c" }}>✓ Draft changes prepared</div>
                <div style={{ fontSize: 13, color: "#52525c" }}>→ Waiting for user approval</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "10px 0 70px" }}>
          <h2 style={{ fontSize: 44, marginBottom: 10, letterSpacing: "-0.03em", fontWeight: 700 }}>Why teams choose Taskforce</h2>
          <p style={{ fontSize: 17, color: "#666", maxWidth: 700 }}>Built for product managers, analysts, founders, and operations teams with heavy communication load.</p>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            <Card title="Unified context" body="Combines chats, calls, ticket threads, and docs in one operational view—no manual hunting." />
            <Card title="Microtasks + workflows" body="Converts mentions and updates into executable microtasks and attaches the right workflow instantly." />
            <Card title="Human-in-control" body="Reads can be automatic. Writes and edits require explicit approval, with clear traceability." />
          </div>
        </section>

        <section style={{ padding: "8px 0 70px" }}>
          <h2 style={{ fontSize: 40, marginBottom: 16, letterSpacing: "-0.03em", fontWeight: 700 }}>How it works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              ["1. Connect", "Attach your tools: ticket tracker, chat, call notes, docs."],
              ["2. Capture", "Taskforce listens for mentions, updates, and decision points."],
              ["3. Execute", "Run workflow steps with suggested edits and context-aware guidance."],
              ["4. Close", "Approve and sync outcomes back to your systems of record."],
            ].map(([title, desc]) => (
              <Card key={title} title={title} body={desc} />
            ))}
          </div>
        </section>

        <section style={{ padding: "8px 0 70px" }}>
          <h2 style={{ fontSize: 40, marginBottom: 16, letterSpacing: "-0.03em", fontWeight: 700 }}>Key use cases</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Card title="Requirements updates" body="From one ticket mention to reviewed requirement changes, with confidence scoring and revision history." />
            <Card title="Manager daily command list" body="Generate one prioritized list from Telegram, Slack, calls, and comments, then execute in sequence." />
            <Card title="Cross-team follow-up" body="Never lose promised actions from calls—Taskforce promotes commitments into trackable tasks." />
            <Card title="Workflow standardization" body="Turn ad-hoc routines into reusable workflows for onboarding, handoffs, and reviews." />
          </div>
        </section>

        <section style={{ padding: "8px 0 70px" }}>
          <h2 style={{ fontSize: 40, marginBottom: 16, letterSpacing: "-0.03em", fontWeight: 700 }}>Security & deployment options</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <Card title="Permission-aware access" body="Taskforce operates within each user’s access rights and cannot exceed system-level ACLs." />
            <Card title="Provider flexibility" body="Use approved LLM providers by region and policy, or route through enterprise-approved models." />
            <Card title="On-prem possible" body="For sensitive environments, run deployment inside your corporate perimeter with internal policies." />
          </div>
        </section>

        <section style={{ padding: "8px 0 70px" }}>
          <h2 style={{ fontSize: 40, marginBottom: 16, letterSpacing: "-0.03em", fontWeight: 700 }}>Pilot success metrics</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            <Card title="Activation" body="% of users who complete first integration and create first microtask." />
            <Card title="Retention" body="D1/D3 returns after first value and repeated workflow usage." />
            <Card title="Workflow completion" body="From microtask created → workflow started → approved outcome." />
            <Card title="Time-to-value" body="Minutes from first login to first meaningful result." />
          </div>
        </section>

        <section style={{ padding: "8px 0 90px", textAlign: "center" }}>
          <div style={{ background: "#fff", borderRadius: 28, padding: "44px 24px", boxShadow: "0 14px 30px -15px rgba(0,0,0,0.12)" }}>
            <h3 style={{ fontSize: 34, margin: 0, letterSpacing: "-0.02em", fontWeight: 700 }}>Ready for a fast pilot</h3>
            <p style={{ color: "#666", fontSize: 17, marginTop: 10 }}>
              1–2 weeks setup: integrations, event analytics, first workflows, and measurable funnel outcomes.
            </p>
            <div style={{ marginTop: 18, display: "flex", gap: 12, justifyContent: "center" }}>
              <Btn>Book pilot call</Btn>
              <Btn style={{ background: "#fff", color: "#1D1D1F" }}>Get implementation plan</Btn>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
