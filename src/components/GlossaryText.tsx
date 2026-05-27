"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { glossary } from "@/lib/glossary";

interface Props {
  text: string;
  className?: string;
}

interface ActivePopover {
  term: string;
  definition: string;
  rect: DOMRect;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function GlossaryText({ text, className = "" }: Props) {
  const [active, setActive] = useState<ActivePopover | null>(null);
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
        setActive(null);
      }
    },
    []
  );

  useEffect(() => {
    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [active, handleClickOutside]);

  const handleTermClick = (term: string, definition: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (active && active.term === term) {
      setActive(null);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setActive({ term, definition, rect });
  };

  const calcPosition = (): React.CSSProperties => {
    if (!active) return { display: "none" };
    const { rect } = active;
    const gap = 8;
    const popoverW = Math.min(320, window.innerWidth - 24);
    const popoverH = 200;

    let top: number;
    let left: number;

    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;

    if (spaceBelow >= popoverH || spaceBelow >= spaceAbove) {
      top = rect.bottom + gap;
    } else {
      top = rect.top - popoverH - gap;
    }

    left = rect.left + rect.width / 2 - popoverW / 2;
    if (left < 12) left = 12;
    if (left + popoverW > window.innerWidth - 12) {
      left = window.innerWidth - popoverW - 12;
    }

    const arrowTop = spaceBelow >= popoverH || spaceBelow >= spaceAbove
      ? rect.bottom + gap
      : rect.top - gap;

    return {
      position: "fixed",
      top: `${top}px`,
      left: `${left}px`,
      width: `${popoverW}px`,
      zIndex: 9999,
    };
  };

  return (
    <span className={`${className} block`}>
      {parts.map((part, i) => {
        if (!part.isTerm) {
          return <span key={i}>{part.text}</span>;
        }
        const isActive = active?.term === part.text;
        return (
          <span key={i} className="relative inline">
            <button
              type="button"
              onClick={(e) => handleTermClick(part.text!, part.definition!, e)}
              className="inline text-inherit font-inherit cursor-help border-b border-dotted border-gold/60 hover:border-gold transition-colors"
              style={{ background: "none", padding: 0, font: "inherit", color: "inherit" }}
            >
              {part.text}
            </button>
          </span>
        );
      })}

      {active && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setActive(null)}
          />
          <div
            ref={popoverRef}
            style={calcPosition()}
            className="p-3.5 rounded-xl bg-surface-card border border-gold/30 shadow-lg text-xs text-text leading-relaxed"
          >
            <div className="font-semibold text-gold mb-1.5 text-[11px] uppercase tracking-wider">
              {active.term}
            </div>
            <p className="text-text-2">{active.definition}</p>
          </div>
        </>
      )}
    </span>
  );
}
