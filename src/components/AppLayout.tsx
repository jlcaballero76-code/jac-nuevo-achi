import React, { useState } from 'react';
import { JacLogo } from './JacLogo';
import { 
  Home, 
  Building2, 
  Target, 
  Zap, 
  UserCheck, 
  FileText, 
  History, 
  MapPin, 
  SunMedium, 
  Instagram, 
  Phone, 
  Mail, 
  ChevronRight,
  ShieldCheck,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/jacData';

export type SectionId = 
  | 'inicio' 
  | 'nosotros' 
  | 'proyectos' 
  | 'servicios' 
  | 'beneficiarios' 
  | 'documentos' 
  | 'historia' 
  | 'mapa';

interface AppLayoutProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  onOpenSolarModal: () => void;
  onOpenDocModal: (docId: string) => void;
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  activeSection,
  onSelectSection,
  onOpenSolarModal,
  onOpenDocModal,
  children
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections: { id: SectionId; label: string; num: string; icon: React.ElementType }[] = [
    { id: 'inicio', label: 'INICIO / RESUMEN', num: '01', icon: Home },
    { id: 'nosotros', label: 'INSTITUCIONAL & LEGAL', num: '02', icon: Building2 },
    { id: 'proyectos', label: 'PLAN DE ACCIÓN 2024-2028', num: '03', icon: Target },
    { id: 'servicios', label: 'TRANSICIÓN & COLOMBIA SOLAR', num: '04', icon: Zap },
    { id: 'beneficiarios', label: 'REGISTRO DE AFILIADOS', num: '05', icon: UserCheck },
    { id: 'documentos', label: 'EXPEDIENTES & ESTATUTOS', num: '06', icon: FileText },
    { id: 'historia', label: 'CRONISTA & HISTORIA', num: '07', icon: History },
    { id: 'mapa', label: 'JURISDICCIÓN & MAPA', num: '08', icon: MapPin },
  ];

  const handleNavClick = (id: SectionId) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
    // Smooth scroll to top of content area
    const contentEl = document.getElementById('main-content-scroll');
    if (contentEl) {
      contentEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#111113] text-[#f8f7f4] font-inter select-none">
      
      {/* 1. Left Rail (80px on desktop) */}
      <aside className="hidden lg:flex w-20 flex-shrink-0 flex-col items-center py-5 bg-[#000000] border-r border-[#f8f7f4]/10 z-30 justify-between">
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Main Logo Icon */}
          <button 
            onClick={() => handleNavClick('inicio')}
            className="w-12 h-12 rounded-xl bg-[#18181a] border border-[#f8f7f4]/15 flex items-center justify-center p-1.5 hover:border-[#FFD700] transition-colors cursor-pointer group shadow-md"
            title="JAC Barrio Nuevo Achí"
          >
            <img 
              src="/nuevo simple.png" 
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== '/logo_jac.svg') target.src = '/logo_jac.svg';
              }}
              alt="JAC Logo" 
              className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
            />
          </button>

          <div className="w-8 h-px bg-[#f8f7f4]/10" />

          {/* Quick rail action icons */}
          <nav className="flex flex-col gap-2.5">
            {sections.slice(0, 5).map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleNavClick(sec.id)}
                  title={sec.label}
                  className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all cursor-pointer border ${
                    isActive 
                      ? 'bg-[#FFD700] text-black border-[#FFD700] shadow-md font-bold' 
                      : 'bg-[#18181a] text-[#f8f7f4]/60 border-[#f8f7f4]/10 hover:text-white hover:border-[#FFD700]/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Rail Footer Social & Info */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={INSTITUTIONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram @jacnuevoachi"
            className="w-10 h-10 rounded-lg bg-[#18181a] border border-[#f8f7f4]/15 flex items-center justify-center text-pink-400 hover:border-[#FFD700] hover:text-[#FFD700] transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <div className="text-[9px] font-geist-mono text-[#f8f7f4]/40 font-bold uppercase tracking-wider text-center">
            2026
          </div>
        </div>
      </aside>

      {/* 2. Middle Pane (Sidebar Directory - 300px on desktop) */}
      <aside className="hidden md:flex w-72 lg:w-80 flex-shrink-0 flex-col bg-[#18181a] border-r border-[#f8f7f4]/10 p-5 overflow-y-auto z-20">
        
        {/* Pane Title */}
        <div className="mb-6">
          <div className="text-[10px] font-geist-mono uppercase tracking-[0.2em] text-[#FFD700] font-semibold mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008000] animate-pulse"></span>
            PORTAL COMUNITARIO
          </div>
          <h2 className="font-oswald text-xl uppercase tracking-wider text-[#f8f7f4] font-bold">
            JAC BARRIO NUEVO ACHÍ
          </h2>
          <p className="text-xs text-[#f8f7f4]/60 mt-0.5 font-geist-mono">
            NIT {INSTITUTIONAL_INFO.nit} • RUC {INSTITUTIONAL_INFO.ruc}
          </p>
        </div>

        {/* Directory / Sections Nav List */}
        <div className="text-[11px] font-oswald uppercase tracking-widest text-[#f8f7f4]/40 mb-2 px-1">
          Directorio de Secciones
        </div>
        
        <ul className="space-y-1 font-inter">
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;
            return (
              <li key={sec.id}>
                <button
                  onClick={() => handleNavClick(sec.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-md border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                    isActive 
                      ? 'border-[#FFD700] text-[#FFD700] bg-[#FFD700]/10 font-bold shadow-xs' 
                      : 'border-transparent text-[#f8f7f4]/65 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-[#FFD700]' : 'text-[#f8f7f4]/40'}`} />
                    <span className="truncate">{sec.label}</span>
                  </div>
                  <span className="font-geist-mono text-[11px] opacity-50 ml-2">
                    {sec.num}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Status Callout Card */}
        <div className="mt-6 p-4 rounded-xl bg-[#008000]/10 border-l-2 border-[#008000] border-t border-r border-b border-[#008000]/20 space-y-2">
          <div className="font-geist-mono text-[10px] text-[#008000] font-bold tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ESTADO: VIGENTE 2024-2028</span>
          </div>
          <div className="text-[11px] text-[#f8f7f4]/80 leading-relaxed">
            Resolución N° 410 del 31-Jul-2024. Sujetos de especial protección constitucional y víctimas Ley 1448 de 2011.
          </div>
          <div className="pt-2 border-t border-[#008000]/20 flex items-center justify-between text-[10px] font-geist-mono text-[#f8f7f4]/50">
            <span>706 HOGARES</span>
            <span>98 AFILIADOS</span>
          </div>
        </div>

        {/* Direct Contact Card */}
        <div className="mt-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] space-y-1.5">
          <div className="text-[10px] font-geist-mono uppercase text-[#FFD700]/80">Atención Comunal</div>
          <a href="tel:3207645119" className="flex items-center gap-2 text-[#f8f7f4]/80 hover:text-white">
            <Phone className="w-3.5 h-3.5 text-[#008000]" />
            <span className="font-mono">{INSTITUTIONAL_INFO.phoneMain}</span>
          </a>
          <a href={`mailto:${INSTITUTIONAL_INFO.email}`} className="flex items-center gap-2 text-[#f8f7f4]/80 hover:text-white truncate">
            <Mail className="w-3.5 h-3.5 text-[#FFD700]" />
            <span className="truncate">{INSTITUTIONAL_INFO.email}</span>
          </a>
          <a 
            href={INSTITUTIONAL_INFO.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>{INSTITUTIONAL_INFO.instagram}</span>
          </a>
        </div>

        {/* Quick Action Buttons in sidebar */}
        <div className="mt-auto pt-6 flex flex-col gap-2">
          <button
            onClick={onOpenSolarModal}
            className="w-full py-2.5 px-3 rounded bg-[#FFD700] hover:bg-white text-black font-oswald font-bold text-xs uppercase tracking-wider transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <SunMedium className="w-4 h-4 text-black" />
            <span>Colombia Solar</span>
          </button>
          <button
            onClick={() => handleNavClick('beneficiarios')}
            className="w-full py-2.5 px-3 rounded bg-transparent hover:bg-white/10 text-white font-oswald font-bold text-xs uppercase tracking-wider border border-white/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <UserCheck className="w-4 h-4 text-[#008000]" />
            <span>Censo & Afiliación</span>
          </button>
        </div>

      </aside>

      {/* 3. Main Content Stage */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative overflow-hidden bg-[#111113]">
        
        {/* Mobile Top Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#000000] border-b border-[#f8f7f4]/10 z-40">
          <div className="flex items-center gap-2.5">
            <img 
              src="/nuevo simple.png" 
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== '/logo_jac.svg') target.src = '/logo_jac.svg';
              }}
              alt="JAC" 
              className="w-8 h-8 rounded-full border border-[#FFD700] p-0.5 object-contain"
            />
            <div>
              <span className="font-oswald text-sm font-bold tracking-wide uppercase text-white block leading-tight">
                JAC BARRIO NUEVO ACHÍ
              </span>
              <span className="text-[10px] font-geist-mono text-[#FFD700]">
                Achí, Bolívar • Res. 410
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={INSTITUTIONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-white/10 text-pink-400"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#18181a] border border-[#f8f7f4]/15 text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-14 inset-x-0 bg-[#18181a] border-b border-[#f8f7f4]/15 p-4 z-50 shadow-2xl space-y-2 animate-in slide-in-from-top-2">
            <div className="text-[10px] font-geist-mono text-[#FFD700] uppercase mb-2">
              Secciones del Portal
            </div>
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleNavClick(sec.id)}
                className={`w-full text-left px-3 py-2 rounded text-xs font-semibold flex items-center justify-between ${
                  activeSection === sec.id 
                    ? 'bg-[#FFD700] text-black font-bold' 
                    : 'text-[#f8f7f4]/80 hover:bg-white/5'
                }`}
              >
                <span>{sec.label}</span>
                <span className="font-geist-mono text-[10px]">{sec.num}</span>
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSolarModal();
                }}
                className="flex-1 py-2 bg-[#FFD700] text-black font-oswald text-xs font-bold uppercase rounded text-center"
              >
                Colombia Solar
              </button>
              <a
                href={INSTITUTIONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded text-xs flex items-center gap-1 font-bold"
              >
                <Instagram className="w-4 h-4" />
                <span>@jacnuevoachi</span>
              </a>
            </div>
          </div>
        )}

        {/* Scrollable Content Container */}
        <main 
          id="main-content-scroll" 
          className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth focus:outline-none"
        >
          {children}

          {/* Persistent Variation 3 Architectural Footer */}
          <footer className="w-full bg-[#000000] border-t border-[#f8f7f4]/10 py-4 px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-geist-mono text-[#f8f7f4]/45">
            <div className="flex items-center gap-2">
              <span className="text-[#FFD700] font-bold">JAC BARRIO NUEVO ACHÍ</span>
              <span>•</span>
              <span>SITIO OFICIAL © 2026</span>
              <span>•</span>
              <a 
                href={INSTITUTIONAL_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-400 hover:text-white font-bold ml-1 inline-flex items-center gap-1"
              >
                <Instagram className="w-3 h-3" />
                <span>@jacnuevoachi</span>
              </a>
            </div>
            <div>
              ACHÍ, BOLÍVAR • RÍO CAUCA • MARGEN IZQUIERDA • LA MOJANA
            </div>
          </footer>
        </main>
      </div>

    </div>
  );
};
