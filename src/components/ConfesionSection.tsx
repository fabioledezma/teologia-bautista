import confessionChapters from "@/data/confesion";

const pdfPages: Record<number, number> = {
  0: 8,  1: 11, 2: 12, 3: 13, 4: 14,
  5: 16, 6: 17, 7: 17, 8: 20, 9: 21,
  10: 22, 11: 23, 12: 23, 13: 24, 14: 25,
  15: 26, 16: 27, 17: 28, 18: 30, 19: 31,
  20: 32, 21: 33, 22: 35, 23: 36, 24: 37,
  25: 37, 26: 40, 27: 41, 28: 42, 29: 39,
  30: 44, 31: 45, 32: 45,
};

const pdfUrl = "https://www.chapellibrary.org/pdf/books/lbcos.pdf";

export default function ConfesionSection() {

  return (
    <section id="confesion" className="py-16 md:py-24 bg-surface-1">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Confesional
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
            Confesión Bautista de Fe de 1689
          </h2>
          <div className="section-title-line mt-3 mb-3" />
          <p className="text-text-3 text-sm max-w-xl mx-auto">
            Fundamento doctrinal histórico de las iglesias bautistas reformadas.
            32 capítulos que exponen sistemáticamente la fe cristiana desde una
            perspectiva confesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 min-w-0">
          {confessionChapters.map((ch, i) => (
            <a
              key={i}
              href={`${pdfUrl}#page=${pdfPages[i]}`}
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-3 bg-surface-card border border-border rounded-lg p-3 text-left transition-all duration-200 hover:border-gold hover:bg-surface-hover hover:-translate-y-0.5 hover:shadow-sm"
            >
              <span className="font-serif text-base text-gold font-bold min-w-[2rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-text-2 text-xs font-medium group-hover:text-text transition break-words">
                {ch}
              </span>
              <svg className="w-3.5 h-3.5 text-text-3 group-hover:text-gold transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>

        <div className="mt-10 bg-surface-card border border-border rounded-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-serif text-lg text-gold">
              Seminario Teológico Bautista Covenant (CBTS)
            </h3>
          </div>
          <p className="text-text-2 text-sm leading-relaxed mb-4 break-words">
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
              className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:underline"
            >
              cbtseminary.org
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://cbtsespanol.org"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:underline"
            >
              cbtsespanol.org
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <p className="text-text-3 text-xs italic break-words">
            Este sitio está{" "}
            <strong className="text-text-2 not-italic">
              en alianza con los principios doctrinales de CBTS
            </strong>{" "}
            y sirve como recurso educativo para la comunidad hispanohablante.
          </p>
        </div>
      </div>
    </section>
  );
}
