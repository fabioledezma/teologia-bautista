'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FontSizeToggle from './FontSizeToggle';
import SearchDialog from './SearchDialog';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavGroup {
  label: string;
  href?: string;
  type: 'link' | 'group';
  items?: DropdownItem[];
}

const navGroups: NavGroup[] = [
  { label: 'Inicio', href: '/', type: 'link' },
  {
    label: 'Teología', type: 'group',
    items: [
      { label: 'Doctrinas', href: '/#doctrinas' },
      { label: 'Confesión 1689', href: '/#confesion' },
      { label: 'Errores / Herejías', href: '/#errores' },
    ],
  },
  {
    label: 'Aprender', type: 'group',
    items: [
      { label: 'Escuela', href: '/aprender' },
      { label: 'Interpretación Bíblica', href: '/hermeneutica' },
    ],
  },
  { label: 'Historia', href: '/historia', type: 'link' },
  {
    label: 'Tests', type: 'group',
    items: [
      { label: 'Test Bíblico', href: '/test' },
      { label: '¿Qué crees?', href: '/test/avanzado' },
    ],
  },
  {
    label: 'Recursos', type: 'group',
    items: [
      { label: 'Recursos', href: '/#recursos' },
      { label: 'MDiv', href: '/#facultad' },
    ],
  },
];

const mobileLinks: DropdownItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Doctrinas', href: '/#doctrinas' },
  { label: 'Confesión 1689', href: '/#confesion' },
  { label: 'Errores / Herejías', href: '/#errores' },
  { label: 'Escuela', href: '/aprender' },
  { label: 'Interpretación Bíblica', href: '/hermeneutica' },
  { label: 'Historia', href: '/historia' },
  { label: 'Test Bíblico', href: '/test' },
  { label: '¿Qué crees?', href: '/test/avanzado' },
  { label: 'Recursos', href: '/#recursos' },
  { label: 'MDiv', href: '/#facultad' },
];

function DropdownMenu({
  group,
  isActiveFn,
  onNav,
}: {
  group: NavGroup;
  isActiveFn: (href: string) => boolean;
  onNav: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const isGroupActive = group.items?.some((item) => isActiveFn(item.href));

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isGroupActive ? 'text-gold bg-gold/10' : 'text-text hover:text-gold'
        }`}
      >
        {group.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div
          className="absolute top-full left-0 pt-1.5 min-w-[180px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-surface-card border border-border rounded-xl shadow-lg py-1.5 animate-fade-in-up"
            style={{ animationDuration: '0.15s' }}
          >
            {group.items!.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => { setOpen(false); onNav(); }}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  isActiveFn(item.href)
                    ? 'text-gold bg-gold/5 font-semibold'
                    : 'text-text hover:bg-surface-hover'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
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

      const sectionIds = ['doctrinas', 'aprender', 'confesion', 'errores', 'historia', 'facultad', 'recursos'];
      for (const id of sectionIds) {
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
    if (!mobileOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      return activeSection === id;
    }
    return pathname === href || pathname.startsWith(href + '/');
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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navGroups.map((g) =>
            g.type === 'link' ? (
              <Link
                key={g.href}
                href={g.href!}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(g.href!) ? 'text-gold bg-gold/10' : 'text-text hover:text-gold'
                }`}
              >
                {g.label}
              </Link>
            ) : (
              <DropdownMenu key={g.label} group={g} isActiveFn={isActive} onNav={() => {}} />
            ),
          )}
          <div className="w-px h-5 bg-border mx-2" />
          <SearchDialog />
          <FontSizeToggle />
        </div>

        {/* Mobile triggers */}
        <div className="flex md:hidden items-center gap-0.5">
          <SearchDialog />
          <FontSizeToggle />
          <button
            ref={btnRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 -mr-2 text-text hover:text-gold transition-colors active:scale-90"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`md:hidden bg-surface-1 border-t border-border overflow-y-auto transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-0.5">
          {mobileLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href) ? 'text-gold bg-gold/10' : 'text-text hover:bg-surface-hover'
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
