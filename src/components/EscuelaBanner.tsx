import Link from 'next/link';

export default function EscuelaBanner() {
  return (
    <section id="aprender" className="py-16 md:py-24 bg-surface-1 bg-dot-pattern border-t border-border/40">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Fiel
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
            Escuela Bíblica Confesional
          </h2>
          <div className="section-title-line mt-3 mb-3" />
          <p className="text-text-3 text-sm max-w-2xl mx-auto leading-relaxed">
            Un lugar donde alguien puede entrar confundido, hambriento de Dios,
            y salir entendiendo mejor quién es Dios, qué dice Su Palabra y cómo
            vivir para Su gloria. Y al mismo tiempo, un lugar donde alguien con
            años estudiando todavía encuentre profundidad, orden, reverencia y
            riqueza bíblica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="bg-surface-card border border-border rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-text font-semibold text-sm mb-1">Nivel 1 — Fundamentos</h3>
            <p className="text-text-3 text-xs leading-relaxed">
              Las verdades esenciales explicadas con claridad. Para quien empieza desde cero.
            </p>
          </div>
          <div className="bg-surface-card border border-border rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-text font-semibold text-sm mb-1">Nivel 2 — Leer la Biblia</h3>
            <p className="text-text-3 text-xs leading-relaxed">
              Aprende a interpretar correctamente. Contexto, método y herramientas.
            </p>
          </div>
          <div className="bg-surface-card border border-border rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="text-text font-semibold text-sm mb-1">Nivel 3 — Doctrinas</h3>
            <p className="text-text-3 text-xs leading-relaxed">
              Profundidad doctrinal conectada con toda la Escritura. Para crecer y madurar.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/aprender"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold rounded-xl hover:bg-gold-dark transition-all"
          >
            Comenzar a aprender
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-text-3">
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Claridad
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Profundidad
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Reverencia
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Estructura
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Fidelidad Bíblica
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Visión Pastoral
          </span>
        </div>
      </div>
    </section>
  );
}
