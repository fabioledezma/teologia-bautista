"use client";

import recursosData from "@/data/recursos";

export default function RecursosSection() {
  return (
    <section id="recursos" className="py-24 bg-surface-1">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-text">
          Recursos Recomendados
        </h2>
        <div className="w-12 h-0.5 bg-gold mx-auto mt-3 mb-2 rounded" />
        <p className="text-center text-text-3 text-sm max-w-xl mx-auto mb-12">
          Obras fundamentales para profundizar en las doctrinas de la
          gracia, seleccionadas en consonancia con la tradición confesional
          de CBTS.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recursosData.map((r, i) => (
            <div
              key={i}
              className="bg-surface-card border border-border rounded-lg p-5 transition hover:border-gold hover:-translate-y-0.5"
            >
              <span className="text-[10px] uppercase tracking-wider text-gold">
                {r.type}
              </span>
              <h3 className="text-text font-semibold text-sm mt-1 mb-0.5">
                {r.title}
              </h3>
              <p className="text-gold text-xs mb-2">{r.author}</p>
              <p className="text-text-2 text-xs leading-relaxed mb-3">
                {r.desc}
              </p>
              <div className="flex flex-wrap gap-1">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] text-text-3 bg-surface-hover px-2 py-0.5 rounded"
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
