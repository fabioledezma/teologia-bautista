import Link from "next/link";
import { notFound } from "next/navigation";
import { herejias } from "@/data/herejias";
import GlossaryText from "@/components/GlossaryText";
import TextToSpeech from "@/components/TextToSpeech";

export function generateStaticParams() {
  return herejias.map((h) => ({ slug: h.slug }));
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

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface-card border border-border rounded-xl p-4">
      <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">{label}</span>
      <p className="text-text text-sm font-medium mt-1">{value}</p>
    </div>
  );
}

export default async function HerejiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = herejias.find((x) => x.slug === slug);
  if (!h) notFound();
  const c = h.content;

  const sections = [
    { title: "¿Qué enseñaba exactamente?", content: h.originalTeaching },
    { title: "Contexto Histórico", content: c.historicalContext },
    { title: "Desarrollo Histórico de la Doctrina", content: c.teaching },
    { title: "Refutación Bíblica", content: c.refutation },
    { title: "Defensa Bíblica", content: c.biblicalDefense },
    { title: "¿Por qué es un error?", content: h.whyError },
    { title: "Forma Moderna", content: h.modernForm },
    { title: "Comparación Doctrinal", content: h.comparison },
    { title: "Aplicación Pastoral", content: h.pastoralApp },
    { title: "Conclusión", content: c.conclusion },
  ]

  return (
    <main className="pt-20 md:pt-24 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-5">
        <Link
          href="/#historia"
          className="inline-flex items-center gap-1.5 text-text-2 text-xs hover:text-gold transition-colors mb-6 group"
        >
          <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7 7l-7-7 7-7" />
          </svg>
          Volver a Teología Histórica
        </Link>

        <div className="flex items-start gap-4 mb-8">
          <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-lg font-bold text-gold flex-shrink-0">
            {h.title.charAt(0)}
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

        <TextToSpeech sections={sections} />

        <div className="bg-surface-card border border-border rounded-xl p-5 mb-8">
          <GlossaryText className="text-text-2 text-sm leading-relaxed break-words" text={c.intro} />
        </div>

        <Section title="¿Qué enseñaba exactamente?">
          {h.originalTeaching.split("\n\n").map((p, i) => (
            <GlossaryText key={i} className="block text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
          ))}
        </Section>

        <Section title="Contexto Histórico">
          {c.historicalContext.split("\n\n").map((p, i) => (
            <GlossaryText key={i} className="block text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
          ))}
        </Section>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <InfoCard label="Quién la enseñó" value={h.taughtBy} />
          <InfoCard label="Siglo" value={h.century} />
          <InfoCard label="Refutado por" value={h.refutedBy} />
          <InfoCard label="Concilios / Documentos" value={h.councils} />
        </div>

        <Section title="Desarrollo Histórico de la Doctrina">
          {c.teaching.split("\n\n").map((p, i) => (
            <GlossaryText key={i} className="block text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
          ))}
        </Section>

        {c.keyFigures && c.keyFigures.length > 0 && (
          <Section title="Figuras Clave">
            <div className="grid md:grid-cols-2 gap-3">
              {c.keyFigures.map((fig, i) => (
                <div key={i} className="bg-surface-card border border-border rounded-xl p-4">
                  <span className="text-text text-sm font-semibold">{fig.name}</span>
                  <span className="text-text-3 text-xs block mt-1 leading-relaxed">{fig.contribution}</span>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section title="Refutación Bíblica">
          {c.refutation.split("\n\n").map((p, i) => (
            <GlossaryText key={i} className="block text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
          ))}
        </Section>

        <Section title="Defensa Bíblica">
          {c.biblicalDefense.split("\n\n").map((p, i) => (
            <GlossaryText key={i} className="block text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
          ))}
        </Section>

        {h.keyScriptures.length > 0 && (
          <Section title="Escrituras Clave">
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
          </Section>
        )}

        <Section title="¿Por qué es un error?">
          {h.whyError.split("\n\n").map((p, i) => (
            <GlossaryText key={i} className="block text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
          ))}
        </Section>

        <Section title="Forma Moderna">
          {h.modernForm.split("\n\n").map((p, i) => (
            <GlossaryText key={i} className="block text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
          ))}
        </Section>

        {c.modernConnections && c.modernConnections.length > 0 && (
          <Section title="Conexiones Modernas">
            <div className="space-y-3">
              {c.modernConnections.map((conn, i) => (
                <div key={i} className="bg-surface-card border border-border rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <span className="text-text-2 text-xs font-semibold uppercase tracking-wider">Actual</span>
                      <p className="text-text text-sm mt-0.5">{conn.modern}</p>
                    </div>
                    <svg className="w-4 h-4 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <div className="flex-1">
                      <span className="text-text-2 text-xs font-semibold uppercase tracking-wider">Antiguo</span>
                      <p className="text-text text-sm mt-0.5">{conn.ancient}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section title="Comparación Doctrinal">
          {h.comparison.split("\n\n").map((p, i) => (
            <GlossaryText key={i} className="block text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
          ))}
        </Section>

        <Section title="Aplicación Pastoral">
          {h.pastoralApp.split("\n\n").map((p, i) => (
            <GlossaryText key={i} className="block text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
          ))}
        </Section>

        <Section title="Conclusión">
          {c.conclusion.split("\n\n").map((p, i) => (
            <GlossaryText key={i} className="block text-text-2 text-sm leading-relaxed mb-3 last:mb-0 break-words font-text" text={p.trim()} />
          ))}
        </Section>
      </div>
    </main>
  );
}
