import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { StatCard } from './components/StatCard';
import { MemberChart } from './components/MemberChart';
import { ActivityFeed } from './components/ActivityFeed';
import { Header } from './components/Header';
import { SettingsScreen } from './components/SettingsScreen';
import { UsersScreen } from './components/UsersScreen';
import { UserDetailScreen } from './components/UserDetailScreen';
import { RoutinesScreen } from './components/RoutinesScreen';
import { AuthScreen } from './components/AuthScreen';
import { StatMetric, ActivityItem, ChartData, User, Routine } from './types';
import { X } from 'lucide-react';

const App: React.FC = () => {
  type View = 'dashboard' | 'usuarios' | 'rutinas' | 'ajustes' | 'user-detail' | 'login' | 'register';
  
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showEditUserModal, setShowEditUserModal] = useState(false);

  // Mock Data
  const stats: StatMetric[] = [
    { label: 'Usuarios Activos', value: '1,204', change: '+5.2%', isPositive: true },
    { label: 'Rutinas Creadas', value: '312', change: '+1.8%', isPositive: true },
    { label: 'Reservas Próximas', value: '48', change: '-2.1%', isPositive: false },
    { label: 'Notificaciones', value: '5', change: '+10%', isPositive: true },
  ];

  const recentActivity: ActivityItem[] = [
    { id: '1', type: 'user', title: 'Nuevo usuario registrado', description: 'Carlos Ruiz se ha unido.', timeAgo: 'hace 5 minutos' },
    { id: '2', type: 'routine', title: 'Rutina actualizada', description: "Se actualizó la rutina 'Tren Superior'.", timeAgo: 'hace 2 horas' },
    { id: '3', type: 'booking', title: 'Nueva reserva de clase', description: "Ana Gómez ha reservado para 'Yoga'.", timeAgo: 'hace 1 día' },
    { id: '4', type: 'payment', title: 'Pago recibido', description: 'Pago de membresía de Juan Pérez.', timeAgo: 'hace 2 días' },
  ];

  const chartData: ChartData[] = [
    { name: 'Semana 1', value: 65 },
    { name: 'Semana 2', value: 85 },
    { name: 'Semana 3', value: 45 },
    { name: 'Semana 4', value: 95 },
  ];

  const users: User[] = [
      { id: '1', name: 'Carlos Santana', email: 'carlos.s@example.com', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=60', status: 'Activo', membership: 'Premium Anual', startDate: '15 Ene, 2024' },
      { id: '2', name: 'Ana Torres', email: 'ana.torres@example.com', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60', status: 'Activo', membership: 'Básico Mensual', startDate: '01 Feb, 2024' },
      { id: '3', name: 'Jorge Peña', email: 'jorge.p@example.com', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60', status: 'Vencido', membership: 'Premium Anual', startDate: '20 Dic, 2023' },
      { id: '4', name: 'Luisa Méndez', email: 'luisa.mendez@example.com', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60', status: 'Inactivo', membership: 'Pase de 10 días', startDate: '10 Mar, 2024' },
  ];

  const routines: Routine[] = [
      { 
          id: '1', 
          name: 'Full Body - Día 1', 
          exercises: [
              { id: 'e1', name: 'Press de Banca', sets: 4, reps: '8-10', weight: 60, rest: 60 },
              { id: 'e2', name: 'Sentadillas', sets: 4, reps: '10-12', weight: 80, rest: 90 },
          ]
      },
      { 
          id: '2', 
          name: 'Leg Day - Intermedio', 
          exercises: [
              { id: 'e3', name: 'Prensa de Piernas', sets: 3, reps: '12-15', weight: 120, rest: 90 },
              { id: 'e4', name: 'Extensiones de Cuádriceps', sets: 3, reps: '15', weight: 45, rest: 60 },
          ]
      },
      { 
          id: '3', 
          name: 'Cardio HIIT', 
          exercises: [
              { id: 'e5', name: 'Sprints', sets: 10, reps: '30s', weight: 0, rest: 30 },
              { id: 'e6', name: 'Burpees', sets: 5, reps: '15', weight: 0, rest: 45 },
          ]
      },
      { 
          id: '4', 
          name: 'Pecho y Tríceps', 
          exercises: [
              { id: 'e7', name: 'Aperturas', sets: 3, reps: '12', weight: 15, rest: 60 },
              { id: 'e8', name: 'Fondos', sets: 3, reps: 'Fall', weight: 0, rest: 90 },
          ]
      },
  ];

  // Navigation Handlers
  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setCurrentView('user-detail');
  };

  const handleBackToUsers = () => {
    setSelectedUser(null);
    setCurrentView('usuarios');
  };

  const handleLogin = () => {
    setCurrentView('dashboard');
  };

  // Render Views
  if (currentView === 'login' || currentView === 'register') {
      return (
        <AuthScreen 
            mode={currentView} 
            onSwitchMode={(mode) => setCurrentView(mode)}
            onComplete={handleLogin}
        />
      );
  }

  return (
    <div className="flex min-h-screen bg-background-dark font-sans selection:bg-primary selection:text-black">
      {/* Modal Overlay */}
      {showEditUserModal && (
          <AuthScreen mode="edit-user" onComplete={() => setShowEditUserModal(false)} />
      )}

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Desktop Sidebar (Fixed) */}
      <Sidebar 
        className="hidden md:flex fixed left-0 top-0 bottom-0 z-30" 
        activeTab={currentView === 'user-detail' ? 'usuarios' : currentView} 
        setActiveTab={(t) => setCurrentView(t as View)} 
        onLogout={() => setCurrentView('login')}
      />
      
      {/* Mobile Sidebar (Drawer) */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-surface-dark transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         <div className="h-full relative">
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-2 right-2 p-2 text-white z-50 md:hidden"
            >
                <X />
            </button>
            <Sidebar 
                activeTab={currentView === 'user-detail' ? 'usuarios' : currentView} 
                setActiveTab={(t) => { setCurrentView(t as View); setIsMobileMenuOpen(false); }} 
                onLogout={() => { setCurrentView('login'); setIsMobileMenuOpen(false); }}
            />
         </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 min-w-0 overflow-y-auto h-screen">
        <div className="mx-auto max-w-7xl flex flex-col gap-6">
          {/* Header visible on all internal pages except some full screen layouts if needed */}
          {/* Only show Dashboard Header on Dashboard */}
          {currentView === 'dashboard' && <Header onMenuClick={() => setIsMobileMenuOpen(true)} />}
          
          {/* For other views, show a mobile menu button if needed, or they have their own headers */}
          {currentView !== 'dashboard' && (
              <div className="md:hidden mb-4">
                  <button onClick={() => setIsMobileMenuOpen(true)} className="text-white p-2 -ml-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                  </button>
              </div>
          )}

          {currentView === 'dashboard' && (
            <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 min-h-[400px]">
                    <MemberChart data={chartData} />
                    </div>
                    <div className="lg:col-span-1">
                    <ActivityFeed items={recentActivity} />
                    </div>
                </div>
            </>
          )}

          {currentView === 'ajustes' && <SettingsScreen />}

          {currentView === 'usuarios' && (
            <UsersScreen 
                users={users} 
                onUserClick={handleUserClick} 
                onAddUser={() => setShowEditUserModal(true)} 
            />
          )}

          {currentView === 'user-detail' && selectedUser && (
              <UserDetailScreen 
                user={selectedUser} 
                onBack={handleBackToUsers} 
                onEdit={() => setShowEditUserModal(true)}
              />
          )}

          {currentView === 'rutinas' && (
              <RoutinesScreen routines={routines} />
          )}

        </div>
      </main>
    </div>
  );
};

export default App;
