"use client";

import { useState } from "react";
import Link from "next/link";
import doctrinas from "@/data/doctrinas";

const filters = [
  { key: "all", label: "Todas" },
  { key: "escritura", label: "Escritura" },
  { key: "dios", label: "Dios" },
  { key: "salvacion", label: "Salvación" },
  { key: "iglesia", label: "Iglesia" },
  { key: "escatologia", label: "Escatología" },
];

export default function DoctrinasGrid() {
  const [filter, setFilter] = useState("all");

  const items =
    filter === "all"
      ? doctrinas
      : doctrinas.filter((d) => d.filter === filter);

  return (
    <section id="doctrinas" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Doctrina
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
            Doctrinas Esenciales
          </h2>
          <div className="section-title-line mt-3 mb-3" />
          <p className="text-text-3 text-sm max-w-xl mx-auto">
            28 doctrinas que forman el núcleo de la fe bautista reformada,
            explicadas con profundidad teológica y lenguaje accesible.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                filter === f.key
                  ? "bg-gold text-black border-gold shadow-sm"
                  : "bg-transparent text-text border-border hover:border-gold hover:text-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 min-w-0">
          {items.map((d) => (
            <Link
              key={d.slug}
              href={`/doctrina/${d.slug}`}
              className="group block bg-surface-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-xs font-bold text-gold flex-shrink-0">
                    {d.title.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-text font-semibold text-sm leading-tight break-words">
                      {d.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wide text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mt-1">
                      {d.tag}
                    </span>
                  </div>
                </div>
                <p className="text-text text-xs leading-relaxed line-clamp-3 break-words">
                  {d.summary}
                </p>
                <span className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold mt-3 group-hover:gap-2.5 transition-all">
                  Leer más
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
