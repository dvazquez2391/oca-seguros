import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seguros OCA",
  description: "Nueva experiencia digital de Seguros OCA — Kiro Day",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#f4f4f4]">
        {children}
      </body>
    </html>
  );
}
