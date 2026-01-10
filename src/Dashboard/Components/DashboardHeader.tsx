import { Link } from 'react-router-dom';
import { Bell, LogOut, Settings, User } from 'lucide-react';
import { useState } from 'react';

export function DashboardHeader() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src='../assets/TruthLens.png' alt="Logo" className="w-30 h-28" />
          </Link>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors group">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              <div className="invisible group-hover:visible absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 text-xs text-gray-600 whitespace-nowrap">
                3 notifications
              </div>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-10 h-10 bg-gradient-to-br from-[#345AFB] to-[#5c86fe] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                <User className="w-5 h-5" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-48 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="font-semibold text-gray-900">Jean Dupont</p>
                    <p className="text-sm text-gray-600">jean@example.com</p>
                  </div>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm">
                    <Settings className="w-4 h-4" />
                    Paramètres du compte
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm border-t border-gray-100"
                  >
                    <LogOut className="w-4 h-4" />
                    Déconnexion
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
