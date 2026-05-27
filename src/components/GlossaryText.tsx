"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { glossary } from "@/lib/glossary";

interface Props {
  text: string;
  className?: string;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function GlossaryText({ text, className = "" }: Props) {
  const [activeTerm, setActiveTerm] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const sorted = [...glossary].sort((a, b) => b.term.length - a.term.length);

  const parts: { text: string; isTerm: boolean; definition?: string }[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let found = false;
    for (const entry of sorted) {
      const escaped = escapeRegex(entry.term);
      const regex = new RegExp(`\\b${escaped}\\b`, "i");
      const match = remaining.match(regex);
      if (match && match.index !== undefined) {
        if (match.index > 0) {
          parts.push({ text: remaining.slice(0, match.index), isTerm: false });
        }
        parts.push({
          text: match[0],
          isTerm: true,
          definition: entry.definition,
        });
        remaining = remaining.slice(match.index + match[0].length);
        found = true;
        break;
      }
    }
    if (!found) {
      parts.push({ text: remaining, isTerm: false });
      remaining = "";
    }
  }

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setActiveTerm(null);
      }
    },
    []
  );

  useEffect(() => {
    if (activeTerm) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [activeTerm, handleClickOutside]);

  return (
    <span className={`${className} block`}>
      {parts.map((part, i) => {
        if (!part.isTerm) {
          return <span key={i}>{part.text}</span>;
        }
        const isActive = activeTerm === part.text;
        return (
          <span key={i} className="relative inline">
            <button
              type="button"
              onClick={() => setActiveTerm(isActive ? null : part.text)}
              className="inline text-inherit font-inherit cursor-help border-b border-dotted border-gold/60 hover:border-gold transition-colors"
              style={{ background: "none", padding: 0, font: "inherit", color: "inherit" }}
            >
              {part.text}
            </button>
            {isActive && part.definition && (
              <div
                ref={popoverRef}
                className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 rounded-xl bg-surface-card border border-gold/30 shadow-lg text-xs text-text leading-relaxed"
                style={{ pointerEvents: "auto" }}
              >
                <div className="font-semibold text-gold mb-1 text-[11px] uppercase tracking-wider">
                  {part.text}
                </div>
                <p className="text-text-2">{part.definition}</p>
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
                  style={{
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: "6px solid rgb(var(--color-gold) / 0.3)",
                  }}
                />
              </div>
            )}
          </span>
        );
      })}
    </span>
  );
}
