'use client';

import { useState } from 'react';
import escuelaData from '@/data/escuela';
import historiaRedencion from '@/data/historia-redencion';
import versiculosMalInterpretados from '@/data/versiculos-mal-interpretados';
import areasDiscernimiento from '@/data/discernimiento';

function TemaCard({ tema }: { tema: (typeof escuelaData)[number]['temas'][number] }) {
  const [openLayer, setOpenLayer] = useState<string | null>(null);

  const layers = [
    { id: 'simple', label: 'Explicación Simple', content: tema.simple },
    { id: 'fondo', label: 'Explicación Profunda', content: tema.fondo },
    { id: 'aplicacion', label: 'Aplicación Práctica', content: tema.aplicacion },
    { id: 'errores', label: 'Errores Comunes', content: tema.errores },
  ];

  return (
    <div className="bg-surface-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      <div className="p-5">
        <h3 className="text-text font-semibold text-base mb-3">
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

      <section className="py-16 md:py-24 bg-surface-1">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Historia de la Redención
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
              La Biblia como una sola historia
            </h2>
            <div className="section-title-line mt-3 mb-3" />
            <p className="text-text-3 text-sm max-w-2xl mx-auto">
              La Biblia no es una colección de frases sueltas ni de historias
              inconexas. Es una sola historia: la revelación progresiva de Dios
              que culmina en Jesucristo. Desde la creación hasta la nueva
              creación, todo apunta a Él.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {historiaRedencion.map((etapa, i) => (
                <div key={etapa.id} className="relative md:grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className={`${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}`}>
                    <div className="inline-flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/20">
                        {etapa.periodo}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-text mb-2">
                      {etapa.titulo}
                    </h3>
                    <p className="text-text-2 text-sm leading-relaxed">
                      {etapa.resumen}
                    </p>
                  </div>

                  <div className={`mt-4 md:mt-0 ${i % 2 === 0 ? 'md:pl-8' : 'md:col-start-1 md:row-start-1 md:text-right md:pr-8'}`}>
                    <div className="bg-surface-card border border-border rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                          Cumplido en Cristo
                        </span>
                      </div>
                      <p className="text-text text-sm leading-relaxed">
                        {etapa.cumpleCristo}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {etapa.escrituras.map((ref) => (
                          <span key={ref} className="text-[10px] text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded">
                            {ref}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Corrección Pastoral
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
              Versículos mal interpretados
            </h2>
            <div className="section-title-line mt-3 mb-3" />
            <p className="text-text-3 text-sm max-w-2xl mx-auto">
              Algunos de los versículos más conocidos son también los más
              malinterpretados. Aquí los examinamos pastoralmente: sin burla,
              con fidelidad al texto y aplicación correcta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 min-w-0">
            {versiculosMalInterpretados.map((v) => (
              <div key={v.id} className="bg-surface-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
                <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
                <div className="p-5">
                  <h3 className="text-text font-semibold text-base mb-1">
                    {v.pasaje}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {v.citas.map((ref) => (
                      <span key={ref} className="text-[10px] text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded">
                        {ref}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                        Lo que muchos piensan
                      </span>
                      <p className="text-text text-sm leading-relaxed mt-0.5">
                        {v.loQueMuchosPiensan}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                        Contexto real
                      </span>
                      <p className="text-text text-sm leading-relaxed mt-0.5">
                        {v.contextoReal}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                        Significado real
                      </span>
                      <p className="text-text text-sm leading-relaxed mt-0.5">
                        {v.significadoReal}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                        Aplicación correcta
                      </span>
                      <p className="text-text text-sm leading-relaxed mt-0.5">
                        {v.aplicacionCorrecta}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface-1 bg-dot-pattern">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Discernimiento
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
              Señales de alerta y sana doctrina
            </h2>
            <div className="section-title-line mt-3 mb-3" />
            <p className="text-text-3 text-sm max-w-2xl mx-auto">
              No se trata de tener una actitud polémica ni de buscar herejías
              en todo. Se trata de conocer la verdad para reconocer el error,
              amar a Dios correctamente y ayudar a otros con sabiduría pastoral.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 min-w-0">
            {areasDiscernimiento.map((area) => (
              <div key={area.id} className="bg-surface-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
                <div className="p-5">
                  <h3 className="text-text font-semibold text-sm mb-2">
                    {area.titulo}
                  </h3>
                  <p className="text-text-2 text-xs leading-relaxed mb-3">
                    {area.descripcion}
                  </p>

                  <div className="mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                      Señales de alerta
                    </span>
                    <ul className="mt-1 space-y-1">
                      {area.senales.map((s, i) => (
                        <li key={i} className="text-text text-xs leading-relaxed flex items-start gap-1.5">
                          <span className="text-gold mt-0.5 flex-shrink-0">&bull;</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                      Fundamento bíblico
                    </span>
                    <p className="text-text text-xs leading-relaxed mt-0.5">
                      {area.fundamento}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                      Actitud pastoral
                    </span>
                    <p className="text-text text-xs leading-relaxed mt-0.5 italic">
                      {area.actitud}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
