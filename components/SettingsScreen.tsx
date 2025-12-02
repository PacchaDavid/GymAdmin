import React from 'react';
import { Upload } from 'lucide-react';

export const SettingsScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-3xl font-black tracking-tight">Ajustes de la Aplicación</h1>
        <p className="text-text-muted text-base">Gestiona las preferencias y configuraciones generales de la aplicación.</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Gym Info Section */}
        <section className="flex flex-col gap-6">
          <h2 className="text-white text-xl font-bold">Información del Gimnasio</h2>
          <div className="border-t border-border-dark my-2"></div>
          
          <div className="flex items-center justify-between p-4 bg-surface-dark border border-border-dark rounded-xl">
             <div className="flex items-center gap-4">
               <div className="h-12 w-12 rounded-lg bg-[#e8e3d2] flex items-center justify-center text-background-dark font-bold text-xs">LOGO</div>
               <span className="text-white font-medium">Logo del Gimnasio</span>
             </div>
             <button className="px-4 py-2 bg-[#1e3826] hover:bg-[#2a4d35] text-primary text-sm font-medium rounded-lg transition-colors">
               Subir nuevo
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">Nombre del Gimnasio</label>
              <input 
                type="text" 
                defaultValue="Powerhouse Fitness Club"
                className="w-full bg-surface-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">Dirección</label>
              <input 
                type="text" 
                defaultValue="123 Calle Ficticia, Ciudad"
                className="w-full bg-surface-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">Correo Electrónico</label>
              <input 
                type="email" 
                defaultValue="contacto@powerhouse.com"
                className="w-full bg-surface-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">Teléfono</label>
              <input 
                type="tel" 
                defaultValue="+1 (555) 123-4567"
                className="w-full bg-surface-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Regional Settings */}
        <section className="flex flex-col gap-6">
          <h2 className="text-white text-xl font-bold">Configuración Regional</h2>
          <div className="border-t border-border-dark my-2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">Idioma</label>
              <div className="relative">
                <select className="w-full bg-surface-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary appearance-none cursor-pointer">
                  <option>Español</option>
                  <option>English</option>
                  <option>Français</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-white/50">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">Zona Horaria</label>
              <div className="relative">
                <select className="w-full bg-surface-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary appearance-none cursor-pointer">
                  <option>(GMT-05:00) Eastern Time</option>
                  <option>(GMT-06:00) Central Time</option>
                  <option>(GMT-08:00) Pacific Time</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-white/50">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-3 mt-4">
          <button className="px-6 py-2.5 rounded-lg border border-border-dark text-white hover:bg-white/5 transition-colors text-sm font-medium">
            Cancelar
          </button>
          <button className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-background-dark font-bold text-sm transition-colors shadow-lg shadow-primary/20">
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};
