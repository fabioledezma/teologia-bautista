import Link from 'next/link';
import DoctrinasGrid from '@/components/DoctrinasGrid';
import HerejiasSection from '@/components/HerejiasSection';
import FacultySection from '@/components/FacultySection';
import ConfesionSection from '@/components/ConfesionSection';
import RecursosSection from '@/components/RecursosSection';
import ChatBot from '@/components/ChatBot';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-accent/[0.03] animate-shimmer" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgb(var(--color-surface-card)/0.8)_0%,_transparent_70%)]" />

        {/* Gold radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] max-w-full rounded-full opacity-30 dark:opacity-40"
          style={{
            background: 'radial-gradient(circle, rgb(var(--color-gold) / 0.12) 0%, transparent 70%)',
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] max-w-full text-gold" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <path d="M20 30 L20 180 L100 170 L180 180 L180 30 L100 40 Z" />
            <path d="M100 40 L100 170" />
            <path d="M55 65 L100 75 L145 65" />
            <path d="M55 85 L100 95 L145 85" />
            <path d="M55 105 L100 115 L145 105" />
            <path d="M60 20 L100 30 L140 20" strokeWidth="1.8" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[11px] font-semibold uppercase tracking-[2px] mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-glow" />
            Teología Bautista Reformada
          </div>
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-[1.1] animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Teología<span className="text-gold"> Accesible</span>
          </h1>
          <p
            className="text-base md:text-lg text-text mt-6 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            Teología clara, profunda y transformadora para todo cristiano.
            Doctrinas esenciales explicadas de forma sencilla sin perder
            sustancia bíblica.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <Link
              href="#doctrinas"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold rounded-xl hover:bg-gold-dark transition-all shadow-lg hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Explorar Doctrinas
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link
              href="#confesion"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-text font-semibold rounded-xl hover:border-gold hover:text-gold hover:bg-gold/5 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              La Confesión 1689
            </Link>
            <Link
              href="#historia"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-text font-semibold rounded-xl hover:border-gold hover:text-gold hover:bg-gold/5 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Errores Doctrinales
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-5 h-8 border-2 border-border rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gold/60 rounded-full mt-2 animate-fade-in-up" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }} />
          </div>
        </div>
      </section>

      <DoctrinasGrid />

      <HerejiasSection />

      <FacultySection />

      <ConfesionSection />

      <RecursosSection />

      <ChatBot />
    </>
  );
}
