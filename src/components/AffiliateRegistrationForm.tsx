import React, { useState, useEffect } from 'react';
import { 
  UserCheck, 
  CheckCircle2, 
  FileDown, 
  Printer, 
  Users, 
  Search, 
  Download, 
  AlertCircle, 
  ShieldCheck, 
  QrCode, 
  RefreshCw 
} from 'lucide-react';
import { AffiliateRegistration } from '../types';
import { INSTITUTIONAL_INFO } from '../data/jacData';

const INITIAL_DEMO_RECORDS: AffiliateRegistration[] = [
  {
    id: "REG-001",
    fullName: "Jorge Luis Caballero Dejanon",
    documentType: "CC",
    documentNumber: "9292195",
    phone: "3207645119",
    email: "jacnuevoachi@gmail.com",
    address: "Manzana 01 Bloque 18 Casa 03",
    workCommission: "Desarrollo Social",
    familyMembersCount: 4,
    isConflictVictim: true,
    populationGroup: "Víctima Ley 1448 / Dignatario",
    registrationDate: "2023-09-03",
    verificationCode: "JAC-NA-9292195-2023"
  },
  {
    id: "REG-002",
    fullName: "Carolina Esther Galvis Muentes",
    documentType: "CC",
    documentNumber: "1047496383",
    phone: "3173539313",
    email: "carolina.galvis@gmail.com",
    address: "Manzana 01 Bloque 13 Casa 15",
    workCommission: "Educacion y Cultura",
    familyMembersCount: 3,
    isConflictVictim: true,
    populationGroup: "Víctima Ley 1448 / Dignataria",
    registrationDate: "2023-09-03",
    verificationCode: "JAC-NA-1047496-2023"
  },
  {
    id: "REG-003",
    fullName: "Edelfa Yanet Vergara Amaris",
    documentType: "CC",
    documentNumber: "33209244",
    phone: "3104567890",
    address: "Manzana 01 Bloque 12 Casa 04",
    workCommission: "Salud y Medio Ambiente",
    familyMembersCount: 5,
    isConflictVictim: true,
    populationGroup: "Madre cabeza de hogar",
    registrationDate: "2023-09-06",
    verificationCode: "JAC-NA-3320924-2023"
  },
  {
    id: "REG-004",
    fullName: "Luis Alberto Márquez Sandoval",
    documentType: "CC",
    documentNumber: "10880383",
    phone: "3145678912",
    address: "Manzana 02 Bloque 05 Casa 10",
    workCommission: "Obras y Servicios Publicos",
    familyMembersCount: 4,
    isConflictVictim: false,
    populationGroup: "Comunidad General",
    registrationDate: "2023-09-10",
    verificationCode: "JAC-NA-1088038-2023"
  },
  {
    id: "REG-005",
    fullName: "Luz Dary Cardona Meza",
    documentType: "CC",
    documentNumber: "45567891",
    phone: "3201234567",
    address: "Manzana 03 Bloque 02 Casa 07",
    workCommission: "Juventud",
    familyMembersCount: 3,
    isConflictVictim: true,
    populationGroup: "Víctima Ley 1448",
    registrationDate: "2023-10-15",
    verificationCode: "JAC-NA-4556789-2023"
  }
];

