"use client";

import { useState } from "react";

interface VerseExample {
  verse: string;
  popular: string;
  context: string;
  teaching: string;
}

interface Props {
  examples: VerseExample[];
}

export default function VerseCompare({ examples }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const e = examples[activeIdx];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {examples.map((ex, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
              i === activeIdx
                ? "bg-gold text-black border-gold shadow-sm"
                : "bg-transparent text-text border-border hover:border-gold hover:text-gold"
            }`}
          >
            {ex.verse}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        <div className="bg-surface-card border border-red-400/30 rounded-xl overflow-hidden">
          <div className="bg-red-500/10 px-4 py-2 border-b border-red-400/20">
            <span className="text-[10px] uppercase tracking-wider text-red-500 font-semibold flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Interpretación popular (incorrecta)
            </span>
          </div>
          <div className="p-4">
            <span className="text-xs font-mono text-gold font-semibold">{e.verse}</span>
            <p className="text-text text-sm mt-1 leading-relaxed">{e.popular}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <svg className="w-6 h-6 text-text-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <div className="bg-surface-card border border-gold/30 rounded-xl overflow-hidden">
          <div className="bg-gold/10 px-4 py-2 border-b border-gold/20">
            <span className="text-[10px] uppercase tracking-wider text-gold font-semibold flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              El contexto verdadero
            </span>
          </div>
          <div className="p-4 space-y-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-text-3 font-semibold">Contexto histórico y literario</span>
              <p className="text-text text-sm mt-0.5 leading-relaxed">{e.context}</p>
            </div>
            <div className="border-t border-border pt-3">
              <span className="text-[10px] uppercase tracking-wider text-text-3 font-semibold">Enseñanza correcta</span>
              <p className="text-gold text-sm mt-0.5 leading-relaxed font-medium">{e.teaching}</p>
            </div>
          </div>
        </div>
      </div>

      {examples.length > 1 && (
        <div className="flex justify-between items-center pt-2">
          <button
            onClick={() => setActiveIdx(Math.max(0, activeIdx - 1))}
            disabled={activeIdx === 0}
            className={`text-xs px-3 py-1.5 rounded-lg border transition flex items-center gap-1 ${
              activeIdx > 0
                ? "border-border text-text hover:border-gold hover:text-gold"
                : "border-transparent text-text/40 cursor-not-allowed"
            }`}
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Anterior
          </button>
          <span className="text-[10px] text-text-3 font-mono">
            {activeIdx + 1} / {examples.length}
          </span>
          <button
            onClick={() => setActiveIdx(Math.min(examples.length - 1, activeIdx + 1))}
            disabled={activeIdx === examples.length - 1}
            className={`text-xs px-3 py-1.5 rounded-lg border transition flex items-center gap-1 ${
              activeIdx < examples.length - 1
                ? "border-border text-text hover:border-gold hover:text-gold"
                : "border-transparent text-text/40 cursor-not-allowed"
            }`}
          >
            Siguiente
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
