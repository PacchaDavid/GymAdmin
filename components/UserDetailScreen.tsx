import React, { useState } from 'react';
import { User, Routine } from '../types';
import { ArrowLeft } from 'lucide-react';

interface UserDetailProps {
  user: User;
  onBack: () => void;
  onEdit: () => void;
}

export const UserDetailScreen: React.FC<UserDetailProps> = ({ user, onBack, onEdit }) => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <button 
        onClick={onBack}
        className="self-start flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm font-medium mb-2"
      >
        <ArrowLeft size={16} />
        Volver a usuarios
      </button>

      {/* Hero Header */}
      <div className="rounded-2xl border border-border-dark bg-surface-dark p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:justify-between">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="h-28 w-28 rounded-full p-1 border-2 border-primary/30">
                <img src={user.avatar} alt={user.name} className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="flex flex-col items-center md:items-start gap-1 pt-2">
                <h1 className="text-white text-3xl font-bold">{user.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-text-muted">Membresía:</span>
                    <span className="text-primary font-medium">{user.status}</span>
                </div>
                <p className="text-text-muted text-sm mt-1">Miembro desde: {user.startDate}</p>
            </div>
        </div>
        <div className="flex gap-3 mt-2">
            <button className="px-4 py-2 rounded-lg bg-[#2a302c] hover:bg-[#363d38] border border-border-dark text-white text-sm font-medium transition-colors">
                Asignar Rutina
            </button>
            <button 
                onClick={onEdit}
                className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-background-dark font-bold text-sm transition-colors"
            >
                Editar Usuario
            </button>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="rounded-2xl border border-border-dark bg-surface-dark overflow-hidden min-h-[400px]">
        {/* Tab Navigation */}
        <div className="flex border-b border-border-dark">
            <button 
                onClick={() => setActiveTab('personal')}
                className={`px-6 py-4 text-sm font-medium transition-colors relative ${activeTab === 'personal' ? 'text-white' : 'text-text-muted hover:text-white/80'}`}
            >
                Información Personal
                {activeTab === 'personal' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
            </button>
            <button 
                onClick={() => setActiveTab('routines')}
                className={`px-6 py-4 text-sm font-medium transition-colors relative ${activeTab === 'routines' ? 'text-white' : 'text-text-muted hover:text-white/80'}`}
            >
                Rutinas Asignadas
                {activeTab === 'routines' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
            </button>
            <button 
                onClick={() => setActiveTab('history')}
                className={`px-6 py-4 text-sm font-medium transition-colors relative ${activeTab === 'history' ? 'text-white' : 'text-text-muted hover:text-white/80'}`}
            >
                Historial de Progreso
                {activeTab === 'history' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
            </button>
        </div>

        <div className="p-6 md:p-8">
            {activeTab === 'personal' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                    <div className="flex flex-col gap-1">
                        <label className="text-text-muted text-xs uppercase tracking-wider font-semibold">Email</label>
                        <p className="text-white text-base border-b border-border-dark/50 pb-2">{user.email}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-text-muted text-xs uppercase tracking-wider font-semibold">Fecha de Nacimiento</label>
                        <p className="text-white text-base border-b border-border-dark/50 pb-2">24 Julio, 1990</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-text-muted text-xs uppercase tracking-wider font-semibold">Plan de Membresía</label>
                        <p className="text-white text-base border-b border-border-dark/50 pb-2">Plan Premium</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-text-muted text-xs uppercase tracking-wider font-semibold">Contacto de Emergencia</label>
                        <p className="text-white text-base border-b border-border-dark/50 pb-2">Ana Pérez</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-text-muted text-xs uppercase tracking-wider font-semibold">Teléfono</label>
                        <p className="text-white text-base border-b border-border-dark/50 pb-2">+34 611 22 33 44</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-text-muted text-xs uppercase tracking-wider font-semibold">Género</label>
                        <p className="text-white text-base border-b border-border-dark/50 pb-2">Masculino</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-text-muted text-xs uppercase tracking-wider font-semibold">Próximo Pago</label>
                        <p className="text-white text-base border-b border-border-dark/50 pb-2">25 Diciembre, 2024</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-text-muted text-xs uppercase tracking-wider font-semibold">Tel. Emergencia</label>
                        <p className="text-white text-base border-b border-border-dark/50 pb-2">+34 655 44 33 22</p>
                    </div>
                </div>
            )}

            {activeTab === 'routines' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Routine Card 1 */}
                    <div className="border border-border-dark rounded-xl p-6 bg-background-dark/30 hover:bg-background-dark/50 transition-colors">
                        <h3 className="text-white font-bold text-lg">Rutina de Fuerza - Tren Superior</h3>
                        <p className="text-text-muted text-sm mt-1">Lunes, Miércoles, Viernes</p>
                        <p className="text-white/80 text-sm mt-4 leading-relaxed">Enfoque en pecho, espalda y hombros para aumento de masa muscular.</p>
                        <button className="text-primary font-bold text-sm mt-6 hover:underline">Ver detalles</button>
                    </div>
                    {/* Routine Card 2 */}
                    <div className="border border-border-dark rounded-xl p-6 bg-background-dark/30 hover:bg-background-dark/50 transition-colors">
                        <h3 className="text-white font-bold text-lg">Rutina de Cardio y Core</h3>
                        <p className="text-text-muted text-sm mt-1">Martes, Jueves</p>
                        <p className="text-white/80 text-sm mt-4 leading-relaxed">Sesiones de alta intensidad (HIIT) y ejercicios para fortalecer el abdomen.</p>
                        <button className="text-primary font-bold text-sm mt-6 hover:underline">Ver detalles</button>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};
