import React from 'react';
import { MapPin, Navigation, ExternalLink, Compass, ShieldCheck, Phone, Mail } from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/jacData';

export const LocationSection: React.FC = () => {
  return (
    <section id="mapa" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#003366] pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-50 text-[#003366] rounded-xl">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] font-['Montserrat',sans-serif]">
              Ubicación Geográfica y Territorial
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Coordenadas de referencia en la Urbanización Barrio Nuevo Achí, Municipio de Achí (Bolívar)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://maps.app.goo.gl/fMNhHfQRAFQwFL988"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#003366] text-white hover:bg-blue-900 transition-colors shadow-xs cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Abrir en Google Maps</span>
            <ExternalLink className="w-3 h-3 text-slate-300" />
          </a>
        </div>
      </div>

      {/* Coordinate & Landmark Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5 text-xs">
        <div className="bg-[#f8fafc] p-3.5 rounded-xl border border-slate-200 flex items-start gap-2.5">
          <Compass className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 block">Coordenadas Exactas (Presidencia):</strong>
            <span className="font-mono text-slate-600">
              Latitud: {INSTITUTIONAL_INFO.coordinates.lat.toFixed(6)}, Longitud: {INSTITUTIONAL_INFO.coordinates.lng.toFixed(6)}
            </span>
          </div>
        </div>

        <div className="bg-[#f8fafc] p-3.5 rounded-xl border border-slate-200 flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 block">Dirección Oficial en Barrio:</strong>
            <span className="text-slate-600">
              {INSTITUTIONAL_INFO.address}
            </span>
          </div>
        </div>

        <div className="bg-[#f8fafc] p-3.5 rounded-xl border border-slate-200 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 block">Jurisdicción Territorial:</strong>
            <span className="text-slate-600">
              {INSTITUTIONAL_INFO.region}
            </span>
          </div>
        </div>
      </div>

      {/* Embedded Map Container */}
      <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-300 shadow-inner relative mb-4">
        <iframe
          src="https://maps.google.com/maps?q=8.574532616144996,-74.56004785583337&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Mapa de Ubicación JAC Barrio Nuevo Achí"
          className="w-full h-full"
        />
      </div>

      {/* Satellite Links and IGAC Map Reference */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-600">
        <p>
          Referencia de acceso: Vía fluvial por el Río Cauca o conexión terrestre desde Magangué y Majagual.
        </p>

        <div className="flex items-center gap-2">
          <a
            href="https://www.colombiaenmapas.gov.co/?e=-74.57448499427548,8.569069194276546,-74.54517381415995,8.580038814005833,4686&b=igacsatelital&u=13006&t=29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300 font-semibold transition-colors"
          >
            <span>Ver en Colombia en Mapas (IGAC Satelital)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

    </section>
  );
};
