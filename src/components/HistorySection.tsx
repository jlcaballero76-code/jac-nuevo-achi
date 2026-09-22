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
      year: "2022 - 2026",
      title: "Nacimiento de Nuevo Achí",
      desc: "El Fondo Adaptación entrega más de 500 viviendas unifamiliares seguras en terreno alto no inundable, dando origen a la JAC Barrio Nuevo Achí."
    }
  ];

  return (
    <section id="historia" className="p-6 sm:p-10 border-b border-[#f8f7f4]/10 bg-[#111113] scroll-mt-6">
      
      {/* Section Header */}
      <div className="flex items-center gap-3.5 pb-6 mb-8 border-b border-[#f8f7f4]/10">
        <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 text-[#FFD700] flex items-center justify-center flex-shrink-0">
          <History className="w-5 h-5" />
        </div>
        <div>
          <div className="font-geist-mono text-[10px] uppercase tracking-widest text-[#FFD700]">
            SECCIÓN 07 • MEMORIA & IDENTIDAD ANFIBIA
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f8f7f4]">
            Cronista & Origen de Nuevo Achí
          </h2>
        </div>
      </div>

      {/* Narrative Intro Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-10">
        
        <div className="lg:col-span-7 space-y-3.5 text-xs sm:text-sm text-[#f8f7f4]/80 leading-relaxed font-inter">
          <p>
            El municipio de <strong>Achí</strong>, enclavado en la margen izquierda del <strong>Río Cauca</strong> en el departamento de Bolívar, posee una historia ligada a las dinámicas del agua, la agricultura y la pesca.
          </p>
          <p>
            En 2010 y 2011, el desbordamiento masivo de la ola invernal dejó a cientos de familias damnificadas en zonas de alto riesgo de inundación. Como respuesta de mitigación y adaptación al cambio climático, nació el macroproyecto de reasentamiento <strong>Urbanización Barrio Nuevo Achí</strong>.
          </p>
          <p>
            A la fecha se han entregado más de <strong className="text-white">500 viviendas unifamiliares</strong> de 47.72 m² en lotes de 89.25 m² en terreno alto seguro. Gran parte de sus habitantes son sujetos de reparación integral en el marco de la <strong className="text-[#FFD700]">Ley 1448 de 2011</strong>.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-xl overflow-hidden border border-[#f8f7f4]/15 group">
            <img
              src="/assets/achi_plaza_church_1790039911676.jpg"
              alt="Plaza y Templo Colonial de Achí Bolívar"
              className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-[#FFD700] font-bold text-xs flex items-center gap-1 font-geist-mono uppercase">
                <Landmark className="w-3.5 h-3.5" />
                Patrimonio Histórico & Cultural
              </span>
              <p className="text-xs text-white/80 mt-0.5 font-inter">
                Plaza municipal y parroquia de Achí, Bolívar. Cuna de tambora, pescadores y resiliencia.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Historical Timeline in Variation 3 industrial cells */}
      <div>
        <div className="font-geist-mono text-[10px] text-[#FFD700] uppercase tracking-wider mb-2 font-bold">
          LÍNEA DE TIEMPO OFICIAL
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {timelineMilestones.map((item, idx) => (
            <div key={idx} className="bg-[#18181a] p-4 rounded-xl border border-[#f8f7f4]/10 space-y-2">
              <div className="font-oswald text-xl font-bold text-[#FFD700]">
                {item.year}
              </div>
              <h4 className="font-oswald text-sm uppercase font-bold text-white leading-tight">
                {item.title}
              </h4>
              <p className="text-xs text-[#f8f7f4]/65 font-inter leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
