export default function AccountingPage() {
  return (
    <div className="min-h-screen bg-nexus-dark pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-1 bg-nexus-blue rounded-full"></div>
          <h1 className="text-4xl font-black text-white">
            SDS <span className="text-nexus-blue">Accounting</span>
          </h1>
        </div>
        
        <div className="bg-white/5 rounded-3xl border border-white/10 p-8">
          <h2 className="text-xl font-bold text-white mb-6">Expertise en Gestion Financière</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-nexus-blue mt-1">✔</span>
              <p className="text-gray-400"><strong className="text-white">Module Custom Odoo 19 :</strong> Développement du module spécifique <strong>sds_accounting</strong> pour une facturation sur mesure.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-nexus-blue mt-1">✔</span>
              <p className="text-gray-400"><strong className="text-white">Automatisation :</strong> Synchronisation des flux de trésorerie et reporting en temps réel pour la direction.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-nexus-blue mt-1">✔</span>
              <p className="text-gray-400"><strong className="text-white">Conformité :</strong> Adaptation des structures comptables aux standards industriels.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}