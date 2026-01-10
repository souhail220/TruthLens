import { useState } from 'react';
import { DashboardHeader } from '../Components/DashboardHeader';
import { NotificationsPanel } from '../../components/NotificationsPanel';
import { NewsFeed } from '../../components/NewsFeed';
import { TruthScoreSummary } from '../../components/TruthScoreSummary';
import { QuickActions } from '../../components/QuickActions';
import { Sidebar } from '../Components/Sidebar';

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onToggle={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <NewsFeed />
              </div>

              <div className="space-y-8">
                <TruthScoreSummary />
                <NotificationsPanel />
                <QuickActions />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
