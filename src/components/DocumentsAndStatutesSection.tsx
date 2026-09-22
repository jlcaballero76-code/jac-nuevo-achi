import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Search, 
  BookOpen, 
  ShieldCheck, 
  Scale, 
  ExternalLink, 
  Filter, 
  CheckCircle2 
} from 'lucide-react';
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

  const filteredStatutes = STATUTE_CHAPTERS.filter(chap => {
    if (!statuteSearch.trim()) return true;
    const term = statuteSearch.toLowerCase();
    const matchChap = chap.title.toLowerCase().includes(term) ||
                      chap.id.toLowerCase().includes(term) ||
                      chap.summary.toLowerCase().includes(term);
    const matchArt = chap.highlights.some(a => 
      String(a.articleNumber).includes(term) || 
      a.title.toLowerCase().includes(term) || 
      a.description.toLowerCase().includes(term)
    );
    return matchChap || matchArt;
  });

  return (
    <section id="documentos" className="p-6 sm:p-10 border-b border-[#f8f7f4]/10 bg-[#111113] scroll-mt-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#f8f7f4]/10">
        <div>
          <div className="font-geist-mono text-[10px] uppercase tracking-widest text-[#FFD700]">
            SECCIÓN 06 • EXPEDIENTES & TRANSPARENCIA
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f8f7f4]">
            Documentos Oficiales & Visor de Estatutos
          </h2>
          <p className="text-xs text-[#f8f7f4]/60 mt-1 font-inter">
            Estatutos comunales (132 Artículos), personerías jurídicas, plan cuatrienal y balances
          </p>
        </div>

        {/* Tab Toggle buttons */}
        <div className="flex items-center gap-1 bg-[#18181a] p-1 rounded-lg border border-[#f8f7f4]/15 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('docs')}
            className={`px-3.5 py-1.5 rounded font-oswald text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'docs'
                ? 'bg-[#FFD700] text-black font-bold'
                : 'text-[#f8f7f4]/70 hover:text-white'
            }`}
          >
            Expedientes ({OFFICIAL_DOCUMENTS.length})
          </button>
          <button
            onClick={() => setActiveTab('estatutos')}
            className={`px-3.5 py-1.5 rounded font-oswald text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'estatutos'
                ? 'bg-[#FFD700] text-black font-bold'
                : 'text-[#f8f7f4]/70 hover:text-white'
            }`}
          >
            Estatutos (132 Arts)
          </button>
        </div>
      </div>

      {activeTab === 'docs' ? (
        <div>
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="font-geist-mono text-[10px] text-[#f8f7f4]/50 uppercase mr-1">Filtrar:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded text-xs font-geist-mono transition-colors cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#FFD700] text-black border-[#FFD700] font-bold'
                    : 'bg-[#18181a] text-[#f8f7f4]/70 border-[#f8f7f4]/15 hover:border-[#FFD700]/50 hover:text-white'
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
                className="bg-[#18181a] border border-[#f8f7f4]/10 rounded-xl p-5 hover:border-[#FFD700] transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-geist-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#FFD700] uppercase font-bold">
                      {doc.category}
                    </span>
                    <span className="font-geist-mono text-[10px] text-[#f8f7f4]/50">
                      {doc.pages} Págs
                    </span>
                  </div>

                  <h3 className="font-oswald text-base font-bold uppercase text-white group-hover:text-[#FFD700] transition-colors leading-snug mb-2">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-[#f8f7f4]/65 line-clamp-3 mb-4 font-inter leading-relaxed">
                    {doc.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f8f7f4]/10 flex items-center justify-between text-xs">
                  <span className="font-geist-mono text-[10px] text-[#008000] font-bold">
                    {doc.resolutionOrCode}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleSimulateDownload(doc, e)}
                      title="Descargar Ficha Oficial"
                      className="p-1.5 rounded hover:bg-white/10 text-[#f8f7f4]/60 hover:text-white"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-oswald text-xs uppercase text-[#FFD700] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Ver &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Statutes Explorer */
        <div>
          {/* Statute search bar */}
          <div className="max-w-md mb-6">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#f8f7f4]/40" />
              <input
                type="text"
                placeholder="Buscar artículo (ej. Art. 47, quórum, fiscal)..."
                value={statuteSearch}
                onChange={(e) => setStatuteSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-black/40 border border-[#f8f7f4]/15 rounded text-xs text-white placeholder-[#f8f7f4]/30 outline-none focus:border-[#FFD700]"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredStatutes.map((chap, cIdx) => (
              <div key={cIdx} className="bg-[#18181a] border border-[#f8f7f4]/10 rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-[#f8f7f4]/10 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-geist-mono text-[11px] text-[#FFD700] font-bold">
                      {chap.id.toUpperCase()}:
                    </span>
                    <h4 className="font-oswald text-base font-bold uppercase text-white">
                      {chap.title}
                    </h4>
                  </div>
                  <span className="font-geist-mono text-[10px] text-[#008000] font-bold">
                    {chap.articlesCount} Artículos
                  </span>
                </div>

                <p className="text-xs text-[#f8f7f4]/60 mb-3 font-inter">
                  {chap.summary}
                </p>

                <div className="space-y-3">
                  {chap.highlights.map((art, aIdx) => (
                    <div key={aIdx} className="bg-[#111113] p-3.5 rounded-lg border border-[#f8f7f4]/5">
                      <div className="font-geist-mono text-[11px] text-[#FFD700] font-bold mb-1">
                        Art. {art.articleNumber} — {art.title}
                      </div>
                      <p className="text-xs text-[#f8f7f4]/75 font-inter leading-relaxed">
                        {art.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
};
