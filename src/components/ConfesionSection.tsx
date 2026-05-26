"use client";

import { useState } from "react";
import confessionChapters from "@/data/confesion";

export default function ConfesionSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="confesion" className="py-24">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-[#ececf5]">
          Confesión Bautista de Fe de 1689
        </h2>
        <div className="w-12 h-0.5 bg-[#d4af37] mx-auto mt-3 mb-2 rounded" />
        <p className="text-center text-[#6e6e88] text-sm max-w-xl mx-auto mb-12">
          Fundamento doctrinal histórico de las iglesias bautistas reformadas.
          32 capítulos que exponen sistemáticamente la fe cristiana desde una
          perspectiva confesional.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {confessionChapters.map((ch, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center gap-3 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-3 text-left transition hover:border-[#d4af37] hover:bg-[#22223a]"
              >
                <span className="font-serif text-base text-[#d4af37] font-bold min-w-[2rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[#a8a8c0] text-xs font-medium">
                  {ch}
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl p-6 md:p-8">
          <h3 className="font-serif text-lg text-[#d4af37] mb-2">
            Seminario Teológico Bautista Covenant (CBTS)
          </h3>
          <p className="text-[#a8a8c0] text-sm leading-relaxed mb-4">
            CBTS existe para preparar pastores y líderes para la iglesia local,
            firmemente arraigados en la Confesión Bautista de Fe de 1689 y
            comprometidos con la teología reformada confesional. Ofrece
            programas de MDiv, MA, ThM y PhD totalmente en línea con
            mentoreo pastoral.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href="https://cbtseminary.org"
              target="_blank"
              rel="noopener"
              className="text-[#d4af37] text-sm font-semibold hover:underline"
            >
              cbtseminary.org →
            </a>
            <a
              href="https://cbtsespanol.org"
              target="_blank"
              rel="noopener"
              className="text-[#d4af37] text-sm font-semibold hover:underline"
            >
              cbtsespanol.org →
            </a>
          </div>
          <p className="text-[#6e6e88] text-xs italic">
            Este sitio está{" "}
            <strong className="text-[#a8a8c0] not-italic">
              en alianza con los principios doctrinales de CBTS
            </strong>{" "}
            y sirve como recurso educativo para la comunidad hispanohablante.
          </p>
        </div>
      </div>
    </section>
  );
}
