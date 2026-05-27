"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import doctrinas from "@/data/doctrinas";
import { herejias } from "@/data/herejias";
import confessionChapters from "@/data/confesion";
import recursos from "@/data/recursos";
import facultadAreas from "@/data/facultad";

type SearchEntry = {
  title: string;
  route: string;
  type: string;
  excerpt: string;
  keywords: string;
};

function buildIndex(): SearchEntry[] {
  const index: SearchEntry[] = [];

  for (const d of doctrinas) {
    const keywords = [d.title, d.tag, d.filter, d.summary, d.simple, d.fondo, d.historia, d.malentendidos, d.aplicacion, d.confesion, ...d.escrituras, ...d.relacionadas].filter(Boolean).join(" ").toLowerCase();
    index.push({ title: d.title, route: `/doctrina/${d.slug}`, type: "Doctrina", excerpt: d.summary, keywords });
  }

  for (const h of herejias) {
    const keywords = [h.title, h.subtitle, h.era, h.taughtBy, h.century, h.originalTeaching, h.whyError, h.refutedBy, h.councils, h.modernForm, h.comparison, h.pastoralApp, h.content.intro, h.content.historicalContext, h.content.teaching, h.content.refutation, h.content.biblicalDefense, h.content.conclusion, ...h.keyScriptures, ...h.content.keyFigures.map(f => f.name + " " + f.contribution), ...h.content.modernConnections.flatMap(c => [c.modern, c.ancient])].filter(Boolean).join(" ").toLowerCase();
    index.push({ title: h.title, route: `/herejia/${h.slug}`, type: "Herejía", excerpt: h.subtitle, keywords });
  }

  for (let i = 0; i < confessionChapters.length; i++) {
    const keywords = `capítulo ${i + 1} ${confessionChapters[i]} confesión 1689 bautista`.toLowerCase();
    index.push({ title: `${i + 1}. ${confessionChapters[i]}`, route: `/#confesion`, type: "Confesión 1689", excerpt: `Capítulo ${i + 1} de la Confesión Bautista de Fe de 1689`, keywords });
  }

  for (const r of recursos) {
    const keywords = [r.title, r.author, r.desc, ...r.tags].filter(Boolean).join(" ").toLowerCase();
    index.push({ title: r.title, route: `/#recursos`, type: `Recurso (${r.type})`, excerpt: `${r.author} — ${r.desc}`, keywords });
  }

  for (const f of facultadAreas) {
    const keywords = [f.title, f.desc, ...f.topics].filter(Boolean).join(" ").toLowerCase();
    index.push({ title: `${f.num}. ${f.title}`, route: `/#facultad`, type: "Facultad CBTS", excerpt: f.desc, keywords });
  }

  return index;
}

function score(entry: SearchEntry, query: string): number {
  const q = query.toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);
  if (terms.length === 0) return 0;

  let score = 0;
  const kw = entry.keywords;
  const titleLower = entry.title.toLowerCase();

  for (const term of terms) {
    if (titleLower.includes(term)) score += 10;
    const idx = kw.indexOf(term);
    if (idx !== -1) {
      score += 3;
      if (idx === 0 || kw[idx - 1] === " ") score += 2;
    }
  }
  if (titleLower.startsWith(q)) score += 15;
  if (titleLower === q) score += 20;
  return score;
}

function highlight(text: string, query: string): string {
  if (!query.trim()) return text;
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${q.split(/\s+/).filter(Boolean).join("|")})`, "gi"));
  return parts.map((p) => (p.toLowerCase() === q.toLowerCase() || q.split(/\s+/).some(t => t.toLowerCase() === p.toLowerCase()) ? `<mark class="bg-gold/30 text-text rounded px-0.5">${p}</mark>` : p)).join("");
}

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const index = useRef<SearchEntry[]>([]);

  useEffect(() => {
    index.current = buildIndex();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((p) => !p);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const results = query.trim()
    ? index.current
        .map((entry) => ({ entry, score: score(entry, query) }))
        .filter((r) => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 20)
    : [];

  const go = useCallback((route: string) => {
    setOpen(false);
    setQuery("");
    router.push(route);
  }, [router]);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg text-text-2 hover:text-text hover:bg-surface-card transition"
        title="Buscar (Ctrl+K)"
        aria-label="Buscar"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="11" cy="11" r="8" />
          <path strokeLinecap="round" d="m21 21-4.3-4.3" />
        </svg>
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          <div className="fixed inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-full max-w-lg mx-4 bg-surface-1 border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
            {/* Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <svg className="w-5 h-5 text-text-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar doctrinas, herejías, recursos…"
                className="flex-1 bg-transparent text-text text-sm outline-none placeholder:text-text-3"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-text-2 hover:text-text transition text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <kbd className="hidden sm:inline-flex text-[10px] text-text-3 bg-surface-card border border-border px-1.5 py-0.5 rounded">ESC</kbd>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto">
              {query.trim() && results.length === 0 && (
                <div className="px-4 py-8 text-center text-text-3 text-sm">
                  No se encontraron resultados para &ldquo;{query}&rdquo;
                </div>
              )}
              {results.length > 0 && (
                <div className="py-2">
                  {results.map((r, i) => (
                    <button
                      key={`${r.entry.route}-${i}`}
                      onClick={() => go(r.entry.route)}
                      className="w-full text-left px-4 py-3 hover:bg-surface-card transition border-b border-border/50 last:border-0"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-[10px] uppercase tracking-wider text-gold font-semibold mt-0.5 flex-shrink-0">
                          {r.entry.type}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-text truncate break-words" dangerouslySetInnerHTML={{ __html: highlight(r.entry.title, query) }} />
                          <p className="text-xs text-text-3 mt-0.5 line-clamp-2 break-words" dangerouslySetInnerHTML={{ __html: highlight(r.entry.excerpt.slice(0, 120), query) }} />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              {!query.trim() && (
                <div className="px-4 py-8 text-center text-text-3 text-sm">
                  Escribe para buscar en todo el contenido del sitio
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="px-4 py-2 border-t border-border bg-surface-card rounded-b-2xl">
              <p className="text-[10px] text-text-3 text-center">
                Busca en doctrinas, herejías, confesión, recursos y facultad
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
