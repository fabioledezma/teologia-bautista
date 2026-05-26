"use client";

import recursosData from "@/data/recursos";

export default function RecursosSection() {
  return (
    <section id="recursos" className="py-24 bg-[#0e0e18]">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-[#ececf5]">
          Recursos Recomendados
        </h2>
        <div className="w-12 h-0.5 bg-[#d4af37] mx-auto mt-3 mb-2 rounded" />
        <p className="text-center text-[#6e6e88] text-sm max-w-xl mx-auto mb-12">
          Obras fundamentales para profundizar en las doctrinas de la
          gracia, seleccionadas en consonancia con la tradición confesional
          de CBTS.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recursosData.map((r, i) => (
            <div
              key={i}
              className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-5 transition hover:border-[#d4af37] hover:-translate-y-0.5"
            >
              <span className="text-[10px] uppercase tracking-wider text-[#d4af37]">
                {r.type}
              </span>
              <h3 className="text-[#ececf5] font-semibold text-sm mt-1 mb-0.5">
                {r.title}
              </h3>
              <p className="text-[#d4af37] text-xs mb-2">{r.author}</p>
              <p className="text-[#a8a8c0] text-xs leading-relaxed mb-3">
                {r.desc}
              </p>
              <div className="flex flex-wrap gap-1">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] text-[#6e6e88] bg-white/[0.04] px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
