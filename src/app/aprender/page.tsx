'use client';

import { useState } from 'react';
import escuelaData from '@/data/escuela';

function TemaCard({ tema }: { tema: (typeof escuelaData)[number]['temas'][number] }) {
  const [openLayer, setOpenLayer] = useState<string | null>(null);

  const layers = [
    { id: 'simple', label: 'Explicación Simple', icon: '🌱', content: tema.simple },
    { id: 'fondo', label: 'Explicación Profunda', icon: '📜', content: tema.fondo },
    { id: 'aplicacion', label: 'Aplicación Práctica', icon: '🛤️', content: tema.aplicacion },
    { id: 'errores', label: 'Errores Comunes', icon: '⚠️', content: tema.errores },
  ];

  return (
    <div className="bg-surface-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      <div className="p-5">
        <h3 className="text-text font-semibold text-base mb-3 flex items-center gap-2">
          <span className="text-lg">{tema.icon}</span>
          {tema.title}
        </h3>

        <div className="space-y-1.5">
          {layers.map((layer) => (
            <div key={layer.id}>
              <button
                onClick={() => setOpenLayer(openLayer === layer.id ? null : layer.id)}
                className={`w-full flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-left text-sm font-medium transition-all duration-200 ${
                  openLayer === layer.id
                    ? 'bg-gold/10 text-gold border border-gold/20'
                    : 'bg-surface text-text-2 border border-border hover:border-gold/30 hover:text-text'
                }`}
              >
                <span className="text-base flex-shrink-0">{layer.icon}</span>
                <span className="flex-1">{layer.label}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openLayer === layer.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openLayer === layer.id ? 'max-h-96 opacity-100 mt-1.5' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-3.5 py-3 bg-surface border border-border/60 rounded-lg text-text text-sm leading-relaxed">
                  {layer.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NivelSection({ nivel }: { nivel: (typeof escuelaData)[number] }) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-5">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold text-black text-xs font-bold">
              {nivel.nivel}
            </span>
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Nivel {nivel.nivel}
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-text mb-2">
            {nivel.title}
          </h2>
          <p className="text-text-2 text-sm leading-relaxed max-w-2xl">
            {nivel.descripcion}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 min-w-0">
          {nivel.temas.map((tema) => (
            <TemaCard key={tema.id} tema={tema} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AprenderPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-surface-1 border-b border-border">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Fiel
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text mt-6 leading-[1.15]">
            Escuela Bíblica Confesional
          </h1>
          <div className="mx-auto w-16 h-px bg-gold/50 my-5" />
          <p className="text-text-2 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Un lugar donde alguien puede entrar confundido, hambriento de Dios,
            y salir entendiendo mejor quién es Dios, qué dice Su Palabra y cómo
            vivir para Su gloria.
          </p>
          <p className="text-text-2 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-3">
            Y al mismo tiempo, un lugar donde alguien con años estudiando
            todavía encuentre profundidad, orden, reverencia y riqueza bíblica.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={`#${escuelaData[0]?.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-semibold rounded-xl hover:bg-gold-dark transition-all text-sm"
            >
              Comenzar con Nivel 1
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {escuelaData.map((nivel) => (
        <div key={nivel.id} id={nivel.id}>
          <NivelSection nivel={nivel} />
          <div className="max-w-5xl mx-auto px-5">
            <div className="border-t border-border/50" />
          </div>
        </div>
      ))}

      <section className="py-16 md:py-20 bg-surface-1 bg-dot-pattern">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-text mb-4">
            ¿Por dónde empiezo?
          </h2>
          <p className="text-text-2 text-sm leading-relaxed mb-6">
            Si eres nuevo en la fe, comienza por el Nivel 1 y avanza tema por
            tema. Cada lección está diseñada para construir sobre la anterior.
            No necesitas prisa. Lo importante no es cuánto abarcas, sino cuán
            bien comprendes quién es Dios y qué ha hecho por ti en Cristo.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-card border border-border rounded-lg text-sm text-text-2">
            <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Los 3 niveles están disponibles
          </div>
        </div>
      </section>
    </>
  );
}
