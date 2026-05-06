"use client";

import Link from 'next/link';
// On utilise uniquement des icônes universelles pour éviter les erreurs de build
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-nexus-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNE 1 : IDENTITÉ */}
<div className="space-y-6">
  <div className="flex items-center gap-3">
    {/* Ajout du nouveau logo */}
    <img 
      src="/photos/logo copie.png" 
      className="h-10 w-auto object-contain" 
    />
    <span className="text-xl font-black tracking-tighter text-white">
      SDS<span className="text-nexus-blue">NEXUS</span>
    </span>
  </div>
  <p className="text-gray-400 text-sm leading-relaxed">
    Leader dans l'intégration de solutions IoT et ERP sur mesure. 
    Expertise en ingénierie matérielle et connectivité intelligente.
  </p>
  {/* ... rest of the code */}
</div>

          {/* COLONNE 2 : SOLUTIONS */}
          <div>
            <h4 className="text-lg font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-nexus-blue transition">Smart Agriculture</Link></li>
              <li><Link href="#" className="hover:text-nexus-blue transition">Maintenance Prédictive</Link></li>
              <li><Link href="#" className="hover:text-nexus-blue transition">Gestion ERP Médicale</Link></li>
              <li><Link href="#" className="hover:text-nexus-blue transition">Solutions Hardware Arduino</Link></li>
              <li><Link href="#" className="hover:text-nexus-blue transition">Solutions ERP Gestion d'entreprise</Link></li>
            </ul>
          </div>

          {/* COLONNE 3 : ENTREPRISE */}
          <div>
            <h4 className="text-lg font-bold mb-6">Liens Utiles</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-nexus-blue transition">Accueil</Link></li>
              <li><Link href="/dashboard" className="hover:text-nexus-blue transition">Dashboard Live</Link></li>
              <li><Link href="#" className="hover:text-nexus-blue transition">Support Technique</Link></li>
            </ul>
          </div>

          {/* COLONNE 4 : CONTACT */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-nexus-blue" />
                <span>contact@sds-nexus.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-nexus-blue" />
                <span>+212 (0) 5XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-nexus-blue" />
                <span>Smart Digital Systems, Oujda</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest">
          <p>2026 SDS NEXUS SOLUTIONS. TOUS DROITS RÉSERVÉS.</p>
        </div>
      </div>
    </footer>
  );
}