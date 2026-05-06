import { Activity, Database, Server, Zap } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-8 bg-nexus-light min-h-screen">
      <h1 className="text-3xl font-bold text-nexus-dark mb-8">Tableau de bord Nexus</h1>
      
      {/* Statistiques en temps réel */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard icon={<Activity className="text-green-500" />} label="Systèmes Actifs" value="124" />
        <StatCard icon={<Zap className="text-nexus-blue" />} label="Consommation" value="1.2 kW" />
        <StatCard icon={<Server className="text-purple-500" />} label="Serveurs" value="99.9%" />
        <StatCard icon={<Database className="text-orange-500" />} label="Données" value="4.2 TB" />
      </div>

      {/* Zone de contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-bold mb-4">Flux d'activité</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-nexus-blue rounded-full animate-pulse"></div>
                <p className="text-sm text-gray-600">Connexion établie avec le capteur #00{i}</p>
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