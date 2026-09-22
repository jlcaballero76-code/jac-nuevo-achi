import React from 'react';
import { JacLogo } from './JacLogo';
import { Phone, Mail, MapPin, Facebook, Instagram, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/jacData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#002244] text-slate-300 border-t border-blue-900 mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 pb-8 border-b border-white/10">
          
          {/* Col 1: Identity */}
          <div className="space-y-3">
            <JacLogo size={56} showText={true} />
            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              Organismo comunal de primer grado constituido legalmente en el Municipio de Achí (Bolívar). Comprometidos con el desarrollo integral, la paz territorial y la dignidad de nuestras 706 familias.
            </p>
            <div className="text-[11px] text-amber-300 font-mono">
              NIT: {INSTITUTIONAL_INFO.nit} • RUC: {INSTITUTIONAL_INFO.ruc}
            </div>
          </div>

          {/* Col 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-3 font-['Montserrat',sans-serif]">
              Enlaces Institucionales
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-amber-300 transition-colors">Inicio del Portal</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-amber-300 transition-colors">Información Legal y Dignatarios</a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-amber-300 transition-colors">Plan de Acción Cuatrienal</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-amber-300 transition-colors">Colombia Solar & Gas Natural</a>
              </li>
              <li>
                <a href="#beneficiarios" className="hover:text-amber-300 transition-colors">Libro Digital de Afiliados</a>
              </li>
              <li>
                <a href="#documentos" className="hover:text-amber-300 transition-colors">Documentos y Estatutos</a>
              </li>
              <li>
                <a href="#historia" className="hover:text-amber-300 transition-colors">Reseña Histórica de Achí</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacto Directo */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-3 font-['Montserrat',sans-serif]">
              Contacto & Sede
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{INSTITUTIONAL_INFO.address}, Barrio Nuevo Achí, Bolívar</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:3207645119" className="hover:text-white font-bold">{INSTITUTIONAL_INFO.phoneMain}</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{INSTITUTIONAL_INFO.phoneSecondary}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${INSTITUTIONAL_INFO.email}`} className="hover:text-white truncate">
                  {INSTITUTIONAL_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Col 4: Redes Sociales y Legal */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-3 font-['Montserrat',sans-serif]">
              Participación y Redes
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Síganos en nuestros canales oficiales para enterarse de las convocatorias a asambleas, brigadas y proyectos de la comunidad.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={INSTITUTIONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-90 text-white text-xs font-semibold shadow transition-opacity"
                aria-label="Instagram oficial @jacnuevoachi"
              >
                <Instagram className="w-4 h-4" />
                <span>@jacnuevoachi</span>
              </a>
              <a
                href="https://wa.me/573207645119"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp JAC Nuevo Achí"
                title="WhatsApp Institucional"
              >
                <span className="font-bold text-xs">WA</span>
              </a>
            </div>

            <div className="mt-3 text-[11px] text-amber-300/90 flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram: <strong className="text-white">@jacnuevoachi</strong></span>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Volver al inicio</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} <strong>Junta de Acción Comunal Barrio Nuevo Achí</strong>. Municipio de Achí, Bolívar, República de Colombia.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ley 2166 de 2021 • Ley 1448 de 2011 • Ley 1581 de 2012</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
