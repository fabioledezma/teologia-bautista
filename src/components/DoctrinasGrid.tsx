"use client";

import { useState, useEffect } from "react";
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
        <h2 className="font-serif text-3xl md:text-4xl text-center text-text">
          Doctrinas Esenciales
        </h2>
        <div className="w-12 h-0.5 bg-gold mx-auto mt-3 mb-2 rounded" />
        <p className="text-center text-text-3 text-sm max-w-xl mx-auto mb-12">
          28 doctrinas que forman el núcleo de la fe bautista reformada,
          explicadas con profundidad teológica y lenguaje accesible para todo
          cristiano.
        </p>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition border ${
                filter === f.key
                  ? "bg-gold text-black border-gold"
                  : "bg-transparent text-text-2 border-border hover:border-gold hover:text-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((d) => (
            <Link
              key={d.slug}
              href={`/doctrina/${d.slug}`}
              className="group block bg-surface-card border border-border rounded-lg p-6 transition hover:border-gold hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-1 h-8 rounded-full bg-gold/40 flex-shrink-0" />

                <div className="min-w-0">
                  <h3 className="text-text font-semibold text-sm leading-tight">
                    {d.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wide text-gold bg-gold/10 px-2 py-0.5 rounded">
                    {d.tag}
                  </span>
                </div>
              </div>
              <p className="text-text-2 text-xs leading-relaxed line-clamp-3">
                {d.summary}
              </p>
              <span className="inline-flex items-center gap-1 text-gold text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                Leer más <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
