import React from 'react';
import { X, Download, Printer, FileText, CheckCircle2, ShieldCheck, Scale, ExternalLink } from 'lucide-react';
import { OfficialDocumentItem } from '../types';
import { INSTITUTIONAL_INFO, ACHI_HISTORY } from '../data/jacData';

interface DocumentViewerModalProps {
  document: OfficialDocumentItem | null;
  onClose: () => void;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  document: doc,
  onClose
}) => {
  if (!doc) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const textContent = `=====================================================
REPÚBLICA DE COLOMBIA
DEPARTAMENTO DE BOLÍVAR - MUNICIPIO DE ACHÍ
JUNTA DE ACCIÓN COMUNAL DEL BARRIO NUEVO ACHÍ
RUT: 901784749-1 | RUC: 5-5009-43192
Personería Jurídica Res. N° 768 (2023) / Res. N° 410 (2024)
=====================================================

DOCUMENTO: ${doc.title}
REFERENCIA: ${doc.resolutionOrCode}
FECHA: ${doc.date} | PÁGINAS: ${doc.pages}

RESUMEN:
${doc.summary}

REPRESENTANTES LEGALES:
Presidente: Jorge Luis Caballero Dejanon (C.C. 9.292.195 de Turbaco)
Secretaria: Carolina Esther Galvis Muentes (C.C. 1.047.496.383 de Cartagena)

Descargado formalmente desde el portal institucional oficial.
=====================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = doc.fileLabel.replace('.pdf', '.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#18181a] rounded-xl max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-[#f8f7f4]/20 flex flex-col text-[#f8f7f4]">
        
        {/* Header */}
        <div className="bg-[#111113] p-4 sm:p-5 flex items-center justify-between flex-shrink-0 border-b border-[#f8f7f4]/15">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFD700] text-black flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="font-geist-mono text-[10px] text-[#FFD700] uppercase font-bold tracking-wider">
                DOCUMENTO OFICIAL • {doc.category}
              </div>
              <h3 className="font-oswald text-base sm:text-lg font-bold text-white uppercase leading-tight line-clamp-1">
                {doc.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#f8f7f4]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar visor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Document Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-xs sm:text-sm font-inter">
          
          <div className="bg-[#111113] p-5 rounded-lg border border-[#f8f7f4]/10 space-y-2">
            <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
              <span className="font-geist-mono text-[#008000] font-bold">REFERENCIA: {doc.resolutionOrCode}</span>
              <span className="font-geist-mono text-[#f8f7f4]/50">{doc.date}</span>
            </div>
            <p className="text-white font-medium text-sm pt-1">
              {doc.title}
            </p>
            <p className="text-[#f8f7f4]/75 text-xs leading-relaxed">
              {doc.summary}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-white">
              Garantía Institucional & Validez Jurídica
            </h4>
            <p className="text-xs text-[#f8f7f4]/70 leading-relaxed">
              Expedido por la Junta de Acción Comunal del Barrio Nuevo Achí, acreditada ante la Alcaldía de Achí según <strong>Resolución N° 410 de 2024</strong> y <strong>Resolución N° 768 de 2023</strong> de la Secretaría de Gobierno.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-geist-mono text-[#f8f7f4]/60 space-y-1">
            <div>NIT: {INSTITUTIONAL_INFO.nit}</div>
            <div>RUC: {INSTITUTIONAL_INFO.ruc}</div>
            <div>SEDE: {INSTITUTIONAL_INFO.address}, Achí Bolívar</div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-[#111113] p-4 border-t border-[#f8f7f4]/15 flex items-center justify-between gap-3 flex-shrink-0">
          <div className="font-geist-mono text-[10px] text-[#f8f7f4]/50">
            {doc.pages} • COPIA AUTÉNTICA
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded bg-white/10 hover:bg-white/20 text-white font-oswald text-xs uppercase flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded bg-[#FFD700] hover:bg-white text-black font-oswald text-xs font-bold uppercase flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar Ficha</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
