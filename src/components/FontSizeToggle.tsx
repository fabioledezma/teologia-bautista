"use client";

import { useState, useEffect } from "react";

const sizes = [
  { key: "normal", label: "A", scale: "100%" },
  { key: "large", label: "A+", scale: "112.5%" },
  { key: "xlarge", label: "A++", scale: "125%" },
];

export default function FontSizeToggle() {
  const [current, setCurrent] = useState("large");

  useEffect(() => {
    const saved = localStorage.getItem("font-size");
    if (saved) {
      setCurrent(saved);
      applySize(saved);
    } else {
      applySize("large");
    }
  }, []);

  const applySize = (key: string) => {
    const s = sizes.find((x) => x.key === key);
    if (s) document.documentElement.style.fontSize = s.scale;
    localStorage.setItem("font-size", key);
  };

  const cycle = () => {
    const idx = sizes.findIndex((x) => x.key === current);
    const next = sizes[(idx + 1) % sizes.length];
    setCurrent(next.key);
    applySize(next.key);
  };

  return (
    <button
      onClick={cycle}
      className="px-2 py-1 rounded-lg text-xs font-medium text-text-2 hover:text-text hover:bg-surface-card transition font-sans tracking-wide"
      title={`Tamaño: ${sizes.find((x) => x.key === current)?.label}`}
    >
      {sizes.find((x) => x.key === current)?.label}
    </button>
  );
}
