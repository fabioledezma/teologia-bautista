import Link from "next/link";
import { notFound } from "next/navigation";
import { herejias } from "@/data/herejias";

export function generateStaticParams() {
  return herejias.map((h) => ({ slug: h.slug }));
}

export default async function HerejiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = herejias.find((x) => x.slug === slug);
  if (!h) notFound();
  const c = h.content;

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-5">
        {/* Back link */}
        <Link
          href="/#historia"
          className="inline-flex items-center gap-1 text-text-2 text-xs hover:text-gold transition mb-6"
        >
          ← Volver a Teología Histórica
        </Link>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-3xl flex-shrink-0">
            {h.icon}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[10px] uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/20">
                {h.era}
              </span>
              <span className="text-[10px] text-text-3">{h.century}</span>
            </div>
            <h1 className="font-serif text-2xl md:text-3xl text-text leading-tight">
              {h.title}
            </h1>
            <p className="text-text-2 text-sm mt-1">{h.subtitle}</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-surface-card border border-border rounded-lg p-5 mb-8">
          <p className="text-text-2 text-sm leading-relaxed">{c.intro}</p>
        </div>

        {/* Contexto Histórico */}
        <Section title="Contexto Histórico">
          {c.historicalContext.split("\n\n").map((p, i) => (
            <p key={i} className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0">
              {p.trim()}
            </p>
          ))}
        </Section>

        {/* Datos Clave */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <InfoCard label="Quién la enseñó" value={h.taughtBy} />
          <InfoCard label="Siglo" value={h.century} />
          <InfoCard label="Refutado por" value={h.refutedBy} />
          <InfoCard label="Concilios / Documentos" value={h.councils} />
        </div>

        {/* What it taught */}
        <Section title="¿Qué enseñaba exactamente?">
          {h.originalTeaching.split("\n\n").map((p, i) => (
            <p key={i} className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0">
              {p.trim()}
            </p>
          ))}
        </Section>

        {/* More detailed teaching */}
        <Section title="Desarrollo Histórico de la Doctrina">
          {c.teaching.split("\n\n").map((p, i) => (
            <p key={i} className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0">
              {p.trim()}
            </p>
          ))}
        </Section>

        {/* Why error */}
        <Section title="¿Por qué fue considerada errónea?">
          {h.whyError.split("\n\n").map((p, i) => (
            <p key={i} className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0">
              {p.trim()}
            </p>
          ))}
        </Section>

        {/* Refutation */}
        <Section title="Refutación Teológica">
          {c.refutation.split("\n\n").map((p, i) => (
            <p key={i} className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0">
              {p.trim()}
            </p>
          ))}
        </Section>

        {/* Key Figures */}
        <Section title="Figuras Clave en la Controversia">
          <div className="space-y-3">
            {c.keyFigures.map((f, i) => (
              <div
                key={i}
                className="bg-surface-card border border-border rounded-lg p-4"
              >
                <h4 className="text-text font-semibold text-sm mb-1">
                  {f.name}
                </h4>
                <p className="text-text-2 text-xs leading-relaxed">
                  {f.contribution}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Key Scriptures */}
        <Section title="Textos Bíblicos Clave">
          <div className="flex flex-wrap gap-2">
            {h.keyScriptures.map((s, i) => (
              <span
                key={i}
                className="text-xs text-gold bg-gold/5 border border-gold/20 px-3 py-1 rounded"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-4">
            {c.biblicalDefense.split("\n\n").map((p, i) => (
              <p key={i} className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0">
                {p.trim()}
              </p>
            ))}
          </div>
        </Section>

        {/* Modern Connections */}
        <Section title="Conexiones Modernas">
          <div className="space-y-4 mb-4">
            {c.modernConnections.map((conn, i) => (
              <div
                key={i}
                className="bg-surface-card border border-border rounded-lg p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xs font-bold mt-0.5">
                    Hoy
                  </span>
                  <p className="text-text text-xs leading-relaxed">
                    {conn.modern}
                  </p>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <span className="text-text-3 text-xs font-bold mt-0.5">
                    Raíz
                  </span>
                  <p className="text-text-2 text-xs leading-relaxed">
                    {conn.ancient}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Modern Form */}
        <Section title="¿Cómo se manifiesta hoy?">
          {h.modernForm.split("\n\n").map((p, i) => (
            <p key={i} className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0">
              {p.trim()}
            </p>
          ))}
        </Section>

        {/* Comparison */}
        <Section title="Postura Histórica vs. Postura Reformada">
          {h.comparison.split("\n\n").map((p, i) => (
            <p key={i} className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0">
              {p.trim()}
            </p>
          ))}
        </Section>

        {/* Pastoral Application */}
        <Section title="Aplicación Pastoral">
          {h.pastoralApp.split("\n\n").map((p, i) => (
            <p key={i} className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0">
              {p.trim()}
            </p>
          ))}
        </Section>

        {/* Conclusion */}
        <Section title="Conclusión">
          {c.conclusion.split("\n\n").map((p, i) => (
            <p key={i} className="text-text-2 text-sm leading-relaxed mb-3 last:mb-0">
              {p.trim()}
            </p>
          ))}
        </Section>

        {/* Related */}
        <div className="mt-10 p-5 bg-surface-card border border-border rounded-lg">
          <h3 className="font-serif text-sm text-gold mb-2">
            Sigue explorando
          </h3>
          <div className="flex flex-wrap gap-2">
            {herejias
              .filter((x) => x.slug !== h.slug && x.era === h.era)
              .slice(0, 4)
              .map((x) => (
                <Link
                  key={x.slug}
                  href={`/herejia/${x.slug}`}
                  className="text-xs text-text-2 bg-gold/5 border border-border px-3 py-1 rounded hover:border-gold hover:text-gold transition"
                >
                  {x.icon} {x.title}
                </Link>
              ))}
          </div>
          <Link
            href="/#historia"
            className="inline-flex items-center gap-1 text-gold text-xs font-semibold mt-4 hover:gap-2 transition-all"
          >
            ← Ver todas las herejías
          </Link>
        </div>
      </div>
    </main>
  );
}

/* ─── Sub-components ─── */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="font-serif text-base text-gold mb-3 pb-2 border-b border-border">
        {title}
      </h2>
      {children}
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface-card border border-border rounded-lg p-4">
      <span className="text-[10px] uppercase tracking-wider text-text-3">
        {label}
      </span>
      <p className="text-text text-sm font-medium mt-1">{value}</p>
    </div>
  );
}
