"use client";
import React, { useState, useEffect } from "react";
import { Activity, Database, Server, Zap } from "lucide-react";

export default function Dashboard() {
  // NOUVEAUTÉ : État pour les données en temps réel
  const [liveData, setLiveData] = useState({
    consumption: 1.2,
    activeSystems: 124,
    temp: 24
  });

  // NOUVEAUTÉ : Simulation de réception de données IoT
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData({
        consumption: +(1.0 + Math.random() * 0.5).toFixed(2),
        activeSystems: Math.floor(120 + Math.random() * 10),
        temp: Math.floor(22 + Math.random() * 5)
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 bg-nexus-light min-h-screen">
      <h1 className="text-3xl font-bold text-nexus-dark mb-8">Tableau de bord Nexus</h1>
      
      {/* Statistiques en temps réel */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard icon={<Activity className="text-green-500" />} label="Systèmes Actifs" value={liveData.activeSystems.toString()} />
        <StatCard icon={<Zap className="text-nexus-blue" />} label="Consommation" value={`${liveData.consumption} kW`} />
        <StatCard icon={<Server className="text-purple-500" />} label="Température" value={`${liveData.temp}°C`} />
        <StatCard icon={<Database className="text-orange-500" />} label="Données" value="4.2 TB" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-bold mb-4">Flux d'activité IoT (Live)</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-nexus-blue rounded-full animate-pulse"></div>
                <p className="text-sm text-gray-600">
                  {i === 1 ? `Capteur #${liveData.temp} synchronisé` : `Connexion établie avec le nœud Arduino #00${i}`}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-nexus-dark p-6 rounded-2xl shadow-sm text-white">
          <h2 className="font-bold mb-4">Statut de la Sécurité</h2>
          <div className="flex flex-col items-center justify-center h-40">
            <div className="text-5xl font-black text-nexus-blue">PROTECTED</div>
            <p className="text-gray-400 mt-2">Chiffrement AES-256 actif</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-4 mb-2">
        {icon}
        <span className="text-gray-500 text-sm font-medium">{label}</span>
      </div>
      <div className="text-2xl font-bold text-nexus-dark">{value}</div>
    </div>
  );
}