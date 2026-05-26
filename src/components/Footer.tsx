import Link from 'next/link';

const explorarLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Doctrinas', href: '/#doctrinas' },
  { label: 'MDiv', href: '/#facultad' },
  { label: 'Confesión 1689', href: '/#confesion' },
  { label: 'Recursos', href: '/#recursos' },
];

const doctrinasLinks = [
  { label: 'TULIP', href: '/doctrina/depravacion-total' },
  { label: 'Trinidad', href: '/doctrina/la-trinidad' },
  { label: 'Ordo Salutis', href: '/doctrina/regeneracion' },
  { label: 'Las 5 Solas', href: '/doctrina/sola-scriptura' },
  { label: 'Elección', href: '/doctrina/eleccion-incondicional' },
  { label: 'Justificación', href: '/doctrina/justificacion-por-fe' },
];

export default function Footer() {
  return (
    <footer className="bg-surface-1 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold text-gold mb-4">
              ✝ Teología Accesible
            </h3>
            <p className="text-text-2 text-sm leading-relaxed">
              Teología clara y profunda para todo cristiano. Exploramos las
              doctrinas esenciales de la fe desde una perspectiva bautista
              reformada, en alianza con la Confesión Bautista de Fe de 1689.
            </p>
          </div>

          {/* Explorar */}
          <div>
            <h4 className="font-semibold text-text mb-4">Explorar</h4>
            <ul className="space-y-2">
              {explorarLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-2 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Doctrinas Clave */}
          <div>
            <h4 className="font-semibold text-text mb-4">
              Doctrinas Clave
            </h4>
            <ul className="space-y-2">
              {doctrinasLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-2 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Alianza */}
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-sm text-text-3">
            En alianza con los principios doctrinales de{' '}
            <a
              href="https://cbtseminary.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-2 hover:text-gold transition-colors underline underline-offset-2"
            >
              Covenant Baptist Theological Seminary
            </a>
          </p>
          <p className="text-sm text-text-3 mt-2">
            Soli Deo Gloria — &copy; 2026 — En alianza con CBTS
          </p>
        </div>
      </div>
    </footer>
  );
}
