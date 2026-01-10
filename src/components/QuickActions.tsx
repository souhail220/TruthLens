import { Plus, History, Settings } from 'lucide-react';

export function QuickActions() {
  const actions = [
    {
      icon: Plus,
      label: 'Analyser un nouveau contenu',
      color: 'bg-[#345AFB] text-white hover:bg-[#1827dd]',
    },
    {
      icon: History,
      label: 'Voir l\'historique',
      color: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    },
    {
      icon: Settings,
      label: 'Paramètres du compte',
      color: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Actions rapides</h2>

      <div className="space-y-3">
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <button
              key={index}
              className={`w-full ${action.color} px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
            >
              <IconComponent className="w-5 h-5" />
              {action.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
