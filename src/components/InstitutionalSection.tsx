import React from 'react';
import { 
  Building2, 
  FileCheck, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  Clock, 
  Briefcase, 
  GraduationCap, 
  HardHat, 
  HeartPulse, 
  Trophy, 
  Sparkles, 
  CheckCircle2,
  ExternalLink,
  Instagram
} from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/jacData';

interface InstitutionalSectionProps {
  onOpenRegister: () => void;
}

export const InstitutionalSection: React.FC<InstitutionalSectionProps> = ({ onOpenRegister }) => {
  const getCommissionIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'HardHat': return HardHat;
      case 'HeartPulse': return HeartPulse;
      case 'Trophy': return Trophy;
      case 'Sparkles': return Sparkles;
      default: return Users;
    }
  };

  return (
    <section id="nosotros" className="p-6 sm:p-10 border-b border-[#f8f7f4]/10 bg-[#111113] scroll-mt-6">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#f8f7f4]/10">
        <div className="flex items-center gap-3.5">
          <img
            src="/nuevo simple.png"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== '/logo_jac.svg') target.src = '/logo_jac.svg';
            }}
            alt="Logo JAC"
            className="w-12 h-12 rounded-full p-1 bg-white border border-[#FFD700] object-contain flex-shrink-0"
          />
          <div>
            <div className="font-geist-mono text-[10px] uppercase tracking-widest text-[#FFD700]">
              SECCIÓN 02 • REGISTRO Y GOBIERNO
            </div>
            <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f8f7f4]">
              Información Institucional & Legal
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={INSTITUTIONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-pink-400 text-xs font-geist-mono border border-pink-500/30 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@jacnuevoachi</span>
          </a>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#008000]/15 text-[#008000] text-xs font-geist-mono border border-[#008000]/30 font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENTIDAD COMUNAL DE 1ER GRADO</span>
          </div>
        </div>
      </div>

      {/* 4 Cards Grid - Variation 3 Industrial Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        
        {/* Card 1: Personería */}
        <div className="bg-[#18181a] p-5 rounded-xl border border-[#f8f7f4]/10 hover:border-[#FFD700]/50 transition-colors">
          <div className="flex items-center gap-2 mb-3 text-[#FFD700]">
            <Award className="w-4 h-4 flex-shrink-0" />
            <h3 className="font-oswald font-bold text-sm uppercase tracking-wider text-white">
              Personería Jurídica
            </h3>
          </div>
          <div className="text-xs space-y-1.5 text-[#f8f7f4]/70 font-inter">
            <p><strong className="text-white font-medium">Resolución Inicial:</strong> N° 768 (05-Sept-2023)</p>
            <p><strong className="text-[#FFD700] font-medium">Modificación Vigente:</strong> Res. 410 (31-Jul-2024)</p>
            <p><strong className="text-white font-medium">Emisor:</strong> Sec. de Gobierno de Achí</p>
            <p><strong className="text-white font-medium">Marco:</strong> Ley 2166 de 2021</p>
          </div>
        </div>

        {/* Card 2: Registros */}
        <div className="bg-[#18181a] p-5 rounded-xl border border-[#f8f7f4]/10 hover:border-[#008000]/50 transition-colors">
          <div className="flex items-center gap-2 mb-3 text-[#008000]">
            <FileCheck className="w-4 h-4 flex-shrink-0" />
            <h3 className="font-oswald font-bold text-sm uppercase tracking-wider text-white">
              Registros Tributarios
            </h3>
          </div>
          <div className="text-xs space-y-1.5 text-[#f8f7f4]/70 font-inter">
            <p><strong className="text-white font-medium">RUT DIAN:</strong> <span className="font-geist-mono text-[#FFD700]">{INSTITUTIONAL_INFO.nit}</span></p>
            <p><strong className="text-white font-medium">RUC MinInterior:</strong> <span className="font-geist-mono text-white">{INSTITUTIONAL_INFO.ruc}</span></p>
            <p><strong className="text-white font-medium">Actividad:</strong> 9499 (Asociaciones)</p>
            <p><strong className="text-white font-medium">Afiliados Iniciales:</strong> 98 ciudadanos</p>
          </div>
        </div>

        {/* Card 3: Representación */}
        <div className="bg-[#18181a] p-5 rounded-xl border border-[#f8f7f4]/10 hover:border-[#FFD700]/50 transition-colors">
          <div className="flex items-center gap-2 mb-3 text-[#FFD700]">
            <Users className="w-4 h-4 flex-shrink-0" />
            <h3 className="font-oswald font-bold text-sm uppercase tracking-wider text-white">
              Representación Legal
            </h3>
          </div>
          <div className="text-xs space-y-2 text-[#f8f7f4]/70 font-inter">
            <div>
              <span className="text-[10px] font-geist-mono text-[#FFD700] block uppercase">Presidente</span>
              <strong className="text-white text-xs block">Jorge Luis Caballero Dejanon</strong>
              <span className="font-geist-mono text-[11px] text-[#f8f7f4]/50">C.C. 9.292.195 de Turbaco</span>
            </div>
            <div className="pt-1.5 border-t border-white/5">
              <span className="text-[10px] font-geist-mono text-[#008000] block uppercase">Secretaria General</span>
              <strong className="text-white text-xs block">Carolina Esther Galvis Muentes</strong>
              <span className="font-geist-mono text-[11px] text-[#f8f7f4]/50">C.C. 1.047.496.383 de Cartagena</span>
            </div>
          </div>
        </div>

        {/* Card 4: Sede */}
        <div className="bg-[#18181a] p-5 rounded-xl border border-[#f8f7f4]/10 hover:border-sky-500/50 transition-colors">
          <div className="flex items-center gap-2 mb-3 text-sky-400">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <h3 className="font-oswald font-bold text-sm uppercase tracking-wider text-white">
              Sede & Despacho
            </h3>
          </div>
          <div className="text-xs space-y-1.5 text-[#f8f7f4]/70 font-inter">
            <p><strong className="text-white font-medium">Ubicación:</strong> Mz 01 Bl 13 Ca 15 / Bl 18 Ca 03</p>
            <p><strong className="text-white font-medium">Línea Directa:</strong> <a href="tel:3207645119" className="text-[#FFD700] font-mono hover:underline">{INSTITUTIONAL_INFO.phoneMain}</a></p>
            <p className="truncate"><strong className="text-white font-medium">Correo:</strong> <a href={`mailto:${INSTITUTIONAL_INFO.email}`} className="text-white hover:underline">{INSTITUTIONAL_INFO.email}</a></p>
            <p><strong className="text-white font-medium">Instagram:</strong> <a href={INSTITUTIONAL_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-400 font-mono hover:underline">{INSTITUTIONAL_INFO.instagram}</a></p>
          </div>
        </div>

      </div>

      {/* Dignatarios Registrados */}
      <div className="bg-[#18181a] rounded-xl p-5 sm:p-6 mb-8 border border-[#f8f7f4]/10">
        <div className="font-geist-mono text-[10px] text-[#FFD700] uppercase tracking-wider mb-1">
          CUADRO DE MANDO COMUNAL
        </div>
        <h3 className="font-oswald text-lg font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
          <Users className="w-4 h-4 text-[#008000]" />
          Dignatarios Registrados en Acta Oficial y Formulario DIAN 001
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {INSTITUTIONAL_INFO.boardMembers.map((member, idx) => (
            <div key={idx} className="bg-[#111113] p-4 rounded-lg border border-[#f8f7f4]/10 text-xs space-y-1">
              <span className="inline-block px-2 py-0.5 rounded bg-[#FFD700]/10 text-[#FFD700] font-geist-mono text-[10px] uppercase font-bold">
                {member.role}
              </span>
              <h4 className="font-bold text-white text-sm leading-snug">{member.name}</h4>
              <p className="text-[#f8f7f4]/50 font-geist-mono text-[11px]">{member.idDoc}</p>
              <p className="text-[#008000] text-[11px] font-medium pt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{member.badge}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Las 6 Comisiones de Trabajo */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <div className="font-geist-mono text-[10px] text-[#008000] uppercase tracking-wider">
              ART. 54 LEY 2166 DE 2021
            </div>
            <h3 className="font-oswald text-xl font-bold uppercase tracking-wider text-white">
              Comisiones de Trabajo Estatutarias
            </h3>
          </div>
          <button
            onClick={onOpenRegister}
            className="text-xs font-oswald uppercase tracking-wider text-[#FFD700] hover:text-white flex items-center gap-1 cursor-pointer"
          >
            <span>Inscribirme en una comisión</span> &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {INSTITUTIONAL_INFO.workingCommissions.map((comm, idx) => {
            const Icon = getCommissionIcon(comm.icon);
            return (
              <div
                key={idx}
                className="bg-[#18181a] p-4 rounded-xl border border-[#f8f7f4]/10 hover:border-[#FFD700] transition-colors flex gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 text-[#FFD700] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-oswald font-bold text-sm uppercase tracking-wide text-white">
                    {comm.name}
                  </h4>
                  <p className="text-xs text-[#f8f7f4]/60 mt-1 leading-relaxed font-inter">
                    {comm.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
