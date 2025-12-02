import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Grid2X2, Activity, ShoppingBag, PlusCircle } from 'lucide-react';
import { Routine } from '../types';

interface RoutinesScreenProps {
  routines: Routine[];
}

export const RoutinesScreen: React.FC<RoutinesScreenProps> = ({ routines }) => {
  const [selectedRoutineId, setSelectedRoutineId] = useState<string>(routines[0]?.id || '');
  const selectedRoutine = routines.find(r => r.id === selectedRoutineId) || routines[0];

  const getIcon = (name: string) => {
    if (name.toLowerCase().includes('cardio')) return <Activity size={24} />;
    if (name.toLowerCase().includes('pecho')) return <ShoppingBag size={24} />;
    if (name.toLowerCase().includes('full')) return <Grid2X2 size={24} />;
    return <Grid2X2 size={24} />;
  };

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-140px)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-1">
            <h1 className="text-white text-3xl font-black tracking-tight">Gestión de Rutinas</h1>
            <p className="text-text-muted text-base">Crea, personaliza y asigna rutinas de ejercicio a los usuarios.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-full min-h-[500px]">
        {/* Left Sidebar - List */}
        <div className="w-full lg:w-80 flex flex-col gap-4">
             <div className="flex gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" size={16} />
                    <input 
                        type="text" 
                        placeholder="Buscar rutina..." 
                        className="w-full bg-surface-dark border border-border-dark focus:border-primary/50 rounded-lg pl-9 pr-3 py-2.5 text-white placeholder-text-muted/70 focus:outline-none text-sm"
                    />
                </div>
                <button className="flex items-center gap-2 px-3 py-2.5 bg-primary hover:bg-primary-hover text-background-dark rounded-lg text-sm font-bold transition-colors">
                    <Plus size={18} />
                    <span className="hidden sm:inline">Nueva</span>
                </button>
             </div>

             <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2">
                {routines.map(routine => (
                    <div 
                        key={routine.id}
                        onClick={() => setSelectedRoutineId(routine.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            selectedRoutineId === routine.id 
                            ? 'bg-[#1e3826] border-primary/30' 
                            : 'bg-surface-dark border-border-dark hover:border-border-dark/80 hover:bg-[#1a2620]'
                        }`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${selectedRoutineId === routine.id ? 'bg-primary text-background-dark' : 'bg-white/5 text-text-muted'}`}>
                                    {getIcon(routine.name)}
                                </div>
                                <span className={`font-medium ${selectedRoutineId === routine.id ? 'text-white' : 'text-white/80'}`}>
                                    {routine.name}
                                </span>
                            </div>
                            <MoreVertical size={16} className="text-text-muted" />
                        </div>
                    </div>
                ))}
             </div>
        </div>

        {/* Right Content - Editor */}
        <div className="flex-1 bg-surface-dark border border-border-dark rounded-2xl p-6 flex flex-col gap-6 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-border-dark">
                <input 
                    type="text" 
                    value={selectedRoutine?.name} 
                    className="bg-transparent text-xl font-bold text-white focus:outline-none focus:border-b focus:border-primary px-1"
                    readOnly
                />
                <div className="flex gap-2">
                    <div className="relative">
                        <button className="px-4 py-2 bg-[#2a302c] border border-border-dark rounded-lg text-white text-sm font-medium flex items-center gap-2">
                            Asignar a...
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-70"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                    </div>
                    <button className="px-6 py-2 bg-primary hover:bg-primary-hover text-background-dark font-bold text-sm rounded-lg transition-colors shadow-lg shadow-primary/20">
                        Guardar
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4">
                {selectedRoutine?.exercises.map((exercise) => (
                    <div key={exercise.id} className="bg-background-dark/50 border border-border-dark rounded-xl p-5">
                        <div className="flex items-center gap-3 mb-4">
                            <Grid2X2 size={16} className="text-text-muted" />
                            <h3 className="text-white font-bold">{exercise.name}</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-text-muted font-medium">Series</label>
                                <input 
                                    type="number" 
                                    defaultValue={exercise.sets}
                                    className="bg-surface-dark border border-border-dark rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-text-muted font-medium">Repeticiones</label>
                                <input 
                                    type="text" 
                                    defaultValue={exercise.reps}
                                    className="bg-surface-dark border border-border-dark rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-text-muted font-medium">Peso (kg)</label>
                                <input 
                                    type="number" 
                                    defaultValue={exercise.weight}
                                    className="bg-surface-dark border border-border-dark rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-text-muted font-medium">Descanso (s)</label>
                                <input 
                                    type="number" 
                                    defaultValue={exercise.rest}
                                    className="bg-surface-dark border border-border-dark rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <button className="w-full py-4 border-2 border-dashed border-border-dark rounded-xl text-text-muted hover:text-white hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center gap-2 font-medium">
                    <PlusCircle size={20} />
                    Añadir Ejercicio
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
