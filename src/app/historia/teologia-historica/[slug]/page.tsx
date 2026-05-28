import Link from "next/link";
import { notFound } from "next/navigation";
import teologiaHistorica from "@/data/teologia-historica";
import { svgMap } from "@/components/Diagramas";
import GlossaryText from "@/components/GlossaryText";
import TextToSpeech from "@/components/TextToSpeech";

export function generateStaticParams() {
  return teologiaHistorica.map((s) => ({ slug: s.slug }));
}

export default async function THDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = teologiaHistorica.findIndex((s) => s.slug === slug);
  if (idx === -1) notFound();

  const mod = teologiaHistorica[idx];
  const prev = idx > 0 ? teologiaHistorica[idx - 1] : null;
  const next = idx < teologiaHistorica.length - 1 ? teologiaHistorica[idx + 1] : null;

  const svgFn = svgMap[mod.diagram];
  const diagramHtml = svgFn ? svgFn() : null;

  const sections = [
    { title: "Introducción", content: mod.introduccion },
    { title: "Contexto Histórico", content: mod.contextHistorico },
    { title: "Problema Teológico", content: mod.problemaTeologico },
    { title: "Enseñanza de la Iglesia", content: mod.ensenanzaIglesia },
    { title: "Error o Herejía", content: mod.errorHerejia },
    { title: "Respuesta de la Iglesia", content: mod.respuestaIglesia },
    { title: "Base Bíblica", content: mod.baseBiblical },
    { title: "Perspectiva Confesional", content: mod.explicacionConfesional },
    { title: "Aplicación Práctica", content: mod.aplicacionPractica },
    { title: "Resumen", content: mod.resumen },
  ]

  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-3xl mx-auto px-5 py-16 md:py-24">
        <nav className="flex items-center gap-2 text-xs text-text mb-8 flex-wrap">
          <Link href="/historia" className="hover:text-gold transition-colors">
            Historia
          </Link>
          <span>/</span>
          <Link
            href="/historia/teologia-historica"
            className="hover:text-gold transition-colors"
          >
            Teología Histórica
          </Link>
          <span>/</span>
          <span className="text-text truncate">{mod.title}</span>
        </nav>

        <div className="mb-10">
          <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Módulo {idx + 1} de {teologiaHistorica.length}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-text mt-3">
            {mod.title}
          </h1>
          <p className="text-text text-sm mt-2">{mod.subtitle}</p>
        </div>

        <TextToSpeech sections={sections} />

        <div className="space-y-10">
          {/* 1. Introducción */}
          <section>
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Introducción
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              <GlossaryText text={mod.introduccion} />
            </div>
          </section>

          {/* 2. Contexto Histórico */}
          <section>
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Contexto Histórico
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              <GlossaryText text={mod.contextHistorico} />
            </div>
          </section>

          {/* 3. Problema Teológico */}
          <section>
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Problema Teológico
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              <GlossaryText text={mod.problemaTeologico} />
            </div>
          </section>

          {/* 4. Enseñanza de la Iglesia */}
          <section>
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Enseñanza de la Iglesia
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              <GlossaryText text={mod.ensenanzaIglesia} />
            </div>
          </section>

          {/* Diagram */}
          {diagramHtml && (
            <section>
              <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
                Diagrama
              </span>
              <div
                className="w-full overflow-x-auto bg-surface-card border border-border rounded-xl p-4"
                dangerouslySetInnerHTML={{ __html: diagramHtml }}
              />
            </section>
          )}

          {/* 5. Error / Herejía */}
          <section>
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Error o Herejía
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              <GlossaryText text={mod.errorHerejia} />
            </div>
          </section>

          {/* 6. Respuesta de la Iglesia */}
          <section>
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Respuesta de la Iglesia
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              <GlossaryText text={mod.respuestaIglesia} />
            </div>
          </section>

          {/* 7. Base Bíblica */}
          <section>
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Base Bíblica
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              <GlossaryText text={mod.baseBiblical} />
            </div>
          </section>

          {/* 8. Perspectiva Confesional */}
          <section className="bg-surface-card border border-gold/20 rounded-xl p-6">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Perspectiva Confesional (1689)
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              <GlossaryText text={mod.explicacionConfesional} />
            </div>
          </section>

          {/* 9. Aplicación Práctica */}
          <section>
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Aplicación Práctica
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              <GlossaryText text={mod.aplicacionPractica} />
            </div>
          </section>

          {/* 10. Resumen */}
          <section className="bg-surface-card border border-border rounded-xl p-6">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Resumen
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              <GlossaryText text={mod.resumen} />
            </div>
          </section>

          {/* 11. Preguntas */}
          <section>
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Preguntas para Reflexión
            </span>
            <div className="space-y-3">
              {mod.preguntas.map((q, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-surface-card border border-border rounded-lg p-4"
                >
                  <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-xs font-bold text-gold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-text leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-12 pt-8 border-t border-border flex items-center justify-between gap-2 sm:gap-4">
          {prev ? (
            <Link
              href={`/historia/teologia-historica/${prev.slug}`}
              className="group flex items-center gap-1.5 sm:gap-2 text-xs text-text hover:text-gold transition-colors min-w-0 flex-1"
            >
              <svg
                className="w-4 h-4 flex-shrink-0 group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7l-7 7 7 7" />
              </svg>
              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-wide text-text-3">
                  Anterior
                </span>
                <span className="break-words">{prev.title}</span>
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {next ? (
            <Link
              href={`/historia/teologia-historica/${next.slug}`}
              className="group flex items-center gap-1.5 sm:gap-2 text-xs text-text hover:text-gold transition-colors text-right min-w-0 flex-1"
            >
              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-wide text-text-3">
                  Siguiente
                </span>
                <span className="break-words">{next.title}</span>
              </span>
              <svg
                className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ) : (
            <Link
              href="/historia/teologia-historica"
              className="inline-flex items-center gap-2 text-xs text-gold font-semibold hover:underline min-w-0"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Completado — Volver al inicio
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
