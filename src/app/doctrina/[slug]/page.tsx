import Link from "next/link";
import { notFound } from "next/navigation";
import doctrinas from "@/data/doctrinas";
import { svgMap } from "@/components/Diagramas";

export async function generateStaticParams() {
  return doctrinas.map((d) => ({ slug: d.slug }));
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
      <section className="mb-12">
        <h2 className="font-serif text-xl font-bold text-gold mb-5">
          Diagrama
        </h2>
        <div
          className="bg-surface-1 rounded-xl p-5 border border-border flex justify-center overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: fn() }}
        />
      </section>
    );
  };

  return (
    <article className="max-w-3xl mx-auto px-5 pt-8 pb-16">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-text-2 text-xs hover:text-gold transition-colors mb-6"
      >
        ← Volver al inicio
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{d.icon}</span>
          <span className="text-[10px] uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-1 rounded-full">
            {d.tag}
          </span>
          <span className="text-[10px] text-text-3 bg-surface-card px-2 py-1 rounded">
            {d.filter}
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-text leading-tight">
          {d.title}
        </h1>
      </header>

      {/* Key verse */}
      <blockquote className="border-l-4 border-gold bg-surface-card rounded-r-xl px-6 py-5 mb-10">
        <p className="text-base text-text italic leading-relaxed">
          &ldquo;{d.keyVerse.text}&rdquo;
        </p>
        <footer className="mt-3 text-xs text-text-2">
          &mdash; {d.keyVerse.ref}
        </footer>
      </blockquote>

      {/* En lenguaje sencillo */}
      <section className="mb-10">
        <h2 className="font-serif text-base text-gold mb-3 pb-2 border-b border-border">
          En lenguaje sencillo
        </h2>
        <p className="text-text-2 text-sm leading-relaxed">{d.simple}</p>
      </section>

      {/* Diagram */}
      {renderDiagram()}

      {/* Más a fondo */}
      <section className="mb-10">
        <h2 className="font-serif text-base text-gold mb-3 pb-2 border-b border-border">
          Más a fondo
        </h2>
        {d.fondo.split("\n\n").map((p, i) => (
          <p
            key={i}
            className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0"
          >
            {p.trim()}
          </p>
        ))}
      </section>

      {/* Contexto histórico */}
      {d.historia && (
        <section className="mb-10">
          <h2 className="font-serif text-base text-gold mb-3 pb-2 border-b border-border">
            Contexto histórico
          </h2>
          {d.historia.split("\n\n").map((p, i) => (
            <p
              key={i}
              className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0"
            >
              {p.trim()}
            </p>
          ))}
        </section>
      )}

      {/* Malentendidos */}
      {d.malentendidos && (
        <section className="mb-10">
          <h2 className="font-serif text-base text-gold mb-3 pb-2 border-b border-border">
            Malentendidos comunes
          </h2>
          {d.malentendidos.split("\n\n").map((p, i) => (
            <p
              key={i}
              className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0"
            >
              {p.trim()}
            </p>
          ))}
        </section>
      )}

      {/* Aplicación práctica */}
      {d.aplicacion && (
        <section className="mb-10">
          <h2 className="font-serif text-base text-gold mb-3 pb-2 border-b border-border">
            Aplicación práctica
          </h2>
          {d.aplicacion.split("\n\n").map((p, i) => (
            <p
              key={i}
              className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0"
            >
              {p.trim()}
            </p>
          ))}
        </section>
      )}

      {/* Confesión */}
      {d.confesion && (
        <section className="mb-10">
          <h2 className="font-serif text-base text-gold mb-3 pb-2 border-b border-border">
            La Confesión 1689
          </h2>
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
        </section>
      )}

      {/* Escrituras */}
      <section className="mb-10">
        <h2 className="font-serif text-base text-gold mb-3 pb-2 border-b border-border">
          Escrituras clave
        </h2>
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
      </section>

      {/* Relacionadas */}
      {d.relacionadas.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-base text-gold mb-3 pb-2 border-b border-border">
            Doctrinas relacionadas
          </h2>
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
        </section>
      )}
    </article>
  );
}
