"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-nexus-dark/80 backdrop-blur-md border-b border-white/5 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* SECTION LOGOS */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex items-center gap-3 border-r border-white/10 pr-4">
            <img 
              src="/photos/logo%20copie.png" 
              alt="SDS Global" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <img 
              src="/photos/logo-nexus.png" 
              alt="SDS Nexus" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            SDS<span className="text-nexus-blue">NEXUS</span>
          </span>
        </Link>

        {/* NAVIGATION DROITE */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-300">
          <Link href="/" className="hover:text-nexus-blue transition">Accueil</Link>
          
          <Link 
            href="/dashboard" 
            className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:bg-nexus-blue/20 hover:text-nexus-blue hover:border-nexus-blue/50 transition-all duration-300"
          >
            Dashboard
          </Link>

          {/* SOLUTIONS AVEC MENU DÉROULANT (DROPDOWN) - FOCUS ERP */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-nexus-blue transition py-2">
              Solutions
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* LE MENU QUI APPARAÎT AU SURVOL */}
            <div className="absolute top-full left-0 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-nexus-dark border border-white/10 rounded-xl shadow-2xl p-2">
                
                {/* 1. Odoo 19 & Docker */}
                <Link href="/solutions/erp/odoo" className="block p-3 hover:bg-white/5 rounded-lg group/link">
                  <div className="text-white font-bold text-[10px] uppercase tracking-widest mb-1 group-hover/link:text-nexus-blue">Odoo 19 Implementation</div>
                  <p className="text-gray-500 text-[11px] font-normal">Déploiement sur Docker et gestion d'instances personnalisées.</p>
                </Link>

                {/* 2. SDS Accounting - Ton module spécifique */}
                <Link href="/solutions/erp/accounting" className="block p-3 hover:bg-white/5 rounded-lg group/link border-t border-white/5">
                  <div className="text-white font-bold text-[10px] uppercase tracking-widest mb-1 group-hover/link:text-nexus-blue">SDS Accounting</div>
                  <p className="text-gray-500 text-[11px] font-normal">Module de comptabilité avancée avec facturation automatisée.</p>
                </Link>

                {/* 3. Inventory & Logistics */}
                <Link href="/solutions/erp/inventory" className="block p-3 hover:bg-white/5 rounded-lg group/link border-t border-white/5">
                  <div className="text-white font-bold text-[10px] uppercase tracking-widest mb-1 group-hover/link:text-nexus-blue">Inventory Management</div>
                  <p className="text-gray-500 text-[11px] font-normal">Contrôle des stocks en temps réel et flux logistiques.</p>
                </Link>

              </div>
            </div>
          </div>

          <button className="bg-white text-nexus-dark px-6 py-2 rounded-full font-black hover:bg-nexus-blue hover:text-white transition shadow-lg">
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
}