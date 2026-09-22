import React from 'react';
import { SunMedium, Flame, ExternalLink, ShieldCheck, Zap, HeartHandshake, Leaf, ArrowRight, CheckCircle2, FileText, AlertCircle } from 'lucide-react';

interface SolarAndServicesSectionProps {
  onOpenDoc: (docId: string) => void;
  onOpenSolarModal: () => void;
}

export const SolarAndServicesSection: React.FC<SolarAndServicesSectionProps> = ({
  onOpenDoc,
  onOpenSolarModal
}) => {
  return (
    <section id="servicios" className="bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/60 rounded-2xl p-6 sm:p-8 shadow-sm border-l-8 border-[#008000] border-t border-r border-b border-slate-200 scroll-mt-24">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
            <SunMedium className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] font-['Montserrat',sans-serif]">
              Transición Energética Comunal & Gas Natural Domiciliario
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Convocatoria nacional Colombia Solar e intervención técnica sustentada en informe oficial de marzo 2026
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenDoc('informe-tecnico')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-[#003366] hover:bg-slate-50 border border-slate-300 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#008000]" />
            <span>Informe Técnico 2026</span>
          </button>
        </div>
      </div>

      {/* Main Callout Banner */}
      <div className="bg-white rounded-xl p-6 border border-emerald-200 shadow-xs mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-[#008000] text-xs font-extrabold uppercase tracking-wide">
              <Zap className="w-3.5 h-3.5" />
              Convocatoria Activa del Gobierno Nacional
            </span>

            <h3 className="text-lg sm:text-xl font-bold text-[#003366] font-['Montserrat',sans-serif]">
              Programa “Colombia Solar” en el Barrio Nuevo Achí
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Invitamos a todos los afiliados y residentes del <strong>Barrio Nuevo Achí</strong> a inscribirse en la convocatoria de energía limpia del Ministerio de Minas y Energía. La JAC lidera la formulación de una <strong>Granja Solar Fotovoltaica Comunitaria</strong> para que más de 700 familias accedan a energía constante, económica y sostenible.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://www.colombiasolar.gov.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm bg-[#008000] text-white hover:bg-green-700 shadow-sm transition-all"
              >
                <span>Ir al Formulario Oficial de Colombia Solar</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenSolarModal}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm bg-amber-400 text-[#003366] hover:bg-amber-300 transition-all cursor-pointer"
              >
                <span>Guía de Postulación JAC</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#003366] text-white p-4 rounded-xl space-y-2.5 text-xs">
            <h4 className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-emerald-400" />
              Metas de la Granja Solar
            </h4>
            <div className="space-y-1 text-slate-200">
              <p>• <strong>70%</strong> de cobertura con paneles solares</p>
              <p>• Reducción radical en la factura eléctrica</p>
              <p>• Estabilidad ante cortes del sistema convencional</p>
              <p>• Generación de empleo local en montaje y operación</p>
            </div>
            <div className="pt-2 border-t border-white/20 text-[11px] text-amber-200">
              “Apostarle al sol en La Mojana es apostarle a la dignidad y a un nuevo comienzo.”
            </div>
          </div>
        </div>
      </div>

      {/* Gas Natural Domiciliario - Technical Justification */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left: Problem Statement */}
        <div className="bg-red-50/60 p-5 rounded-xl border border-red-200/80 text-xs">
          <div className="flex items-center gap-2 text-red-800 font-bold text-sm mb-2">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
            <h4 className="font-['Montserrat',sans-serif]">Problemática Actual en la Urbanización</h4>
          </div>
          <p className="text-slate-700 leading-relaxed mb-3">
            A pesar de ser un proyecto de reubicación por el Fondo Adaptación con más de 500 viviendas entregadas, la ausencia de redes de gas natural obliga a las familias a recurrir a:
          </p>
          <ul className="space-y-1.5 text-slate-700">
            <li className="flex items-start gap-1.5">
              <span className="text-red-500 font-bold">✕</span>
              <span>Uso diario de leña y carbón vegetal para la preparación de alimentos.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-red-500 font-bold">✕</span>
              <span>Graves riesgos respiratorios y oftalmológicos en niños, niñas y adultos mayores.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-red-500 font-bold">✕</span>
              <span>Altos costos económicos por pipetas de propano (GLP) de difícil transporte.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-red-500 font-bold">✕</span>
              <span>Presión sobre los ecosistemas forestales y tala local.</span>
            </li>
          </ul>
        </div>

        {/* Right: Technical Solution */}
        <div className="bg-emerald-50/60 p-5 rounded-xl border border-emerald-200/80 text-xs">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-2">
            <Flame className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <h4 className="font-['Montserrat',sans-serif]">Solución y Beneficios con Red de Gas</h4>
          </div>
          <p className="text-slate-700 leading-relaxed mb-3">
            El Informe Técnico Oficial radicado por la JAC sustenta la instalación de acometidas en las 706 viviendas proyectadas con subsidios estatales:
          </p>
          <ul className="space-y-1.5 text-slate-700">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Suministro seguro, continuo y de bajo costo directo a la cocina.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Erradicación total del humo intramural y mejora de la salud pública.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Urbanización con diseño planificado que facilita el zanjeo y tendido de tubería.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Cumplimiento del derecho a vivienda digna para víctimas del conflicto (Ley 1448).</span>
            </li>
          </ul>
        </div>

      </div>

    </section>
  );
};
