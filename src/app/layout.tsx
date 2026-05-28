import type { Metadata } from 'next';
import { Playfair_Display, Inter, Crimson_Text } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CuriosidadBanner from '@/components/CuriosidadBanner';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const crimson = Crimson_Text({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-text',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Teología Accesible',
  description:
    'Teología clara y profunda para todo cristiano. Doctrinas esenciales explicadas de forma sencilla, desde una perspectiva bautista reformada.',
  openGraph: {
    title: 'Teología Accesible',
    description:
      'Teología clara y profunda para todo cristiano. Doctrinas esenciales explicadas de forma sencilla.',
    siteName: 'Teología Accesible',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head />
      <body className={`min-h-screen flex flex-col overflow-x-hidden bg-bg-body text-text-body ${playfair.variable} ${inter.variable} ${crimson.variable}`}>
        <Navbar />
        <CuriosidadBanner />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
