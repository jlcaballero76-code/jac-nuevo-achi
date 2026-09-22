import React from 'react';
import { UserPlus, SunMedium, FileText, CheckCircle2, HeartHandshake, Users, ShieldCheck, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/jacData';

interface HeroBannerProps {
  onOpenSolar: () => void;
  onOpenRegister: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenSolar, onOpenRegister }) => {
  const pillars = [
    { label: "Participación Activa", icon: Users },
    { label: "Unión Comunitaria", icon: HeartHandshake },
    { label: "Solidaridad y Apoyo", icon: ShieldCheck },
    { label: "Desarrollo Local", icon: Sparkles },
    { label: "Bienestar para Todos", icon: CheckCircle2 }
  ];

  return (
    <div className="relative bg-[#003366] text-white overflow-hidden shadow-xl" id="inicio">
      {/* Background Graphic Elements & Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/foto principal.png"
          alt="Barrio Nuevo Achí Bolívar - Portada Principal"
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-[#003366]/90 to-[#002244]/85" />
      </div>

      {/* Flag Color Accent Ribbon on top (Colombia: Yellow, Blue, Red) */}
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/2 bg-[#FFD700]" />
        <div className="h-full w-1/4 bg-[#003366]" />
        <div className="h-full w-1/4 bg-[#CE1126]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Official Message & CTA */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-amber-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SITIO WEB OFICIAL • GESTIÓN COMUNITARIA 2024 - 2028
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Montserrat',sans-serif] leading-tight">
              JUNTA DE ACCIÓN COMUNAL <br />
              <span className="text-amber-400">BARRIO NUEVO ACHÍ</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-2xl mx-auto lg:mx-0">
              “Unidos construimos comunidad, participación y bienestar para todos.”
            </p>

            <p className="text-sm text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Representamos y gestionamos el desarrollo integral de las más de <strong className="text-white">706 familias</strong> de la Urbanización Nuevo Achí, impulsando el acceso a servicios públicos esenciales, gas natural, infraestructura social y la transición energética con <strong className="text-amber-300">Colombia Solar</strong>.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#beneficiarios"
                onClick={onOpenRegister}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-sm bg-[#008000] text-white hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all border border-green-300/40 cursor-pointer"
              >
                <UserPlus className="w-4 h-4 text-white" />
                <span>Actualizar Registro de Afiliados</span>
              </a>

              <button
                onClick={onOpenSolar}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-sm bg-amber-400 text-[#003366] hover:bg-amber-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <SunMedium className="w-4 h-4 text-[#003366]" />
                <span>Convocatoria Colombia Solar</span>
              </button>

              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm bg-white/10 text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all border border-white/20"
              >
                <FileText className="w-4 h-4 text-sky-300" />
                <span>Plan de Acción</span>
              </a>
            </div>

            {/* Location tag */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-300 pt-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Achí, Bolívar • Depresión Momposina / La Mojana • Río Cauca</span>
            </div>
          </div>

          {/* Right Column: Visual Composite Card & Community Highlights */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-2xl text-slate-100">
              
              {/* Emblem and Official Resolution Header */}
              <div className="flex items-center gap-4 pb-4 border-b border-white/15">
                <img
                  src="/nuevo simple.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/logo_jac.svg') target.src = '/logo_jac.svg';
                  }}
                  alt="Emblema Oficial JAC Nuevo Achí"
                  className="w-16 h-16 rounded-full bg-white p-1 border-2 border-amber-400 shadow-md flex-shrink-0 object-contain"
                />
                <div>
                  <h3 className="font-extrabold text-sm uppercase tracking-wide text-white">
                    Organismo Comunal Reconocido
                  </h3>
                  <p className="text-xs text-amber-300 font-medium">
                    Personería Jurídica Res. 768 / 2023 & 410 / 2024
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Alcaldía Municipal de Achí • Secretaría de Gobierno
                  </p>
                </div>
              </div>

              {/* Photo preview of the community / Barrio Nuevo Achí */}
              <div className="mt-3.5 rounded-xl overflow-hidden border border-white/20 relative shadow-inner">
                <img
                  src="/foto principal.png"
                  alt="Vista del Barrio Nuevo Achí"
                  className="w-full h-36 object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 flex items-center justify-between text-[11px]">
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>
                    Urbanización Barrio Nuevo Achí
                  </span>
                  <span className="text-amber-300 font-medium">Achí, Bolívar</span>
                </div>
              </div>

              {/* Key Indicators Grid */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <span className="text-2xl font-black text-amber-400 font-['Montserrat',sans-serif]">
                    706+
                  </span>
                  <p className="text-xs font-medium text-slate-200 mt-0.5">
                    Familias en el censo territorial
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <span className="text-2xl font-black text-emerald-400 font-['Montserrat',sans-serif]">
                    98
                  </span>
                  <p className="text-xs font-medium text-slate-200 mt-0.5">
                    Afiliados activos en Libro Oficial
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <span className="text-2xl font-black text-sky-400 font-['Montserrat',sans-serif]">
                    100%
                  </span>
                  <p className="text-xs font-medium text-slate-200 mt-0.5">
                    Meta de cobertura acueducto y gas
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <span className="text-2xl font-black text-amber-300 font-['Montserrat',sans-serif]">
                    70%
                  </span>
                  <p className="text-xs font-medium text-slate-200 mt-0.5">
                    Meta de energía solar fotovoltaica
                  </p>
                </div>
              </div>

              {/* Differential Focus Note */}
              <div className="bg-amber-400/15 border-l-4 border-amber-400 p-3 rounded-r-lg text-xs leading-relaxed text-amber-100">
                <strong className="text-amber-300 font-bold block mb-1">
                  Enfoque Diferencial Ley 1448 de 2011:
                </strong>
                Población sujeta de especial protección constitucional y víctimas del conflicto armado con derecho prioritario a vivienda digna y servicios esenciales.
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>RUT: <strong className="text-white font-mono">{INSTITUTIONAL_INFO.nit}</strong></span>
                <span>RUC: <strong className="text-white font-mono">{INSTITUTIONAL_INFO.ruc}</strong></span>
              </div>
            </div>
          </div>

        </div>

        {/* Strategic 5 Pillars Strip */}
        <div className="mt-10 pt-6 border-t border-white/15">
          <p className="text-xs uppercase tracking-widest text-center text-amber-300/90 font-bold mb-4 font-['Montserrat',sans-serif]">
            Pilares Estratégicos de Nuestra Gestión Comunal
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-3 flex items-center gap-2.5 transition-all text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#008000]/80 flex items-center justify-center text-white flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-white leading-tight">
                    {pillar.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Slogan Banner Bottom Bar */}
      <div className="bg-[#002244] py-3 px-4 border-t border-white/10 text-center">
        <p className="text-xs sm:text-sm text-slate-300 font-medium flex items-center justify-center gap-2 flex-wrap">
          <span className="text-amber-400">☀️</span>
          <span>Trabajamos por un Achí más unido, solidario y próspero</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-emerald-400">Achí, Bolívar: Nuestra tierra, nuestro orgullo</span>
        </p>
      </div>
    </div>
  );
};
