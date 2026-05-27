import Link from "next/link";
import { notFound } from "next/navigation";
import hermeneutica from "@/data/hermeneutica";
import { svgMap } from "@/components/Diagramas";
import GlossaryText from "@/components/GlossaryText";
import VerseCompare from "@/components/VerseCompare";

export async function generateStaticParams() {
  return hermeneutica.map((h) => ({ slug: h.slug }));
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-base text-gold mb-3 pb-2 border-b border-border flex items-center gap-2">
        <span className="w-1 h-4 rounded-full bg-gold/40 flex-shrink-0" />
        {title}
      </h2>
      {children}
    </section>
  );
}

export default async function HermeneuticaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const h = hermeneutica.find((x) => x.slug === slug);
  if (!h) notFound();

  const renderDiagram = () => {
    const fn = svgMap[h.diagram as keyof typeof svgMap];
    if (!fn) return null;
    return (
      <Section title="Diagrama">
        <div
          className="bg-surface-1 rounded-xl p-5 border border-border flex justify-center overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: fn() }}
        />
      </Section>
    );
  };

  const allModules = [...hermeneutica];
  const curIdx = allModules.findIndex((x) => x.slug === slug);
  const prev = curIdx > 0 ? allModules[curIdx - 1] : null;
  const next = curIdx < allModules.length - 1 ? allModules[curIdx + 1] : null;

  return (
    <article className="max-w-3xl mx-auto px-5 pt-4 md:pt-8 pb-16">
      <Link
        href="/hermeneutica"
        className="inline-flex items-center gap-1.5 text-text-2 text-xs hover:text-gold transition-colors mb-6 group"
      >
        <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7 7l-7-7 7-7" />
        </svg>
        Volver a interpretación
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[10px] uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-1 rounded-full">
            Módulo {h.number}
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-text leading-tight mb-2">
          {h.title}
        </h1>
        <p className="text-text-2 text-sm font-text">{h.subtitle}</p>
      </header>

      <Section title="En lenguaje sencillo">
        <GlossaryText className="text-text text-sm leading-relaxed break-words" text={h.simple} />
      </Section>

      {renderDiagram()}

      {h.frases && h.frases.length > 0 && (
        <Section title="Frases para recordar">
          <div className="space-y-3">
            {h.frases.map((f, i) => (
              <div
                key={i}
                className="relative border-l-2 border-gold bg-surface-card rounded-r-xl px-5 py-3"
              >
                <p className="text-text text-sm italic leading-relaxed">&ldquo;{f}&rdquo;</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section title="Más a fondo">
        {h.fondo.split("\n\n").map((p, i) => (
          <GlossaryText
            key={i}
            className="block text-text text-sm leading-relaxed mb-3 last:mb-0 break-words font-text"
            text={p.trim()}
          />
        ))}
      </Section>

      {h.examples && h.examples.length > 0 && (
        <Section title="Ejemplo práctico">
          <VerseCompare examples={h.examples} />
        </Section>
      )}

      {h.table && h.table.length > 0 && (
        <Section title="Tabla comparativa">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {Object.keys(h.table[0]).map((key) => (
                    <th
                      key={key}
                      className="text-left text-gold text-xs uppercase tracking-wider font-semibold py-2 px-3"
                    >
                      {key === "col1" ? "" : ""}
                      {key.replace("col", "Columna ")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {h.table.map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-2.5 px-3 text-text font-medium align-top">{row.col1}</td>
                    <td className="py-2.5 px-3 text-text-2 align-top">{row.col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      <Section title="Perspectiva reformada">
        <div className="bg-surface-card border border-border rounded-xl p-5">
          {h.perspectivaReformada.split("\n\n").map((p, i) => (
            <GlossaryText
              key={i}
              className="block text-text text-sm leading-relaxed mb-3 last:mb-0 break-words"
              text={p.trim()}
            />
          ))}
        </div>
      </Section>

      <Section title="Navegación entre módulos">
        <div className="flex justify-between items-center gap-4">
          {prev ? (
            <Link
              href={`/hermeneutica/${prev.slug}`}
              className="flex items-center gap-2 text-xs text-text-2 bg-surface-card border border-border px-4 py-3 rounded-xl hover:border-gold hover:text-gold transition flex-1 group"
            >
              <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <div className="min-w-0">
                <div className="text-[10px] text-text-3 uppercase tracking-wider mb-0.5">Anterior</div>
                <div className="truncate font-medium">{prev.title}</div>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/hermeneutica/${next.slug}`}
              className="flex items-center gap-2 text-xs text-text-2 bg-surface-card border border-border px-4 py-3 rounded-xl hover:border-gold hover:text-gold transition flex-1 group text-right"
            >
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-text-3 uppercase tracking-wider mb-0.5">Siguiente</div>
                <div className="truncate font-medium">{next.title}</div>
              </div>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </Section>
    </article>
  );
}
