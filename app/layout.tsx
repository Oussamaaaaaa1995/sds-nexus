import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SDS NEXUS | Solutions IoT & ERP Industrielles",
  description: "Plateforme de gestion intelligente et connectivité Arduino pour l'industrie 4.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Ajout du suppressHydrationWarning ici pour éviter l'erreur de tout à l'heure
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        {/* Barre de navigation fixe */}
        <Navbar />

        {/* Un seul bloc main pour le contenu dynamique */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* Assistant Chatbot */}
        <Chatbot />

        {/* Pied de page */}
        <Footer />
      </body>
    </html>
  );
}