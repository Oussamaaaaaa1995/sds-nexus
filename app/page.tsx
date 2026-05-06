"use client";

import React, { useState } from "react";
import { ShieldCheck, Cpu, Globe, ArrowRight, X } from "lucide-react";

export default function Home() {
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

      {/* 2. NOS PILIERS D'EXPERTISE (ARGUMENTÉS) */}
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
            <div className="mt-8 bg-blue-50 p-4 rounded-xl border-l-4 border-nexus-blue text-sm text-gray-700">
              <strong>Valeur ajoutée :</strong> Contrairement aux solutions fermées du marché, nous maîtrisons la chaîne de données de bout en bout, de la captation physique au traitement sur l'ERP.
            </div>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDIES INTERACTIVES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nexus-dark">Études de cas</h2>
            <div className="w-20 h-1 bg-nexus-blue mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Cherche ce bloc dans ton page.tsx */}
            <CaseCard 
              image="/photos/Arduino_logo-arduino.jpg"
              category="Hardware Integration"
              title="Optimisation de l'iriigation par capteurs Arduino"
              description="L'intégration de la technologie Arduino permet une lecture précisz des données hydriques du dol . Ce systéme intelligent automatise l'irrigation en temps réel, garantissant une économie d'eau de 40% et une autonomie totale de l'exploitation grace a nos protocoles de communication basse consommation."
            />
            <CaseCard 
              image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
              category="Agri-Tech"
              title="Gestion intelligente de l'énergie à Lyon"
              description="Déploiement d'un réseau de compteurs intelligents SDS pour surveiller la consommation énergétique d'un site industriel. Les données sont centralisées sur notre ERP grâce à l'Edge Computing, permettant d'identifier les pics de consommation, d'anticiper la maintenance et de réduire la facture énergétique."
            />
          </div>
        </div>
      </section>

      {/* 5. TECH SPECS SECTION */}
      <section className="py-24 bg-nexus-dark text-white overflow-hidden relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-white">Une architecture robuste et évolutive</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-nexus-blue flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Multi-protocole</h4>
                  <p className="text-gray-400 font-light">Support SDS, 5G, Sigfox et WiFi.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-nexus-blue flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Edge Computing</h4>
                  <p className="text-gray-400 font-light">Traitement des données localement pour une latence zéro.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative flex justify-center items-center">
            <img 
              src="/photos/logo-nexus.png" 
              alt="Logo SDS Nexus" 
              className="w-full max-w-[400px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,115,230,0.5)]"
            />
            <div className="absolute inset-0 bg-nexus-blue/10 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
      {/* 7. DASHBOARD PREVIEW - L'ARGUMENT ANALYTIQUE */}
<section className="py-24 bg-nexus-dark relative overflow-hidden">
  <div className="container mx-auto px-6">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      
      {/* Côté Gauche : Texte Stratégique */}
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-bold text-white mb-6">Visualisation de données en temps réel</h2>
        <p className="text-blue-100/70 text-lg mb-8 leading-relaxed">
          Notre interface convertit les signaux de vos capteurs Arduino en indicateurs de performance. 
          Prenez des décisions basées sur des faits, pas sur des suppositions.
        </p>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <span className="text-3xl font-bold text-white">-30%</span>
            <p className="text-sm text-blue-200 mt-2">Consommation d'eau</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <span className="text-3xl font-bold text-white">+15%</span>
            <p className="text-sm text-blue-200 mt-2">Rendement Industriel</p>
          </div>
        </div>
      </div>

      {/* Côté Droit : Le visuel du Dashboard */}
      <div className="lg:w-1/2 w-full">
        <div className="bg-[#1a1a1a] rounded-3xl border border-white/10 p-4 shadow-2xl">
          {/* Header du faux Dashboard */}
          <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-gray-500 font-mono italic">NexusOS v2.4 - Live Feed</span>
          </div>

          {/* Graphique simulé en CSS simple */}
          <div className="space-y-4">
            <div className="h-4 bg-nexus-blue/20 rounded-full w-full overflow-hidden">
              <div className="h-full bg-nexus-blue w-[75%] transition-all duration-1000"></div>
            </div>
            <div className="h-4 bg-nexus-blue/20 rounded-full w-full overflow-hidden">
              <div className="h-full bg-nexus-blue w-[45%] transition-all duration-1000"></div>
            </div>
            <div className="h-4 bg-nexus-blue/20 rounded-full w-full overflow-hidden">
              <div className="h-full bg-nexus-blue w-[90%] transition-all duration-1000"></div>
            </div>
          </div>
          <p className="text-center text-[10px] text-gray-600 mt-6 uppercase tracking-widest">Analyse des flux de données IoT terminée</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* 8. SECTION MAINTENANCE & SMART ALERTS */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
      {/* Effet de lumière en arrière-plan */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nexus-blue/20 blur-[120px] -z-0"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-nexus-blue font-bold tracking-[0.2em] uppercase text-sm">IA & Maintenance</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4 leading-tight">
            Anticipez les pannes avant qu'elles n'arrivent.
          </h2>
          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Grâce à l'analyse continue des vibrations et de la température via nos modules **Arduino SDS**, le système détecte les anomalies de fonctionnement en temps réel.
          </p>
          
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4 text-white">
              <div className="w-10 h-10 rounded-full bg-nexus-blue/20 flex items-center justify-center text-nexus-blue">
                <ShieldCheck size={20} />
              </div>
              <p className="font-medium">Protection des actifs critiques 24h/24</p>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <Cpu size={20} />
              </div>
              <p className="font-medium">Algorithmes d'optimisation énergétique</p>
            </div>
          </div>
        </div>

        {/* Illustration d'une Alerte Système */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-white font-bold">Alertes Système Live</h4>
            <span className="flex h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
          </div>
          
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-red-400 text-xs font-bold uppercase">Alerte Critique</p>
                <p className="text-white text-sm">Surchauffe Moteur #04 - Zone A</p>
              </div>
              <span className="text-gray-500 text-xs font-mono italic">14:02:11</span>
            </div>
            
            <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex justify-between items-center opacity-60">
              <div>
                <p className="text-green-400 text-xs font-bold uppercase">Optimal</p>
                <p className="text-white text-sm">Pression Hydraulique Stable</p>
              </div>
              <span className="text-gray-500 text-xs font-mono italic">13:58:45</span>
            </div>
          </div>
          
          <button className="w-full mt-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition">
            Ouvrir le Journal d'Audit
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}

// COMPOSANTS RÉUTILISABLES
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
        <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-xs font-bold text-nexus-blue shadow-lg">
          {category}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-nexus-dark">{title}</h3>
      
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 bg-blue-50 p-4 rounded-xl border-l-4 border-nexus-blue">
          {description}
        </p>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 mt-4 text-nexus-blue font-semibold hover:underline"
      >
        {isOpen ? "Fermer" : "Lire la suite"} 
        {isOpen ? <X size={16} /> : <ArrowRight size={16} />}
      </button>
    </div>
  );
}