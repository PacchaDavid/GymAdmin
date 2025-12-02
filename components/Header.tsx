import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
    onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 mb-8 pt-2">
      <div className="flex items-start gap-4">
        <button 
            onClick={onMenuClick}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg -ml-2"
        >
            <Menu size={24} />
        </button>
        <div className="flex flex-col gap-2">
            <h1 className="text-white text-3xl md:text-4xl font-black tracking-tight">Panel de control</h1>
            <p className="text-text-muted text-base">Bienvenido, aquí tienes un resumen de la actividad de tu gimnasio.</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 flex-wrap">
        <button className="flex-1 md:flex-none h-10 px-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg text-sm font-bold transition-colors">
          Gestionar Rutinas
        </button>
        <button className="flex-1 md:flex-none h-10 px-4 bg-primary hover:bg-primary-hover text-background-dark rounded-lg text-sm font-bold transition-colors shadow-lg shadow-primary/20">
          Añadir Nuevo Usuario
        </button>
      </div>
    </div>
  );
};
