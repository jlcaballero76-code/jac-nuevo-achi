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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#18181a] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#f8f7f4]/20 flex flex-col text-[#f8f7f4]">
        
        {/* Modal Header */}
        <div className="bg-[#111113] p-5 border-b border-[#f8f7f4]/15 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFD700] text-black flex items-center justify-center flex-shrink-0">
              <SunMedium className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="font-geist-mono text-[10px] text-[#008000] uppercase font-bold tracking-wider">
                MINMINAS • FENOGE • COMUNIDAD ENERGÉTICA
              </div>
              <h3 className="font-oswald text-lg sm:text-xl uppercase font-bold text-white leading-tight">
                Programa Colombia Solar
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#f8f7f4]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5 text-xs sm:text-sm font-inter">
          
          <div className="bg-[#008000]/10 border border-[#008000]/30 rounded-xl p-4 text-xs space-y-2">
            <h4 className="font-oswald text-sm font-bold uppercase text-[#008000] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              ¿Qué es Colombia Solar y cómo beneficia a Barrio Nuevo Achí?
            </h4>
            <p className="text-[#f8f7f4]/80 leading-relaxed">
              Es el programa bandera del Gobierno Nacional para democratizar la generación de energía fotovoltaica en Colombia. En la <strong>Urbanización Nuevo Achí</strong>, la JAC gestiona la conformación de una <strong>Comunidad Energética</strong> que permita instalar una granja solar para abastecer a más de 700 familias, reduciendo las tarifas eléctricas residenciales hasta en un 70%.
            </p>
          </div>

          <div>
            <h4 className="font-oswald text-sm uppercase font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-[#FFD700]">✓</span>
              Requisitos para Afiliados y Residentes:
            </h4>
            <ul className="space-y-1.5 text-xs text-[#f8f7f4]/75 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#008000] font-bold">•</span>
                <span>Estar inscrito o actualizarse en el <strong>Libro de Afiliados de la JAC</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#008000] font-bold">•</span>
                <span>Residir de forma continua en una de las viviendas del Barrio Nuevo Achí.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#008000] font-bold">•</span>
                <span>Copia del documento de identidad y último recibo de energía de la vivienda.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#008000] font-bold">•</span>
                <span>Si pertenece a población víctima (Ley 1448 de 2011), adjuntar certificación de la RUV.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between flex-wrap gap-3">
            <div>
              <span className="font-geist-mono text-[10px] text-[#f8f7f4]/50 uppercase block">Atención Personalizada</span>
              <strong className="font-oswald text-sm text-white">Presidencia JAC: {INSTITUTIONAL_INFO.phoneMain}</strong>
            </div>
            <a
              href={`https://wa.me/573207645119?text=${encodeURIComponent('Hola presidente, deseo postularme a la convocatoria Colombia Solar en Barrio Nuevo Achí.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-[#008000] hover:bg-green-700 text-white font-oswald text-xs uppercase font-bold transition-colors"
            >
              Consultar por WhatsApp
            </a>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#111113] border-t border-[#f8f7f4]/15 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-xs font-oswald uppercase text-[#f8f7f4]/60 hover:text-white"
          >
            Volver al Portal
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenRegister();
            }}
            className="px-5 py-2.5 rounded bg-[#FFD700] hover:bg-white text-black font-oswald text-xs font-bold uppercase transition-all"
          >
            Ir al Formulario de Registro
          </button>
        </div>

      </div>
    </div>
  );
};
