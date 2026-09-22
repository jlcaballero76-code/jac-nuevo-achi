import React, { useState } from 'react';
import { Target, Users, Trees, Flame, SunMedium, Calendar, CheckCircle2, ArrowUpRight, ShieldAlert, Award, FileText, ChevronRight } from 'lucide-react';
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
    <section id="proyectos" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-24">
      
      {/* Section Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-emerald-600 pb-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-50 text-[#008000] rounded-xl">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] font-['Montserrat',sans-serif]">
              Plan de Acción Cuatrienal (Proyectos a Gestionar)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Hoja de ruta comunitaria para el desarrollo integral de las 706 familias del Barrio Nuevo Achí
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenDoc('plan-cuatrienal')}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-[#003366] hover:bg-slate-200 transition-colors border border-slate-300 self-start md:self-auto cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5 text-[#003366]" />
          <span>Ver PDF del Plan Completo</span>
        </button>
      </div>

      {/* Objetivo General Box */}
      <div className="bg-gradient-to-r from-blue-50/70 via-slate-50 to-green-50/70 rounded-xl p-5 mb-8 border border-slate-200 text-slate-700 text-sm leading-relaxed">
        <p>
          <strong className="text-[#003366] font-['Montserrat',sans-serif] block text-base mb-1">
            Objetivo General Comunitario:
          </strong>
          Fortalecer el desarrollo social, ambiental y de infraestructura del <strong>Barrio Nuevo Achí</strong> mediante la gestión articulada de proyectos comunitarios sostenibles, garantizando el acceso equitativo a servicios públicos, espacios recreativos y soluciones energéticas limpias. Impacto esperado en aproximadamente <strong className="text-emerald-700">706 familias</strong>.
        </p>
      </div>

      {/* 4 Strategic Ejes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {STRATEGIC_EJES.map((eje) => {
          const Icon = getEjeIcon(eje.iconName);
          const isSelected = selectedEje === eje.id;

          return (
            <div
              key={eje.id}
              className={`rounded-xl p-5 border-t-4 ${eje.accentBorder} bg-[#f4f7f6] transition-all hover:shadow-md flex flex-col justify-between`}
            >
              <div>
                {/* Eje Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: eje.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-[#003366] font-['Montserrat',sans-serif]">
                      {eje.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-medium">
                  {eje.objective}
                </p>

                {/* Projects List */}
                <div className="mb-3">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Proyectos Clave:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {eje.projects.map((proj, i) => (
                      <li key={i} className="flex items-start gap-2 bg-white p-2 rounded border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-800">{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="text-xs text-slate-600 bg-white/70 p-2.5 rounded border border-slate-200/80 mb-4">
                  <span className="font-bold text-slate-800 block mb-1">Acciones de Gestión:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-600">
                    {eje.actions.map((act, i) => (
                      <li key={i}>{act}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Indicator Badge & Lead */}
              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#003366] text-white font-bold text-[11px]">
                  <Award className="w-3 h-3 text-amber-400" />
                  {eje.indicator}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {eje.leadCommission}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cronograma Cuatrienal */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-[#003366]" />
          <h3 className="text-lg font-bold text-[#003366] font-['Montserrat',sans-serif]">
            Cronograma General de Ejecución del Cuatrienio
          </h3>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#003366] text-white">
                <th className="py-3 px-4 font-bold w-24">Vigencia</th>
                <th className="py-3 px-4 font-bold w-32">Período</th>
                <th className="py-3 px-4 font-bold">Foco Estratégico y Actividades Principales</th>
                <th className="py-3 px-4 font-bold w-28 text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {CHRONOGRAM_YEARS.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-[#f4f7f6] hover:bg-slate-100'}>
                  <td className="py-3.5 px-4 font-black text-[#003366]">{row.year}</td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium">{row.period}</td>
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-slate-800 mb-1">{row.focus}</p>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {row.activities.map((act, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        row.status === 'Completado'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : row.status === 'En Ejecución'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300 animate-pulse'
                          : 'bg-slate-100 text-slate-600 border border-slate-300'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Enfoque Diferencial: Víctimas del Conflicto Armado (Ley 1448 de 2011) */}
      <div className="bg-[#fff8e1] border-l-4 border-amber-500 rounded-r-xl p-5 text-slate-800 text-xs sm:text-sm">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-amber-100 rounded-lg text-amber-800 flex-shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base font-['Montserrat',sans-serif] mb-1">
              Enfoque Diferencial: Ley 1448 de 2011 (Víctimas del Conflicto y Restitución)
            </h4>
            <p className="text-slate-700 leading-relaxed">
              El plan prioriza de forma vinculante la atención integral a la población vulnerable reubicada en la Urbanización Nuevo Achí, en su mayoría víctimas del conflicto armado y afectadas por la ola invernal de La Mojana. Se garantiza la inclusión social activa y el acceso preferente y subsidiado a los programas estatales de vivienda, gas natural, servicios sanitarios y proyectos de autosuficiencia energética comunitaria.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
