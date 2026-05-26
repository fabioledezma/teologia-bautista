import Link from "next/link";
import { notFound } from "next/navigation";
import doctrinas from "@/data/doctrinas";
import { svgMap } from "@/components/Diagramas";

export async function generateStaticParams() {
  return doctrinas.map((d) => ({ slug: d.slug }));
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

export default async function DoctrinaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = doctrinas.find((x) => x.slug === slug);
  if (!d) notFound();

  const renderDiagram = () => {
    if (!d.svg) return null;
    const fn = svgMap[d.svg as keyof typeof svgMap];
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

  return (
    <article className="max-w-3xl mx-auto px-5 pt-4 md:pt-8 pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-text-2 text-xs hover:text-gold transition-colors mb-6 group"
      >
        <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7 7l-7-7 7-7" />
        </svg>
        Volver al inicio
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{d.icon}</span>
          <span className="text-[10px] uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-1 rounded-full">
            {d.tag}
          </span>
          <span className="text-[10px] text-text-3 bg-surface-card border border-border px-2 py-1 rounded">
            {d.filter}
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-text leading-tight">
          {d.title}
        </h1>
      </header>

      <blockquote className="relative border-l-4 border-gold bg-surface-card rounded-r-xl px-6 py-5 mb-10">
        <svg className="absolute top-3 left-3 w-6 h-6 text-gold/15" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-base text-text italic leading-relaxed break-words font-text">
          &ldquo;{d.keyVerse.text}&rdquo;
        </p>
        <footer className="mt-3 text-xs text-text-2">
          &mdash; {d.keyVerse.ref}
        </footer>
      </blockquote>

      <Section title="En lenguaje sencillo">
        <p className="text-text-2 text-sm leading-relaxed break-words">{d.simple}</p>
      </Section>

      {renderDiagram()}

      <Section title="Más a fondo">
        {d.fondo.split("\n\n").map((p, i) => (
          <p
            key={i}
            className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text"
          >
            {p.trim()}
          </p>
        ))}
      </Section>

      {d.historia && (
        <Section title="Contexto histórico">
          {d.historia.split("\n\n").map((p, i) => (
            <p
              key={i}
              className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text"
            >
              {p.trim()}
            </p>
          ))}
        </Section>
      )}

      {d.malentendidos && (
        <Section title="Malentendidos comunes">
          {d.malentendidos.split("\n\n").map((p, i) => (
            <p
              key={i}
              className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text"
            >
              {p.trim()}
            </p>
          ))}
        </Section>
      )}

      {d.aplicacion && (
        <Section title="Aplicación práctica">
          {d.aplicacion.split("\n\n").map((p, i) => (
            <p
              key={i}
              className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text"
            >
              {p.trim()}
            </p>
          ))}
        </Section>
      )}

      {d.confesion && (
        <Section title="La Confesión 1689">
          <div className="bg-surface-card border border-border rounded-xl p-5">
            <p className="text-gold text-xs font-semibold mb-2">
              {d.confesion}
            </p>
            <p className="text-text-2 text-xs">
              La Confesión Bautista de Fe de 1689 dedica un capítulo completo a
              esta doctrina, proporcionando una declaración precisa y
              cuidadosamente formulada con referencias bíblicas para cada
              afirmación.
            </p>
          </div>
        </Section>
      )}

      <Section title="Escrituras clave">
        <div className="flex flex-wrap gap-2">
          {d.escrituras.map((s, i) => (
            <span
              key={i}
              className="text-xs text-gold bg-gold/5 border border-gold/20 px-3 py-1 rounded"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      {d.relacionadas.length > 0 && (
        <Section title="Doctrinas relacionadas">
          <div className="flex flex-wrap gap-2">
            {d.relacionadas.map((slug) => {
              const rel = doctrinas.find((x) => x.slug === slug);
              if (!rel) return null;
              return (
                <Link
                  key={slug}
                  href={`/doctrina/${slug}`}
                  className="text-xs text-text-2 bg-surface-card border border-border px-3 py-1.5 rounded hover:border-gold hover:text-gold transition"
                >
                  {rel.icon} {rel.title}
                </Link>
              );
            })}
          </div>
        </Section>
      )}
    </article>
  );
}
