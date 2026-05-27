'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import FontSizeToggle from './FontSizeToggle';
import SearchDialog from './SearchDialog';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Doctrinas', href: '/#doctrinas' },
  { label: 'Historia', href: '/historia' },
  { label: 'Expansión', href: '/historia/expansion' },
  { label: 'Patrística', href: '/historia/patristica' },
  { label: 'T. Histórica', href: '/historia/teologia-historica' },
  { label: 'MDiv', href: '/#facultad' },
  { label: 'Errores Doctrinales', href: '/#errores' },
  { label: 'Confesión 1689', href: '/#confesion' },
  { label: 'Recursos', href: '/#recursos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);

      const sections = ['doctrinas', 'errores', 'historia', 'facultad', 'confesion', 'recursos'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  const isActive = (href: string) => {
    const id = href.replace('/#', '');
    if (href === '/') return activeSection === '';
    return activeSection === id;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-base sm:text-lg md:text-xl font-bold text-gold tracking-tight hover:text-gold-light transition-colors"
        >
          Teología Accesible
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? 'text-gold bg-gold/10'
                  : 'text-text hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="w-px h-5 bg-border mx-2" />
          <SearchDialog />
          <FontSizeToggle />
        </div>

        <button
          ref={btnRef}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2 text-text hover:text-gold transition-colors active:scale-90"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        ref={menuRef}
        className={`md:hidden bg-surface-1 border-t border-border overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-0.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-gold bg-gold/10'
                  : 'text-text hover:bg-surface-hover'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 px-4 pt-3 pb-1 border-t border-border mt-3 flex-wrap">
            <span className="text-[10px] uppercase tracking-wider text-text-3 font-medium">
              Apariencia
            </span>
            <FontSizeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
