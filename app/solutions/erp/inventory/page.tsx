export default function InventoryPage() {
  return (
    <div className="min-h-screen bg-nexus-dark pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-1 bg-blue-600 rounded-full"></div>
          <h1 className="text-4xl font-black text-white">
            Inventory <span className="text-blue-500">& Logistics</span>
          </h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="p-2 bg-blue-500/20 rounded-lg">📦</span>
              Gestion des Stocks
            </h3>
            <p className="text-gray-400 text-sm">
              Suivi automatisé des mouvements de stock avec une précision temps réel, 
              directement lié à votre instance Odoo 19.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="p-2 bg-blue-500/20 rounded-lg">🚀</span>
              Flux Logistiques
            </h3>
            <p className="text-gray-400 text-sm">
              Optimisation des réceptions et expéditions grâce à l'intégration 
              des modules d'inventaire personnalisés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}