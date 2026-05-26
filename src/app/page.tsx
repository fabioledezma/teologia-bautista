import Link from 'next/link';
import DoctrinasGrid from '@/components/DoctrinasGrid';
import HerejiasSection from '@/components/HerejiasSection';
import FacultySection from '@/components/FacultySection';
import ConfesionSection from '@/components/ConfesionSection';
import RecursosSection from '@/components/RecursosSection';
import ChatBot from '@/components/ChatBot';
import TimelineHistorico from '@/components/TimelineHistorico';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 via-transparent to-[#08080e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1a2e_0%,_#08080e_70%)]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-[#d4af37] leading-tight">
            Teología Bautista Reformada
          </h1>
          <p className="text-lg md:text-xl text-[#a8a8c0] mb-8 max-w-2xl mx-auto leading-relaxed">
            Explorando las doctrinas de la gracia, la soberanía de Dios, y la
            centralidad de Cristo desde la tradición bautista reformada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#doctrinas"
              className="inline-block px-8 py-3 bg-[#d4af37] text-[#08080e] font-semibold rounded-lg hover:bg-[#c4a030] transition-colors"
            >
              Explorar Doctrinas
            </Link>
            <Link
              href="#confesion"
              className="inline-block px-8 py-3 border border-[#2a2a3e] text-[#ececf5] font-semibold rounded-lg hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
            >
              La Confesión 1689
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Histórica */}
      <section id="timeline" className="py-20 px-4 bg-[#0e0e18]">
        <TimelineHistorico />
      </section>

      {/* Doctrinas */}
      <section id="doctrinas" className="py-20 px-4">
        <DoctrinasGrid />
      </section>

      {/* Historia - Herejías */}
      <section id="historia" className="py-20 px-4 bg-[#0e0e18]">
        <HerejiasSection />
      </section>

      {/* Facultad */}
      <section id="facultad" className="py-20 px-4 bg-[#0e0e18]">
        <FacultySection />
      </section>

      {/* Confesión */}
      <section id="confesion" className="py-20 px-4">
        <ConfesionSection />
      </section>

      {/* Recursos */}
      <section id="recursos" className="py-20 px-4 bg-[#0e0e18]">
        <RecursosSection />
      </section>

      <ChatBot />
    </>
  );
}
