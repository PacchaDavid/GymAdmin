import React from 'react';
import { LayoutDashboard, Users, Dumbbell, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
  onLogout?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, className = "", onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'usuarios', label: 'Usuarios', icon: Users },
    { id: 'rutinas', label: 'Rutinas', icon: Dumbbell },
    { id: 'ajustes', label: 'Ajustes', icon: Settings },
  ];

  return (
    <aside className={`flex h-screen w-64 flex-col justify-between border-r border-border-dark bg-surface-dark p-4 ${className}`}>
      <div className="flex flex-col gap-6">
        {/* User Profile */}
        <div className="flex items-center gap-3 p-2">
          <div 
            className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center border border-border-dark"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgXuucixQjF7HBWJmFyhvqtKGcE9sXCQYcc0sSPmqwOMkdj6x2_zMeAy3ortOX9zeJPiXHtASkHccdDYSu4UH-gRglVrbIQpp1JGOUFqZqVBwfZZWAc2YqU7Ib9y4byH4vTozLtWfKY1qWbC7LCDBPwqn9SHQxABNBvTjnxy1PiDVmIStyfGP3iD5ZtANzZiFERI2Ea_dvAq2SNlafbaHJ2B6Ft-dBdte90tmsteLiEQkLmmciiXrxQ_amgqpySJCKOWx_6ajKjYsi")' }}
          />
          <div className="flex flex-col overflow-hidden">
            <h1 className="text-white text-base font-medium leading-tight truncate">Admin Gimnasio</h1>
            <p className="text-text-muted text-xs font-normal truncate">admin@gym.com</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={20} className={`transition-colors ${isActive ? "fill-current text-primary" : "text-white/60 group-hover:text-white"}`} />
                <p className="text-sm font-medium">{item.label}</p>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-3">
        <button 
          onClick={() => setActiveTab('rutinas')}
          className="flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-primary-hover text-background-dark text-sm font-bold transition-all transform active:scale-95">
          Crear Rutina
        </button>
        {onLogout && (
           <button 
            onClick={onLogout}
            className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-accent-red hover:bg-accent-red/10 rounded-lg transition-colors"
           >
             <LogOut size={20} />
             <span className="text-sm font-medium">Cerrar Sesión</span>
           </button>
        )}
      </div>
    </aside>
  );
};
