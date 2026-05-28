"use client";

import { useState, useCallback, useMemo } from "react";
import {
  sections,
  calculateResults,
  scaleLabels,
} from "@/data/test-avanzado";

type Phase = "inicio" | "jugando" | "resultado";

const allQuestions = sections.flatMap((s) =>
  s.questions.map((q) => ({ ...q, sectionId: s.id, sectionLabel: s.label, sectionDescription: s.description }))
);

const sectionColors: Record<string, string> = {
  autoridad: "from-blue-600 to-indigo-700",
  naturaleza: "from-rose-600 to-pink-700",
  salvacion: "from-emerald-600 to-teal-700",
  gracia: "from-violet-600 to-purple-700",
  perseverancia: "from-amber-600 to-orange-700",
  evangelismo: "from-sky-600 to-cyan-700",
  iglesia: "from-gold to-amber-700",
  hermeneutica: "from-slate-600 to-gray-700",
  escatologia: "from-lime-600 to-green-700",
  casos: "from-gold-dark to-amber-800",
};

const sectionBgBadge: Record<string, string> = {
  autoridad: "bg-blue-900/10 border-blue-800/20 text-blue-400",
  naturaleza: "bg-rose-900/10 border-rose-800/20 text-rose-400",
  salvacion: "bg-emerald-900/10 border-emerald-800/20 text-emerald-400",
  gracia: "bg-violet-900/10 border-violet-800/20 text-violet-400",
  perseverancia: "bg-amber-900/10 border-amber-800/20 text-amber-400",
  evangelismo: "bg-sky-900/10 border-sky-800/20 text-sky-400",
  iglesia: "bg-gold/10 border-gold/20 text-gold",
  hermeneutica: "bg-slate-900/10 border-slate-800/20 text-slate-400",
  escatologia: "bg-lime-900/10 border-lime-800/20 text-lime-400",
  casos: "bg-gold-dark/10 border-gold-dark/20 text-gold-dark",
};

