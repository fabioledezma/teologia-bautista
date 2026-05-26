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
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[2px] text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/20">
            Teología Histórica
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#ececf5] mt-4">
            Historia de los Errores Doctrinales
          </h2>
          <div className="w-12 h-0.5 bg-[#d4af37] mx-auto mt-3 mb-3 rounded" />
          <p className="text-[#6e6e88] text-sm max-w-2xl mx-auto">
            Muchas ideas que circulan en iglesias modernas tienen raíces en
            herejías antiguas. Esta sección rastrea su origen histórico, su
            refutación bíblica y su manifestación contemporánea, para que el
            pueblo de Dios discierna con la Escritura.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {eras.map((e) => (
            <button
              key={e.key}
              onClick={() => setEra(e.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition border ${
                era === e.key
                  ? "bg-[#d4af37] text-black border-[#d4af37]"
                  : "bg-transparent text-[#a8a8c0] border-[#2a2a3e] hover:border-[#d4af37] hover:text-[#d4af37]"
              }`}
            >
              {e.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((h: Herejia) => (
            <Link
              key={h.slug}
              href={`/herejia/${h.slug}`}
              className="group block bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-5 transition hover:border-[#d4af37] hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-1 h-8 rounded-full bg-[#d4af37]/30 flex-shrink-0" />

                <div className="min-w-0">
                  <h3 className="text-[#ececf5] font-semibold text-sm leading-tight">
                    {h.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wide text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded">
                    {h.era}
                  </span>
                </div>
              </div>
              <p className="text-[#a8a8c0] text-xs leading-relaxed line-clamp-2 mb-2">
                {h.subtitle}
              </p>
              <div className="flex items-center gap-2 text-[10px] text-[#6e6e88]">
                <span>{h.century}</span>
                <span>·</span>
                <span className="truncate">{h.taughtBy}</span>
              </div>
              <div className="flex items-center gap-1 text-[#d4af37] text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                Estudio completo <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 p-5 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg">
          <p className="text-[#6e6e88] text-xs leading-relaxed">
            <strong className="text-[#a8a8c0]">Nota importante:</strong>{" "}
            Esta sección no busca atacar personas o denominaciones, sino
            rastrear raíces históricas de errores doctrinales para equipar al
            pueblo de Dios con discernimiento. Muchas de estas ideas persisten
            hoy bajo nombres diferentes, a menudo sostenidas por personas
            sinceras que desconocen su origen. Como dijo Agustín:{" "}
            <em className="text-[#a8a8c0]">
              "En lo esencial, unidad; en lo no esencial, libertad; en todo,
              caridad."
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}
