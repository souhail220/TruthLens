import { NewsContent } from './NewsContent';
import { SearchContent } from './SearchContent';
import { NotificationsContent } from './NotificationsContent';
import { SettingsContent } from './SettingsContent';

interface SidebarContentProps {
  activeTab: string;
}

export function SidebarContent({ activeTab }: SidebarContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'news':
        return <NewsContent />;
      case 'search':
        return <SearchContent />;
      case 'notifications':
        return <NotificationsContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 border-t border-gray-200">
      {renderContent()}
    </div>
  );
}
