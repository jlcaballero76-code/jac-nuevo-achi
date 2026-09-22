import React from 'react';
import { 
  SunMedium, 
  Flame, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  HeartHandshake, 
  Leaf, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  AlertCircle 
} from 'lucide-react';

interface SolarAndServicesSectionProps {
  onOpenDoc: (docId: string) => void;
  onOpenSolarModal: () => void;
}

export const SolarAndServicesSection: React.FC<SolarAndServicesSectionProps> = ({
  onOpenDoc,
  onOpenSolarModal
}) => {
  return (
    <section id="servicios" className="p-6 sm:p-10 border-b border-[#f8f7f4]/10 bg-[#111113] scroll-mt-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#f8f7f4]/10">
        <div>
          <div className="font-geist-mono text-[10px] uppercase tracking-widest text-[#FFD700]">
            SECCIÓN 04 • ENERGÍA & SERVICIOS ESENCIALES
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f8f7f4]">
            Transición Energética Comunal & Gas Domiciliario
          </h2>
          <p className="text-xs text-[#f8f7f4]/60 mt-1 font-inter">
            Convocatoria nacional Colombia Solar e informe técnico de intervención comunal (Marzo 2026)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenDoc('informe-tecnico')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-[#008000] text-xs font-oswald uppercase tracking-wider border border-[#f8f7f4]/20 transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Informe Técnico 2026</span>
          </button>
        </div>
      </div>

      {/* Main Callout Banner - Colombia Solar */}
      <div className="bg-[#18181a] p-6 sm:p-8 rounded-xl border border-[#008000]/40 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#008000]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#008000]/20 text-[#008000] text-[11px] font-geist-mono uppercase font-bold border border-[#008000]/30">
            <Zap className="w-3.5 h-3.5" />
            <span>Convocatoria Abierta MinMinas • Comunidades Energéticas</span>
          </div>

          <h3 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
            Programa “Colombia Solar” en Barrio Nuevo Achí
          </h3>

          <p className="text-xs sm:text-sm text-[#f8f7f4]/80 leading-relaxed font-inter">
            Invitamos a todos los afiliados y residentes del <strong>Barrio Nuevo Achí</strong> a participar en la postulación oficial de nuestra comunidad ante el Ministerio de Minas y Energía. La JAC lidera la formulación de una <strong>Granja Solar Fotovoltaica Comunitaria</strong> para garantizar que más de 700 familias accedan a energía eléctrica continua, limpia y a costos justos en la Mojana bolivarense.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenSolarModal}
              className="bg-[#FFD700] hover:bg-white text-black px-5 py-3 font-oswald font-bold text-xs uppercase tracking-wider transition-all transform active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <SunMedium className="w-4 h-4 text-black" />
              <span>Ver Requisitos & Postulación</span>
            </button>

            <button
              onClick={() => onOpenDoc('informe-tecnico')}
              className="bg-transparent hover:bg-white/10 text-white border border-[#f8f7f4]/30 px-5 py-3 font-oswald font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#008000]" />
              <span>Ver Documento Técnico PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Two columns: Solar vs Gas Domiciliario */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Col 1: Energía Solar */}
        <div className="bg-[#18181a] p-6 rounded-xl border border-[#f8f7f4]/10 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#f8f7f4]/10">
            <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 text-[#FFD700] flex items-center justify-center">
              <SunMedium className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-geist-mono text-[#FFD700] uppercase font-bold">Comunidad Energética</span>
              <h4 className="font-oswald text-lg font-bold uppercase text-white">Granja Solar Fotovoltaica</h4>
            </div>
          </div>

          <ul className="space-y-2.5 text-xs text-[#f8f7f4]/75 font-inter">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#008000] flex-shrink-0 mt-0.5" />
              <span>Generación limpia descentralizada para reducir la tarifa eléctrica residencial.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#008000] flex-shrink-0 mt-0.5" />
              <span>Protección ante los apagones frecuentes del sistema interconectado regional.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#008000] flex-shrink-0 mt-0.5" />
              <span>Postulación respaldada por personería jurídica Res. 410 / 2024 de la JAC.</span>
            </li>
          </ul>
        </div>

        {/* Col 2: Gas Natural Domiciliario */}
        <div className="bg-[#18181a] p-6 rounded-xl border border-[#f8f7f4]/10 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#f8f7f4]/10">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-geist-mono text-orange-400 uppercase font-bold">Gestión Ante Alcaldía y Gobernación</span>
              <h4 className="font-oswald text-lg font-bold uppercase text-white">Gas Natural por Red</h4>
            </div>
          </div>

          <ul className="space-y-2.5 text-xs text-[#f8f7f4]/75 font-inter">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
              <span>Sustitución de cilindros GLP y leña para cuidar la salud respiratoria de las familias.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
              <span>Red domiciliaria planificada para los bloques y manzanas de las 706 viviendas.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
              <span>Ahorro mensual del 60% en el costo energético de cocina familiar.</span>
            </li>
          </ul>
        </div>

      </div>

    </section>
  );
};
