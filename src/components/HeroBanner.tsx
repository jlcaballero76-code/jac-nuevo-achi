import React from 'react';
import { 
  UserPlus, 
  SunMedium, 
  FileText, 
  CheckCircle2, 
  HeartHandshake, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  ArrowRight,
  ExternalLink,
  Instagram
} from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/jacData';

interface HeroBannerProps {
  onOpenSolar: () => void;
  onOpenRegister: () => void;
  onOpenDoc: (docId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenSolar, onOpenRegister, onOpenDoc }) => {
  return (
    <div className="w-full bg-[#111113] text-[#f8f7f4]" id="inicio">
      
      {/* 1. Header Section in Variation 3 style */}
      <div className="p-6 sm:p-10 md:p-12 border-b border-[#f8f7f4]/10 bg-gradient-to-r from-black/80 via-[#18181a]/50 to-transparent relative overflow-hidden">
        
        {/* Subtle background photo overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="/foto principal.png"
            alt="Barrio Nuevo Achí"
            className="w-full h-full object-cover object-center filter grayscale mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111113] via-[#111113]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl">
          {/* Top Metadata Tag */}
          <div className="font-geist-mono text-[11px] uppercase tracking-[0.25em] text-[#FFD700] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#008000] inline-block animate-pulse"></span>
            <span>REPÚBLICA DE COLOMBIA / DPTO BOLÍVAR / MUNICIPIO DE ACHÍ</span>
          </div>

          {/* Display Headline */}
          <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#f8f7f4] leading-[0.95] mb-4">
            JAC BARRIO <span className="text-[#FFD700]">NUEVO ACHÍ</span>
          </h1>

          <p className="text-sm sm:text-base text-[#f8f7f4]/75 max-w-3xl leading-relaxed mb-6 font-inter font-normal">
            Plataforma de gestión territorial y comunitaria. Representación formal ante la Alcaldía de Achí para el desarrollo integral de las <strong className="text-white">706 familias</strong> residentes, impulsando el acceso a servicios públicos esenciales, gas natural, infraestructura social y la transición energética con <strong className="text-[#FFD700]">Colombia Solar</strong>.
          </p>

          {/* Action Buttons in Variation 3 brutalist style */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenSolar}
              className="bg-[#FFD700] hover:bg-white text-black px-5 py-3 font-oswald font-bold text-xs uppercase tracking-wider transition-all transform active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <SunMedium className="w-4 h-4 text-black" />
              <span>COLOMBIA SOLAR</span>
            </button>

            <button
              onClick={() => onOpenDoc('informe-tecnico')}
              className="bg-transparent hover:bg-white/10 text-white border border-[#f8f7f4]/30 px-5 py-3 font-oswald font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#FFD700]" />
              <span>INFORME TÉCNICO 2026</span>
            </button>

            <button
              onClick={onOpenRegister}
              className="bg-[#008000] hover:bg-green-600 text-white px-5 py-3 font-oswald font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>ACTUALIZAR REGISTRO</span>
            </button>
          </div>
        </div>

      </div>

      {/* 2. Variation 3 Data Grid (Exact 6-cell layout) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#f8f7f4]/10 border-b border-[#f8f7f4]/10">
        
        <div className="bg-[#111113] p-4 sm:p-5">
          <div className="font-geist-mono text-[10px] text-[#f8f7f4]/50 uppercase tracking-wider mb-1">
            Afiliados Activos
          </div>
          <div className="font-oswald text-2xl font-bold text-[#f8f7f4]">
            98 MIEMBROS
          </div>
          <div className="text-[10px] text-[#008000] font-geist-mono mt-0.5">
            Libro Oficial Res. 768
          </div>
        </div>

        <div className="bg-[#111113] p-4 sm:p-5">
          <div className="font-geist-mono text-[10px] text-[#f8f7f4]/50 uppercase tracking-wider mb-1">
            RUT / NIT
          </div>
          <div className="font-oswald text-2xl font-bold text-[#FFD700]">
            901784749-1
          </div>
          <div className="text-[10px] text-[#f8f7f4]/50 font-geist-mono mt-0.5">
            RUC: 5-5009-43192
          </div>
        </div>

        <div className="bg-[#111113] p-4 sm:p-5">
          <div className="font-geist-mono text-[10px] text-[#f8f7f4]/50 uppercase tracking-wider mb-1">
            Jurisdicción
          </div>
          <div className="font-oswald text-2xl font-bold text-[#f8f7f4]">
            LA MOJANA
          </div>
          <div className="text-[10px] text-[#f8f7f4]/50 font-geist-mono mt-0.5">
            Margen Río Cauca
          </div>
        </div>

        <div className="bg-[#111113] p-4 sm:p-5">
          <div className="font-geist-mono text-[10px] text-[#f8f7f4]/50 uppercase tracking-wider mb-1">
            Presidente
          </div>
          <div className="font-oswald text-xl sm:text-2xl font-bold text-[#f8f7f4] truncate" title="Jorge Caballero">
            JORGE CABALLERO
          </div>
          <div className="text-[10px] text-[#f8f7f4]/50 font-geist-mono mt-0.5">
            Rep. Legal Principal
          </div>
        </div>

        <div className="bg-[#111113] p-4 sm:p-5">
          <div className="font-geist-mono text-[10px] text-[#f8f7f4]/50 uppercase tracking-wider mb-1">
            Personería
          </div>
          <div className="font-oswald text-2xl font-bold text-[#008000]">
            RES. 410 / 2024
          </div>
          <div className="text-[10px] text-[#f8f7f4]/50 font-geist-mono mt-0.5">
            Sec. de Gobierno Achí
          </div>
        </div>

        <div className="bg-[#111113] p-4 sm:p-5">
          <div className="font-geist-mono text-[10px] text-[#f8f7f4]/50 uppercase tracking-wider mb-1">
            Cobertura Plan
          </div>
          <div className="font-oswald text-2xl font-bold text-[#FFD700]">
            706 HOGARES
          </div>
          <div className="text-[10px] text-[#008000] font-geist-mono mt-0.5">
            Urbanización Nuevo Achí
          </div>
        </div>

      </div>

      {/* 3. Community Visual Feature Strip (Barrio Photo + Emblem Spotlight) */}
      <div className="p-6 sm:p-8 bg-[#18181a]/60 border-b border-[#f8f7f4]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Photo Showcase */}
          <div className="lg:col-span-8 relative rounded-xl overflow-hidden border border-[#f8f7f4]/15 group">
            <img
              src="/foto principal.png"
              alt="Urbanización Barrio Nuevo Achí"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-end">
              <div className="font-geist-mono text-[11px] text-[#FFD700] uppercase tracking-wider mb-1">
                Vivienda Digna y Segura • Terreno No Inundable
              </div>
              <h3 className="font-oswald text-2xl font-bold text-white uppercase">
                Urbanización Barrio Nuevo Achí (Bolívar)
              </h3>
              <p className="text-xs text-white/80 max-w-xl mt-1">
                Más de 500 viviendas entregadas por el Fondo Adaptación a familias reasentadas con enfoque diferencial en el marco de la Ley 1448 de 2011.
              </p>
            </div>
          </div>

          {/* Emblem & Social Sidebar Spotlight */}
          <div className="lg:col-span-4 bg-[#18181a] p-5 rounded-xl border border-[#f8f7f4]/10 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#f8f7f4]/10">
              <img
                src="/nuevo simple.png"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/logo_jac.svg') target.src = '/logo_jac.svg';
                }}
                alt="Emblema JAC"
                className="w-14 h-14 rounded-full bg-white p-1 border-2 border-[#FFD700] object-contain flex-shrink-0"
              />
              <div>
                <span className="font-geist-mono text-[10px] text-[#FFD700] block uppercase tracking-wider">
                  Organismo Oficial
                </span>
                <h4 className="font-oswald text-base uppercase font-bold text-white leading-tight">
                  JAC Barrio Nuevo Achí
                </h4>
                <p className="text-[11px] text-[#f8f7f4]/60">
                  Personería Jurídica Reconocida
                </p>
              </div>
            </div>

            {/* Official Instagram Box */}
            <div className="p-3.5 rounded-lg bg-gradient-to-r from-purple-950/40 via-pink-950/40 to-amber-950/30 border border-pink-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700 flex items-center justify-center text-white">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-geist-mono uppercase text-[#f8f7f4]/60 block">
                    Canal Oficial
                  </span>
                  <span className="font-oswald text-sm font-bold text-white tracking-wide">
                    @jacnuevoachi
                  </span>
                </div>
              </div>
              <a
                href={INSTITUTIONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-white text-black font-oswald text-xs font-bold uppercase hover:bg-[#FFD700] transition-colors"
              >
                Seguir
              </a>
            </div>

            <div className="text-[11px] text-[#f8f7f4]/70 leading-relaxed font-inter">
              Convocatorias a asambleas generales ordinarias y extraordinarias, mesas de trabajo y proyectos comunitarios de servicios públicos.
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
