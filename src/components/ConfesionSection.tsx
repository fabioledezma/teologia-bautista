import confessionChapters from "@/data/confesion";

const pdfPages: Record<number, number> = {
  0: 8,  1: 10, 2: 12, 3: 14, 4: 15,
  5: 17, 6: 19, 7: 20, 8: 23, 9: 24,
  10: 26, 11: 28, 12: 29, 13: 31, 14: 32,
  15: 34, 16: 35, 17: 37, 18: 38, 19: 40,
  20: 41, 21: 43, 22: 45, 23: 46, 24: 47,
  25: 49, 26: 51, 27: 52, 28: 54, 29: 55,
  30: 57, 31: 58, 32: 60, 33: 62,
};

const pdfUrl = "https://www.chapellibrary.org/pdf/books/lbcos.pdf";

export default function ConfesionSection() {

  return (
    <section id="confesion" className="py-24">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#ececf5]">
            Confesión Bautista de Fe de 1689
          </h2>
          <div className="w-12 h-0.5 bg-[#d4af37] mx-auto mt-3 mb-2 rounded" />
          <p className="text-[#6e6e88] text-sm max-w-xl mx-auto">
            Fundamento doctrinal histórico de las iglesias bautistas reformadas.
            32 capítulos que exponen sistemáticamente la fe cristiana desde una
            perspectiva confesional. Haz clic en cada capítulo para abrirlo en el PDF original.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {confessionChapters.map((ch, i) => (
            <a
              key={i}
              href={`${pdfUrl}#page=${pdfPages[i]}`}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-3 text-left transition hover:border-[#d4af37] hover:bg-[#22223a] group"
            >
              <span className="font-serif text-base text-[#d4af37] font-bold min-w-[2rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[#a8a8c0] text-xs font-medium group-hover:text-[#ececf5] transition">
                {ch}
              </span>
              <svg className="w-3.5 h-3.5 text-[#6e6e88] group-hover:text-[#d4af37] transition flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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
