"use client";

import facultadData from "@/data/facultad";

export default function FacultySection() {
  return (
    <section id="facultad" className="py-24 bg-[#0e0e18]">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-[#ececf5]">
          Currículo MDiv — CBTS
        </h2>
        <div className="w-12 h-0.5 bg-[#d4af37] mx-auto mt-3 mb-2 rounded" />
        <p className="text-center text-[#6e6e88] text-sm max-w-xl mx-auto mb-12">
          Estructurado según las cuatro áreas teológicas del{" "}
          <strong className="text-[#a8a8c0]">Master of Divinity</strong> de{" "}
          <a
            href="https://cbtseminary.org"
            target="_blank"
            rel="noopener"
            className="text-[#d4af37] hover:underline"
          >
            Covenant Baptist Theological Seminary
          </a>
          , en alianza con sus principios doctrinales confesionales.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {facultadData.map((f) => (
            <div
              key={f.num}
              className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-6 transition hover:border-[#d4af37] hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="absolute top-2 right-3 font-serif text-4xl text-[#d4af37]/10 select-none">
                {f.num}
              </span>
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-[#ececf5] font-semibold text-sm mb-2">
                {f.num}. {f.title}
              </h3>
              <p className="text-[#6e6e88] text-xs leading-relaxed mb-3">
                {f.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {f.topics.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] text-[#a8a8c0] bg-[#d4af37]/5 border border-[#2a2a3e] px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg text-center">
          <p className="text-[#a8a8c0] text-xs">
            Esta sección refleja la estructura curricular del{" "}
            <strong className="text-[#ececf5]">MDiv de CBTS</strong>, un
            seminario bautista reformado comprometido con la Confesión Bautista
            de Fe de 1689.{" "}
            <a
              href="https://cbtseminary.org"
              target="_blank"
              rel="noopener"
              className="text-[#d4af37] hover:underline"
            >
              Conoce más →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
