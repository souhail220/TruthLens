import { useState } from "react";
import { DashboardHeader } from "../Dashboard/Components/DashboardHeader";
import { Sidebar } from "../Dashboard/Components/Sidebar";

export function Settings() {
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);

    return (
        <div className="min-h-screen bg-gray-50">
              <DashboardHeader />
        
              <div className="flex">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        
                <main className="flex-1">
                    <h1>Settings</h1>
                </main>
            </div>
        </div>     
    );
}