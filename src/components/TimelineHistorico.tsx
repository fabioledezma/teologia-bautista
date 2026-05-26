"use client";

import { useState } from "react";
import Link from "next/link";

interface Periodo {
  id: string;
  label: string;
  date: string;
  icon: string;
  color: string;
  desc: string;
  eventos: { year: string; event: string }[];
  figuras: string[];
}

const periodos: Periodo[] = [
  {
    id: "preniceno",
    label: "Pre-Niceno",
    date: "100 – 313 d.C.",
    icon: "🔥",
    color: "#8b4513",
    desc: "La iglesia bajo persecución imperial. Desarrollo del canon, padres apostólicos y apologistas. Herejías: gnosticismo, montanismo.",
    eventos: [
      { year: "c. 100", event: "Muerte del apóstol Juan" },
      { year: "c. 155", event: "Justino Mártir escribe" },
      { year: "c. 180", event: "Ireneo contra herejías" },
      { year: "197", event: "Tertuliano comienza" },
      { year: "249", event: "Persecución de Decio" },
      { year: "303", event: "Gran Persecución de Diocleciano" },
      { year: "313", event: "Edicto de Milán" },
    ],
    figuras: ["Policarpo", "Ireneo", "Tertuliano", "Cipriano", "Orígenes"],
  },
  {
    id: "nicea",
    label: "Concilio de Nicea",
    date: "325 d.C.",
    icon: "⚜️",
    color: "#d4af37",
    desc: "Concilio ecuménico convocado por Constantino. Condena del arrianismo. Afirmación de la consubstancialidad del Hijo (homousios). Credo Niceno.",
    eventos: [
      { year: "318", event: "Arrio comienza a enseñar" },
      { year: "325", event: "Concilio de Nicea" },
      { year: "325", event: "Credo Niceno original" },
      { year: "328", event: "Atanasio obispo de Alejandría" },
    ],
    figuras: ["Constantino", "Atanasio", "Osio de Córdoba", "Eusebio", "Arrio (hereje)"],
  },
  {
    id: "posniceno",
    label: "Post-Niceno",
    date: "325 – 590 d.C.",
    icon: "🏛️",
    color: "#2d5a8b",
    desc: "Iglesia imperial bajo Constantino y sucesores. Concilios cristológicos. Agustín. Caída de Roma. Transición al papado medieval.",
    eventos: [
      { year: "381", event: "Concilio de Constantinopla I" },
      { year: "397", event: "Agustín: Confesiones" },
      { year: "431", event: "Concilio de Éfeso" },
      { year: "451", event: "Concilio de Calcedonia" },
      { year: "476", event: "Caída del Imperio Romano" },
      { year: "529", event: "Concilio de Orange" },
      { year: "590", event: "Gregorio Magno, papa" },
    ],
    figuras: ["Agustín", "Los Capadocios", "Jerónimo", "Crisóstomo", "Gregorio Magno"],
  },
];

export default function TimelineHistorico() {
  const [sel, setSel] = useState<string>("nicea");
  const p = periodos.find((x) => x.id === sel) ?? periodos[0];

  return (
    <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-text">
          Períodos Históricos de la Iglesia
        </h2>
        <div className="w-12 h-0.5 bg-gold mx-auto mt-3 mb-2 rounded" />
        <p className="text-center text-text-3 text-sm max-w-xl mx-auto mb-16">
          Los períodos formativos de la iglesia primitiva, desde las persecuciones hasta la era imperial
        </p>

        {/* Timeline visual - horizontal bars */}
        <div className="relative mb-14">
          {/* Base line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 hidden md:block" />
          <Link
            href="/historia"
            className="absolute -top-8 right-0 text-[10px] text-gold hover:text-gold-dark transition flex items-center gap-1 font-semibold"
          >
            Ver historia completa <span>→</span>
          </Link>

          {/* Nodes */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-0 relative">
            {periodos.map((periodo, i) => (
              <button
                key={periodo.id}
                onClick={() => setSel(periodo.id)}
                className={`relative z-10 flex md:flex-col items-center gap-3 md:gap-2 px-4 md:px-6 py-4 md:py-6 rounded-xl border transition-all duration-300 text-left md:text-center ${
                  sel === periodo.id
                    ? "border-gold bg-gold/10 shadow-[var(--shadow-gold)]"
                    : "border-border bg-surface-card/50 hover:border-text-3 hover:bg-surface-card"
                }`}
                style={{
                  flex: sel === periodo.id ? 1.4 : 1,
                }}
              >
                {/* Line connector */}
                {i > 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-border" />
                )}

                {/* Icon circle */}
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0 border-2 transition-all duration-300"
                  style={{
                    borderColor: sel === periodo.id ? periodo.color : "var(--color-border)",
                    backgroundColor:
                      sel === periodo.id ? periodo.color : "transparent",
                  }}
                />

                <div className="min-w-0">
                  <div
                    className="text-sm font-bold"
                    style={{ color: sel === periodo.id ? periodo.color : "var(--color-text-2)" }}
                  >
                    {periodo.label}
                  </div>
                  <div className="text-[10px] text-text-3 mt-0.5">
                    {periodo.date}
                  </div>
                </div>

                {/* Active indicator arrow */}
                {sel === periodo.id && (
                  <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gold" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected detail card */}
        <div
          key={p.id}
          className="bg-surface-card border border-border rounded-2xl p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          <div className="grid md:grid-cols-5 gap-6">
            {/* Left: description + figures */}
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: p.color }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-text">{p.label}</h3>
                  <span className="text-xs text-text-3">{p.date}</span>
                </div>
              </div>
              <p className="text-text-2 text-sm leading-relaxed">{p.desc}</p>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                  Figuras clave
                </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {p.figuras.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-text-2 bg-surface-1 border border-border px-2.5 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: timeline of events */}
            <div className="md:col-span-2 border-l-2 border-border pl-4 space-y-3">
              <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                Eventos clave
              </span>
              {p.eventos.map((e, i) => (
                <div
                  key={i}
                  className="relative pl-3 pb-2 border-l-2 border-transparent hover:border-gold transition group"
                  style={{
                    borderColor: i === 0 ? p.color : undefined,
                  }}
                >
                  <div
                    className="absolute -left-[9px] top-1 w-[6px] h-[6px] rounded-full border-2"
                    style={{
                      borderColor: p.color,
                      backgroundColor: i === 0 ? p.color : "var(--color-surface-card)",
                    }}
                  />
                  <span className="text-[10px] text-text-3 font-mono">{e.year}</span>
                  <p className="text-xs text-text leading-tight mt-0.5 group-hover:text-gold transition">
                    {e.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}
