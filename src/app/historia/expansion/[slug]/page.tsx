import Link from "next/link";
import { notFound } from "next/navigation";
import expansion from "@/data/expansion";
import { svgMap } from "@/components/Diagramas";
import GlossaryText from "@/components/GlossaryText";
import TextToSpeech from "@/components/TextToSpeech";

export function generateStaticParams() {
  return expansion.map((s) => ({ slug: s.slug }));
}

export default async function ExpansionSectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = expansion.findIndex((s) => s.slug === slug);
  if (idx === -1) notFound();
  const sec = expansion[idx];
  const prev = idx > 0 ? expansion[idx - 1] : null;
  const next = idx < expansion.length - 1 ? expansion[idx + 1] : null;

  const svgFn = svgMap[sec.diagram];
  const diagramHtml = svgFn ? svgFn() : null;

  const sections = [
    { title: "En términos simples", content: sec.simple },
    { title: "Más a fondo", content: sec.fondo },
    { title: "Perspectiva Bautista Reformada", content: sec.perspectivaReformada },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-text-2 mb-6">
          <Link href="/historia" className="hover:text-gold transition">Historia</Link>
          <span>/</span>
          <Link href="/historia/expansion" className="hover:text-gold transition">Expansión</Link>
          <span>/</span>
          <span className="text-text truncate">{sec.title}</span>
        </div>

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <span className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-sm font-bold text-gold flex-shrink-0">
            {idx + 1}
          </span>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl text-text leading-tight">{sec.title}</h1>
            <p className="text-text-2 text-sm mt-1">{sec.subtitle}</p>
          </div>
        </div>

        <TextToSpeech sections={sections} />

        {/* Para todos */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 rounded-full bg-gold/40 flex-shrink-0" />
            <h2 className="font-serif text-base text-gold">En términos simples</h2>
          </div>
          {sec.simple.split("\n\n").map((p, i) => (
            <GlossaryText key={i} className="block text-text text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
          ))}
        </section>

        {/* Diagram */}
        {diagramHtml && (
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 rounded-full bg-gold/40 flex-shrink-0" />
              <h2 className="font-serif text-base text-gold">Diagrama</h2>
            </div>
            <div
              className="bg-surface-1 rounded-xl p-4 border border-border flex justify-center overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: diagramHtml }}
            />
          </section>
        )}

        {/* Más a fondo */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 rounded-full bg-gold/40 flex-shrink-0" />
            <h2 className="font-serif text-base text-gold">Más a fondo</h2>
          </div>
          {sec.fondo.split("\n\n").map((p, i) => (
            <GlossaryText key={i} className="block text-text text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
          ))}
        </section>

        {/* Perspectiva Reformada */}
        <section className="mb-12">
          <div className="bg-surface-card border border-gold/20 rounded-xl p-6">
            <h3 className="font-serif text-sm text-gold mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20" />
              </svg>
              Perspectiva Bautista Reformada
            </h3>
            {sec.perspectivaReformada.split("\n\n").map((p, i) => (
              <GlossaryText key={i} className="block text-text text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-2 pt-8 border-t border-border">
          {prev ? (
            <Link
              href={`/historia/expansion/${prev.slug}`}
              className="group text-left min-w-0 flex-1"
            >
              <span className="text-[10px] uppercase tracking-wider text-text-3">Anterior</span>
              <p className="text-xs text-gold font-semibold group-hover:underline mt-0.5 flex items-center gap-1 break-words">
                <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                {prev.title}
              </p>
            </Link>
          ) : <div className="flex-1" />}
          {next ? (
            <Link
              href={`/historia/expansion/${next.slug}`}
              className="group text-right min-w-0 flex-1"
            >
              <span className="text-[10px] uppercase tracking-wider text-text-3">Siguiente</span>
              <p className="text-xs text-gold font-semibold group-hover:underline mt-0.5 flex items-center gap-1 justify-end break-words">
                {next.title}
                <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </Link>
          ) : (
            <Link
              href="/historia/expansion"
              className="group text-right min-w-0 flex-1"
            >
              <span className="text-[10px] uppercase tracking-wider text-text-3">Completado</span>
              <p className="text-xs text-gold font-semibold group-hover:underline mt-0.5 break-words">
                Volver al inicio →
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
