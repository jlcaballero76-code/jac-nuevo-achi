import React from 'react';
import { History, Waves, Landmark, Home, Users, Sparkles, MapPin, Calendar } from 'lucide-react';
import { ACHI_HISTORY } from '../data/jacData';

export const HistorySection: React.FC = () => {
  const timelineMilestones = [
    {
      year: "1770",
      title: "Fundación de Ojolargo",
      desc: "Primer asentamiento colonial con 471 habitantes registrados en el censo de 1779."
    },
    {
      year: "1814 - 1817",
      title: "Epidemia y Fundación de Achí",
      desc: "El cólera obliga el traslado hacia las orillas del Río Cauca. Bautizado por el fruto silvestre 'Achí' bajo la dirección de Estanislao Huertas Lorenzana."
    },
    {
      year: "1869",
      title: "Reconstrucción tras Sismo",
      desc: "Un terremoto destruye gran parte del poblado, reconstruido con la resiliencia comunitaria ribereña."
    },
    {
      year: "1934",
      title: "Erección como Municipio",
      desc: "El 24 de septiembre de 1934 se segrega de Majagual. Su primer alcalde fue Pedro Badrán Constantino."
    },
    {
      year: "2010 - 2011",
      title: "Catástrofe de la Ola Invernal",
      desc: "Inundaciones récord en La Mojana y la Depresión Momposina afectan a más de 748 familias de Achí."
    },
    {
      year: "2022 - 2024",
      title: "Nacimiento de Nuevo Achí",
      desc: "El Fondo Adaptación entrega más de 500 viviendas seguras de 47.72 m² en lotes de 89.25 m² en terreno alto no inundable."
    }
  ];

  return (
    <section id="historia" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 border-b-2 border-emerald-600 pb-4 mb-8">
        <div className="p-2.5 bg-amber-50 text-amber-800 rounded-xl">
          <History className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#003366] font-['Montserrat',sans-serif]">
            Reseña Histórica de Achí & Origen del Barrio Nuevo Achí
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Más de dos siglos de historia anfibia, resistencia ribereña y renacimiento comunitario
          </p>
        </div>
      </div>

      {/* Narrative Intro Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-10">
        
        <div className="lg:col-span-7 space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            El municipio de <strong>Achí (Bolívar)</strong> se ubica en el corazón de la <strong>Depresión Momposina</strong> y la subregión de <strong>La Mojana</strong>, sobre la margen izquierda del imponente Río Cauca. Es un territorio emblemático de la denominada <em>cultura anfibia</em> colombiana, donde las comunidades han forjado su identidad, economía de pesca y agricultura de arroz y maíz al compás de los ciclos del agua y la música de tambora y cumbia.
          </p>

          <p>
            La <strong>Urbanización Barrio Nuevo Achí</strong> nació como una gesta de dignidad y seguridad territorial tras la emergencia climática de la <strong>ola invernal 2010–2011</strong>. Con la intervención del Fondo Adaptación, se proyectó el reasentamiento de más de 748 familias en cotas seguras y no inundables.
          </p>

          <p>
            A la fecha se han entregado y habitado más de <strong>500 viviendas unifamiliares</strong> de 47.72 m² en lotes de 89.25 m², cada una con sala-comedor, cocina, baño, dos alcobas y patio posterior. Gran parte de sus habitantes son sujetos de reparación integral y víctimas del conflicto armado en el marco de la <strong>Ley 1448 de 2011</strong>.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
            <img
              src="/assets/achi_plaza_church_1790039911676.jpg"
              alt="Plaza y Templo Colonial de Achí Bolívar"
              className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-amber-300 font-bold text-xs flex items-center gap-1">
                <Landmark className="w-3.5 h-3.5" />
                Patrimonio Histórico & Cultural
              </span>
              <p className="text-xs text-slate-200 mt-0.5">
                Plaza municipal y parroquia de Achí, Bolívar. Cuna de tambora, pescadores y resiliencia.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Historical Timeline */}
      <div>
        <h3 className="text-sm font-bold text-[#003366] font-['Montserrat',sans-serif] uppercase tracking-wider mb-5 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-emerald-600" />
          Línea de Tiempo del Asentamiento
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {timelineMilestones.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] p-4 rounded-xl border border-slate-200 hover:border-[#003366] transition-colors relative"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-sm text-[#003366] font-['Montserrat',sans-serif] bg-blue-50 px-2 py-0.5 rounded">
                  {item.year}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Hito #{idx + 1}</span>
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1 leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Home className="w-4 h-4 text-[#008000]" />
          <span>Viviendas tipo: 47.72 m² construidos • Lotes de 89.25 m² • Unifamiliares</span>
        </div>
        <div className="flex items-center gap-2">
          <Waves className="w-4 h-4 text-sky-600" />
          <span>Margen izquierda del Río Cauca • Depresión Momposina</span>
        </div>
      </div>

    </section>
  );
};
