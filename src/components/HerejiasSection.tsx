"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { herejias } from "@/data/herejias";
import type { Herejia } from "@/data/herejias";

const eras = [
  { key: "all", label: "Todas" },
  { key: "Patrística", label: "Patrística" },
  { key: "Medieval", label: "Medieval" },
  { key: "Reforma", label: "Reforma" },
  { key: "Moderna", label: "Moderna" },
];

export default function HerejiasSection() {
  const [era, setEra] = useState("all");

  const filtered = useMemo(
    () =>
      era === "all"
        ? herejias
        : herejias.filter((h: Herejia) => h.era === era),
    [era]
  );

  return (
    <section id="historia" className="py-16 md:py-24 bg-surface-1 bg-dot-pattern">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Teología Histórica
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
            Historia de los Errores Doctrinales
          </h2>
          <div className="section-title-line mt-3 mb-3" />
          <p className="text-text-3 text-sm max-w-2xl mx-auto">
            Muchas ideas que circulan en iglesias modernas tienen raíces en
            herejías antiguas. Rastreamos su origen histórico, su refutación
            bíblica y su manifestación contemporánea.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {eras.map((e) => (
            <button
              key={e.key}
              onClick={() => setEra(e.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                era === e.key
                  ? "bg-gold text-black border-gold shadow-sm"
                  : "bg-transparent text-text border-border hover:border-gold hover:text-gold"
              }`}
            >
              {e.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 min-w-0">
          {filtered.map((h: Herejia) => (
            <Link
              key={h.slug}
              href={`/herejia/${h.slug}`}
              className="group block bg-surface-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">{h.icon}</span>
                  <div className="min-w-0">
                    <h3 className="text-text font-semibold text-sm leading-tight break-words">
                      {h.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wide text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mt-1">
                      {h.era}
                    </span>
                  </div>
                </div>
                <p className="text-text text-xs leading-relaxed line-clamp-2 mb-2 break-words">
                  {h.subtitle}
                </p>
                <div className="flex items-center gap-2 text-[10px] text-text-2 min-w-0">
                  <span className="flex-shrink-0">{h.century}</span>
                  <span className="flex-shrink-0">·</span>
                  <span className="truncate min-w-0">{h.taughtBy}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold mt-3 group-hover:gap-2.5 transition-all">
                  Estudio completo
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 p-5 bg-surface-card border border-border rounded-xl">
          <p className="text-text-3 text-xs leading-relaxed">
            <strong className="text-text-2">Nota importante:</strong>{" "}
            Esta sección no busca atacar personas o denominaciones, sino
            rastrear raíces históricas de errores doctrinales para equipar al
            pueblo de Dios con discernimiento. Muchas de estas ideas persisten
            hoy bajo nombres diferentes, a menudo sostenidas por personas
            sinceras que desconocen su origen. Como dijo Agustín:{" "}
            <em className="text-text-2">
              &ldquo;En lo esencial, unidad; en lo no esencial, libertad; en todo,
              caridad.&rdquo;
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}
