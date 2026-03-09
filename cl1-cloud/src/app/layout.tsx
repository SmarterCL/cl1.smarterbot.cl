import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CL1 Cloud - SmarterOS | Computación Neural",
  description: "Plataforma de computación neural con células cerebrales humanas. Reserva tu acceso a CL1 Cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
