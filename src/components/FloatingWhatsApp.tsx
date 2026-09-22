import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/jacData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneRaw = "573207645119";
  const defaultMessage = encodeURIComponent(
    "Hola, me comunico desde la plataforma de la JAC Barrio Nuevo Achí para solicitar información comunal o radicar una inquietud."
  );
  const waUrl = `https://wa.me/${phoneRaw}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#18181a] text-white px-3.5 py-2 rounded-lg shadow-2xl border border-[#f8f7f4]/15 text-xs font-inter animate-in slide-in-from-right-4 duration-300">
          <span className="font-geist-mono text-[#FFD700] text-[10px] uppercase">Directiva JAC:</span>
          <span>¿Desea radicar una consulta?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#f8f7f4]/40 hover:text-white p-0.5 ml-1 cursor-pointer"
            aria-label="Cerrar ayuda"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a la JAC Barrio Nuevo Achí"
        className="w-13 h-13 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20 cursor-pointer relative group"
        title="Canal WhatsApp Oficial JAC"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-black animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-black" />
        
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white fill-white"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </div>
  );
};
