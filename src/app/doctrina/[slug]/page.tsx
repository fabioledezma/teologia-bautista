import Link from "next/link";
import { notFound } from "next/navigation";
import doctrinas from "@/data/doctrinas";
import { svgMap } from "@/components/Diagramas";

export async function generateStaticParams() {
  return doctrinas.map((d) => ({ slug: d.slug }));
}

export default function DoctrinaPage({
  params,
}: {
  params: { slug: string };
}) {
  const d = doctrinas.find((x) => x.slug === params.slug);
  if (!d) notFound();

  const renderDiagram = () => {
    if (!d.svg) return null;
    const fn = svgMap[d.svg as keyof typeof svgMap];
    if (!fn) return null;
    return (
      <section className="mb-12">
        <h2 className="font-serif text-xl font-bold text-[#d4af37] mb-5">
          Diagrama
        </h2>
        <div
          className="bg-[#0e0e18] rounded-xl p-5 border border-[#2a2a3e] flex justify-center overflow-x-auto"
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
        className="inline-flex items-center gap-1 text-[#a8a8c0] text-xs hover:text-[#d4af37] transition-colors mb-6"
      >
        ← Volver al inicio
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{d.icon}</span>
          <span className="text-[10px] uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded-full">
            {d.tag}
          </span>
          <span className="text-[10px] text-[#6e6e88] bg-[#1a1a2e] px-2 py-1 rounded">
            {d.filter}
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-[#ececf5] leading-tight">
          {d.title}
        </h1>
      </header>

      {/* Key verse */}
      <blockquote className="border-l-4 border-[#d4af37] bg-[#1a1a2e] rounded-r-xl px-6 py-5 mb-10">
        <p className="text-base text-[#ececf5] italic leading-relaxed">
          &ldquo;{d.keyVerse.text}&rdquo;
        </p>
        <footer className="mt-3 text-xs text-[#a8a8c0]">
          &mdash; {d.keyVerse.ref}
        </footer>
      </blockquote>

      {/* En lenguaje sencillo */}
      <section className="mb-10">
        <h2 className="font-serif text-base text-[#d4af37] mb-3 pb-2 border-b border-[#2a2a3e]">
          En lenguaje sencillo
        </h2>
        <p className="text-[#a8a8c0] text-sm leading-relaxed">{d.simple}</p>
      </section>

      {/* Diagram */}
      {renderDiagram()}

      {/* Más a fondo */}
      <section className="mb-10">
        <h2 className="font-serif text-base text-[#d4af37] mb-3 pb-2 border-b border-[#2a2a3e]">
          Más a fondo
        </h2>
        {d.fondo.split("\n\n").map((p, i) => (
          <p
            key={i}
            className="text-[#a8a8c0] text-sm leading-relaxed mb-3 last:mb-0"
          >
            {p.trim()}
          </p>
        ))}
      </section>

      {/* Contexto histórico */}
      {d.historia && (
        <section className="mb-10">
          <h2 className="font-serif text-base text-[#d4af37] mb-3 pb-2 border-b border-[#2a2a3e]">
            Contexto histórico
          </h2>
          {d.historia.split("\n\n").map((p, i) => (
            <p
              key={i}
              className="text-[#a8a8c0] text-sm leading-relaxed mb-3 last:mb-0"
            >
              {p.trim()}
            </p>
          ))}
        </section>
      )}

      {/* Malentendidos */}
      {d.malentendidos && (
        <section className="mb-10">
          <h2 className="font-serif text-base text-[#d4af37] mb-3 pb-2 border-b border-[#2a2a3e]">
            Malentendidos comunes
          </h2>
          {d.malentendidos.split("\n\n").map((p, i) => (
            <p
              key={i}
              className="text-[#a8a8c0] text-sm leading-relaxed mb-3 last:mb-0"
            >
              {p.trim()}
            </p>
          ))}
        </section>
      )}

      {/* Aplicación práctica */}
      {d.aplicacion && (
        <section className="mb-10">
          <h2 className="font-serif text-base text-[#d4af37] mb-3 pb-2 border-b border-[#2a2a3e]">
            Aplicación práctica
          </h2>
          {d.aplicacion.split("\n\n").map((p, i) => (
            <p
              key={i}
              className="text-[#a8a8c0] text-sm leading-relaxed mb-3 last:mb-0"
            >
              {p.trim()}
            </p>
          ))}
        </section>
      )}

      {/* Confesión */}
      {d.confesion && (
        <section className="mb-10">
          <h2 className="font-serif text-base text-[#d4af37] mb-3 pb-2 border-b border-[#2a2a3e]">
            La Confesión 1689
          </h2>
          <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl p-5">
            <p className="text-[#d4af37] text-xs font-semibold mb-2">
              {d.confesion}
            </p>
            <p className="text-[#a8a8c0] text-xs">
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
        <h2 className="font-serif text-base text-[#d4af37] mb-3 pb-2 border-b border-[#2a2a3e]">
          Escrituras clave
        </h2>
        <div className="flex flex-wrap gap-2">
          {d.escrituras.map((s, i) => (
            <span
              key={i}
              className="text-xs text-[#d4af37] bg-[#d4af37]/5 border border-[#d4af37]/20 px-3 py-1 rounded"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Relacionadas */}
      {d.relacionadas.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-base text-[#d4af37] mb-3 pb-2 border-b border-[#2a2a3e]">
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
                  className="text-xs text-[#a8a8c0] bg-[#1a1a2e] border border-[#2a2a3e] px-3 py-1.5 rounded hover:border-[#d4af37] hover:text-[#d4af37] transition"
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
