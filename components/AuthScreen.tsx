import React from 'react';
import { Eye, Calendar, Mail, Lock } from 'lucide-react';

interface AuthScreenProps {
  mode: 'login' | 'register' | 'edit-user';
  onComplete: () => void;
  onSwitchMode?: (mode: 'login' | 'register') => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ mode, onComplete, onSwitchMode }) => {
  
  if (mode === 'edit-user') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background-dark/80 backdrop-blur-sm">
        <div className="w-full max-w-5xl bg-surface-dark rounded-2xl shadow-2xl overflow-hidden border border-border-dark flex flex-col md:flex-row h-[90vh] md:h-auto animate-in zoom-in-95 duration-200">
           {/* Left Image Side */}
           <div className="hidden md:block w-1/2 relative">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-dark z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
               alt="Gym" 
               className="h-full w-full object-cover"
             />
           </div>
           
           {/* Right Form Side */}
           <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
             <h2 className="text-3xl font-black text-white mb-2">Editar Usuario</h2>
             <p className="text-text-muted mb-8">Actualiza la información del perfil del usuario.</p>
             
             <div className="flex flex-col gap-6">
               <div className="flex flex-col gap-2">
                 <label className="text-white font-medium text-sm">Nombre completo</label>
                 <input type="text" defaultValue="Ana García" className="bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none" />
               </div>
               
               <div className="flex flex-col gap-2">
                 <label className="text-white font-medium text-sm">Correo electrónico</label>
                 <input type="email" defaultValue="ana.garcia@email.com" className="bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none" />
               </div>
               
               <div className="flex flex-col gap-2">
                 <label className="text-white font-medium text-sm">Tipo de Membresía</label>
                 <div className="relative">
                    <select className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none appearance-none">
                        <option>Premium</option>
                        <option>Básico</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 </div>
               </div>
               
               <div className="flex flex-col gap-2">
                 <label className="text-white font-medium text-sm">Fecha de Vencimiento</label>
                 <div className="relative">
                    <input type="text" defaultValue="12/31/2024" className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none" />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                 </div>
               </div>
               
               <div className="flex flex-col gap-3 mt-4">
                 <button onClick={onComplete} className="w-full bg-primary hover:bg-primary-hover text-background-dark font-bold py-3.5 rounded-lg transition-colors">
                    Guardar Cambios
                 </button>
                 <button onClick={onComplete} className="w-full bg-[#1e2330] hover:bg-[#252b3b] text-white font-medium py-3.5 rounded-lg transition-colors border border-transparent hover:border-white/10">
                    Cancelar
                 </button>
               </div>
             </div>
           </div>
        </div>
      </div>
    );
  }

  if (mode === 'register') {
      return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-background-dark">
            <div className="w-full max-w-md bg-surface-dark border border-border-dark rounded-2xl p-8 shadow-2xl">
                <div className="flex flex-col items-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2 text-center">Crear una Cuenta</h1>
                    <p className="text-text-muted text-center text-sm">Únete a nuestra comunidad y empieza a transformar tu rutina.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-white">Nombre Completo</label>
                        <input type="text" placeholder="Ingresa tu nombre completo" className="bg-[#1a2620] border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none placeholder-white/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-white">Correo Electrónico</label>
                        <input type="email" placeholder="tu@correo.com" className="bg-[#1a2620] border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none placeholder-white/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-white">Contraseña</label>
                        <div className="relative">
                            <input type="password" placeholder="Ingresa tu contraseña" className="w-full bg-[#1a2620] border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none placeholder-white/20" />
                            <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 cursor-pointer hover:text-white" size={18} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-white">Confirmar Contraseña</label>
                        <div className="relative">
                            <input type="password" placeholder="Confirma tu contraseña" className="w-full bg-[#1a2620] border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none placeholder-white/20" />
                            <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 cursor-pointer hover:text-white" size={18} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-1">
                        <label className="text-sm font-medium text-white">Tipo de Usuario</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="py-2.5 rounded-lg border border-primary bg-primary/10 text-primary font-medium text-sm">Miembro</button>
                            <button className="py-2.5 rounded-lg border border-border-dark bg-transparent text-white/60 font-medium text-sm hover:bg-white/5">Administrador</button>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 mt-2">
                        <div className="w-5 h-5 rounded border border-white/20 bg-[#1a2620] mt-0.5 flex items-center justify-center"></div>
                        <p className="text-sm text-text-muted leading-tight">Acepto los <span className="text-primary hover:underline cursor-pointer">Términos y Condiciones</span> y la <span className="text-primary hover:underline cursor-pointer">Política de Privacidad</span>.</p>
                    </div>

                    <button className="mt-4 bg-primary hover:bg-primary-hover text-background-dark font-bold py-3.5 rounded-lg transition-colors shadow-lg shadow-primary/20">
                        Registrarse
                    </button>

                    <p className="text-center text-sm text-text-muted mt-4">
                        ¿Ya tienes una cuenta? <button onClick={() => onSwitchMode?.('login')} className="text-primary hover:underline font-medium">Inicia Sesión</button>
                    </p>
                </div>
            </div>
        </div>
      );
  }

  // Login Mode
  return (
    <div className="min-h-screen w-full flex bg-background-dark">
        <div className="hidden lg:flex w-1/2 relative bg-surface-dark items-center justify-center p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-10"></div>
             {/* Use a gym image */}
             <img 
               src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop" 
               alt="Gym login" 
               className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
             />
             <div className="absolute inset-0 bg-[#102216]/60"></div>
             <img 
               src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover"
               alt="Gym Man"
             />
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background-dark">
            <div className="w-full max-w-md flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold text-white">Bienvenido de nuevo</h1>
                    <p className="text-text-muted text-lg">Gestiona tu gimnasio de forma eficiente.</p>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-medium">Correo electrónico</label>
                        <div className="relative">
                            <input 
                                type="email" 
                                defaultValue="tu@email.com"
                                className="w-full bg-[#1a2620] border border-border-dark rounded-lg pl-4 pr-10 py-3.5 text-white focus:border-primary focus:outline-none transition-colors"
                            />
                            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-medium">Contraseña</label>
                        <div className="relative">
                            <input 
                                type="password" 
                                placeholder="Ingresa tu contraseña"
                                className="w-full bg-[#1a2620] border border-border-dark rounded-lg pl-4 pr-10 py-3.5 text-white focus:border-primary focus:outline-none transition-colors"
                            />
                            <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                        </div>
                        <button className="self-start text-text-muted hover:text-white text-sm mt-1 hover:underline">Ovidé mi contraseña</button>
                    </div>

                    <button 
                        onClick={onComplete}
                        className="mt-2 bg-primary hover:bg-primary-hover text-background-dark font-bold py-3.5 rounded-lg transition-colors shadow-lg shadow-primary/20"
                    >
                        Iniciar Sesión
                    </button>

                    <button className="bg-[#1e2330] hover:bg-[#252b3b] text-white font-medium py-3.5 rounded-lg transition-colors flex items-center justify-center gap-3 border border-border-dark">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Iniciar sesión con Google
                    </button>

                    <p className="text-center text-text-muted mt-6">
                        ¿No tienes una cuenta? <button onClick={() => onSwitchMode?.('register')} className="text-white hover:underline font-medium ml-1">Regístrate</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};
