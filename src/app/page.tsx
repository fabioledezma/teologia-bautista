import Link from 'next/link';
import DoctrinasGrid from '@/components/DoctrinasGrid';
import HerejiasSection from '@/components/HerejiasSection';
import FacultySection from '@/components/FacultySection';
import ConfesionSection from '@/components/ConfesionSection';
import RecursosSection from '@/components/RecursosSection';
import ChatBot from '@/components/ChatBot';
import TimelineHistorico from '@/components/TimelineHistorico';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-surface animate-shimmer" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgb(var(--color-surface-card))_0%,_rgb(var(--color-surface))_70%)]" />

        {/* Floating decorative particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold/30 rounded-full animate-drift" style={{ '--dx': '120px', '--dy': '-80px' } as React.CSSProperties} />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-gold/20 rounded-full animate-drift" style={{ animationDelay: '3s', '--dx': '-100px', '--dy': '-120px' } as React.CSSProperties} />
          <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-gold/40 rounded-full animate-drift" style={{ animationDelay: '6s', '--dx': '80px', '--dy': '-60px' } as React.CSSProperties} />
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-gold/25 rounded-full animate-drift" style={{ animationDelay: '2s', '--dx': '-60px', '--dy': '-100px' } as React.CSSProperties} />
          <div className="absolute bottom-1/4 right-1/4 w-0.5 h-0.5 bg-gold/35 rounded-full animate-drift" style={{ animationDelay: '8s', '--dx': '140px', '--dy': '-40px' } as React.CSSProperties} />
        </div>

        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] max-w-full bg-gold/3 rounded-full blur-2xl md:blur-3xl animate-pulse-glow" />

        {/* Subtle Bible silhouette */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] dark:opacity-[0.04] light:opacity-[0.03]">
          <svg className="w-[250px] h-[250px] md:w-[600px] md:h-[600px] max-w-full text-gold" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M20 30 L20 180 L100 170 L180 180 L180 30 L100 40 Z" />
            <path d="M100 40 L100 170" />
            <path d="M55 65 L100 75 L145 65" />
            <path d="M55 85 L100 95 L145 85" />
            <path d="M55 105 L100 115 L145 105" />
            <path d="M60 20 L100 30 L140 20" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className="font-serif text-5xl md:text-7xl font-bold mb-6 text-gold leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Teología Accesible
          </h1>
          <p
            className="text-lg md:text-xl text-text-2 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-2"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            Teología clara, profunda y transformadora para todo cristiano.
            Doctrinas esenciales explicadas de forma sencilla sin perder
            sustancia bíblica.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap animate-fade-in-up animate-stagger-3"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <Link
              href="#doctrinas"
              className="inline-block px-8 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold-dark transition-all hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5"
            >
              Explorar Doctrinas
            </Link>
            <Link
              href="#confesion"
              className="inline-block px-8 py-3 border border-border text-text font-semibold rounded-lg hover:border-gold hover:text-gold transition-all hover:-translate-y-0.5"
            >
              La Confesión 1689
            </Link>
            <Link
              href="#historia"
              className="inline-block px-8 py-3 border border-border text-text font-semibold rounded-lg hover:border-gold hover:text-gold transition-all hover:-translate-y-0.5"
            >
              Errores Doctrinales
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-5 h-8 border-2 border-border rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gold/60 rounded-full mt-2 animate-fade-in-up" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }} />
          </div>
        </div>
      </section>

      {/* Timeline Histórica */}
      <RevealOnScroll>
        <TimelineHistorico />
      </RevealOnScroll>

      {/* Doctrinas */}
      <RevealOnScroll>
        <DoctrinasGrid />
      </RevealOnScroll>

      {/* Historia - Herejías */}
      <RevealOnScroll>
        <HerejiasSection />
      </RevealOnScroll>

      {/* Facultad */}
      <RevealOnScroll>
        <FacultySection />
      </RevealOnScroll>

      {/* Confesión */}
      <RevealOnScroll>
        <ConfesionSection />
      </RevealOnScroll>

      {/* Recursos */}
      <RevealOnScroll>
        <RecursosSection />
      </RevealOnScroll>

      <ChatBot />
    </>
  );
}
