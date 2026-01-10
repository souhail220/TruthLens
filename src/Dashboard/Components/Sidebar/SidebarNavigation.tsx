import { LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
  path: string;
  color: string;
  badge?: number;
}

interface SidebarNavigationProps {
  menuItems: MenuItem[];
  onItemClick: (id: string) => void;
  onClose?: () => void;
}

export function SidebarNavigation({ menuItems, onItemClick, onClose }: SidebarNavigationProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="p-4 space-y-2">
      {menuItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            key={item.id}
            to={item.path}
            onClick={() => {
              onItemClick(item.id);
              if (window.innerWidth < 1024) {
                onClose?.();
              }
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
              isActive(item.path)
                ? 'bg-[#345AFB] text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <IconComponent className="w-5 h-5" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