export default function TestAvanzadoPage() {
  const [phase, setPhase] = useState<Phase>("inicio");
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const [confirmed, setConfirmed] = useState(false);
  const [animateIn, setAnimateIn] = useState(true);

  const totalQuestions = allQuestions.length;
  const q = allQuestions[currentQ];

  const progress = ((currentQ + 1) / totalQuestions) * 100;
  const currentSectionIndex = sections.findIndex((s) => s.id === q?.sectionId);
  const sectionsCompleted = sections.filter(
    (s) =>
      s.questions.every((qq) => answers[qq.id] !== undefined) ||
      sections.indexOf(s) < currentSectionIndex
  ).length;

  const handleSelect = useCallback(
    (idx: number) => {
      if (confirmed) return;
      setSelected(idx);
    },
    [confirmed],
  );

  const handleConfirm = useCallback(() => {
    if (selected === null) return;
    setAnswers((prev) => ({ ...prev, [q.id]: [selected] }));
    setConfirmed(true);
  }, [selected, q]);

  const handleNext = useCallback(() => {
    if (currentQ < totalQuestions - 1) {
      setAnimateIn(false);
      setTimeout(() => {
        setCurrentQ((p) => p + 1);
        setSelected(null);
        setConfirmed(false);
        setAnimateIn(true);
      }, 200);
    } else {
      setPhase("resultado");
    }
  }, [currentQ, totalQuestions]);

  const result = useMemo(() => {
    if (phase !== "resultado") return null;
    return calculateResults(answers);
  }, [phase, answers]);

  const resetTest = () => {
    setPhase("inicio");
    setCurrentQ(0);
    setSelected(null);
    setAnswers({});
    setConfirmed(false);
    setAnimateIn(true);
  };

  // Radar chart helpers
  const RADAR_SIZE = 220;
  const RADAR_CENTER = RADAR_SIZE / 2;
  const RADAR_RADIUS = RADAR_CENTER - 24;
  const radarAxes = scaleLabels.map((_, i) => ({
    angle: (2 * Math.PI * i) / scaleLabels.length - Math.PI / 2,
    label: scaleLabels[i].label,
    color: scaleLabels[i].color,
  }));

  const radarPoints = result
    ? result.radarData
        .map((d, i) => {
          const angle = radarAxes[i].angle;
          const value = Math.min(1, d.value / 100);
          const x = RADAR_CENTER + RADAR_RADIUS * value * Math.cos(angle);
          const y = RADAR_CENTER + RADAR_RADIUS * value * Math.sin(angle);
          return `${x},${y}`;
        })
        .join(" ")
    : "";

  // Phase: Inicio
  if (phase === "inicio") {
    return (
      <div className="min-h-screen">
        <section className="relative py-24 md:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-accent/[0.03]" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgb(var(--color-gold) / 0.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[11px] font-semibold uppercase tracking-[2px] mb-6 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-glow" />
              Evaluación Doctrinal Integral
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-text mt-4 mb-6 leading-tight animate-fade-in-up animate-stagger-1">
              Test{" "}
              <span className="text-gold">Teológico</span> Avanzado
            </h1>
            <p className="text-text-2 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-text animate-fade-in-up animate-stagger-2">
              Un diagnóstico completo de tu perfil teológico basado en más de 55
              preguntas distribuidas en 10 categorías. Este test no tiene
              respuestas incorrectas — busca identificar tus tendencias
              doctrinales con precisión y ayudarte a crecer en el conocimiento de
              Dios.
            </p>
          </div>
        </section>

        <section className="pb-24 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-surface-card border border-border rounded-xl p-5 text-center">
                <span className="text-2xl font-serif font-bold text-gold block mb-1">10</span>
                <span className="text-xs text-text-3 uppercase tracking-wider">Categorías</span>
              </div>
              <div className="bg-surface-card border border-border rounded-xl p-5 text-center">
                <span className="text-2xl font-serif font-bold text-gold block mb-1">55+</span>
                <span className="text-xs text-text-3 uppercase tracking-wider">Preguntas</span>
              </div>
              <div className="bg-surface-card border border-border rounded-xl p-5 text-center">
                <span className="text-2xl font-serif font-bold text-gold block mb-1">14</span>
                <span className="text-xs text-text-3 uppercase tracking-wider">Ejes de Puntuación</span>
              </div>
              <div className="bg-surface-card border border-border rounded-xl p-5 text-center">
                <span className="text-2xl font-serif font-bold text-gold block mb-1">11</span>
                <span className="text-xs text-text-3 uppercase tracking-wider">Perfiles Detectables</span>
              </div>
            </div>

            <div className="bg-surface-card border border-border rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="font-serif text-xl text-text mb-4">Antes de comenzar</h2>
              <ul className="space-y-3 text-sm text-text-2 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                  <span>Responde con honestidad, no como crees que <em className="text-text">deberías</em> responder. El test mide tus tendencias reales.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                  <span>Cada pregunta tiene una sola respuesta. Elige la opción que <em className="text-text">más se acerque</em> a tu posición, aunque no coincida perfectamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                  <span>Tómate tu tiempo. No hay límite de tiempo. Reflexiona antes de responder.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                  <span>Al final recibirás un perfil detallado con tu tendencia principal, tendencias secundarias, nivel de consistencia y recomendaciones de estudio.</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={() => {
                  setPhase("jugando");
                  setAnimateIn(true);
                }}
                className="px-8 py-4 bg-gold text-black font-semibold rounded-xl hover:bg-gold-dark transition-all text-base shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
              >
                Comenzar test avanzado
              </button>
              <p className="text-text-3 text-xs mt-3">~20-30 minutos para completar</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Phase: Resultado
  if (phase === "resultado" && result) {
    return (
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Main Profile */}
          <div className="bg-surface-card border border-border rounded-2xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-gold to-gold-dark" />
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[2px] text-gold font-semibold">
                    Perfil Principal
                  </span>
                  <h1 className="font-serif text-2xl md:text-3xl text-text mt-1">
                    {result.mainProfile.label}
                  </h1>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-xs text-text-3 uppercase tracking-wider">Puntaje</span>
                    <span className="block text-2xl font-bold font-serif text-gold">{result.mainProfile.score}%</span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/20 flex items-center justify-center">
                    <span className="text-2xl font-bold font-serif text-gold">{result.mainProfile.score}</span>
                  </div>
                </div>
              </div>

              <p className="text-text-2 text-sm leading-relaxed mb-6">
                {result.mainProfile.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-emerald-900/5 border border-emerald-800/10 rounded-xl p-4">
                  <h3 className="text-emerald-400 text-[10px] uppercase tracking-wider font-semibold mb-2">Fortalezas</h3>
                  <ul className="space-y-1.5">
                    {result.mainProfile.strengths.map((s, i) => (
                      <li key={i} className="text-text-2 text-xs leading-relaxed flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-900/5 border border-amber-800/10 rounded-xl p-4">
                  <h3 className="text-amber-400 text-[10px] uppercase tracking-wider font-semibold mb-2">Advertencias</h3>
                  <ul className="space-y-1.5">
                    {result.mainProfile.warnings.map((s, i) => (
                      <li key={i} className="text-text-2 text-xs leading-relaxed flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5">!</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {result.mainProfile.studySuggestions.length > 0 && (
                <div className="bg-surface-1 border border-border rounded-xl p-4">
                  <h3 className="text-gold text-[10px] uppercase tracking-wider font-semibold mb-2">Sugerencias de Estudio</h3>
                  <ul className="space-y-1">
                    {result.mainProfile.studySuggestions.map((s, i) => (
                      <li key={i} className="text-text-2 text-xs leading-relaxed flex items-start gap-2">
                        <span className="text-gold mt-0.5">&rarr;</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Consistency */}
          <div className="bg-surface-card border border-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[10px] uppercase tracking-[2px] text-gold font-semibold">
                Consistencia Teológica
              </span>
            </div>
            <h2 className="font-serif text-xl text-text mb-1">{result.consistencyLevel}</h2>
            <p className="text-text-2 text-sm leading-relaxed">{result.consistencyDescription}</p>
          </div>

          {/* Radar Chart + Percentages */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Radar Chart */}
            <div className="bg-surface-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-lg text-text mb-4 text-center">
                Mapa Teológico
              </h3>
              <div className="flex justify-center">
                <svg width={RADAR_SIZE} height={RADAR_SIZE} className="overflow-visible">
                  {/* Grid circles */}
                  {[0.25, 0.5, 0.75, 1].map((level) => (
                    <circle
                      key={level}
                      cx={RADAR_CENTER}
                      cy={RADAR_CENTER}
                      r={RADAR_RADIUS * level}
                      fill="none"
                      stroke="rgb(var(--color-border) / 0.3)"
                      strokeWidth={1}
                    />
                  ))}
                  {/* Axis lines */}
                  {radarAxes.map((axis, i) => (
                    <line
                      key={i}
                      x1={RADAR_CENTER}
                      y1={RADAR_CENTER}
                      x2={RADAR_CENTER + RADAR_RADIUS * Math.cos(axis.angle)}
                      y2={RADAR_CENTER + RADAR_RADIUS * Math.sin(axis.angle)}
                      stroke="rgb(var(--color-border) / 0.3)"
                      strokeWidth={1}
                    />
                  ))}
                  {/* Data polygon */}
                  {result.radarData.some((d) => d.value > 0) && (
                    <polygon
                      points={radarPoints}
                      fill="rgb(var(--color-gold) / 0.15)"
                      stroke="rgb(var(--color-gold))"
                      strokeWidth={2}
                    />
                  )}
                  {/* Axis labels */}
                  {radarAxes.map((axis, i) => {
                    const labelR = RADAR_RADIUS + 18;
                    const lx = RADAR_CENTER + labelR * Math.cos(axis.angle);
                    const ly = RADAR_CENTER + labelR * Math.sin(axis.angle);
                    const isLeft = axis.angle > Math.PI / 2 && axis.angle < (3 * Math.PI) / 2;
                    return (
                      <text
                        key={i}
                        x={lx}
                        y={ly}
                        textAnchor={isLeft ? "end" : "start"}
                        dominantBaseline="middle"
                        fill="rgb(var(--color-text-2, 120 120 120))"
                        fontSize={7}
                        fontFamily="system-ui"
                      >
                        {axis.label}
                      </text>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Percentage Bars */}
            <div className="bg-surface-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-lg text-text mb-4">
                Puntuación por Eje
              </h3>
              <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                {result.percentages.map((p, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs text-text-2">{p.label}</span>
                      <span className="text-xs font-mono text-text">{p.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${p.value}%`,
                          backgroundColor: p.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Tendencies */}
          {result.secondaryTendencies.length > 0 && (
            <div className="bg-surface-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-lg text-text mb-4">
                Tendencias Secundarias
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {result.secondaryTendencies.map((t, i) => (
                  <div key={t.id} className="bg-surface-1 border border-border rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-text-2 uppercase tracking-wider">
                        #{i + 1}
                      </span>
                      <span className="text-sm font-bold font-serif text-gold">{t.score}%</span>
                    </div>
                    <h4 className="text-sm font-semibold text-text mb-1">{t.label}</h4>
                    <p className="text-xs text-text-2 leading-relaxed">{t.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={resetTest}
              className="px-6 py-3 bg-surface-card border border-border text-text font-medium rounded-xl hover:border-gold hover:text-gold transition text-sm"
            >
              Volver a tomar el test
            </button>
            <a
              href="/test"
              className="px-6 py-3 bg-gold text-black font-semibold rounded-xl hover:bg-gold-dark transition text-sm text-center"
            >
              Ir al test básico
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Phase: Jugando
  if (!q) return null;

  const sectionGrad = sectionColors[q.sectionId] || "from-gold to-amber-700";
  const sectionBadge = sectionBgBadge[q.sectionId] || "bg-gold/10 border-gold/20 text-gold";

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={resetTest}
            className="text-xs text-text-2 hover:text-gold transition flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Salir
          </button>
          <span className="text-[10px] uppercase tracking-wider text-text-3 font-mono">
            {currentQ + 1} / {totalQuestions}
          </span>
        </div>

        {/* Section indicator */}
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[10px] uppercase tracking-[2px] px-2 py-0.5 rounded-full border ${sectionBadge}`}>
            {q.sectionLabel}
          </span>
          <span className="text-[10px] text-text-3 truncate">
            Sección {currentSectionIndex + 1} de {sections.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Section progress mini dots */}
        <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-1">
          {sections.map((s, i) => {
            const isDone = s.questions.every((qq) => answers[qq.id] !== undefined);
            const isCurrent = i === currentSectionIndex;
            return (
              <div
                key={s.id}
                className={`flex-1 min-w-[8px] h-1.5 rounded-full transition-all duration-300 ${
                  isDone
                    ? "bg-gold"
                    : isCurrent
                      ? "bg-gold/50"
                      : "bg-border"
                }`}
                title={s.label}
              />
            );
          })}
        </div>

        {/* Question card */}
        <div
          className={`transition-all duration-300 ${
            animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-surface-card border border-border rounded-2xl overflow-hidden">
            <div className={`h-1.5 bg-gradient-to-r ${sectionGrad}`} />
            <div className="p-6 md:p-8">
              <h2 className="font-serif text-xl md:text-2xl text-text leading-snug mb-6">
                {q.question}
              </h2>

              {/* Options */}
              <div className="space-y-2.5 mb-6">
                {q.options.map((opt, idx) => {
                  const isSelected = selected === idx;
                  const isConfirmedOpt = confirmed && isSelected;

                  let btnClass = "border-border hover:border-gold/40 hover:bg-surface-1 text-text";

                  if (isSelected && !confirmed) {
                    btnClass = "border-gold bg-gold/10 text-gold";
                  }
                  if (isConfirmedOpt) {
                    btnClass = "border-gold bg-gold/15 text-gold ring-1 ring-gold/30";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={confirmed}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${btnClass} ${
                        confirmed ? "cursor-default" : "cursor-pointer"
                      }`}
                    >
                      <span className="flex items-start gap-3">
                        <span
                          className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 border transition-colors ${
                            isSelected || isConfirmedOpt
                              ? "bg-gold border-gold text-black"
                              : "border-border text-text-3"
                          }`}
                        >
                          {isSelected || isConfirmedOpt ? "✓" : String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-text text-sm leading-relaxed">{opt.text}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Confirm / Next */}
              {!confirmed ? (
                <button
                  onClick={handleConfirm}
                  disabled={selected === null}
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    selected !== null
                      ? "bg-gold text-black hover:bg-gold-dark"
                      : "bg-border text-text-3 cursor-not-allowed"
                  }`}
                >
                  Confirmar respuesta
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-gold text-black font-semibold rounded-xl hover:bg-gold-dark transition-all text-sm"
                >
                  {currentQ < totalQuestions - 1
                    ? "Siguiente pregunta"
                    : "Ver resultado"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
