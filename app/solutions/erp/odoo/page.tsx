export default function OdooPage() {
  return (
    <div className="min-h-screen bg-nexus-dark pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-6">
          Odoo 19 <span className="text-nexus-blue">Implementation</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-nexus-blue font-bold mb-4">Architecture Docker</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Déploiement d'instances Odoo 19 optimisées sous Docker pour une isolation 
              parfaite et une scalabilité industrielle.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-nexus-blue font-bold mb-4">Custom Modules</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Développement et test de modules spécifiques comme <span className="text-white">sds_accounting</span> 
              pour répondre aux besoins métiers précis.
            </p>
          </div>
        </div>

        {/* TABLEAU RÉCAPITULATIF (DOIT ÊTRE À L'INTÉRIEUR DU RETURN) */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/10 text-xs uppercase text-white">
              <tr>
                <th className="px-6 py-4">Composant</th>
                <th className="px-6 py-4">Technologie</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-6 py-4 font-medium text-white">Base de Données</td>
                <td className="px-6 py-4">PostgreSQL / Docker</td>
                <td className="px-6 py-4 text-green-400 font-bold">Opérationnel</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-white">Module Comptable</td>
                <td className="px-6 py-4">Python (Odoo 19)</td>
                <td className="px-6 py-4 text-green-400 font-bold">Build Success</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-8 bg-nexus-blue/10 rounded-3xl border border-nexus-blue/20">
          <p className="text-white font-medium italic">
            "Notre expertise permet une intégration fluide des flux financiers et logistiques 
            directement dans votre infrastructure existante."
          </p>
        </div>
      </div>
    </div>
  );
}