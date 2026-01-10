import { X, Menu } from 'lucide-react';

interface SidebarHeaderProps {
  onToggle?: () => void;
  onClose?: () => void;
}

export function SidebarHeader({ onToggle, onClose }: SidebarHeaderProps) {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <h2 className="font-bold text-gray-900">Menu</h2>
      <div className="flex items-center gap-2">
        <button
          onClick={onToggle}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <button
          onClick={onClose}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
