import { Newspaper, Search, Bell, Settings } from 'lucide-react';
import { useState } from 'react';
import { SidebarHeader } from './Sidebar/SidebarHeader';
import { SidebarNavigation } from './Sidebar/SidebarNavigation';
import { SidebarHelpCard } from './Sidebar/SidebarHelpCard';
import { SidebarContent } from './Sidebar/SidebarContent';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  onToggle?: () => void;
}

export function Sidebar({ isOpen = true, onClose, onToggle }: SidebarProps) {
  const [activeTab, setActiveTab] = useState('news');

  const menuItems = [
    { id: 'news', icon: Newspaper, label: 'Actualités', path: '/dashboard', color: 'text-blue-600' },
    { id: 'search', icon: Search, label: 'Recherche', path: '/search', color: 'text-gray-600' },
    { id: 'notifications', icon: Bell, label: 'Notifications', path: '/notifications', color: 'text-orange-600', badge: 3 },
    { id: 'settings', icon: Settings, label: 'Paramètres', path: '/settings', color: 'text-gray-600' },
  ];

  return (
    <>
      {!isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed lg:relative lg:translate-x-0 left-0 top-0 h-screen w-72 bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarHeader onToggle={onToggle} onClose={onClose} />
        
        <SidebarNavigation 
          menuItems={menuItems} 
          onItemClick={setActiveTab}
          onClose={onClose}
        />

        <SidebarHelpCard />

        <SidebarContent activeTab={activeTab} />
      </aside>
    </>
  );
}
