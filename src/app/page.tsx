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
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 via-transparent to-[#08080e] animate-shimmer" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1a2e_0%,_#08080e_70%)]" />

        {/* Floating decorative particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#d4af37]/30 rounded-full animate-drift" style={{ '--dx': '120px', '--dy': '-80px' } as React.CSSProperties} />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#d4af37]/20 rounded-full animate-drift" style={{ animationDelay: '3s', '--dx': '-100px', '--dy': '-120px' } as React.CSSProperties} />
          <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-[#d4af37]/40 rounded-full animate-drift" style={{ animationDelay: '6s', '--dx': '80px', '--dy': '-60px' } as React.CSSProperties} />
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#d4af37]/25 rounded-full animate-drift" style={{ animationDelay: '2s', '--dx': '-60px', '--dy': '-100px' } as React.CSSProperties} />
          <div className="absolute bottom-1/4 right-1/4 w-0.5 h-0.5 bg-[#d4af37]/35 rounded-full animate-drift" style={{ animationDelay: '8s', '--dx': '140px', '--dy': '-40px' } as React.CSSProperties} />
        </div>

        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/3 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className="font-serif text-5xl md:text-7xl font-bold mb-6 text-[#d4af37] leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Teología Accesible
          </h1>
          <p
            className="text-lg md:text-xl text-[#a8a8c0] mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-2"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            Teología clara, profunda y transformadora para todo cristiano.
            Doctrinas esenciales explicadas de forma sencilla sin perder
            sustancia bíblica.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-stagger-3"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <Link
              href="#doctrinas"
              className="inline-block px-8 py-3 bg-[#d4af37] text-[#08080e] font-semibold rounded-lg hover:bg-[#c4a030] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
            >
              Explorar Doctrinas
            </Link>
            <Link
              href="#confesion"
              className="inline-block px-8 py-3 border border-[#2a2a3e] text-[#ececf5] font-semibold rounded-lg hover:border-[#d4af37] hover:text-[#d4af37] transition-all hover:-translate-y-0.5"
            >
              La Confesión 1689
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-5 h-8 border-2 border-[#2a2a3e] rounded-full flex justify-center">
            <div className="w-1 h-2 bg-[#d4af37]/60 rounded-full mt-2 animate-fade-in-up" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }} />
          </div>
        </div>
      </section>

      {/* Timeline Histórica */}
      <RevealOnScroll>
        <section id="timeline" className="py-20 px-4 bg-[#0e0e18]">
          <TimelineHistorico />
        </section>
      </RevealOnScroll>

      {/* Doctrinas */}
      <RevealOnScroll>
        <section id="doctrinas" className="py-20 px-4">
          <DoctrinasGrid />
        </section>
      </RevealOnScroll>

      {/* Historia - Herejías */}
      <RevealOnScroll>
        <section id="historia" className="py-20 px-4 bg-[#0e0e18]">
          <HerejiasSection />
        </section>
      </RevealOnScroll>

      {/* Facultad */}
      <RevealOnScroll>
        <section id="facultad" className="py-20 px-4 bg-[#0e0e18]">
          <FacultySection />
        </section>
      </RevealOnScroll>

      {/* Confesión */}
      <RevealOnScroll>
        <section id="confesion" className="py-20 px-4">
          <ConfesionSection />
        </section>
      </RevealOnScroll>

      {/* Recursos */}
      <RevealOnScroll>
        <section id="recursos" className="py-20 px-4 bg-[#0e0e18]">
          <RecursosSection />
        </section>
      </RevealOnScroll>

      <ChatBot />
    </>
  );
}
