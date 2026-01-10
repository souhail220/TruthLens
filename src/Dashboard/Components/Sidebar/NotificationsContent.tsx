interface Notification {
  title: string;
  desc: string;
  unread: boolean;
}

const notifications: Notification[] = [
  { title: 'Nouvelle analyse', desc: 'Votre demande traitée', unread: true },
  { title: 'Score mis à jour', desc: '+3 points gagnés', unread: true },
  { title: 'Contenu signalé', desc: 'Action requise', unread: false },
];

export function NotificationsContent() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-900">Notifications</h3>
        <button className="text-xs text-[#345AFB] hover:text-[#1827dd] transition-colors font-medium">
          Marquer tout comme lu
        </button>
      </div>
      <div className="space-y-3">
        {notifications.map((notif, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              notif.unread ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 border border-gray-200'
            } hover:shadow-sm`}
          >
            <div className="flex gap-2">
              <div className="flex-1">
                <p className="font-medium text-sm text-gray-900">{notif.title}</p>
                <p className="text-xs text-gray-600 mt-1">{notif.desc}</p>
              </div>
              {notif.unread && <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
