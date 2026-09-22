import React from 'react';
import { MapPin, Navigation, ExternalLink, Compass, ShieldCheck, Phone, Mail } from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/jacData';

export const LocationSection: React.FC = () => {
  return (
    <section id="mapa" className="p-6 sm:p-10 border-b border-[#f8f7f4]/10 bg-[#111113] scroll-mt-6">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#f8f7f4]/10">
        <div>
          <div className="font-geist-mono text-[10px] uppercase tracking-widest text-[#FFD700]">
            SECCIÓN 08 • JURISDICCIÓN & CARTOGRAFÍA
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f8f7f4]">
            Ubicación Geográfica & Coordenadas
          </h2>
          <p className="text-xs text-[#f8f7f4]/60 mt-1 font-inter">
            Coordenadas de referencia en la Urbanización Barrio Nuevo Achí, Municipio de Achí (Bolívar)
          </p>
        </div>

        <a
          href="https://maps.app.goo.gl/fMNhHfQRAFQwFL988"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#FFD700] hover:bg-white text-black font-oswald text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer self-start sm:self-auto"
        >
          <Navigation className="w-4 h-4 text-black" />
          <span>Abrir Google Maps</span>
          <ExternalLink className="w-3 h-3 text-black/60" />
        </a>
      </div>

      {/* Coordinate & Landmark Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 text-xs">
        <div className="bg-[#18181a] p-4 rounded-xl border border-[#f8f7f4]/10 flex items-start gap-3">
          <Compass className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-oswald uppercase tracking-wide block mb-1">
              Coordenadas de Presidencia:
            </strong>
            <span className="font-geist-mono text-[#f8f7f4]/70 text-[11px]">
              {INSTITUTIONAL_INFO.coordinates.lat.toFixed(6)}, {INSTITUTIONAL_INFO.coordinates.lng.toFixed(6)}
            </span>
          </div>
        </div>

        <div className="bg-[#18181a] p-4 rounded-xl border border-[#f8f7f4]/10 flex items-start gap-3">
          <MapPin className="w-4 h-4 text-[#008000] flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-oswald uppercase tracking-wide block mb-1">
              Dirección Comunitaria:
            </strong>
            <span className="text-[#f8f7f4]/70 font-inter">
              {INSTITUTIONAL_INFO.address}, Achí
            </span>
          </div>
        </div>

        <div className="bg-[#18181a] p-4 rounded-xl border border-[#f8f7f4]/10 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-oswald uppercase tracking-wide block mb-1">
              Jurisdicción Territorial:
            </strong>
            <span className="text-[#f8f7f4]/70 font-inter">
              Margen izquierda del Río Cauca • La Mojana
            </span>
          </div>
        </div>
      </div>

      {/* Map iframe */}
      <div className="rounded-xl overflow-hidden border border-[#f8f7f4]/15 h-80 relative shadow-2xl">
        <iframe
          title="Mapa Satelital de Achí Bolívar"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.903823485055!2d-74.5601264!3d8.5683935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5fbb4e81fa2c2f%3A0x6b77ecb476eb33c5!2sAch%C3%AD%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco`}
        />
        <div className="absolute bottom-3 left-3 bg-[#18181a]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#f8f7f4]/20 text-[11px] font-geist-mono text-[#FFD700]">
          BARRIO NUEVO ACHÍ • DPTO BOLÍVAR
        </div>
      </div>

    </section>
  );
};
