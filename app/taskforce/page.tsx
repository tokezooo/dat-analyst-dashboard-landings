"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const s = {
  root: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    WebkitFontSmoothing: "antialiased" as const,
    color: "#1D1D1F",
    lineHeight: "1.5",
    overflowX: "hidden" as const,
    minHeight: "100vh",
  },
  gradientBg: {
    background: `
      radial-gradient(at 0% 0%, rgba(190, 225, 255, 1) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(200, 250, 220, 1) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(220, 200, 255, 1) 0px, transparent 50%),
      radial-gradient(at 0% 100%, rgba(240, 230, 255, 1) 0px, transparent 50%),
      linear-gradient(135deg, #E0F0FF 0%, #F0F4FF 100%)
    `,
    backgroundAttachment: "fixed" as const,
    backgroundSize: "200% 200%",
  },
};

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
    <main style={{ ...s.root, ...s.gradientBg }} className="aurora-bg">
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
            <Btn style={{ padding: "10px 18px", fontSize: 14 }}>Запросить демо</Btn>
          </div>
        </nav>

        <section style={{ padding: "84px 0", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: 58, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>
              Taskforce собирает рабочий хаос в один понятный поток действий.
            </h1>
            <p style={{ marginTop: 18, fontSize: 18, color: "#61616a", maxWidth: 620 }}>
              Встречи, комментарии, чаты и таски превращаются в микрозадачи с прозрачными workflow. Меньше ручного копания,
              больше закрытых дел.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
              <Btn>Запустить пилот</Btn>
              <Btn style={{ background: "#fff", color: "#1D1D1F" }}>Посмотреть workflow</Btn>
            </div>
          </div>

          <div style={{ position: "relative", height: 430 }}>
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: 380,
                height: 390,
                background: "#fff",
                borderRadius: 28,
                boxShadow: "0 18px 40px -12px rgba(0, 0, 0, 0.12)",
                padding: 24,
              }}
              className="float-anim"
            >
              <p style={{ margin: 0, fontSize: 12, color: "#6f6f77", textTransform: "uppercase", letterSpacing: "0.12em" }}>Inbox → Workflow</p>
              <h3 style={{ marginTop: 10, marginBottom: 16, fontSize: 23 }}>Update requirements</h3>
              {["US-142: упоминание в Azure", "Сводка звонка: уточнение KPI", "Чат: подтверждение от PM"].map((x) => (
                <div
                  key={x}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, background: "#f7f8fb", padding: "11px 12px", borderRadius: 10 }}
                >
                  <span style={{ fontSize: 13 }}>{x}</span>
                  <span style={{ fontSize: 11, color: "#6e6e76" }}>context</span>
                </div>
              ))}
              <div style={{ marginTop: 18, display: "grid", gap: 8 }}>
                <div style={{ fontSize: 13, color: "#52525c" }}>✓ Найдены связанные требования</div>
                <div style={{ fontSize: 13, color: "#52525c" }}>✓ Подготовлен черновик правок</div>
                <div style={{ fontSize: 13, color: "#52525c" }}>→ Ожидает подтверждения пользователя</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "24px 0 70px" }}>
          <h2 style={{ fontSize: 40, marginBottom: 10, letterSpacing: "-0.02em" }}>Что дает Taskforce команде</h2>
          <p style={{ fontSize: 17, color: "#666", maxWidth: 700 }}>Сфокусировано на менеджерах и knowledge workers с высокой коммуникационной нагрузкой.</p>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {[
              ["Единый контекст", "Собирает чаты, звонки, таски и документы в одну рабочую ленту без ручного поиска."],
              ["Микрозадачи + workflow", "Автоматически предлагает процесс выполнения и двигает задачу по этапам."],
              ["Контроль и безопасность", "Запись и изменения — только с подтверждением человека. Полная прозрачность шага."],
            ].map(([title, desc]) => (
              <article key={title} style={{ background: "#fff", borderRadius: 24, padding: 24, boxShadow: "0 14px 30px -15px rgba(0,0,0,0.15)" }}>
                <h3 style={{ margin: 0, fontSize: 21 }}>{title}</h3>
                <p style={{ marginTop: 10, fontSize: 15, color: "#666", lineHeight: 1.55 }}>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ padding: "8px 0 80px", textAlign: "center" }}>
          <div style={{ background: "#fff", borderRadius: 28, padding: "42px 24px", boxShadow: "0 14px 30px -15px rgba(0,0,0,0.12)" }}>
            <h3 style={{ fontSize: 30, margin: 0 }}>Готово к тестовому запуску</h3>
            <p style={{ color: "#666", fontSize: 17, marginTop: 10 }}>
              Пилот за 1–2 недели: подключение интеграций, настройка аналитики, запуск первых сценариев и замер воронки.
            </p>
            <div style={{ marginTop: 18 }}>
              <Btn>Обсудить пилот</Btn>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
