import Link from "next/link";
import hermeneutica from "@/data/hermeneutica";

export default function HermeneuticaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-accent/[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgb(var(--color-surface-card)/0.8)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[11px] font-semibold uppercase tracking-[2px] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-glow" />
            Cómo Interpretar la Biblia
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text mt-4 mb-6 leading-tight">
            Aprendiendo a Leer la{" "}
            <span className="text-gold">Biblia con Amor y Fidelidad</span>
          </h1>
          <p className="text-text-2 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-text">
            Una guía pastoral, humilde y profunda para interpretar correctamente
            la Palabra de Dios, y la guía esencial del Espíritu Santo. No
            necesitas ser un erudito. Solo necesitas un corazón dispuesto a
            aprender.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href={`/hermeneutica/${hermeneutica[0].slug}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold rounded-xl hover:bg-gold-dark transition-all"
            >
              Comenzar la clase
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-text">
              Módulos de Estudio
            </h2>
            <div className="section-title-line mt-3 mb-3" />
            <p className="text-text-3 text-sm max-w-xl mx-auto">
              Ocho lecciones diseñadas para llevarte de la mano en el camino de
              una interpretación bíblica fiel y amorosa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {hermeneutica.map((mod) => (
              <Link
                key={mod.slug}
                href={`/hermeneutica/${mod.slug}`}
                className="group block bg-surface-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
                <div className="p-5">
                  <div className="mb-3">
                      <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                        Módulo {mod.number}
                      </span>
                      <h3 className="text-text font-serif font-semibold text-sm leading-tight break-words mt-0.5">
                        {mod.title}
                      </h3>
                  </div>
                  <p className="text-text-2 text-xs leading-relaxed line-clamp-2 break-words">
                    {mod.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold mt-3 group-hover:gap-2.5 transition-all">
                    Explorar módulo
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cita destacada */}
      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-surface-card border border-gold/20 rounded-2xl p-8 md:p-10">
            <svg className="w-8 h-8 text-gold/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-serif text-lg md:text-xl text-text leading-relaxed italic">
              &ldquo;Un texto fuera de contexto se convierte en un pretexto.&rdquo;
            </p>
            <p className="text-text-3 text-xs mt-4">
              — Principio de interpretación bíblica
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
