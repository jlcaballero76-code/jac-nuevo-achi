import React, { useState } from 'react';
import { 
  Target, 
  Users, 
  Trees, 
  Flame, 
  SunMedium, 
  Calendar, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldAlert, 
  Award, 
  FileText, 
  ChevronRight 
} from 'lucide-react';
import { STRATEGIC_EJES, CHRONOGRAM_YEARS } from '../data/jacData';

interface ActionPlanSectionProps {
  onOpenSolar: () => void;
  onOpenDoc: (docId: string) => void;
}

export const ActionPlanSection: React.FC<ActionPlanSectionProps> = ({ onOpenSolar, onOpenDoc }) => {
  const [selectedEje, setSelectedEje] = useState<number | null>(null);

  const getEjeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return Users;
      case 'Trees': return Trees;
      case 'Flame': return Flame;
      case 'SunMedium': return SunMedium;
      default: return Target;
    }
  };

  return (
    <section id="proyectos" className="p-6 sm:p-10 border-b border-[#f8f7f4]/10 bg-[#111113] scroll-mt-6">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#f8f7f4]/10">
        <div>
          <div className="font-geist-mono text-[10px] uppercase tracking-widest text-[#FFD700]">
            SECCIÓN 03 • HOJA DE RUTA CUATRIENAL
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f8f7f4]">
            Plan de Acción Comunal (2024 - 2028)
          </h2>
          <p className="text-xs text-[#f8f7f4]/60 mt-1 max-w-2xl font-inter">
            Hoja de ruta comunitaria para el desarrollo integral de las 706 familias del Barrio Nuevo Achí
          </p>
        </div>

        <button
          onClick={() => onOpenDoc('plan-cuatrienal')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-[#FFD700] text-xs font-oswald uppercase tracking-wider border border-[#f8f7f4]/20 transition-colors cursor-pointer self-start sm:self-auto"
        >
          <FileText className="w-4 h-4" />
          <span>Ver PDF del Plan Completo</span>
        </button>
      </div>

      {/* Objetivo General Box */}
      <div className="bg-[#18181a] p-5 sm:p-6 rounded-xl border border-[#f8f7f4]/10 mb-8">
        <div className="font-geist-mono text-[10px] text-[#008000] uppercase tracking-wider mb-1 font-bold">
          OBJETIVO GENERAL COMUNITARIO
        </div>
        <p className="text-xs sm:text-sm text-[#f8f7f4]/85 leading-relaxed font-inter">
          Fortalecer el desarrollo social, ambiental y de infraestructura del <strong className="text-white">Barrio Nuevo Achí</strong> mediante la gestión articulada de proyectos comunitarios sostenibles, garantizando el acceso equitativo a servicios públicos, espacios recreativos y soluciones energéticas limpias. Impacto directo en aproximadamente <strong className="text-[#FFD700]">706 hogares</strong>.
        </p>
      </div>

      {/* 4 Ejes Estratégicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {STRATEGIC_EJES.map((eje) => {
          const Icon = getEjeIcon(eje.iconName);
          const isSelected = selectedEje === eje.id;
          return (
            <div
              key={eje.id}
              className={`bg-[#18181a] rounded-xl p-5 border transition-all cursor-pointer ${
                isSelected 
                  ? 'border-[#FFD700] bg-[#18181a] shadow-lg' 
                  : 'border-[#f8f7f4]/10 hover:border-[#FFD700]/50'
              }`}
              onClick={() => setSelectedEje(isSelected ? null : eje.id)}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 text-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-geist-mono text-[10px] text-[#008000] uppercase font-bold">
                      EJE {eje.id} • {eje.targetCount}
                    </span>
                    <h3 className="font-oswald text-base font-bold uppercase tracking-wide text-white">
                      {eje.name}
                    </h3>
                  </div>
                </div>
                <span className="font-geist-mono text-xs text-[#FFD700]">
                  {isSelected ? '▲' : '▼'}
                </span>
              </div>

              <p className="text-xs text-[#f8f7f4]/70 mb-3 font-inter leading-relaxed">
                {eje.objective}
              </p>

              {/* Projects */}
              <div className="space-y-1.5 pt-3 border-t border-[#f8f7f4]/10">
                <div className="font-geist-mono text-[10px] uppercase text-[#f8f7f4]/40 mb-1">
                  Proyectos & Programas Prioritarios:
                </div>
                {eje.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-[#f8f7f4]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008000] flex-shrink-0 mt-0.5" />
                    <span>{proj}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Cronograma Cuatrienal de Inversión */}
      <div>
        <div className="font-geist-mono text-[10px] text-[#FFD700] uppercase tracking-wider mb-1">
          CRONOGRAMA DE EJECUCIÓN CUATRIENAL
        </div>
        <h3 className="font-oswald text-lg font-bold uppercase tracking-wider text-white mb-4">
          Metas Cuatrienales por Año de Gestión
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CHRONOGRAM_YEARS.map((chrono, idx) => (
            <div key={idx} className="bg-[#18181a] p-4 rounded-xl border border-[#f8f7f4]/10 space-y-2">
              <div className="flex items-center justify-between border-b border-[#f8f7f4]/10 pb-2">
                <span className="font-oswald text-xl font-bold text-[#FFD700]">
                  {chrono.year}
                </span>
                <span className="font-geist-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#008000] font-bold">
                  {chrono.status}
                </span>
              </div>
              <p className="text-xs text-white font-medium">
                {chrono.focus}
              </p>
              <ul className="space-y-1 text-[11px] text-[#f8f7f4]/65">
                {chrono.activities.map((act, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-1.5">
                    <span className="text-[#FFD700]">•</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
