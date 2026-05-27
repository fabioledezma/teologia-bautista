"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import doctrinas from "@/data/doctrinas";
import { herejias } from "@/data/herejias";
import confessionChapters from "@/data/confesion";

type Option = { label: string; action: string };

const doctrinaFilters = [
  { key: "all", label: "Todas" },
  { key: "escritura", label: "Escritura" },
  { key: "dios", label: "Dios" },
  { key: "salvacion", label: "Salvación" },
  { key: "iglesia", label: "Iglesia" },
  { key: "escatologia", label: "Escatología" },
];

const pdfPages: Record<number, number> = {
  0: 8, 1: 11, 2: 12, 3: 13, 4: 14,
  5: 16, 6: 17, 7: 17, 8: 20, 9: 21,
  10: 22, 11: 23, 12: 23, 13: 24, 14: 25,
  15: 26, 16: 27, 17: 28, 18: 30, 19: 31,
  20: 32, 21: 33, 22: 35, 23: 36, 24: 37,
  25: 37, 26: 40, 27: 41, 28: 42, 29: 39,
  30: 44, 31: 45, 32: 45,
};
const pdfUrl = "https://www.chapellibrary.org/pdf/books/lbcos.pdf";

function getDoctrinasByFilter(key: string) {
  return key === "all" ? doctrinas : doctrinas.filter((d) => d.filter === key);
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<{ from: string; text: string; options?: Option[] }[]>([]);
  const [stepStack, setStepStack] = useState<string[]>(["inicio"]);
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
      setHistory([{ from: "bot", text: "¿Qué área te gustaría explorar?", options: inicioOptions }]);
    }
  };

  const inicioOptions: Option[] = [
    { label: "Doctrinas Esenciales", action: "menu-doctrinas" },
    { label: "Errores Doctrinales", action: "menu-herejias" },
    { label: "Confesión 1689", action: "menu-confesion" },
    { label: "Recursos Recomendados", action: "menu-recursos" },
    { label: "Facultad CBTS", action: "ir-facultad" },
    { label: "Historia de la Iglesia", action: "ir-historia" },
  ];

  const pushBot = (text: string, options: Option[], nextStep: string) => {
    setHistory((prev) => [...prev, { from: "bot", text, options }]);
    setStepStack((prev) => [...prev, nextStep]);
  };

  const goTo = (action: string) => {
    setShowGreeting(false);
    sessionStorage.setItem("chatbot-greeting", "1");

    // --- Scroll / navigate actions ---
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
    if (action === "ir-recursos") {
      setOpen(false);
      router.push("/#recursos");
      return;
    }
    if (action === "ir-historia") {
      setOpen(false);
      router.push("/historia");
      return;
    }

    // --- Doctrina navigation ---
    if (action.startsWith("ir-doctrina-")) {
      setOpen(false);
      router.push(`/doctrina/${action.replace("ir-doctrina-", "")}`);
      return;
    }

    // --- Herejia navigation ---
    if (action.startsWith("ir-herejia-")) {
      setOpen(false);
      router.push(`/herejia/${action.replace("ir-herejia-", "")}`);
      return;
    }

    // --- Back ---
    if (action === "volver") {
      const prev = stepStack.slice(0, -1);
      const currentStep = prev[prev.length - 1] || "inicio";
      const s = stepContent(currentStep);
      if (s) {
        setHistory((prevH) => [...prevH, { from: "user", text: "Volver" }, { from: "bot", text: s.text, options: s.options }]);
        setStepStack(prev);
      }
      return;
    }

    // --- Menu: Doctrinas ---
    if (action === "menu-doctrinas") {
      pushBot("Elige una categoría de doctrinas:", doctrinaFilters.map((f) => ({ label: f.label, action: `doctrinas-${f.key}` })), action);
      return;
    }

    if (action.startsWith("doctrinas-")) {
      const filterKey = action.replace("doctrinas-", "");
      const items = getDoctrinasByFilter(filterKey);
      const label = doctrinaFilters.find((f) => f.key === filterKey)?.label || "Todas";
      setHistory((prev) => [
        ...prev,
        { from: "user", text: label },
        {
          from: "bot",
          text: `Doctrinas en "${label}":`,
          options: items.map((d) => ({ label: d.title, action: `ir-doctrina-${d.slug}` })),
        },
      ]);
      setStepStack((prev) => [...prev, `list-doctrinas-${filterKey}`]);
      return;
    }

    // --- Menu: Herejías ---
    if (action === "menu-herejias") {
      const eras = [...new Set(herejias.map((h) => h.era))];
      pushBot("Elige una era histórica:", eras.map((era) => ({ label: era, action: `herejias-era-${era}` })), action);
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
          text: `Errores del período ${era}:`,
          options: items.map((h) => ({ label: `${h.title} (s. ${h.century})`, action: `ir-herejia-${h.slug}` })),
        },
      ]);
      setStepStack((prev) => [...prev, `list-herejias-${era}`]);
      return;
    }

    // --- Menu: Confesión 1689 (show chapters) ---
    if (action === "menu-confesion") {
      pushBot(
        "La Confesión Bautista de Fe de 1689 tiene 32 capítulos. Elige uno para leerlo:",
        confessionChapters.map((ch, i) => ({ label: `${i + 1}. ${ch}`, action: `confesion-cap-${i}` })),
        action
      );
      return;
    }

    if (action.startsWith("confesion-cap-")) {
      const idx = parseInt(action.replace("confesion-cap-", ""), 10);
      setOpen(false);
      window.open(`${pdfUrl}#page=${pdfPages[idx]}`, "_blank", "noopener");
      return;
    }

    // --- Menu: Recursos ---
    if (action === "menu-recursos") {
      pushBot(
        "Recursos recomendados para profundizar en las doctrinas de la gracia:",
        [
          { label: "Ir a la sección Recursos", action: "ir-recursos" },
          { label: "Libros recomendados", action: "recursos-libros" },
          { label: "Recursos en línea", action: "recursos-web" },
        ],
        action
      );
      return;
    }

    // --- Volver al inicio ---
    if (action === "inicio") {
      setHistory((prev) => [
        ...prev,
        { from: "user", text: "Volver al inicio" },
        { from: "bot", text: "¿Qué área te gustaría explorar?", options: inicioOptions },
      ]);
      setStepStack(["inicio"]);
      return;
    }
  };

  function stepContent(step: string): { text: string; options: Option[] } | null {
    if (step === "inicio") return { text: "¿Qué área te gustaría explorar?", options: inicioOptions };
    return null;
  }

  const currentStep = stepStack[stepStack.length - 1];
  const canGoBack = stepStack.length > 1;

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
            <p className="text-sm text-text leading-relaxed break-words">
              Si tienes preguntas sobre doctrinas, herejías o historia cristiana, puedo ayudarte a encontrar respuestas.
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
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="px-4 py-2 border-t border-border bg-surface-card rounded-b-2xl flex items-center justify-between">
            {canGoBack ? (
              <button
                onClick={() => goTo("volver")}
                className="text-xs text-text-3 hover:text-gold transition flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Volver
              </button>
            ) : <div />}
            {currentStep !== "inicio" && (
              <button
                onClick={() => goTo("inicio")}
                className="text-xs text-text-3 hover:text-gold transition"
              >
                Inicio
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
