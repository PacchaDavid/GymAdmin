import React from 'react';
import { Search, Filter, MoreHorizontal, Plus } from 'lucide-react';
import { User } from '../types';

interface UsersScreenProps {
  users: User[];
  onUserClick: (user: User) => void;
  onAddUser: () => void;
}

export const UsersScreen: React.FC<UsersScreenProps> = ({ users, onUserClick, onAddUser }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-1">
            <h1 className="text-white text-3xl font-black tracking-tight">Gestión de Usuarios</h1>
            <p className="text-text-muted text-base">Añade, edita y gestiona todos los miembros del gimnasio.</p>
        </div>
        <button 
          onClick={onAddUser}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-hover text-background-dark rounded-lg text-sm font-bold transition-colors shadow-lg shadow-primary/20"
        >
            <Plus size={18} strokeWidth={3} />
            <span>Añadir Nuevo Usuario</span>
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 bg-surface-dark p-2 rounded-xl border border-border-dark">
        <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" size={18} />
            <input 
                type="text" 
                placeholder="Buscar por nombre o correo..." 
                className="w-full bg-background-dark/50 border border-transparent focus:border-primary/50 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-text-muted/70 focus:outline-none transition-all"
            />
        </div>
        <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-background-dark/50 hover:bg-background-dark text-white rounded-lg border border-border-dark/50 text-sm font-medium transition-colors">
                <span>Tipo de Membresía</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-70"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-background-dark/50 hover:bg-background-dark text-white rounded-lg border border-border-dark/50 text-sm font-medium transition-colors">
                <span>Estado</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-70"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="border border-border-dark rounded-xl overflow-hidden bg-surface-dark">
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-border-dark bg-[#16201a]">
                        <th className="px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Membresía</th>
                        <th className="px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Fecha de Inicio</th>
                        <th className="px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Estado</th>
                        <th className="px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider text-right">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border-dark">
                    {users.map((user) => (
                        <tr 
                            key={user.id} 
                            onClick={() => onUserClick(user)}
                            className="group hover:bg-white/5 cursor-pointer transition-colors"
                        >
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-4">
                                    <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
                                    <div className="flex flex-col">
                                        <span className="text-white font-medium text-sm">{user.name}</span>
                                        <span className="text-text-muted text-xs">{user.email}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-white/90 text-sm">{user.membership}</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-white/90 text-sm">{user.startDate}</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                                    user.status === 'Activo' 
                                        ? 'bg-primary/10 text-primary border-primary/20' 
                                        : user.status === 'Vencido'
                                        ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                                        : 'bg-accent-red/10 text-accent-red border-accent-red/20'
                                }`}>
                                    {user.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="p-2 text-text-muted hover:text-white rounded-lg hover:bg-white/10 transition-colors">
                                    <MoreHorizontal size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};
