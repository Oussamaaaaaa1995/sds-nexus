"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Cpu, Globe, ArrowRight, X } from "lucide-react";

export default function Home() {
  // NOUVEAUTÉ : Animation des barres de progression
  const [progress, setProgress] = useState([75, 45, 90]);
  useEffect(() => {
    const timer = setTimeout(() => setProgress([82, 58, 94]), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-nexus-blue/5 -skew-x-12 transform origin-right"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-7xl font-black text-nexus-dark leading-none">
              <span className="text-nexus-blue">SDS NEXUS</span>
            </h1>
            <p className="mt-6 text-2xl text-gray-500 font-light">
              L'écosystème IoT & ERP qui connecte vos ambitions à la réalité.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="bg-nexus-blue text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 transition">
                Voir nos produits <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NOS PILIERS D'EXPERTISE */}
      <section className="py-24 bg-nexus-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nexus-dark">Nos Solutions Globales</h2>
            <p className="text-gray-500 mt-4">De la conception hardware à la gestion logicielle.</p>
            <div className="w-20 h-1 bg-nexus-blue mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Cpu className="text-nexus-blue" size={40} />}
              title="IoT & Ingénierie Arduino"
              desc="Maîtrise totale du cycle de données grâce à une intégration hardware sur-mesure, garantissant flexibilité et souveraineté technologique."
            />
            <ServiceCard 
              icon={<ShieldCheck className="text-nexus-blue" size={40} />}
              title="Solutions Médicales"
              desc="Sécurité biométrique et cryptage de pointe pour une protection absolue des données sensibles et conformité RGPD."
            />
            <ServiceCard 
              icon={<Globe className="text-nexus-blue" size={40} />}
              title="ERP sur Mesure"
              desc="Un cockpit décisionnel unique pour unifier vos opérations, automatiser la chaîne et réduire les coûts opérationnels de 20 à 30%."
            />
          </div>
        </div>
      </section>

      {/* 3. SECTION HARDWARE */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-nexus-blue/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=80" 
                alt="Arduino Engineering" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div>
            <span className="text-nexus-blue font-bold text-sm uppercase tracking-widest">Hardware</span>
            <h2 className="text-4xl font-bold text-nexus-dark mt-4">Conception Électronique & Prototypage</h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Nos ingénieurs développent des solutions matérielles basées sur 
              <strong> Arduino et microcontrôleurs</strong>, permettant une interaction directe entre le monde physique et vos données.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDIES (CORRIGÉ) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nexus-dark">Études de cas</h2>
            <div className="w-20 h-1 bg-nexus-blue mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <CaseCard 
              image="/photos/Arduino_logo-arduino.jpg"
              category="Hardware Integration"
              title="Optimisation de l'irrigation par capteurs Arduino"
              description="L'intégration de la technologie Arduino permet une lecture précise des données hydriques du sol. Ce système intelligent automatise l'irrigation en temps réel."
            />
            <CaseCard 
              image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
              category="Agri-Tech"
              title="Gestion intelligente de l'énergie"
              description="Déploiement d'un réseau de compteurs intelligents SDS pour surveiller la consommation énergétique d'un site industriel."
            />
          </div>
        </div>
      </section>

      {/* 7. DASHBOARD PREVIEW (DYNAMIQUE) */}
      <section className="py-24 bg-nexus-dark relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl font-bold mb-6">Visualisation de données</h2>
              <p className="text-blue-100/70 mb-8">
                Convertissez les signaux de vos capteurs en indicateurs de performance.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-[#1a1a1a] rounded-3xl p-6 border border-white/10">
                <div className="space-y-6">
                  {progress.map((val, idx) => (
                    <div key={idx} className="h-4 bg-nexus-blue/20 rounded-full w-full overflow-hidden">
                      <div className="h-full bg-nexus-blue transition-all duration-1000" style={{ width: `${val}%` }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// COMPOSANTS RÉUTILISABLES (Inchangés mais propres)
function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 h-full">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-nexus-dark mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function CaseCard({ image, category, title, description }: { image: string, category: string, title: string, description: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="group">
      <div className="relative h-80 overflow-hidden rounded-2xl mb-6">
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-xs font-bold text-nexus-blue shadow-lg">{category}</div>
      </div>
      <h3 className="text-2xl font-bold text-nexus-dark">{title}</h3>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 bg-blue-50 p-4 rounded-xl border-l-4 border-nexus-blue">{description}</p>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 mt-4 text-nexus-blue font-semibold hover:underline">
        {isOpen ? "Fermer" : "Lire la suite"} {isOpen ? <X size={16} /> : <ArrowRight size={16} />}
      </button>
    </div>
  );
}