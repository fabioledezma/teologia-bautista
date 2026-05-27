"use client";

import facultadData from "@/data/facultad";

export default function FacultySection() {
  return (
    <section id="facultad" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Formación Teológica
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
            Currículo MDiv — CBTS
          </h2>
          <div className="section-title-line mt-3 mb-3" />
          <p className="text-text-3 text-sm max-w-xl mx-auto">
            Estructurado según las cuatro áreas teológicas del{" "}
            <strong className="text-text-2">Master of Divinity</strong> de{" "}
            <a
              href="https://cbtseminary.org"
              target="_blank"
              rel="noopener"
              className="text-gold hover:underline"
            >
              Covenant Baptist Theological Seminary
            </a>
            , tomando en cuenta su estructura curricular confesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 min-w-0">
          {facultadData.map((f) => (
            <div
              key={f.num}
              className="group bg-surface-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md relative"
            >
              <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
              <div className="p-5">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-sm font-bold text-gold mb-3">
                  {f.num}
                </div>
                <h3 className="text-text font-semibold text-sm mb-2 break-words">
                  {f.num}. {f.title}
                </h3>
                <p className="text-text-2 text-xs leading-relaxed mb-3 break-words">
                  {f.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {f.topics.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-surface-card border border-border rounded-xl text-center">
          <p className="text-text-2 text-xs">
            Esta sección refleja la estructura curricular del{" "}
            <strong className="text-text">MDiv de CBTS</strong>, un
            seminario bautista reformado comprometido con la Confesión Bautista
            de Fe de 1689.{" "}
            <a
              href="https://cbtseminary.org"
              target="_blank"
              rel="noopener"
              className="text-gold hover:underline"
            >
              Conoce más →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
