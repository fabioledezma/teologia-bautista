import type { Metadata } from 'next';
import { Playfair_Display, Inter, Crimson_Text } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  title: 'Teología Bautista Reformada',
  description:
    'Explorando las doctrinas de la gracia desde una perspectiva bautista reformada. Teología sistemática, historia, y recursos para la edificación de la iglesia.',
  openGraph: {
    title: 'Teología Bautista Reformada',
    description:
      'Explorando las doctrinas de la gracia desde una perspectiva bautista reformada.',
    siteName: 'Teología Bautista Reformada',
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
      <body className={`min-h-screen flex flex-col ${playfair.variable} ${inter.variable} ${crimson.variable}`}>
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
