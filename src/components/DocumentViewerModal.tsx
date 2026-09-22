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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Header */}
        <div className="bg-[#003366] text-white p-4 sm:p-5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10 text-amber-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base font-['Montserrat',sans-serif] leading-tight">
                {doc.title}
              </h3>
              <p className="text-xs text-amber-300/90 font-mono mt-0.5">
                {doc.resolutionOrCode} • {doc.pages} {doc.pages === 1 ? 'Página' : 'Páginas'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Imprimir documento"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Descargar archivo"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Content Viewer Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
          
          {/* Institutional Stamp Header */}
          <div className="text-center pb-4 border-b border-slate-200 space-y-1">
            <p className="font-extrabold text-[#003366] text-xs uppercase tracking-widest font-['Montserrat',sans-serif]">
              REPÚBLICA DE COLOMBIA • DEPARTAMENTO DE BOLÍVAR
            </p>
            <p className="text-xs font-bold text-slate-900">
              MUNICIPIO DE ACHÍ • JUNTA DE ACCIÓN COMUNAL BARRIO NUEVO ACHÍ
            </p>
            <p className="text-[11px] font-mono text-slate-500">
              RUT: {INSTITUTIONAL_INFO.nit} • RUC MinInterior: {INSTITUTIONAL_INFO.ruc}
            </p>
            <p className="text-[11px] text-emerald-700 font-semibold">
              {INSTITUTIONAL_INFO.legalResolution} (Modificada por {INSTITUTIONAL_INFO.modificationResolution})
            </p>
          </div>

          {/* Conditional Content by Document Type */}
          {doc.type === 'estatutos' && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 text-sm text-[#003366]">
                  ESTATUTOS GENERALES - LEY 2166 DE 2021 (Resumen Integral)
                </h4>
                <p className="text-xs text-slate-600 mb-3">
                  Los presentes estatutos constan de 132 artículos y 7 títulos oficiales que rigen el destino autónomo de la Junta de Acción Comunal del Barrio Nuevo Achí.
                </p>
                <div className="space-y-2 text-xs">
                  <p><strong>Artículo 1. Denominación:</strong> Junta de Acción Comunal del Barrio Nuevo Achí, Municipio de Achí, Bolívar.</p>
                  <p><strong>Artículo 2. Naturaleza Jurídica:</strong> Expresión social autónoma, multiétnica, multicultural, solidaria y defensora de los Derechos Humanos, la paz y el desarrollo integral.</p>
                  <p><strong>Artículo 10. Requisitos de Afiliación:</strong> Mayor de 14 años, residir en el barrio y no tener impedimentos de ley.</p>
                  <p><strong>Artículo 12 y 13. Derechos y Deberes:</strong> Participar con voz y voto en asambleas, elegir y ser elegido, pertenecer a una comisión de trabajo y mantener actualizados sus datos en el libro oficial.</p>
                  <p><strong>Artículo 38 y 43. Junta Directiva:</strong> Presidente (Representante Legal), Vicepresidente, Tesorero y Secretaria.</p>
                  <p><strong>Artículo 54. 6 Comisiones de Trabajo:</strong> Educación y Cultura; Obras y Servicios Públicos; Salud y Medio Ambiente; Recreación y Deportes; Juventud; y Desarrollo Social.</p>
                  <p><strong>Artículo 79 a 86. Comisión Empresarial:</strong> Encargada de proyectos productivos, iniciativas de economía solidaria y proyectos como la granja solar.</p>
                  <p><strong>Artículo 116. Libros Registrados:</strong> Registro de Afiliados, Actas de Asamblea, Tesorería, Inventarios, Actas de Convivencia y Reuniones de Directiva.</p>
                </div>
              </div>
            </div>
          )}

          {doc.type === 'rut' && (
            <div className="space-y-4">
              <div className="border-2 border-slate-300 rounded-xl p-4 bg-white font-mono text-xs">
                <div className="flex justify-between items-center border-b pb-2 mb-3">
                  <span className="font-bold text-sm text-[#003366]">DIAN • FORMULARIO 001 RUT</span>
                  <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded">Formulario N° 141118031521</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div><strong>NIT:</strong> 901784749 - 1</div>
                  <div><strong>Estado:</strong> Activo Definitivo</div>
                  <div><strong>Razón Social:</strong> JUNTA DE ACCION COMUNAL DEL BARRIO NUEVO ACHI</div>
                  <div><strong>Municipio:</strong> Achí (13006), Bolívar (13)</div>
                  <div><strong>Dirección:</strong> MZ 1 BL 18 CA 3 / MZ 01 BL 13 CA 15</div>
                  <div><strong>Email:</strong> jacnuevoachi@gmail.com</div>
                  <div><strong>Teléfono:</strong> 317 353 9313 / 320 764 5119</div>
                  <div><strong>Actividad Principal:</strong> 9499</div>
                  <div><strong>Repr. Legal Principal:</strong> CABALLERO DEJANON JORGE LUIS (C.C. 9292195)</div>
                  <div><strong>Repr. Legal Suplente:</strong> MARQUEZ SANDOVAL LUIS ALBERTO (C.C. 10880383)</div>
                  <div><strong>Secretaria:</strong> GALVIS MUENTES CAROLINA ESTHER (C.C. 1047496383)</div>
                  <div><strong>Directiva:</strong> VERGARA AMARIS EDELFA YANET (C.C. 33209244)</div>
                </div>
              </div>
            </div>
          )}

          {doc.type === 'informe' && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-3">
                <h4 className="font-bold text-sm text-[#003366]">
                  INFORME TÉCNICO OFICIAL - MARZO 19 DE 2026
                </h4>
                <p>
                  <strong>Tema:</strong> Caracterización Territorial y Justificación de Intervención en Servicios Públicos – Urbanización Nuevo Achí.
                </p>
                <div className="p-3 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900 block mb-1">1. Origen del Asentamiento:</strong>
                  La Urbanización surge como reubicación de más de 700 familias por el Fondo Adaptación a raíz de la emergencia climática por la ola invernal 2010-2011. Se han entregado más de 500 viviendas unifamiliares de 47.72 m² en lotes de 89.25 m².
                </div>
                <div className="p-3 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900 block mb-1">2. Justificación Técnica para Gas Natural Domiciliario:</strong>
                  La ausencia de redes de gas natural obliga a quemar leña y carbón, generando humo tóxico en cocinas y graves enfermedades respiratorias en niños y adultos mayores. Se sustenta la conexión prioritaria con subsidio estatal para las 706 viviendas.
                </div>
                <div className="p-3 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900 block mb-1">3. Granja Solar Fotovoltaica:</strong>
                  Ubicada en una región de alta radiación solar (La Mojana), la autogeneración fotovoltaica mitigará la inestabilidad de la red convencional y abaratará las tarifas de energía en un 70%.
                </div>
                <div className="pt-2 text-right text-slate-500 font-semibold">
                  Elaboró: Jorge Luis Caballero Dejanon, Presidente JAC
                </div>
              </div>
            </div>
          )}

          {doc.type === 'pdf' && (
            <div className="space-y-3">
              <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200 text-xs leading-relaxed text-slate-700">
                <h4 className="font-bold text-sm text-[#003366] mb-2">
                  Síntesis del Documento
                </h4>
                <p className="mb-2">{doc.summary}</p>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-blue-200 text-slate-600">
                  <div><strong>Vigencia:</strong> 2024 - 2028</div>
                  <div><strong>Expedición:</strong> {doc.date}</div>
                  <div><strong>Jurisdicción:</strong> Barrio Nuevo Achí, Bolívar</div>
                  <div><strong>Marco:</strong> Ley 2166 / Ley 1448</div>
                </div>
              </div>
            </div>
          )}

          {/* Verification footer */}
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center justify-between gap-2 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Documento institucional oficial debidamente refrendado.</span>
            </div>
            <span className="font-mono text-[10px]">VERIFICACIÓN JAC-ACHI-BOL</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <span className="text-xs text-slate-500">
            Archivo oficial: <strong className="text-slate-700 font-mono">{doc.fileLabel}</strong>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-700 hover:bg-slate-200 border border-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-1.5 rounded-lg text-xs font-bold bg-[#003366] text-white hover:bg-blue-900 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar Documento</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