export const AffiliateRegistrationForm: React.FC = () => {
  const [registrations, setRegistrations] = useState<AffiliateRegistration[]>(() => {
    const saved = localStorage.getItem('jac_nuevo_achi_affiliates_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_DEMO_RECORDS;
      }
    }
    return INITIAL_DEMO_RECORDS;
  });

  const [fullName, setFullName] = useState('');
  const [documentType, setDocumentType] = useState<'CC' | 'TI' | 'CE'>('CC');
  const [documentNumber, setDocumentNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [workCommission, setWorkCommission] = useState('');
  const [familyMembersCount, setFamilyMembersCount] = useState<number>(4);
  const [isConflictVictim, setIsConflictVictim] = useState<boolean>(true);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(true);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedCert, setSubmittedCert] = useState<AffiliateRegistration | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [commissionFilter, setCommissionFilter] = useState('Todas');
  const [showAdminList, setShowAdminList] = useState(false);

  useEffect(() => {
    localStorage.setItem('jac_nuevo_achi_affiliates_v2', JSON.stringify(registrations));
  }, [registrations]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !documentNumber || !phone || !address || !workCommission) {
      alert("Por favor diligencie todos los campos obligatorios (*).");
      return;
    }

    setIsSubmitting(true);

    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const cleanDoc = documentNumber.replace(/\D/g, '');
    const verifCode = `JAC-NA-${cleanDoc.slice(-7)}-${now.getFullYear()}`;

    const newRecord: AffiliateRegistration = {
      id: `REG-${String(registrations.length + 1).padStart(3, '0')}`,
      fullName: fullName.trim(),
      documentType,
      documentNumber: cleanDoc,
      phone: phone.trim(),
      email: email.trim() || undefined,
      address: address.trim(),
      workCommission,
      familyMembersCount: Number(familyMembersCount) || 1,
      isConflictVictim,
      populationGroup: isConflictVictim ? "Víctima Ley 1448 / Protección Constitucional" : "Residente General",
      registrationDate: dateStr,
      verificationCode: verifCode
    };

    setTimeout(() => {
      setRegistrations(prev => [newRecord, ...prev]);
      setSubmittedCert(newRecord);
      setIsSubmitting(false);

      // Reset form fields
      setFullName('');
      setDocumentNumber('');
      setPhone('');
      setEmail('');
      setAddress('');
      setWorkCommission('');
    }, 600);
  };

  const handleExportCSV = () => {
    const headers = ["ID", "Nombres Completos", "Tipo Doc", "Documento", "Telefono", "Correo", "Direccion", "Comision de Trabajo", "Personas Hogar", "Victima Conflicto", "Fecha Registro", "Codigo Verificacion"];
    const rows = registrations.map(r => [
      r.id,
      `"${r.fullName}"`,
      r.documentType,
      r.documentNumber,
      r.phone,
      r.email || '',
      `"${r.address}"`,
      `"${r.workCommission}"`,
      r.familyMembersCount,
      r.isConflictVictim ? "SI" : "NO",
      r.registrationDate,
      r.verificationCode
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Libro_Afiliados_JAC_Barrio_Nuevo_Achi_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  const filteredRegistrations = registrations.filter(r => {
    const matchesSearch = r.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.documentNumber.includes(searchTerm) ||
                          r.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesComm = commissionFilter === 'Todas' || r.workCommission === commissionFilter;
    return matchesSearch && matchesComm;
  });

  return (
    <section id="beneficiarios" className="p-6 sm:p-10 border-b border-[#f8f7f4]/10 bg-[#111113] scroll-mt-6">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#f8f7f4]/10">
        <div>
          <div className="font-geist-mono text-[10px] uppercase tracking-widest text-[#FFD700]">
            SECCIÓN 05 • CARGA DE DATOS / AFILIACIÓN
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f8f7f4]">
            Registro de Afiliados & Censo Territorial
          </h2>
          <p className="text-xs text-[#f8f7f4]/60 mt-1 font-inter">
            Conforme a la Ley 2166 de 2021 y Artículos 9, 10, 14 y 117 de los Estatutos Oficiales de la JAC
          </p>
        </div>

        <button
          onClick={() => setShowAdminList(!showAdminList)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-oswald uppercase tracking-wider border border-[#f8f7f4]/20 transition-colors cursor-pointer self-start sm:self-auto"
        >
          <Users className="w-4 h-4 text-[#FFD700]" />
          <span>{showAdminList ? 'Ocultar Libro de Afiliados' : `Consultar Libro (${registrations.length})`}</span>
        </button>
      </div>

      {/* Admin Book Table Drawer */}
      {showAdminList && (
        <div className="bg-[#18181a] border border-[#f8f7f4]/10 rounded-xl p-5 mb-8 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="font-oswald font-bold text-sm uppercase text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-[#008000]" />
                Libro Digital de Registro de Afiliados (Custodia Secretaría General)
              </h3>
              <p className="text-xs text-[#f8f7f4]/50 font-geist-mono">
                Art. 117 Estatutos • Registros oficiales vigentes
              </p>
            </div>
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#008000] text-white hover:bg-green-700 font-oswald text-xs uppercase tracking-wider cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar Libro CSV</span>
            </button>
          </div>

          {/* Search bar inside drawer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#f8f7f4]/40" />
              <input
                type="text"
                placeholder="Buscar por nombre, cédula o manzana..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-black/40 border border-[#f8f7f4]/15 rounded text-xs text-white placeholder-[#f8f7f4]/30 outline-none focus:border-[#FFD700]"
              />
            </div>
            <div>
              <select
                value={commissionFilter}
                onChange={(e) => setCommissionFilter(e.target.value)}
                className="w-full px-3 py-2 bg-black/40 border border-[#f8f7f4]/15 rounded text-xs text-white outline-none focus:border-[#FFD700]"
              >
                <option value="Todas">Todas las Comisiones</option>
                <option value="Educacion y Cultura">Educación y Cultura</option>
                <option value="Obras y Servicios Publicos">Obras y Servicios Públicos</option>
                <option value="Salud y Medio Ambiente">Salud y Medio Ambiente</option>
                <option value="Recreacion y Deportes">Recreación y Deportes</option>
                <option value="Juventud">Juventud</option>
                <option value="Desarrollo Social">Desarrollo Social</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#f8f7f4]/15 font-geist-mono text-[10px] text-[#f8f7f4]/50 uppercase">
                  <th className="py-2 px-3">Código</th>
                  <th className="py-2 px-3">Afiliado</th>
                  <th className="py-2 px-3">Documento</th>
                  <th className="py-2 px-3">Dirección</th>
                  <th className="py-2 px-3">Comisión</th>
                  <th className="py-2 px-3">Teléfono</th>
                  <th className="py-2 px-3">Enfoque</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f8f7f4]/10">
                {filteredRegistrations.map((reg) => (
                  <tr key={reg.id} className="hover:bg-white/[0.03]">
                    <td className="py-2.5 px-3 font-geist-mono text-[#FFD700] text-[11px]">{reg.id}</td>
                    <td className="py-2.5 px-3 font-bold text-white">{reg.fullName}</td>
                    <td className="py-2.5 px-3 font-geist-mono text-[#f8f7f4]/70">{reg.documentType} {reg.documentNumber}</td>
                    <td className="py-2.5 px-3 text-[#f8f7f4]/70">{reg.address}</td>
                    <td className="py-2.5 px-3 text-[#008000]">{reg.workCommission}</td>
                    <td className="py-2.5 px-3 font-geist-mono text-[#f8f7f4]/70">{reg.phone}</td>
                    <td className="py-2.5 px-3">
                      {reg.isConflictVictim ? (
                        <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] font-bold">
                          Ley 1448
                        </span>
                      ) : (
                        <span className="text-[#f8f7f4]/40 text-[10px]">General</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Main Grid: Form Left, Digital Certificate Preview Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Registration Form in Variation 3 industrial style */}
        <div className="lg:col-span-7 bg-[#18181a] border border-[#f8f7f4]/10 rounded-xl p-6 sm:p-8">
          <div className="font-geist-mono text-[10px] text-[#FFD700] uppercase tracking-wider mb-2 font-bold">
            FORMULARIO OFICIAL EN LÍNEA
          </div>
          <h3 className="font-oswald text-xl uppercase font-bold text-white mb-6">
            Inscripción y Actualización de Afiliados
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label className="font-geist-mono text-[10px] text-[#f8f7f4]/60 uppercase block mb-1.5">
                Nombre Completo del Residente *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ej. Carolina Galvis Muentes"
                className="w-full px-3.5 py-2.5 bg-black/40 border border-[#f8f7f4]/15 rounded text-xs text-white placeholder-[#f8f7f4]/30 outline-none focus:border-[#FFD700] font-inter"
              />
            </div>

            {/* Document ID & Type */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-4">
                <label className="font-geist-mono text-[10px] text-[#f8f7f4]/60 uppercase block mb-1.5">
                  Tipo Doc *
                </label>
                <select
                  value={documentType}
                  onChange={(e: any) => setDocumentType(e.target.value)}
                  className="w-full px-3 py-2.5 bg-black/40 border border-[#f8f7f4]/15 rounded text-xs text-white outline-none focus:border-[#FFD700]"
                >
                  <option value="CC">C.C. Cédula</option>
                  <option value="TI">T.I. Identidad</option>
                  <option value="CE">C.E. Extranjería</option>
                </select>
              </div>

              <div className="sm:col-span-8">
                <label className="font-geist-mono text-[10px] text-[#f8f7f4]/60 uppercase block mb-1.5">
                  Número de Documento *
                </label>
                <input
                  type="text"
                  required
                  value={documentNumber}
                  onChange={(e) => setDocumentNumber(e.target.value)}
                  placeholder="Ej. 1047496383"
                  className="w-full px-3.5 py-2.5 bg-black/40 border border-[#f8f7f4]/15 rounded text-xs text-white placeholder-[#f8f7f4]/30 outline-none focus:border-[#FFD700] font-geist-mono"
                />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-geist-mono text-[10px] text-[#f8f7f4]/60 uppercase block mb-1.5">
                  Contacto Móvil / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. +57 320 764 5119"
                  className="w-full px-3.5 py-2.5 bg-black/40 border border-[#f8f7f4]/15 rounded text-xs text-white placeholder-[#f8f7f4]/30 outline-none focus:border-[#FFD700] font-geist-mono"
                />
              </div>

              <div>
                <label className="font-geist-mono text-[10px] text-[#f8f7f4]/60 uppercase block mb-1.5">
                  Correo Electrónico (Opcional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ej. afiliado@gmail.com"
                  className="w-full px-3.5 py-2.5 bg-black/40 border border-[#f8f7f4]/15 rounded text-xs text-white placeholder-[#f8f7f4]/30 outline-none focus:border-[#FFD700]"
                />
              </div>
            </div>

            {/* Address & Family Count */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-8">
                <label className="font-geist-mono text-[10px] text-[#f8f7f4]/60 uppercase block mb-1.5">
                  Dirección en Barrio Nuevo Achí *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Ej. Manzana 01 Bloque 13 Casa 15"
                  className="w-full px-3.5 py-2.5 bg-black/40 border border-[#f8f7f4]/15 rounded text-xs text-white placeholder-[#f8f7f4]/30 outline-none focus:border-[#FFD700]"
                />
              </div>

              <div className="sm:col-span-4">
                <label className="font-geist-mono text-[10px] text-[#f8f7f4]/60 uppercase block mb-1.5">
                  Personas Hogar
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={familyMembersCount}
                  onChange={(e) => setFamilyMembersCount(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-black/40 border border-[#f8f7f4]/15 rounded text-xs text-white outline-none focus:border-[#FFD700]"
                />
              </div>
            </div>

            {/* Work Commission */}
            <div>
              <label className="font-geist-mono text-[10px] text-[#f8f7f4]/60 uppercase block mb-1.5">
                Comisión Estatutaria de Interés * (Art. 47 Estatutos)
              </label>
              <select
                required
                value={workCommission}
                onChange={(e) => setWorkCommission(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-black/40 border border-[#f8f7f4]/15 rounded text-xs text-white outline-none focus:border-[#FFD700]"
              >
                <option value="">Seleccione una comisión estatutaria...</option>
                <option value="Obras y Servicios Publicos">Obras y Servicios Públicos</option>
                <option value="Salud y Medio Ambiente">Salud y Medio Ambiente</option>
                <option value="Juventud">Juventud</option>
                <option value="Educacion y Cultura">Educación y Cultura</option>
                <option value="Recreacion y Deportes">Recreación y Deportes</option>
                <option value="Desarrollo Social">Desarrollo Social</option>
              </select>
            </div>

            {/* Conflict Victim Checkbox */}
            <div className="p-3 rounded bg-white/[0.03] border border-white/10 flex items-start gap-3">
              <input
                type="checkbox"
                id="conflictVictim"
                checked={isConflictVictim}
                onChange={(e) => setIsConflictVictim(e.target.checked)}
                className="w-4 h-4 text-[#FFD700] rounded mt-0.5 cursor-pointer accent-[#FFD700]"
              />
              <label htmlFor="conflictVictim" className="text-xs text-[#f8f7f4]/80 cursor-pointer leading-relaxed">
                <strong className="text-[#FFD700]">Enfoque Diferencial:</strong> Pertenezco a población sujeta de especial protección constitucional o soy víctima del conflicto armado en el marco de la <strong>Ley 1448 de 2011</strong>.
              </label>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 text-xs text-[#f8f7f4]/60">
              <input
                type="checkbox"
                id="terms"
                required
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 rounded mt-0.5 cursor-pointer accent-[#FFD700]"
              />
              <label htmlFor="terms" className="cursor-pointer leading-tight">
                Declaro bajo gravedad de juramento residir en el Barrio Nuevo Achí y comprometerme a cumplir los estatutos comunales y la Ley 2166 de 2021.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FFD700] hover:bg-white text-black px-6 py-3 font-oswald font-bold text-xs uppercase tracking-wider transition-all transform active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Registrando...</span>
                </>
              ) : (
                <>
                  <span>Ejecutar Registro</span>
                  <UserCheck className="w-4 h-4" />
                </>
              )}
            </button>

          </form>
        </div>

        {/* Right: Digital Certificate Preview Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#18181a] border border-[#f8f7f4]/10 rounded-xl p-6 sticky top-6 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#f8f7f4]/10">
              <div className="font-geist-mono text-[10px] text-[#008000] uppercase font-bold">
                ESTADO: CONSTANCIA OFICIAL
              </div>
              <span className="font-geist-mono text-[10px] text-[#f8f7f4]/50">
                LEY 2166 / 2021
              </span>
            </div>

            {submittedCert ? (
              <div className="bg-[#111113] p-5 rounded-lg border border-[#FFD700]/40 space-y-3.5 print:bg-white print:text-black">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <img
                    src="/nuevo simple.png"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== '/logo_jac.svg') target.src = '/logo_jac.svg';
                    }}
                    alt="Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h4 className="font-oswald text-sm uppercase font-bold text-white">
                      JAC Barrio Nuevo Achí
                    </h4>
                    <p className="text-[10px] font-geist-mono text-[#FFD700]">
                      {submittedCert.verificationCode}
                    </p>
                  </div>
                </div>

                <div className="text-xs space-y-1.5 font-inter text-[#f8f7f4]/80">
                  <p><span className="text-[#f8f7f4]/40 font-geist-mono text-[10px] block">AFILIADO TITULAR:</span> <strong className="text-white font-medium">{submittedCert.fullName}</strong></p>
                  <p><span className="text-[#f8f7f4]/40 font-geist-mono text-[10px] block">DOCUMENTO:</span> <span className="font-geist-mono text-white">{submittedCert.documentType} {submittedCert.documentNumber}</span></p>
                  <p><span className="text-[#f8f7f4]/40 font-geist-mono text-[10px] block">DIRECCIÓN:</span> <span>{submittedCert.address}</span></p>
                  <p><span className="text-[#f8f7f4]/40 font-geist-mono text-[10px] block">COMISIÓN ASIGNADA:</span> <strong className="text-[#008000]">{submittedCert.workCommission}</strong></p>
                  <p><span className="text-[#f8f7f4]/40 font-geist-mono text-[10px] block">FECHA DE EMISIÓN:</span> <span>{submittedCert.registrationDate}</span></p>
                </div>

                <div className="pt-3 border-t border-white/10 flex gap-2">
                  <button
                    onClick={handlePrintCertificate}
                    className="flex-1 py-2 rounded bg-[#FFD700] text-black font-oswald text-xs font-bold uppercase hover:bg-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Imprimir Comprobante</span>
                  </button>
                  <button
                    onClick={() => setSubmittedCert(null)}
                    className="px-3 py-2 rounded bg-white/10 text-white font-oswald text-xs uppercase hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-[#FFD700] flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-oswald text-base uppercase font-bold text-white">
                  Comprobante Inmediato
                </h4>
                <p className="text-xs text-[#f8f7f4]/60 leading-relaxed max-w-xs mx-auto font-inter">
                  Al completar el formulario se expedirá su constancia digital con firma estatutaria y código de verificación para postularse a subsidios de gas y energía solar.
                </p>
                <div className="font-geist-mono text-[11px] text-[#008000] pt-2">
                  Total afiliados vigentes: <strong>{registrations.length}</strong>
                </div>
              </div>
            )}

            <div className="text-[11px] font-geist-mono text-[#f8f7f4]/40 pt-2 border-t border-white/10">
              LEY 1581 DE 2012 • PROTECCIÓN DE DATOS PERSONALES
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
