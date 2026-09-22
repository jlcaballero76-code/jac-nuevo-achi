import React from 'react';
import { Building2, FileCheck, Users, Phone, Mail, MapPin, Award, ShieldCheck, BookOpen, Clock, Briefcase, GraduationCap, HardHat, HeartPulse, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
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
    <section id="nosotros" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-emerald-600 pb-4 mb-8">
        <div className="flex items-center gap-3">
          <img
            src="/nuevo simple.png"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== '/logo_jac.svg') target.src = '/logo_jac.svg';
            }}
            alt="Logo JAC Barrio Nuevo Achí"
            className="w-12 h-12 rounded-full p-0.5 bg-white border border-amber-400 shadow-sm object-contain flex-shrink-0"
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] font-['Montserrat',sans-serif]">
              Información Institucional y Legal
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Constitución formal, personería jurídica y órganos directivos acreditados
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={INSTITUTIONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-semibold border border-pink-200 hover:bg-pink-100 transition-colors"
          >
            <span>Instagram: @jacnuevoachi</span>
          </a>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Entidad Comunal de Primer Grado</span>
          </div>
        </div>
      </div>

      {/* 4 Cards Official Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        
        {/* Card 1: Personería Jurídica */}
        <div className="bg-[#f4f7f6] p-5 rounded-xl border-l-4 border-[#003366] hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2 text-[#003366]">
            <Award className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <h3 className="font-bold text-sm uppercase tracking-wide">Personería Jurídica</h3>
          </div>
          <div className="text-xs space-y-1.5 text-slate-600">
            <p><strong className="text-slate-800">Resolución Inicial:</strong> N° 768 del 05-Sept-2023</p>
            <p><strong className="text-slate-800">Modificación Vigente:</strong> Res. N° 410 del 31-Jul-2024</p>
            <p><strong className="text-slate-800">Entidad Emisora:</strong> Secretaría de Gobierno de Achí</p>
            <p><strong className="text-slate-800">Marco Normativo:</strong> Ley 2166 de 2021</p>
          </div>
        </div>

        {/* Card 2: Registros Oficiales */}
        <div className="bg-[#f4f7f6] p-5 rounded-xl border-l-4 border-[#008000] hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2 text-[#008000]">
            <FileCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <h3 className="font-bold text-sm uppercase tracking-wide">Registros Oficiales</h3>
          </div>
          <div className="text-xs space-y-1.5 text-slate-600">
            <p><strong className="text-slate-800">RUT DIAN:</strong> <span className="font-mono font-bold text-slate-900">{INSTITUTIONAL_INFO.nit}</span></p>
            <p><strong className="text-slate-800">RUC MinInterior:</strong> <span className="font-mono font-bold text-slate-900">{INSTITUTIONAL_INFO.ruc}</span></p>
            <p><strong className="text-slate-800">Actividad DIAN:</strong> 9499 (Asociaciones)</p>
            <p><strong className="text-slate-800">Afiliados Iniciales:</strong> {INSTITUTIONAL_INFO.registeredAffiliates} personas</p>
          </div>
        </div>

        {/* Card 3: Representación Legal */}
        <div className="bg-[#f4f7f6] p-5 rounded-xl border-l-4 border-amber-500 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2 text-slate-800">
            <Users className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <h3 className="font-bold text-sm uppercase tracking-wide">Representación Legal</h3>
          </div>
          <div className="text-xs space-y-1.5 text-slate-600">
            <p>
              <strong className="text-slate-800">Presidente:</strong><br />
              <span className="font-semibold text-slate-900">Jorge Luis Caballero Dejanon</span><br />
              <span className="text-[11px] text-slate-500">C.C. 9.292.195 de Turbaco</span>
            </p>
            <p className="pt-1 border-t border-slate-200">
              <strong className="text-slate-800">Secretaria General:</strong><br />
              <span className="font-semibold text-slate-900">Carolina Esther Galvis Muentes</span><br />
              <span className="text-[11px] text-slate-500">C.C. 1.047.496.383 de Cartagena</span>
            </p>
          </div>
        </div>

        {/* Card 4: Sede y Contacto */}
        <div className="bg-[#f4f7f6] p-5 rounded-xl border-l-4 border-sky-600 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2 text-slate-800">
            <MapPin className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <h3 className="font-bold text-sm uppercase tracking-wide">Contacto Directo</h3>
          </div>
          <div className="text-xs space-y-1.5 text-slate-600">
            <p>
              <strong className="text-slate-800">Sede Comunal:</strong><br />
              Manzana 01 Bloque 13 Casa 15 / Bloque 18 Casa 03
            </p>
            <p>
              <strong className="text-slate-800">Teléfonos:</strong><br />
              <a href="tel:3207645119" className="text-[#003366] font-bold hover:underline">{INSTITUTIONAL_INFO.phoneMain}</a> / {INSTITUTIONAL_INFO.phoneSecondary}
            </p>
            <p className="truncate">
              <strong className="text-slate-800">Correo:</strong><br />
              <a href={`mailto:${INSTITUTIONAL_INFO.email}`} className="text-[#003366] font-medium hover:underline">
                {INSTITUTIONAL_INFO.email}
              </a>
            </p>
          </div>
        </div>

      </div>

      {/* Dignatarios y Junta Directiva Completa */}
      <div className="bg-slate-50 rounded-xl p-5 mb-10 border border-slate-200">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#003366] mb-3 flex items-center gap-2 font-['Montserrat',sans-serif]">
          <Users className="w-4 h-4 text-emerald-600" />
          Dignatarios Registrados en Acta Oficial y Formulario DIAN 001
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {INSTITUTIONAL_INFO.boardMembers.map((member, idx) => (
            <div key={idx} className="bg-white p-3.5 rounded-lg border border-slate-200 text-xs shadow-2xs">
              <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-[#003366] font-bold text-[10px] uppercase mb-1">
                {member.role}
              </span>
              <h4 className="font-bold text-slate-900 text-sm leading-snug">{member.name}</h4>
              <p className="text-slate-500 font-mono text-[11px] mt-0.5">{member.idDoc}</p>
              <p className="text-emerald-700 text-[11px] font-medium mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 inline" />
                {member.badge}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Las 6 Comisiones de Trabajo Estatutarias */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base font-bold text-[#003366] font-['Montserrat',sans-serif]">
              Comisiones de Trabajo Estatutarias (Art. 54 - Ley 2166 de 2021)
            </h3>
            <p className="text-xs text-slate-500">
              Cada afiliado de la JAC debe inscribirse y participar activamente en al menos una comisión de trabajo
            </p>
          </div>
          <button
            onClick={onOpenRegister}
            className="self-start sm:self-auto text-xs font-bold text-[#008000] hover:text-green-800 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Inscribirme en una comisión</span> &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INSTITUTIONAL_INFO.workingCommissions.map((comm, idx) => {
            const Icon = getCommissionIcon(comm.icon);
            return (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-[#003366] hover:shadow-md transition-all flex gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#003366] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{comm.name}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{comm.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Attention Hours Bar */}
      <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#003366]" />
          <span><strong>Horario de atención comunal:</strong> Sábados y Domingos de 9:00 AM a 1:00 PM (Art. 46 Estatutos)</span>
        </div>
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-600" />
          <span>Libros oficiales registrados ante la entidad de inspección, control y vigilancia</span>
        </div>
      </div>
    </section>
  );
};

function CheckCircleIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
