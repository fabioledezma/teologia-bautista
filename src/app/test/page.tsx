"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { niveles, type Question } from "@/data/test";

type Phase = "inicio" | "jugando" | "resultado";
type AnswerMap = Record<number, number[]>;

const coloresNivel: Record<string, string> = {
  basico: "from-emerald-500 to-emerald-700",
  medio: "from-amber-500 to-amber-700",
  dificil: "from-gold to-amber-800",
};

const bgNivel: Record<string, string> = {
  basico: "bg-emerald-900/10 border-emerald-800/20 text-emerald-400",
  medio: "bg-amber-900/10 border-amber-800/20 text-amber-400",
  dificil: "bg-gold/10 border-gold/20 text-gold",
};

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function calcularResultado(respuestas: AnswerMap, preguntas: Question[]) {
  let correctas = 0;
  for (const q of preguntas) {
    const r = respuestas[q.id];
    if (!r) continue;
    const sortedCorrect = [...q.correct].sort().join(",");
    const sortedResp = [...r].sort().join(",");
    if (sortedCorrect === sortedResp) correctas++;
  }
  const total = preguntas.length;
  const pct = Math.round((correctas / total) * 100);
  return { correctas, total, pct };
}

function mensajeAliento(pct: number, nivel: string) {
  if (pct === 100) return "¡Perfecto! Dios te ha dotado de un conocimiento sólido de Su verdad. Sigue creciendo en la gracia y el conocimiento de nuestro Señor Jesucristo.";
  if (pct >= 80) return "¡Excelente trabajo! Tienes una comprensión muy sólida. Recuerda: 'el conocimiento envanece, pero el amor edifica' (1 Co 8:1). Sigue estudiando con humildad.";
  if (pct >= 60) return "¡Bien hecho! Vas por buen camino. La Escritura nos llama a crecer en el conocimiento de Dios. No te detengas — 'creced en la gracia y el conocimiento de nuestro Señor' (2 P 3:18).";
  if (pct >= 40) return "Vas avanzando. La teología es un camino, no un destino. Cada pregunta es una oportunidad para aprender más de nuestro gran Dios. 'Bienaventurados los que tienen hambre y sed de justicia' (Mt 5:6).";
  return "No te desanimes. Todos comenzamos desde algún lugar. Lo importante es tu deseo de aprender. Como dijo Spurgeon: 'La Biblia no fue dada para nuestro entendimiento sino para nuestro crecimiento'. ¡Sigue adelante!";
}

