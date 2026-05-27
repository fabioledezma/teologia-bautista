import Link from "next/link";
import { notFound } from "next/navigation";
import patristica from "@/data/patristica";
import { svgMap } from "@/components/Diagramas";

export function generateStaticParams() {
  return patristica.map((s) => ({ slug: s.slug }));
}

export default async function PatristicaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = patristica.findIndex((s) => s.slug === slug);
  if (idx === -1) notFound();

  const sec = patristica[idx];
  const prev = idx > 0 ? patristica[idx - 1] : null;
  const next = idx < patristica.length - 1 ? patristica[idx + 1] : null;

  const svgFn = svgMap[sec.diagram];
  const diagramHtml = svgFn ? svgFn() : null;

  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-3xl mx-auto px-5 py-16 md:py-24">
        <nav className="flex items-center gap-2 text-xs text-text mb-8 flex-wrap">
          <Link href="/historia" className="hover:text-gold transition-colors">
            Historia
          </Link>
          <span>/</span>
          <Link
            href="/historia/patristica"
            className="hover:text-gold transition-colors"
          >
            Patrística
          </Link>
          <span>/</span>
          <span className="text-text truncate">{sec.title}</span>
        </nav>

        <div className="mb-10">
          <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Patrística
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-text mt-3">
            {sec.title}
          </h1>
          <p className="text-text text-sm mt-2">{sec.subtitle}</p>
        </div>

        <div className="space-y-10">
          <section>
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              En términos simples
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              {sec.simple}
            </div>
          </section>

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

          <section>
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Más a fondo
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              {sec.fondo}
            </div>
          </section>

          <section className="bg-surface-card border border-gold/20 rounded-xl p-6">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2 py-0.5 rounded inline-block mb-3">
              Perspectiva Confesional
            </span>
            <div className="text-sm text-text leading-relaxed whitespace-pre-line">
              {sec.perspectivaReformada}
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex items-center justify-between gap-4 flex-wrap">
          {prev ? (
            <Link
              href={`/historia/patristica/${prev.slug}`}
              className="group flex items-center gap-2 text-xs text-text hover:text-gold transition-colors"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7l-7 7 7 7" />
              </svg>
              <span>
                <span className="block text-[10px] uppercase tracking-wide text-text-3">
                  Anterior
                </span>
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/historia/patristica/${next.slug}`}
              className="group flex items-center gap-2 text-xs text-text hover:text-gold transition-colors text-right"
            >
              <span>
                <span className="block text-[10px] uppercase tracking-wide text-text-3">
                  Siguiente
                </span>
                {next.title}
              </span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              href="/historia/patristica"
              className="inline-flex items-center gap-2 text-xs text-gold font-semibold hover:underline"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
