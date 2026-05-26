"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import doctrinas from "@/data/doctrinas";
import { herejias } from "@/data/herejias";

type Option = { label: string; action: string; icon?: string };

const filters = [
  { key: "all", label: "Todas" },
  { key: "escritura", label: "Escritura" },
  { key: "dios", label: "Dios" },
  { key: "salvacion", label: "Salvación" },
  { key: "iglesia", label: "Iglesia" },
];

type Step = {
  text: string;
  options?: Option[];
};

const steps: Record<string, Step> = {
  inicio: {
    text: "¿Qué área te gustaría explorar?",
    options: [
      { label: "Doctrinas Esenciales", action: "menu-doctrinas" },
      { label: "Herejías Históricas", action: "menu-herejias" },
      { label: "Confesión 1689", action: "ir-confesion" },
      { label: "Facultad CBTS", action: "ir-facultad" },
      { label: "Ver todo el sitio", action: "scroll-site" },
    ],
  },
  "menu-doctrinas": {
    text: "Elige una categoría de doctrinas:",
    options: filters.map((f) => ({
      label: f.label,
      action: `doctrinas-${f.key}`,
    })),
  },
};

function getDoctrinasByFilter(key: string) {
  return key === "all" ? doctrinas : doctrinas.filter((d) => d.filter === key);
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<{ from: string; text: string; options?: Option[] }[]>([]);
  const [current, setCurrent] = useState("inicio");
  const [showGreeting, setShowGreeting] = useState(true);
  const router = useRouter();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("chatbot-greeting");
    if (seen) setShowGreeting(false);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleOpen = () => {
    setOpen(true);
    if (history.length === 0) {
      const s = steps["inicio"];
      setHistory([{ from: "bot", text: s.text, options: s.options }]);
    }
  };

  const goTo = (action: string) => {
    setShowGreeting(false);
    sessionStorage.setItem("chatbot-greeting", "1");

    if (action === "scroll-site") {
      setOpen(false);
      return;
    }

    if (action === "ir-confesion") {
      setOpen(false);
      router.push("/#confesion");
      return;
    }

    if (action === "ir-facultad") {
      setOpen(false);
      router.push("/#facultad");
      return;
    }

    if (action.startsWith("doctrinas-")) {
      const filterKey = action.replace("doctrinas-", "");
      const items = getDoctrinasByFilter(filterKey);
      const label = filters.find((f) => f.key === filterKey)?.label || "Todas";
      setHistory((prev) => [
        ...prev,
        {
          from: "user",
          text: label,
        },
        {
          from: "bot",
          text: `Estas son las doctrinas en "${label}":`,
          options: items.map((d) => ({
            icon: d.icon,
            label: d.title,
            action: `ir-doctrina-${d.slug}`,
          })),
        },
      ]);
      setCurrent("list-doctrinas");
      return;
    }

    if (action.startsWith("ir-doctrina-")) {
      const slug = action.replace("ir-doctrina-", "");
      setOpen(false);
      router.push(`/doctrina/${slug}`);
      return;
    }

    if (action === "menu-herejias") {
      const eras = [...new Set(herejias.map((h) => h.era))];
      setHistory((prev) => [
        ...prev,
        { from: "user", text: "Herejías Históricas" },
        {
          from: "bot",
          text: "Elige una era histórica:",
          options: eras.map((era) => ({
            label: era,
            action: `herejias-era-${era}`,
          })),
        },
      ]);
      setCurrent("menu-herejias");
      return;
    }

    if (action.startsWith("herejias-era-")) {
      const era = action.replace("herejias-era-", "");
      const items = herejias.filter((h) => h.era === era);
      setHistory((prev) => [
        ...prev,
        { from: "user", text: era },
        {
          from: "bot",
          text: `Herejías del período ${era}:`,
          options: items.map((h) => ({
            icon: h.icon,
            label: `${h.title} (s. ${h.century})`,
            action: `ir-herejia-${h.slug}`,
          })),
        },
      ]);
      setCurrent("list-herejias");
      return;
    }

    if (action.startsWith("ir-herejia-")) {
      const slug = action.replace("ir-herejia-", "");
      setOpen(false);
      router.push(`/herejia/${slug}`);
      return;
    }

    if (action === "volver-inicio") {
      setHistory((prev) => [
        ...prev,
        { from: "user", text: "Volver al inicio" },
        { from: "bot", text: steps["inicio"].text, options: steps["inicio"].options },
      ]);
      setCurrent("inicio");
      return;
    }

    const s = steps[action];
    if (s) {
      setHistory((prev) => [
        ...prev,
        { from: "user", text: s.text },
        { from: "bot", text: s.text, options: s.options },
      ]);
      setCurrent(action);
    }
  };

  return (
    <>
      {showGreeting && !open && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-700">
          <div className="bg-surface-card border border-gold/30 rounded-2xl p-4 shadow-2xl max-w-xs relative mb-3">
            <button
              onClick={() => setShowGreeting(false)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-border text-text-2 text-xs flex items-center justify-center hover:bg-gold hover:text-black transition"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="text-sm text-text leading-relaxed">
              ¿Quieres ayuda para navegar? Te guío por las doctrinas y herejías.
            </p>
            <button
              onClick={handleOpen}
              className="mt-3 w-full bg-gold text-black text-sm font-semibold py-2 rounded-lg hover:bg-gold-dark transition"
            >
              ¡Sí, guíame!
            </button>
          </div>
        </div>
      )}

      {!open && !showGreeting && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold text-black shadow-xl hover:bg-gold-dark transition hover:scale-105 active:scale-95 flex items-center justify-center"
          aria-label="Abrir guía"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-6rem)] bg-surface-1 border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-card rounded-t-2xl">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-sm font-semibold text-text">Guía de Estudio</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-text-2 hover:text-text transition text-lg leading-none"
              aria-label="Cerrar"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin">
            {history.map((msg, i) => (
              <div key={i}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-gold/20 text-text ml-auto rounded-br-md"
                      : "bg-surface-card text-text-2 mr-auto rounded-bl-md border border-border"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.options && (
                  <div className="mt-2 space-y-1.5">
                    {msg.options.map((opt) => (
                      <button
                        key={opt.action}
                        onClick={() => goTo(opt.action)}
                        className="w-full text-left text-sm px-3.5 py-2.5 rounded-xl bg-surface-card text-text border border-border hover:border-gold hover:text-gold transition"
                      >
                        <span>{opt.label}</span>
                      </button>
                    ))}
                    {current !== "inicio" && (
                      <button
                        onClick={() => goTo("volver-inicio")}
                        className="w-full text-left text-xs px-3.5 py-2 rounded-xl bg-transparent text-text-3 border border-dashed border-border hover:text-gold hover:border-gold transition"
                      >
                        Volver al inicio
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-border bg-surface-card rounded-b-2xl">
            <p className="text-[10px] text-text-3 text-center">
              Guía basada en el contenido del sitio — sin conexión a internet
            </p>
          </div>
        </div>
      )}
    </>
  );
}
