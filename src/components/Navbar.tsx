'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import FontSizeToggle from './FontSizeToggle';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Doctrinas', href: '/#doctrinas' },
  { label: 'Historia', href: '/historia' },
  { label: 'MDiv', href: '/#facultad' },
  { label: 'Confesión 1689', href: '/#confesion' },
  { label: 'Recursos', href: '/#recursos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);

      const sections = ['doctrinas', 'historia', 'facultad', 'confesion', 'recursos'];
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

  const isActive = (href: string) => {
    const id = href.replace('/#', '');
    if (href === '/') return activeSection === '';
    return activeSection === id;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-base sm:text-lg md:text-xl font-bold text-gold tracking-tight"
        >
          Teología Accesible
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-gold bg-gold/10'
                  : 'text-text-2 hover:text-text hover:bg-surface-card'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="w-px h-5 bg-border mx-1" />
          <FontSizeToggle />
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text hover:text-gold transition-colors"
          aria-label="Menú de navegación"
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-1 border-t border-border">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-gold bg-gold/10'
                    : 'text-text-2 hover:text-text hover:bg-surface-card'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border mt-2">
              <FontSizeToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