export default function TestPage() {
  const [phase, setPhase] = useState<Phase>("inicio");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [animateIn, setAnimateIn] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showConfetti) {
      const t = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(t);
    }
  }, [showConfetti]);

  const startLevel = useCallback((levelId: string) => {
    const nivel = niveles.find((n) => n.id === levelId)!;
    setSelectedLevel(levelId);
    setShuffledQuestions(shuffleArray(nivel.questions));
    setCurrentQuestion(0);
    setAnswers({});
    setSelected([]);
    setShowExplanation(false);
    setIsCorrect(false);
    setPhase("jugando");
    setAnimateIn(true);
  }, []);

  const toggleOption = (idx: number) => {
    if (showExplanation) return;
    setSelected((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx],
    );
  };

  const confirmAnswer = () => {
    if (selected.length === 0) return;
    const q = shuffledQuestions[currentQuestion];
    const sortedCorrect = [...q.correct].sort().join(",");
    const sortedSelected = [...selected].sort().join(",");
    const correct = sortedCorrect === sortedSelected;
    setIsCorrect(correct);
    setShowExplanation(true);
    setAnswers((prev) => ({ ...prev, [q.id]: selected }));
    setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const nextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setAnimateIn(false);
      setTimeout(() => {
        setCurrentQuestion((p) => p + 1);
        setSelected([]);
        setShowExplanation(false);
        setIsCorrect(false);
        setAnimateIn(true);
      }, 200);
    } else {
      const result = calcularResultado(
        { ...answers, [shuffledQuestions[currentQuestion].id]: selected },
        shuffledQuestions,
      );
      if (result.pct >= 80) setShowConfetti(true);
      setPhase("resultado");
    }
  };

  const volverAlInicio = () => {
    setPhase("inicio");
    setSelectedLevel(null);
    setShowConfetti(false);
  };

  const q = shuffledQuestions[currentQuestion];
  const progreso = shuffledQuestions.length > 0
    ? ((currentQuestion + 1) / shuffledQuestions.length) * 100
    : 0;

  if (phase === "inicio") {
    return (
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-accent/[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgb(var(--color-gold) / 0.08) 0%, transparent 70%)' }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[11px] font-semibold uppercase tracking-[2px] mb-6 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-glow" />
              Pon a Prueba tu Conocimiento
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-text mt-4 mb-6 leading-tight animate-fade-in-up animate-stagger-1">
              ¿Cuánto conoces la{" "}
              <span className="text-gold">Verdad?</span>
            </h1>
            <p className="text-text-2 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-text animate-fade-in-up animate-stagger-2">
              Un examen bíblico, doctrinal e histórico desde una perspectiva
              bautista reformada. No se trata de competir, sino de aprender,
              crecer y maravillarnos juntos de la grandeza de nuestro Dios.
            </p>
          </div>
        </section>

        {/* Level Selection */}
        <section className="pb-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-text">
                Elige tu nivel
              </h2>
              <div className="section-title-line mt-3 mb-3" />
              <p className="text-text-3 text-sm max-w-xl mx-auto">
                Cada nivel tiene 15 preguntas entre verdadero/falso, opción
                única y selección múltiple. Tómate tu tiempo y aprende.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {niveles.map((nivel, i) => (
                <button
                  key={nivel.id}
                  onClick={() => startLevel(nivel.id)}
                  className="group relative bg-surface-card border border-border rounded-2xl overflow-hidden text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + i * 0.15}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${coloresNivel[nivel.id]}`} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] uppercase tracking-[2px] px-2.5 py-0.5 rounded-full border ${bgNivel[nivel.id]}`}>
                        {nivel.tag}
                      </span>
                      <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-110 inline-block transition-transform">
                        {nivel.icon}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-text mb-2 group-hover:text-gold transition-colors">
                      {nivel.label}
                    </h3>
                    <p className="text-text-2 text-xs leading-relaxed">
                      {nivel.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-gold text-xs font-semibold group-hover:gap-3 transition-all">
                      <span>15 preguntas</span>
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (phase === "resultado") {
    const nivel = niveles.find((n) => n.id === selectedLevel)!;
    const result = calcularResultado(answers, shuffledQuestions);

    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: ["#d4af37", "#22c55e", "#3b82f6", "#f59e0b", "#ef4444"][Math.floor(Math.random() * 5)],
                  animationDuration: `${2 + Math.random() * 3}s`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0.7,
                  width: `${6 + Math.random() * 8}px`,
                  height: `${6 + Math.random() * 8}px`,
                }}
              />
            ))}
          </div>
        )}

        <div className="max-w-lg w-full mx-auto animate-fade-in-up" ref={resultRef}>
          <div className="bg-surface-card border border-border rounded-2xl overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${coloresNivel[nivel.id]}`} />
            <div className="p-8 text-center">
              <span className={`text-[10px] uppercase tracking-[2px] px-3 py-1 rounded-full border ${bgNivel[nivel.id]}`}>
                {nivel.label} — Completado
              </span>
              <h2 className="font-serif text-3xl text-text mt-4 mb-2">
                Tu resultado
              </h2>

              {/* Score circle */}
              <div className="relative w-36 h-36 mx-auto my-8">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="rgb(var(--color-border))" strokeWidth="8" />
                  <circle
                    cx="60" cy="60" r="52" fill="none"
                    stroke={result.pct >= 80 ? "rgb(34, 197, 94)" : result.pct >= 60 ? "rgb(var(--color-gold))" : "rgb(239, 68, 68)"}
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 52}`}
                    strokeDashoffset={`${2 * Math.PI * 52 * (1 - result.pct / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="font-serif text-4xl font-bold text-text">{result.pct}%</span>
                  <span className="text-xs text-text-2">{result.correctas}/{result.total}</span>
                </div>
              </div>

              <div className="bg-surface-1 border border-border rounded-xl p-5 text-left mb-6">
                <p className="text-text text-sm leading-relaxed italic">
                  &ldquo;{mensajeAliento(result.pct, nivel.id)}&rdquo;
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => startLevel(nivel.id)}
                  className="px-6 py-3 bg-surface-card border border-border text-text font-medium rounded-xl hover:border-gold hover:text-gold transition text-sm"
                >
                  Reintentar {nivel.label}
                </button>
                <button
                  onClick={volverAlInicio}
                  className="px-6 py-3 bg-gold text-black font-semibold rounded-xl hover:bg-gold-dark transition text-sm"
                >
                  Elegir otro nivel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!q) return null;

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header with progress */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={volverAlInicio}
            className="text-xs text-text-2 hover:text-gold transition flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Salir
          </button>
          <span className="text-[10px] uppercase tracking-wider text-text-3 font-mono">
            {currentQuestion + 1} / {shuffledQuestions.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progreso}%` }}
          />
        </div>

        {/* Question card */}
        <div
          ref={cardRef}
          className={`transition-all duration-300 ${
            animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-surface-card border border-border rounded-2xl overflow-hidden">
            <div className={`h-1.5 bg-gradient-to-r ${coloresNivel[selectedLevel!]}`} />
            <div className="p-6 md:p-8">
              {/* Question type badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-[10px] uppercase tracking-[2px] px-2.5 py-0.5 rounded-full border ${bgNivel[selectedLevel!]}`}>
                  {selectedLevel === "basico" ? "Básico" : selectedLevel === "medio" ? "Medio" : "Difícil"}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-text-3">
                  {q.type === "vf"
                    ? "Verdadero / Falso"
                    : q.type === "unica"
                      ? "Selección única"
                      : "Selección múltiple"}
                </span>
              </div>

              {/* Question text */}
              <h2 className="font-serif text-xl md:text-2xl text-text leading-snug mb-6">
                {q.question}
              </h2>

              {/* Options */}
              <div className="space-y-2.5 mb-6">
                {q.options.map((opt, idx) => {
                  const isSelected = selected.includes(idx);
                  const isCorrectOption = showExplanation && q.correct.includes(idx);
                  const isWrongOption = showExplanation && isSelected && !q.correct.includes(idx);

                  let btnClass = "border-border hover:border-gold/40 hover:bg-surface-1 text-text";

                  if (isSelected && !showExplanation) {
                    btnClass = "border-gold bg-gold/10 text-gold";
                  }
                  if (isCorrectOption && showExplanation) {
                    btnClass = "border-emerald-500 bg-emerald-900/10 text-emerald-400";
                  }
                  if (isWrongOption && showExplanation) {
                    btnClass = "border-red-500 bg-red-900/10 text-red-400";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => toggleOption(idx)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${btnClass} ${
                        showExplanation ? "cursor-default" : "cursor-pointer"
                      }`}
                    >
                      <span className="flex items-start gap-3">
                        {q.type === "vf" ? (
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${isSelected && !showExplanation ? "bg-gold/20 text-gold" : isCorrectOption && showExplanation ? "bg-emerald-900/20 text-emerald-400" : isWrongOption && showExplanation ? "bg-red-900/20 text-red-400" : "bg-surface-1 text-text-3 border border-border"}`}>
                            {idx === 0 ? "V" : "F"}
                          </span>
                        ) : (
                          <span className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 border ${isSelected && !showExplanation ? "bg-gold border-gold text-black" : isCorrectOption && showExplanation ? "bg-emerald-500 border-emerald-500 text-white" : isWrongOption && showExplanation ? "bg-red-500 border-red-500 text-white" : "border-border text-text-3"}`}>
                            {isSelected || isCorrectOption || isWrongOption ? "✓" : String.fromCharCode(65 + idx)}
                          </span>
                        )}
                        <span className="text-text text-sm leading-relaxed">{opt}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Confirm / Next */}
              {!showExplanation ? (
                <button
                  onClick={confirmAnswer}
                  disabled={selected.length === 0}
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    selected.length > 0
                      ? "bg-gold text-black hover:bg-gold-dark"
                      : "bg-border text-text-3 cursor-not-allowed"
                  }`}
                >
                  Confirmar respuesta
                </button>
              ) : (
                <div className="space-y-4">
                  {/* Correct/Incorrect feedback */}
                  <div className={`flex items-center gap-2 px-4 py-3 rounded-xl ${
                    isCorrect
                      ? "bg-emerald-900/10 border border-emerald-800/20 text-emerald-400"
                      : "bg-red-900/10 border border-red-800/20 text-red-400"
                  }`}>
                    {isCorrect ? (
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    )}
                    <span className="text-sm font-semibold">
                      {isCorrect ? "¡Correcto!" : "Incorrecto"}
                    </span>
                  </div>

                  {/* Explanation */}
                  <div className="bg-surface-1 border border-border rounded-xl p-5">
                    <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">Explicación</span>
                    <p className="text-text text-sm leading-relaxed mt-1">{q.explanation}</p>
                    {q.escritura && (
                      <p className="text-text-3 text-xs mt-2 italic">
                        Referencia: {q.escritura}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={nextQuestion}
                    className="w-full py-3 bg-gold text-black font-semibold rounded-xl hover:bg-gold-dark transition-all text-sm"
                  >
                    {currentQuestion < shuffledQuestions.length - 1
                      ? "Siguiente pregunta"
                      : "Ver resultado"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
