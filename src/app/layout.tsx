import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0f1a',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cl1.smarterbot.cl'),
  title: {
    default: 'CL1 Cloud - SmarterOS | Computación Neural',
    template: '%s | CL1 Cloud',
  },
  description: 'Plataforma de computación neural con células cerebrales humanas. Reserva tu acceso a CL1 Cloud.',
  keywords: ['CL1', 'computación neural', 'IA', 'smarteros', 'brain computer', 'neural interface'],
  authors: [{ name: 'Smarter SPA' }],
  creator: 'Smarter SPA',
  publisher: 'Smarter SPA',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://cl1.smarterbot.cl',
    siteName: 'CL1 Cloud - SmarterOS',
    title: 'CL1 Cloud - SmarterOS | Computación Neural',
    description: 'Plataforma de computación neural con células cerebrales humanas.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CL1 Cloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CL1 Cloud - SmarterOS',
    description: 'Computación neural con células cerebrales humanas',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
