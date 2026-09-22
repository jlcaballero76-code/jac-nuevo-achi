import React, { useState } from 'react';
import { FileText, Download, Eye, Search, BookOpen, ShieldCheck, Scale, ExternalLink, Filter, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_DOCUMENTS, STATUTE_CHAPTERS } from '../data/jacData';
import { OfficialDocumentItem } from '../types';

interface DocumentsAndStatutesSectionProps {
  onOpenDocModal: (doc: OfficialDocumentItem) => void;
}

export const DocumentsAndStatutesSection: React.FC<DocumentsAndStatutesSectionProps> = ({
  onOpenDocModal
}) => {
  const [activeTab, setActiveTab] = useState<'docs' | 'estatutos'>('docs');
  const [statuteSearch, setStatuteSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Planificación', 'Legal', 'Técnico', 'Institucional'];

  const filteredDocs = OFFICIAL_DOCUMENTS.filter(doc => {
    return selectedCategory === 'Todos' || doc.category === selectedCategory;
  });

  const handleSimulateDownload = (doc: OfficialDocumentItem, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Create text download for the document with complete official details
    const content = `=====================================================
REPÚBLICA DE COLOMBIA
DEPARTAMENTO DE BOLÍVAR - MUNICIPIO DE ACHÍ
JUNTA DE ACCIÓN COMUNAL DEL BARRIO NUEVO ACHÍ
RUT: 901784749-1 | RUC: 5-5009-43192
Personería Jurídica Res. N° 768 (2023) / Res. N° 410 (2024)
Sede: Manzana 01 Bloque 13 Casa 15 / Bloque 18 Casa 03
Contacto: jacnuevoachi@gmail.com | Tel: (+57) 320 764 5119
=====================================================

DOCUMENTO OFICIAL: ${doc.title}
CATEGORÍA: ${doc.category}
REFERENCIA LEGAL: ${doc.resolutionOrCode}
FECHA: ${doc.date}
PÁGINAS: ${doc.pages}

RESUMEN EJECUTIVO:
${doc.summary}

REPRESENTACIÓN LEGAL:
- Presidente y Representante Legal: Jorge Luis Caballero Dejanon (C.C. 9.292.195 de Turbaco)
- Secretaria General: Carolina Esther Galvis Muentes (C.C. 1.047.496.383 de Cartagena)

Descargado formalmente desde el portal web oficial de la JAC Barrio Nuevo Achí.
Conforme a la Ley 2166 de 2021 y Ley 1712 de 2014 de Transparencia y Acceso a la Información Pública.
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
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
    <section id="documentos" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#003366] pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-50 text-[#003366] rounded-xl">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] font-['Montserrat',sans-serif]">
              Documentos Institucionales y Estatutos Oficiales
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Acceso transparente a las resoluciones, estatutos, informes técnicos y registros tributarios
            </p>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl self-start sm:self-auto border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('docs')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'docs'
                ? 'bg-[#003366] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Documentos Descargables ({OFFICIAL_DOCUMENTS.length})
          </button>
          <button
            onClick={() => setActiveTab('estatutos')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'estatutos'
                ? 'bg-[#003366] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Explorador de Estatutos (132 Art.)
          </button>
        </div>
      </div>

      {activeTab === 'docs' ? (
        <div>
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#003366] text-white font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                onClick={() => onOpenDocModal(doc)}
                className="bg-[#f8fafc] hover:bg-white p-5 rounded-xl border border-slate-200 hover:border-[#003366] hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-[#003366] text-[10px] font-bold uppercase">
                      {doc.category}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      {doc.pages} {doc.pages === 1 ? 'página' : 'páginas'}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#003366] transition-colors mb-1.5 leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-[11px] font-mono text-emerald-700 font-semibold mb-2">
                    {doc.resolutionOrCode}
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {doc.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2 text-xs">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    Consultar
                  </span>
                  <button
                    onClick={(e) => handleSimulateDownload(doc, e)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-[#008000] hover:text-white text-[#003366] font-bold text-xs transition-colors cursor-pointer"
                    title={`Descargar ${doc.fileLabel}`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Descargar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Estatutos Explorer Tab */
        <div className="space-y-6">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={statuteSearch}
              onChange={(e) => setStatuteSearch(e.target.value)}
              placeholder="Buscar por artículo o palabra clave (ej. presidente, asamblea, quórum, comisiones, libros, fiscalía)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#f8fafc] border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003366] focus:bg-white"
            />
          </div>

          <div className="space-y-4">
            {STATUTE_CHAPTERS.map((chap) => {
              const matchingHighlights = chap.highlights.filter(h =>
                !statuteSearch ||
                h.title.toLowerCase().includes(statuteSearch.toLowerCase()) ||
                h.description.toLowerCase().includes(statuteSearch.toLowerCase()) ||
                `artículo ${h.articleNumber}`.includes(statuteSearch.toLowerCase())
              );

              if (matchingHighlights.length === 0 && statuteSearch) return null;

              return (
                <div key={chap.id} className="bg-[#f8fafc] rounded-xl p-5 border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 pb-2 border-b border-slate-200">
                    <h3 className="font-bold text-sm text-[#003366] font-['Montserrat',sans-serif]">
                      {chap.title}
                    </h3>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {chap.articlesCount} Artículos reglamentados
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-3 italic">
                    {chap.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {matchingHighlights.map((art, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200 text-xs shadow-2xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-emerald-800 text-[11px] bg-emerald-50 px-1.5 py-0.5 rounded">
                            Artículo {art.articleNumber}
                          </span>
                          <span className="font-bold text-slate-900 text-xs truncate max-w-[200px]">
                            {art.title}
                          </span>
                        </div>
                        <p className="text-slate-600 text-[11px] leading-relaxed">
                          {art.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-[#003366] flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#003366] flex-shrink-0" />
              <span>
                Estatutos aprobados formalmente en Asamblea General conforme a la <strong>Ley 2166 de 2021</strong> y registrados ante la Alcaldía Municipal de Achí.
              </span>
            </div>
            <button
              onClick={() => onOpenDocModal(OFFICIAL_DOCUMENTS.find(d => d.id === 'estatutos-jac')!)}
              className="px-3 py-1.5 rounded-lg bg-[#003366] text-white font-bold text-xs hover:bg-blue-900 transition-colors cursor-pointer"
            >
              Abrir Estatutos Completos (PDF 64 Pág.)
            </button>
          </div>

        </div>
      )}

    </section>
  );
};
