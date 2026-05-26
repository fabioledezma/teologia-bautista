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
    <section id="doctrinas" className="py-24">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-[#ececf5]">
          Doctrinas Esenciales
        </h2>
        <div className="w-12 h-0.5 bg-[#d4af37] mx-auto mt-3 mb-2 rounded" />
        <p className="text-center text-[#6e6e88] text-sm max-w-xl mx-auto mb-12">
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
                  ? "bg-[#d4af37] text-black border-[#d4af37]"
                  : "bg-transparent text-[#a8a8c0] border-[#2a2a3e] hover:border-[#d4af37] hover:text-[#d4af37]"
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
              className="group block bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-6 transition hover:border-[#d4af37] hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-lg flex-shrink-0">
                  {d.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-[#ececf5] font-semibold text-sm leading-tight">
                    {d.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wide text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded">
                    {d.tag}
                  </span>
                </div>
              </div>
              <p className="text-[#a8a8c0] text-xs leading-relaxed line-clamp-3">
                {d.summary}
              </p>
              <span className="inline-flex items-center gap-1 text-[#d4af37] text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                Leer más <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
