import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O fim do homem cansado  - transforme seu corpo sua mente e sua potência masculina em poucas semanas.",
  description: "Landing Page para o projeto O Fim do Homem Cansado, um programa de treinamento físico e mental inspirado nos princípios da excelência clássica, projetado para homens que buscam recuperar a força, a vitalidade e a potência masculina em um mundo moderno cheio de desafios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
