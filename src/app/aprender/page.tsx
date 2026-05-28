'use client';

import { useState } from 'react';
import escuelaData from '@/data/escuela';
import historiaRedencion from '@/data/historia-redencion';
import versiculosMalInterpretados from '@/data/versiculos-mal-interpretados';
import areasDiscernimiento from '@/data/discernimiento';
import testimonioData from '@/data/testimonio';
import catecismoData from '@/data/catecismo';
import bibliotecaData from '@/data/biblioteca';
import devocionalesData from '@/data/devocionales';
import mapasData from '@/data/mapas';
import conexionesData from '@/data/conexiones';
import temasTransversalesData from '@/data/temas-transversales';
import promesasData from '@/data/promesas';

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

function CatecismoItem({ entry }: { entry: (typeof catecismoData)[number] }) {
  const [open, setOpen] = useState(false);

  const temaColors: Record<string, string> = {
    Dios: 'bg-amber-900/20 text-amber-600 border-amber-800/20',
    Escritura: 'bg-blue-900/20 text-blue-400 border-blue-800/20',
    Hombre: 'bg-red-900/20 text-red-400 border-red-800/20',
    Cristo: 'bg-gold/10 text-gold border-gold/20',
    Salvación: 'bg-emerald-900/20 text-emerald-400 border-emerald-800/20',
    Iglesia: 'bg-purple-900/20 text-purple-400 border-purple-800/20',
    'Vida cristiana': 'bg-teal-900/20 text-teal-400 border-teal-800/20',
    'Últimas cosas': 'bg-orange-900/20 text-orange-400 border-orange-800/20',
  };

  return (
    <div className="bg-surface-card border border-border rounded-xl overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gold/10 flex items-center justify-center">
          <svg className={`w-3.5 h-3.5 text-gold transition-transform duration-200 ${open ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
        <span className="flex-1 text-text text-sm font-medium leading-snug">
          {entry.pregunta}
        </span>
        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${temaColors[entry.tema] || 'bg-gold/10 text-gold border-gold/20'}`}>
          {entry.tema}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-4 pt-0 border-t border-border/50">
          <p className="text-text text-sm leading-relaxed mt-3">
            {entry.respuesta}
          </p>
          <div className="flex items-center gap-1.5 mt-2">
            <svg className="w-3 h-3 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-[11px] text-text-3">{entry.escritura}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DevocionalCard({ devocional }: { devocional: (typeof devocionalesData)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-surface-card border border-border rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5"
      >
        <span className="text-[10px] uppercase tracking-wider text-gold mb-2 block">
          {devocional.tema}
        </span>
        <h3 className="text-text font-semibold text-sm leading-snug mb-2">
          {devocional.titulo}
        </h3>
        <p className="text-text-3 text-xs leading-relaxed line-clamp-2">
          {devocional.texto}
        </p>
        <div className="flex items-center gap-1.5 mt-3 text-[10px] text-gold">
          <svg className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          {open ? 'Cerrar meditación' : 'Leer meditación'}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-5 pb-5 pt-0 border-t border-border/50">
          <p className="text-text text-xs leading-relaxed mt-3">
            {devocional.meditacion}
          </p>
          <div className="mt-3 p-3 bg-gold/5 border border-gold/10 rounded-lg">
            <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block mb-1">
              Oración
            </span>
            <p className="text-text text-xs leading-relaxed italic">
              {devocional.oracion}
            </p>
          </div>
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
  const [filtroNivel, setFiltroNivel] = useState<string>('todos');
  const [filtroTema, setFiltroTema] = useState<string>('todos');

  const temas = [...new Set(bibliotecaData.map((r) => r.tema))].sort();

  const recursosFiltrados = bibliotecaData.filter((r) => {
    if (filtroNivel !== 'todos' && r.nivel !== filtroNivel) return false;
    if (filtroTema !== 'todos' && r.tema !== filtroTema) return false;
    return true;
  });

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
            No es un seminario. Es un lugar para sentarse a aprender la sana
            doctrina con calma, orden y reverencia. Desde el que empieza desde
            cero hasta el que lleva años, todos encuentran aquí alimento sólido.
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

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Certeza
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
              El testimonio del Espíritu y la autenticación de la Palabra
            </h2>
            <div className="section-title-line mt-3 mb-3" />
            <p className="text-text-3 text-sm max-w-2xl mx-auto">
              {testimonioData.introduccion}
            </p>
          </div>

          <div className="space-y-5 min-w-0">
            {testimonioData.puntos.map((punto) => (
              <div key={punto.afirmacion} className="bg-surface-card border border-border rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-gold">+</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-text font-semibold text-sm mb-0.5">
                      {punto.afirmacion}
                    </h3>
                    <span className="text-[10px] text-gold uppercase tracking-wider">
                      {punto.base}
                    </span>
                    <p className="text-text-2 text-xs leading-relaxed mt-2">
                      {punto.explicacion}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <svg className="w-3 h-3 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-[10px] text-text-3">{punto.escritura}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-gold/5 border border-gold/10 rounded-xl">
            <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block mb-3">
              La Confesión Bautista de Fe 1689 declara
            </span>
            <div className="space-y-3">
              {testimonioData.citas.map((cita, i) => (
                <div key={i} className="pl-3 border-l-2 border-gold/30">
                  <p className="text-text text-xs leading-relaxed italic">
                    &ldquo;{cita.texto}&rdquo;
                  </p>
                  <p className="text-text-3 text-[10px] mt-1">{cita.fuente}</p>
                </div>
              ))}
            </div>
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

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Catecismo
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
              Catecismo Bautista Confesional
            </h2>
            <div className="section-title-line mt-3 mb-3" />
            <p className="text-text-3 text-sm max-w-xl mx-auto">
              Preguntas y respuestas basadas en el Catecismo Bautista de 1693
              (Keach). Una herramienta pedagógica para aprender doctrina de
              manera progresiva y ordenada.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto min-w-0">
            {catecismoData.map((entry) => (
              <CatecismoItem key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface-1 bg-dot-pattern">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Biblioteca
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
              Biblioteca recomendada
            </h2>
            <div className="section-title-line mt-3 mb-3" />
            <p className="text-text-3 text-sm max-w-xl mx-auto">
              Recursos seleccionados por nivel y tema para profundizar en el
              estudio de la sana doctrina.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {['todos', 'basico', 'intermedio', 'avanzado'].map((n) => (
              <button
                key={n}
                onClick={() => setFiltroNivel(n)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  filtroNivel === n
                    ? 'bg-gold text-black border-gold font-semibold'
                    : 'bg-surface-card text-text-3 border-border hover:border-gold/40 hover:text-text'
                }`}
              >
                {n === 'todos'
                  ? 'Todos los niveles'
                  : n.charAt(0).toUpperCase() + n.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => setFiltroTema('todos')}
              className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${
                filtroTema === 'todos'
                  ? 'bg-gold text-black border-gold font-semibold'
                  : 'bg-surface-card text-text-3 border-border hover:border-gold/40 hover:text-text'
              }`}
            >
              Todos los temas
            </button>
            {temas.map((t) => (
              <button
                key={t}
                onClick={() => setFiltroTema(t)}
                className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${
                  filtroTema === t
                    ? 'bg-gold text-black border-gold font-semibold'
                    : 'bg-surface-card text-text-3 border-border hover:border-gold/40 hover:text-text'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 min-w-0">
            {recursosFiltrados.map((r, i) => (
              <div
                key={i}
                className="bg-surface-card border border-border rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full border ${
                      r.nivel === 'basico'
                        ? 'border-emerald-800/20 text-emerald-400 bg-emerald-900/20'
                        : r.nivel === 'intermedio'
                          ? 'border-amber-800/20 text-amber-400 bg-amber-900/20'
                          : 'border-red-800/20 text-red-400 bg-red-900/20'
                    }`}
                  >
                    {r.nivel}
                  </span>
                  <span className="text-[10px] text-text-4 uppercase tracking-wider">
                    {r.tipo}
                  </span>
                </div>
                <h3 className="text-text text-sm font-semibold leading-snug mb-1">
                  {r.titulo}
                </h3>
                <p className="text-text-3 text-xs mb-2">{r.autor}</p>
                {r.notas && (
                  <p className="text-text-2 text-xs leading-relaxed">
                    {r.notas}
                  </p>
                )}
                <div className="flex items-center justify-between gap-2 mt-3 pt-3 border-t border-border/50">
                  <span className="text-[10px] text-text-4 uppercase tracking-wider">
                    {r.tema}
                  </span>
                  {r.url && (
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-gold hover:text-gold-light transition-colors"
                    >
                      Visitar
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {recursosFiltrados.length === 0 && (
            <p className="text-center text-text-3 text-sm">
              No hay recursos con esos filtros.
            </p>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Devocionales
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
              Devocionales doctrinales
            </h2>
            <div className="section-title-line mt-3 mb-3" />
            <p className="text-text-3 text-sm max-w-xl mx-auto">
              Breves meditaciones diarias para alimentar el alma con la sana
              doctrina. Cada devocional incluye una porción bíblica, meditación
              y oración.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 min-w-0">
            {devocionalesData.map((dev) => (
              <DevocionalCard key={dev.id} devocional={dev} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface-1 bg-dot-pattern">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Geografía Bíblica
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
              Mapas y regiones bíblicas
            </h2>
            <div className="section-title-line mt-3 mb-3" />
            <p className="text-text-3 text-sm max-w-xl mx-auto">
              Conocer la geografía ayuda a entender la historia. Estos son los
              escenarios donde Dios actuó en la historia de la redención.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 min-w-0">
            {mapasData.map((region) => (
              <div key={region.region} className="bg-surface-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <h3 className="text-text font-semibold text-sm">{region.region}</h3>
                </div>
                <p className="text-text-3 text-xs leading-relaxed mb-3">
                  {region.descripcion}
                </p>
                <div className="space-y-1.5">
                  {region.lugares.map((l) => (
                    <div key={l.nombre} className="text-xs">
                      <span className="text-text font-medium">{l.nombre}</span>
                      <span className="text-text-2"> — {l.relevancia}</span>
                      {l.escritura && (
                        <span className="text-gold ml-1 text-[10px]">({l.escritura})</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Conexiones
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
              Conexiones entre el AT y el NT
            </h2>
            <div className="section-title-line mt-3 mb-3" />
            <p className="text-text-3 text-sm max-w-xl mx-auto">
              La Biblia no son dos libros inconexos. Cristo es el eje que une
              ambos Testamentos. Todo el AT apunta a Él.
            </p>
          </div>

          <div className="space-y-4 min-w-0">
            {conexionesData.map((cx) => (
              <div key={cx.titulo} className="bg-surface-card border border-border rounded-xl overflow-hidden">
                <div className="flex flex-wrap items-center gap-2 p-4 pb-3 border-b border-border/50">
                  <h3 className="text-text font-semibold text-sm">{cx.titulo}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                    cx.tipo === 'tipo-antitipo'
                      ? 'border-amber-800/20 text-amber-400 bg-amber-900/20'
                      : cx.tipo === 'profecia-cumplimiento'
                        ? 'border-emerald-800/20 text-emerald-400 bg-emerald-900/20'
                        : cx.tipo === 'tema-transversal'
                          ? 'border-blue-800/20 text-blue-400 bg-blue-900/20'
                          : 'border-purple-800/20 text-purple-400 bg-purple-900/20'
                  }`}>
                    {cx.tipo === 'tipo-antitipo' ? 'Tipo → Antitipo' :
                     cx.tipo === 'profecia-cumplimiento' ? 'Profecía → Cumplimiento' :
                     cx.tipo === 'tema-transversal' ? 'Tema transversal' : 'Paralelo'}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-0">
                  <div className="p-4 bg-amber-950/10">
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block mb-1">Antiguo Testamento</span>
                    <p className="text-text text-xs leading-relaxed">{cx.antiguo}</p>
                  </div>
                  <div className="p-4 bg-emerald-950/10">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block mb-1">Nuevo Testamento</span>
                    <p className="text-text text-xs leading-relaxed">{cx.nuevo}</p>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-3">
                  <p className="text-text-2 text-xs leading-relaxed">{cx.explicacion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface-card">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[2px] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Temas Transversales
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
              Temas que atraviesan toda la Biblia
            </h2>
            <div className="section-title-line mt-3 mb-3" />
            <p className="text-text-3 text-sm max-w-xl mx-auto">
              Hilos de oro que recorren las Escrituras de principio a fin.
              Conocerlos ayuda a leer la Biblia como una sola historia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 min-w-0">
            {temasTransversalesData.map((tema) => (
              <div key={tema.tema} className="bg-surface-1 border border-border rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-5 rounded-full bg-gold" />
                  <h3 className="text-text font-semibold text-sm">{tema.tema}</h3>
                </div>
                <p className="text-text-3 text-xs leading-relaxed mb-3">{tema.resumen}</p>
                <div className="mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">Desarrollo bíblico</span>
                  <ul className="mt-1 space-y-1">
                    {tema.desarrollo.map((d, i) => (
                      <li key={i} className="text-text text-xs leading-relaxed flex items-start gap-1.5">
                        <span className="text-gold mt-0.5 flex-shrink-0">&bull;</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">Culminación</span>
                  <p className="text-text text-xs leading-relaxed mt-0.5">{tema.culminacion}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {tema.escrituras.map((ref) => (
                    <span key={ref} className="text-[10px] text-gold bg-gold/5 px-2 py-0.5 rounded border border-gold/10">
                      {ref}
                    </span>
                  ))}
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
              Promesas y Cumplimientos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text mt-4">
              Promesas del AT cumplidas en Cristo
            </h2>
            <div className="section-title-line mt-3 mb-3" />
            <p className="text-text-3 text-sm max-w-xl mx-auto">
              Dios prometió y cumplió. Cada promesa del Antiguo Testamento
              encuentra su "sí" y "amén" en Jesucristo.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-3 text-text-4 uppercase tracking-wider font-medium">Promesa</th>
                  <th className="text-left py-3 px-3 text-text-4 uppercase tracking-wider font-medium">AT</th>
                  <th className="text-left py-3 px-3 text-text-4 uppercase tracking-wider font-medium">Cumplimiento</th>
                  <th className="text-left py-3 px-3 text-text-4 uppercase tracking-wider font-medium">NT</th>
                </tr>
              </thead>
              <tbody>
                {promesasData.map((p, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-surface-card/50 transition-colors">
                    <td className="py-3 px-3 text-text font-medium">{p.promesa}</td>
                    <td className="py-3 px-3 text-gold">{p.referenciaAT}</td>
                    <td className="py-3 px-3 text-text-2">{p.cumplimiento}</td>
                    <td className="py-3 px-3 text-gold">{p.referenciaNT}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface-card border-t border-border">
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
