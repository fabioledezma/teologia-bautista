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
      <section className="min-h-[90vh] flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <svg className="w-10 h-10 text-gold/60" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M24 4v40M4 24h40" />
              <circle cx="24" cy="24" r="20" strokeWidth="1" />
            </svg>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-[1.1]">
            Teología<span className="text-gold"> Accesible</span>
          </h1>
          <p className="text-base md:text-lg text-text mt-6 mb-10 max-w-2xl mx-auto leading-relaxed">
            Teología clara, profunda y transformadora para todo cristiano.
            Doctrinas esenciales explicadas de forma sencilla sin perder
            sustancia bíblica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="#doctrinas"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold rounded-xl hover:bg-gold-dark transition-all"
            >
              Explorar Doctrinas
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link
              href="#confesion"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gold text-gold font-semibold rounded-xl hover:bg-gold hover:text-black transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              La Confesión 1689
            </Link>
            <Link
              href="#historia"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gold text-gold font-semibold rounded-xl hover:bg-gold hover:text-black transition-all"
            >
              Errores Doctrinales
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-border/50">
            <Link
              href="/historia/expansion"
              className="inline-flex items-center gap-2 text-xs text-text-2 hover:text-gold transition"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              La Expansión de la Iglesia Primitiva — Su entorno clásico
            </Link>
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
