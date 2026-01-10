export function SettingsContent() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900">Paramètres</h3>
      <div className="space-y-3">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Préférences</h4>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm text-gray-700">Notifications par email</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm text-gray-700">Mises à jour des scores</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-sm text-gray-700">Alertes de contenu</span>
            </label>
          </div>
        </div>
        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          Profil et données personnelles
        </button>
        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          Sécurité et confidentialité
        </button>
      </div>
    </div>
  );
}
