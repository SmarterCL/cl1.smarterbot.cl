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
    default: 'CL1 Cloud - SmarterOS | Computación Neural con Células Reales',
    template: '%s | CL1 Cloud',
  },
  description: 'Despliega tu código en neuronas biológicas. CL1 Cloud es la plataforma líder en Bio-IA y computación neural para empresas y desarrolladores.',
  keywords: [
    'CL1 Cloud', 'SmarterOS', 'computación neural', 'bio-IA', 'neuronas biológicas',
    'inteligencia artificial biológica', 'Smarter SPA', 'CL1 interface', 'neural computing Chile'
  ],
  authors: [{ name: 'Smarter SPA' }],
  creator: 'Smarter SPA',
  publisher: 'Smarter SPA',
  icons: {
    icon: 'https://rjfcmmzjlguiititkmyh.supabase.co/storage/v1/object/public/DRIVE/logo.jpg',
    apple: 'https://rjfcmmzjlguiititkmyh.supabase.co/storage/v1/object/public/DRIVE/logo.jpg',
  },
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
    title: 'CL1 Cloud - Cómputo Biológico de Próxima Generación',
    description: 'La primera nube de computación neural basada en células cerebrales humanas. Eficiencia y aprendizaje biológico escalar.',
    images: [
      {
        url: 'https://rjfcmmzjlguiititkmyh.supabase.co/storage/v1/object/public/DRIVE/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'CL1 Cloud SmarterOS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CL1 Cloud - SmarterOS',
    description: 'Computación neural con células cerebrales humanas. El futuro de la IA.',
    images: ['https://rjfcmmzjlguiititkmyh.supabase.co/storage/v1/object/public/DRIVE/logo.jpg'],
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
