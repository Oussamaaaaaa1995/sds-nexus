"use client";
import React, { useState, useEffect } from "react";
import { Activity, Database, Server, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";
// NOUVEAUTÉ : Importation des composants pour les graphiques
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  // NOUVEAUTÉ : État pour les données en temps réel
  const [liveData, setLiveData] = useState({
    consumption: 1.2,
    activeSystems: 124,
    temp: 24
  });

  // NOUVEAUTÉ : Données pour le graphique (historique simulé)
  const [chartData, setChartData] = useState([
    { time: '10:00', val: 400 },
    { time: '11:00', val: 300 },
    { time: '12:00', val: 600 },
    { time: '13:00', val: 800 },
    { time: '14:00', val: 500 },
    { time: '15:00', val: 700 },
  ]);

  // NOUVEAUTÉ : Simulation de réception de données IoT
  useEffect(() => {
    const interval = setInterval(() => {
      const newVal = Math.floor(Math.random() * 900);
      const newTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      setLiveData({
        consumption: +(1.0 + Math.random() * 0.5).toFixed(2),
        activeSystems: Math.floor(120 + Math.random() * 10),
        temp: Math.floor(22 + Math.random() * 5)
      });

      // Mise à jour du graphique en ajoutant le nouveau point
      setChartData(prev => [...prev.slice(1), { time: newTime, val: newVal }]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 bg-nexus-light min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-nexus-dark">Tableau de bord Nexus</h1>
        {/* NOUVEAUTÉ : Badge de statut live */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Live Feed</span>
        </div>
      </div>
      
      {/* Statistiques en temps réel */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard icon={<Activity className="text-green-500" />} label="Systèmes Actifs" value={liveData.activeSystems.toString()} />
        <StatCard icon={<Zap className="text-nexus-blue" />} label="Consommation" value={`${liveData.consumption} kW`} />
        <StatCard icon={<Server className="text-purple-500" />} label="Température" value={`${liveData.temp}°C`} />
        <StatCard icon={<Database className="text-orange-500" />} label="Données" value="4.2 TB" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* NOUVEAUTÉ : Bloc Graphique Recharts */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-nexus-dark">Analyse de performance IoT</h2>
            <ArrowUpRight className="text-gray-400" size={18} />
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0073e6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0073e6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
                <YAxis hide />
                <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Area type="monotone" dataKey="val" stroke="#0073e6" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="font-bold mb-4 text-nexus-dark uppercase text-xs tracking-wider">Flux d'activité IoT (Live)</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-nexus-blue rounded-full animate-pulse"></div>
                  <p className="text-xs text-gray-600">
                    {i === 1 ? `Capteur #${liveData.temp} synchronisé` : `Connexion établie avec le nœud Arduino #00${i}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-nexus-dark p-6 rounded-2xl shadow-sm text-white relative overflow-hidden flex-grow min-h-[150px]">
            <div className="relative z-10">
              <h2 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-400">Sécurité</h2>
              <div className="text-4xl font-black text-nexus-blue">PROTECTED</div>
              <p className="text-[10px] text-gray-500 mt-2">Chiffrement AES-256 actif sur SDS-NODE-04</p>
            </div>
            <ShieldCheck className="absolute -right-4 -bottom-4 text-white opacity-5" size={120} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-2">
        {icon}
        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-2xl font-bold text-nexus-dark">{value}</div>
    </div>
  );
}