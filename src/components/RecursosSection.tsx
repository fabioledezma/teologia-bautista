"use client";

import recursosData from "@/data/recursos";

export default function RecursosSection() {
  return (
    <section id="recursos" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Lectura Recomendada
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
            Recursos Recomendados
          </h2>
          <div className="section-title-line mt-3 mb-3" />
          <p className="text-text-3 text-sm max-w-xl mx-auto">
            Obras fundamentales para profundizar en las doctrinas de la
            gracia, seleccionadas en consonancia con la tradición confesional
            de CBTS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 min-w-0">
          {recursosData.map((r, i) => (
            <div
              key={i}
              className="group bg-surface-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-1 bg-gradient-to-r from-gold/30 via-gold/50 to-gold/30 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="p-5">
                <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                  {r.type}
                </span>
                <h3 className="text-text font-semibold text-sm mt-1 mb-0.5 break-words">
                  {r.title}
                </h3>
                <p className="text-gold text-xs mb-2 break-words font-medium">
                  {r.author}
                </p>
                <p className="text-text-2 text-xs leading-relaxed mb-3 break-words">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
