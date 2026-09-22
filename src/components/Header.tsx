import React, { useState } from 'react';
import { JacLogo } from './JacLogo';
import { Menu, X, Phone, Mail, FileText, UserPlus, MapPin, SunMedium, ExternalLink, Instagram } from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/jacData';

interface HeaderProps {
  onOpenRegister: () => void;
  onOpenSolar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRegister, onOpenSolar }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Plan de Acción', href: '#proyectos' },
    { label: 'Transición & Gas', href: '#servicios' },
    { label: 'Beneficiarios', href: '#beneficiarios' },
    { label: 'Documentos', href: '#documentos' },
    { label: 'Historia', href: '#historia' },
    { label: 'Ubicación', href: '#mapa' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#003366] text-white shadow-lg border-b border-blue-900/40">
      {/* Top micro-bar with official IDs */}
      <div className="bg-[#002244] text-[11px] py-1 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-slate-300">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-semibold">REPÚBLICA DE COLOMBIA</span>
            <span>•</span>
            <span>Dpto de Bolívar, Municipio de Achí</span>
            <span>•</span>
            <span className="text-emerald-400 font-mono">RUT: {INSTITUTIONAL_INFO.nit}</span>
            <span>•</span>
            <span className="text-sky-300 font-mono">RUC: {INSTITUTIONAL_INFO.ruc}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={INSTITUTIONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 flex items-center gap-1 transition-colors text-amber-300 font-semibold"
              title="Instagram Oficial @jacnuevoachi"
            >
              <Instagram className="w-3 h-3 text-pink-400" />
              <span>{INSTITUTIONAL_INFO.instagram}</span>
            </a>
            <a
              href={`mailto:${INSTITUTIONAL_INFO.email}`}
              className="hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              {INSTITUTIONAL_INFO.email}
            </a>
            <a
              href={`tel:3207645119`}
              className="hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              {INSTITUTIONAL_INFO.phoneMain}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Logo and Brand Title */}
        <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
          <JacLogo size={52} />
          <div>
            <h1 className="text-base sm:text-lg font-extrabold tracking-tight text-white uppercase font-['Montserrat',sans-serif] leading-tight group-hover:text-amber-300 transition-colors">
              JAC BARRIO NUEVO ACHÍ
            </h1>
            <p className="text-xs text-amber-300 font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 inline text-emerald-400" />
              Achí, Bolívar • Colombia
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-100 hover:text-amber-300 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-amber-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Action CTA Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={onOpenSolar}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-amber-400 text-[#003366] hover:bg-amber-300 hover:scale-[1.02] active:scale-95 transition-all shadow-sm cursor-pointer"
            title="Convocatoria Colombia Solar"
          >
            <SunMedium className="w-3.5 h-3.5" />
            <span>Colombia Solar</span>
          </button>
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-[#008000] text-white hover:bg-green-700 hover:scale-[1.02] active:scale-95 transition-all shadow-sm border border-green-400/40 cursor-pointer"
            title="Formulario de Libro de Afiliados"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Actualizar Registro</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenRegister}
            className="p-1.5 rounded bg-[#008000] text-white text-xs font-bold md:hidden"
            aria-label="Registrarse"
          >
            <UserPlus className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Alternar Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#002244] border-t border-white/10 px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pb-2 border-b border-white/10">
            <div><strong>RUT:</strong> {INSTITUTIONAL_INFO.nit}</div>
            <div><strong>RUC:</strong> {INSTITUTIONAL_INFO.ruc}</div>
          </div>
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded text-slate-100 hover:bg-white/10 hover:text-amber-300 transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSolar();
              }}
              className="w-full py-2.5 rounded text-center text-xs font-bold bg-amber-400 text-[#003366] flex items-center justify-center gap-2"
            >
              <SunMedium className="w-4 h-4" />
              Convocatoria Colombia Solar
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-2.5 rounded text-center text-xs font-bold bg-[#008000] text-white flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              Actualizar Registro de Afiliados
            </button>
            <a
              href={INSTITUTIONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded text-center text-xs font-bold bg-white/10 text-white hover:bg-white/20 flex items-center justify-center gap-2 border border-white/20"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram: {INSTITUTIONAL_INFO.instagram}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
