'use client'

import { useState, useEffect } from 'react'
import { curiosidades } from '@/data/curiosidades'

const DOS_HORAS = 2 * 60 * 60 * 1000

function getIndice(): number {
  return Math.floor(Date.now() / DOS_HORAS) % curiosidades.length
}

export default function CuriosidadBanner() {
  const [indice, setIndice] = useState(getIndice)

  useEffect(() => {
    const sig = DOS_HORAS - (Date.now() % DOS_HORAS)
    const timer = setTimeout(() => {
      setIndice(getIndice())
    }, sig)
    return () => clearTimeout(timer)
  }, [indice])

  const c = curiosidades[indice]

  return (
    <div className="bg-surface-card border-b border-border pt-16">
      <div className="max-w-5xl mx-auto px-5 py-2.5 flex items-start gap-2.5">
        <span className="text-sm flex-shrink-0 mt-0.5">{c.icono}</span>
        <p className="text-xs text-text-2 leading-relaxed">
          <span className="text-gold font-semibold text-[10px] uppercase tracking-wider mr-1.5">
            Sabías que…
          </span>
          {c.texto}
        </p>
      </div>
    </div>
  )
}
