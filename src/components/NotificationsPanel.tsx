import { AlertCircle, TrendingUp, Flag } from 'lucide-react';

const mockNotifications = [
  {
    id: 1,
    title: 'Nouvelle analyse disponible',
    description: 'Votre demande d\'analyse a été traitée',
    timestamp: 'Il y a 2 heures',
    icon: TrendingUp,
    unread: true,
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 2,
    title: 'Score de fiabilité mis à jour',
    description: 'Votre score a augmenté de 3 points',
    timestamp: 'Il y a 5 heures',
    icon: TrendingUp,
    unread: true,
    color: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    id: 3,
    title: 'Contenu signalé attention requise',
    description: 'Un contenu signalé nécessite votre attention',
    timestamp: 'Hier',
    icon: Flag,
    unread: false,
    color: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
];

export function NotificationsPanel() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Notifications</h2>

      <div className="space-y-4">
        {mockNotifications.map((notification) => {
          const IconComponent = notification.icon;
          return (
            <div
              key={notification.id}
              className={`${notification.color} border ${notification.borderColor} rounded-lg p-4 cursor-pointer hover:shadow-md transition-all`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <IconComponent className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {notification.title}
                      {notification.unread && (
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-2"></span>
                      )}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{notification.description}</p>
                  <p className="text-xs text-gray-500 mt-2">{notification.timestamp}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-6 text-[#345AFB] font-semibold text-sm hover:text-[#1827dd] transition-colors py-2">
        Voir toutes les notifications
      </button>
    </div>
  );
}
