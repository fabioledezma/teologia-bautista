import Link from "next/link";
import patristica from "@/data/patristica";

export default function PatristicaPage() {
  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Historia de la Iglesia
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-text mt-4">
            La Patrística y los Padres Apostólicos
          </h1>
          <div className="section-title-line mt-3 mb-3" />
          <p className="text-text text-sm max-w-2xl mx-auto">
            El período que moldeó el cristianismo después de los apóstoles: sus
            escritos, su carácter, su doctrina y su gobierno eclesiástico.
          </p>
        </div>

        <div className="space-y-4">
          {patristica.map((sec, i) => (
            <Link
              key={sec.slug}
              href={`/historia/patristica/${sec.slug}`}
              className="group block bg-surface-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-lg font-bold text-gold flex-shrink-0">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-serif text-lg text-text font-semibold">
                      {sec.title}
                    </h2>
                    <p className="text-text text-sm mt-1">{sec.subtitle}</p>
                    <div className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold mt-3 group-hover:gap-2.5 transition-all">
                      Explorar sección
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/historia/patristica/que-es-patristica"
            className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gold/90 transition-colors"
          >
            Comenzar desde el principio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/historia"
            className="inline-flex items-center gap-2 text-sm text-text hover:text-gold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            Volver a Historia de la Iglesia
          </Link>
        </div>
      </div>
    </main>
  );
}
