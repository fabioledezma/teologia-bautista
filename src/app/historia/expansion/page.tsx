import Link from "next/link";
import expansion from "@/data/expansion";

export default function ExpansionIndexPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[11px] font-semibold uppercase tracking-[2px] mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Historia de la Iglesia
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight mb-6">
            La Expansión de la{" "}
            <span className="text-gold">Iglesia Primitiva</span>
          </h1>
          <p className="text-text text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-4 font-text">
            &ldquo;Pero recibiréis poder cuando el Espíritu Santo haya venido sobre vosotros, y me seréis testigos
            en Jerusalén, en toda Judea y Samaria, y hasta lo último de la tierra.&rdquo;
          </p>
          <p className="text-text-2 text-sm">Hechos 1:8</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface-card border border-border rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="font-serif text-xl text-text mb-4">El Mundo en que Nació la Iglesia</h2>
            <p className="text-text-2 text-sm leading-relaxed mb-4 font-text">
              El cristianismo no nació en un vacío. Surgió en un mundo concreto — el Imperio Romano del siglo I —
              con su propia cultura, religión, filosofía y moral. Para entender cómo una pequeña secta judía
              se convirtió en la religión del Imperio en tres siglos, debemos entender primero el mundo que
              Dios preparó para recibir el evangelio.
            </p>
            <p className="text-text-2 text-sm leading-relaxed font-text">
              Esta serie explora seis aspectos del entorno clásico que moldearon la expansión de la iglesia
              primitiva, desde el problema cristiano ante Roma hasta el clima moral de la sociedad pagana,
              todo desde una perspectiva bautista reformada.
            </p>
          </div>

          {/* Section cards */}
          <div className="space-y-4">
            {expansion.map((sec, i) => (
              <Link
                key={sec.slug}
                href={`/historia/expansion/${sec.slug}`}
                className="group flex items-start gap-4 bg-surface-card border border-border rounded-xl p-5 hover:border-gold transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-xs font-bold text-gold flex-shrink-0">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-text font-semibold text-sm group-hover:text-gold transition break-words">
                    {sec.title}
                  </h3>
                  <p className="text-text-2 text-xs mt-1 leading-relaxed break-words">
                    {sec.subtitle}
                  </p>
                </div>
                <svg className="w-4 h-4 text-text-2 group-hover:text-gold transition flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link
              href="/historia"
              className="text-xs text-text-2 hover:text-gold transition flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7 7l-7-7 7-7" />
              </svg>
              Historia de la Iglesia
            </Link>
            <Link
              href="/historia/expansion/problema-cristiano"
              className="text-xs text-gold hover:underline font-semibold flex items-center gap-1"
            >
              Comenzar
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
