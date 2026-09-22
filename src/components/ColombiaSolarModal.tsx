import React from 'react';
import { X, SunMedium, ExternalLink, CheckCircle2, FileText, Phone, AlertCircle, HelpCircle } from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/jacData';

interface ColombiaSolarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const ColombiaSolarModal: React.FC<ColombiaSolarModalProps> = ({
  isOpen,
  onClose,
  onOpenRegister
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#003366] text-white p-5 rounded-t-2xl flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-[#003366] flex items-center justify-center flex-shrink-0">
              <SunMedium className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg font-['Montserrat',sans-serif]">
                Convocatoria Programa Colombia Solar
              </h3>
              <p className="text-xs text-amber-300">
                Iniciativa del Ministerio de Minas y Energía & FENOGE para Comunidades Energéticas
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5 text-slate-700 text-sm">
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-950 space-y-2">
            <h4 className="font-bold text-sm text-[#008000] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              ¿Qué es Colombia Solar y cómo beneficia a Barrio Nuevo Achí?
            </h4>
            <p className="leading-relaxed">
              Es el programa bandera del Gobierno Nacional para democratizar la generación de energía fotovoltaica en Colombia. En la <strong>Urbanización Nuevo Achí</strong>, la JAC gestiona la conformación de una <strong>Comunidad Energética</strong> que permita instalar una granja solar para abastecer a más de 700 familias, reduciendo las altas tarifas del recibo de luz hasta en un 70%.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#003366]" />
              Pasos para participar como residente o afiliado:
            </h4>
            <ol className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">1</span>
                <div>
                  <strong className="text-slate-900 block">Estar registrado en el censo comunal de la JAC</strong>
                  <span>Es indispensable tener sus datos actualizados en el libro de afiliados o en el formulario digital para ser incluido en el listado de la comunidad energética.</span>
                </div>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">2</span>
                <div>
                  <strong className="text-slate-900 block">Diligenciar el formulario oficial nacional</strong>
                  <span>Acceda a la plataforma del gobierno en <a href="https://www.colombiasolar.gov.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-bold">www.colombiasolar.gov.co</a> e ingrese sus datos de identificación y factura de energía actual.</span>
                </div>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">3</span>
                <div>
                  <strong className="text-slate-900 block">Acompañamiento presencial de la JAC</strong>
                  <span>Si no cuenta con internet o tiene dudas para subir su postulación, acérquese a la sede de la JAC (Mz 01 Bl 13 Ca 15) en horarios de atención para recibir asistencia técnica gratuita.</span>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900">
            <p className="flex items-center gap-1.5 font-bold mb-1">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Documentos requeridos para la postulación:
            </p>
            <ul className="list-disc list-inside space-y-0.5 text-amber-800">
              <li>Cédula de ciudadanía o documento de identidad del titular del hogar.</li>
              <li>Última factura de energía eléctrica (si cuenta con medidor activo).</li>
              <li>Dirección exacta de la vivienda (Manzana, Bloque, Casa de la urbanización).</li>
              <li>Certificado de afiliación o constancia emitida por la JAC.</li>
            </ul>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
            <button
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-bold text-[#008000] hover:bg-green-50 border border-green-600 transition-colors cursor-pointer"
            >
              Primero actualizar mi registro en la JAC
            </button>
            <a
              href="https://www.colombiasolar.gov.co"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-[#003366] text-white hover:bg-blue-900 transition-colors shadow-sm"
            >
              <span>Abrir colombiasolar.gov.co</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
