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
    text: "¡Bienvenido! Soy tu guía de estudio. ¿Qué área te gustaría explorar?",
    options: [
      { label: "Doctrinas Esenciales", action: "menu-doctrinas", icon: "📖" },
      { label: "Herejías Históricas", action: "menu-herejias", icon: "⚔️" },
      { label: "Confesión 1689", action: "ir-confesion", icon: "📜" },
      { label: "Facultad CBTS", action: "ir-facultad", icon: "🎓" },
      { label: "Ver todo el sitio", action: "scroll-site", icon: "🔍" },
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
          text: `📖 ${label}`,
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
        { from: "user", text: "⚔️ Herejías Históricas" },
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
        { from: "user", text: "← Volver al inicio" },
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
          <div className="bg-[#1a1a2e] border border-[#d4af37]/30 rounded-2xl p-4 shadow-2xl max-w-xs relative mb-3">
            <button
              onClick={() => setShowGreeting(false)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#2a2a3e] text-[#a8a8c0] text-xs flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition"
            >
              ✕
            </button>
            <p className="text-sm text-[#ececf5] leading-relaxed">
              👋 ¿Quieres ayuda para navegar? Te guío por las doctrinas y herejías.
            </p>
            <button
              onClick={handleOpen}
              className="mt-3 w-full bg-[#d4af37] text-black text-sm font-semibold py-2 rounded-lg hover:bg-[#c4a030] transition"
            >
              ¡Sí, guíame!
            </button>
          </div>
        </div>
      )}

      {!open && !showGreeting && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#d4af37] text-black text-2xl shadow-xl hover:bg-[#c4a030] transition hover:scale-105 active:scale-95"
          aria-label="Abrir guía"
        >
          💬
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-6rem)] bg-[#0e0e18] border border-[#2a2a3e] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#2a2a3e] bg-[#1a1a2e] rounded-t-2xl">
            <div className="flex items-center gap-2">
              <span className="text-lg">📚</span>
              <span className="text-sm font-semibold text-[#ececf5]">Guía de Estudio</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[#a8a8c0] hover:text-[#ececf5] transition text-lg leading-none"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin">
            {history.map((msg, i) => (
              <div key={i}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-[#d4af37]/20 text-[#ececf5] ml-auto rounded-br-md"
                      : "bg-[#1a1a2e] text-[#a8a8c0] mr-auto rounded-bl-md border border-[#2a2a3e]"
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
                        className="w-full text-left text-sm px-3.5 py-2.5 rounded-xl bg-[#1a1a2e] text-[#ececf5] border border-[#2a2a3e] hover:border-[#d4af37] hover:text-[#d4af37] transition flex items-center gap-2"
                      >
                        {opt.icon && <span>{opt.icon}</span>}
                        <span>{opt.label}</span>
                      </button>
                    ))}
                    {current !== "inicio" && (
                      <button
                        onClick={() => goTo("volver-inicio")}
                        className="w-full text-left text-xs px-3.5 py-2 rounded-xl bg-transparent text-[#6e6e88] border border-dashed border-[#2a2a3e] hover:text-[#d4af37] hover:border-[#d4af37] transition"
                      >
                        ← Volver al inicio
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-[#2a2a3e] bg-[#1a1a2e] rounded-b-2xl">
            <p className="text-[10px] text-[#6e6e88] text-center">
              Guía basada en el contenido del sitio — sin conexión a internet
            </p>
          </div>
        </div>
      )}
    </>
  );
}
