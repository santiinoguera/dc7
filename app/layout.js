import '@fontsource-variable/fredoka';
import '@fontsource-variable/nunito';
import './globals.css';
import { SEO } from '@/data/site';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  metadataBase: new URL(SEO.url),
  title: SEO.titulo,
  description: SEO.descripcion,
  openGraph: {
    title: SEO.titulo,
    description: SEO.descripcion,
    url: SEO.url,
    siteName: 'DaleClick7',
    locale: 'es_AR',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'DaleClick7 · Tienda de bazar y más' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.titulo,
    description: SEO.descripcion,
    images: ['/og-image.jpg'],
  },
};

export const viewport = {
  themeColor: '#F97F10',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
