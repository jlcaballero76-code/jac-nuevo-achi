import React, { useState, useEffect } from 'react';
import { UserCheck, CheckCircle2, FileDown, Printer, Users, Search, Download, AlertCircle, ShieldCheck, QrCode, RefreshCw } from 'lucide-react';
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
    populationGroup: "Campesino / Productor",
    registrationDate: "2023-09-06",
    verificationCode: "JAC-NA-1088038-2023"
  }
];

export const AffiliateRegistrationForm: React.FC = () => {
  const [registrations, setRegistrations] = useState<AffiliateRegistration[]>([]);
  const [submittedCert, setSubmittedCert] = useState<AffiliateRegistration | null>(null);
  const [showAdminList, setShowAdminList] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [commissionFilter, setCommissionFilter] = useState<string>('Todas');

  // Form states
  const [fullName, setFullName] = useState('');
  const [documentType, setDocumentType] = useState<'CC' | 'TI' | 'CE' | 'OTRO'>('CC');
  const [documentNumber, setDocumentNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [workCommission, setWorkCommission] = useState('');
  const [familyMembersCount, setFamilyMembersCount] = useState('4');
  const [isConflictVictim, setIsConflictVictim] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('jac_nuevo_achi_affiliates');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setRegistrations(parsed);
          return;
        }
      }
      // If empty, initialize with official demo records
      setRegistrations(INITIAL_DEMO_RECORDS);
      localStorage.setItem('jac_nuevo_achi_affiliates', JSON.stringify(INITIAL_DEMO_RECORDS));
    } catch {
      setRegistrations(INITIAL_DEMO_RECORDS);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert('Por favor acepte la declaración estatutaria para continuar.');
      return;
    }

    setIsSubmitting(true);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const code = `JAC-NA-${documentNumber.slice(-4) || 'AFIL'}-${randomSuffix}`;
    const newRecord: AffiliateRegistration = {
      id: `REG-${Date.now().toString().slice(-6)}`,
      fullName: fullName.trim(),
      documentType,
      documentNumber: documentNumber.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      address: address.trim(),
      workCommission,
      familyMembersCount: parseInt(familyMembersCount) || 1,
      isConflictVictim,
      populationGroup: isConflictVictim ? "Víctima Ley 1448" : "Comunidad General",
      registrationDate: new Date().toISOString().split('T')[0],
      verificationCode: code
    };

    setTimeout(() => {
      const updated = [newRecord, ...registrations];
      setRegistrations(updated);
      try {
        localStorage.setItem('jac_nuevo_achi_affiliates', JSON.stringify(updated));
      } catch (err) {
        console.error("Storage error", err);
      }

      setSubmittedCert(newRecord);
      setSuccessToast(true);
      setIsSubmitting(false);

      // Reset fields
      setFullName('');
      setDocumentNumber('');
      setPhone('');
      setEmail('');
      setAddress('');
      setWorkCommission('');
      setIsConflictVictim(false);
      setAcceptTerms(false);
    }, 600);
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  const handleExportCSV = () => {
    const headers = ["ID", "Nombre Completo", "Tipo Doc", "Documento", "Telefono", "Email", "Direccion", "Comision", "Personas Hogar", "Victima Conflicto", "Fecha Registro", "Codigo Verificacion"];
    const rows = registrations.map(r => [
      r.id,
      `"${r.fullName}"`,
      r.documentType,
      `"${r.documentNumber}"`,
      `"${r.phone}"`,
      `"${r.email || ''}"`,
      `"${r.address}"`,
      `"${r.workCommission}"`,
      r.familyMembersCount,
      r.isConflictVictim ? "SI" : "NO",
      r.registrationDate,
      r.verificationCode
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Libro_Afiliados_JAC_Barrio_Nuevo_Achi_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredRegistrations = registrations.filter(r => {
    const matchesSearch = r.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.documentNumber.includes(searchTerm) ||
                          r.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesComm = commissionFilter === 'Todas' || r.workCommission === commissionFilter;
    return matchesSearch && matchesComm;
  });

  return (
    <section id="beneficiarios" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#008000] pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-green-50 text-[#008000] rounded-xl">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] font-['Montserrat',sans-serif]">
              Formulario de Actualización de Beneficiarios y Afiliados
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Conforme a la Ley 2166 de 2021 y Artículos 9, 10, 14 y 117 de los Estatutos Oficiales de la JAC
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowAdminList(!showAdminList)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 self-start sm:self-auto cursor-pointer"
        >
          <Users className="w-3.5 h-3.5 text-[#003366]" />
          <span>{showAdminList ? 'Ocultar Libro de Afiliados' : `Consultar Libro (${registrations.length})`}</span>
        </button>
      </div>

      {/* Admin Book Viewer / Export */}
      {showAdminList && (
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 mb-8 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="font-bold text-sm text-[#003366] font-['Montserrat',sans-serif] flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-600" />
                Libro Digital de Registro de Afiliados (Vista Institucional)
              </h3>
              <p className="text-xs text-slate-500">
                Registros custodiados por la Secretaría General de la JAC (Art. 117 Estatutos)
              </p>
            </div>
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#008000] text-white hover:bg-green-700 shadow-xs cursor-pointer self-start sm:self-auto"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar Libro a Excel/CSV</span>
            </button>
          </div>

          {/* Search and Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre, documento o manzana..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
              />
            </div>
            <div>
              <select
                value={commissionFilter}
                onChange={(e) => setCommissionFilter(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
              >
                <option value="Todas">Todas las comisiones de trabajo</option>
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
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-[#003366] text-white">
                <tr>
                  <th className="p-2.5 font-bold">Afiliado / Nombre</th>
                  <th className="p-2.5 font-bold">Documento</th>
                  <th className="p-2.5 font-bold">Dirección</th>
                  <th className="p-2.5 font-bold">Comisión</th>
                  <th className="p-2.5 font-bold">Teléfono</th>
                  <th className="p-2.5 font-bold text-center">Ley 1448</th>
                  <th className="p-2.5 font-bold text-center">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRegistrations.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-4 text-center text-slate-400">
                      No se encontraron registros con los filtros indicados.
                    </td>
                  </tr>
                ) : (
                  filteredRegistrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-800">{reg.fullName}</td>
                      <td className="p-2.5 font-mono text-slate-600">{reg.documentType} {reg.documentNumber}</td>
                      <td className="p-2.5 text-slate-600 truncate max-w-xs">{reg.address}</td>
                      <td className="p-2.5">
                        <span className="px-2 py-0.5 rounded bg-blue-50 text-[#003366] font-medium text-[10px]">
                          {reg.workCommission}
                        </span>
                      </td>
                      <td className="p-2.5 text-slate-600">{reg.phone}</td>
                      <td className="p-2.5 text-center">
                        {reg.isConflictVictim ? (
                          <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px]">Sí</span>
                        ) : (
                          <span className="text-slate-400 text-[10px]">No</span>
                        )}
                      </td>
                      <td className="p-2.5 text-center">
                        <button
                          onClick={() => setSubmittedCert(reg)}
                          className="px-2 py-1 text-[10px] font-bold text-[#003366] bg-slate-100 hover:bg-slate-200 rounded cursor-pointer"
                        >
                          Ver Carnet
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Interactive Registration Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left / Top: The Form */}
        <div className="lg:col-span-7">
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            Diligencie este formulario para mantener actualizado el <strong>Libro de Afiliados</strong> de la JAC del Barrio Nuevo Achí conforme a la Ley 2166 de 2021. La inscripción es gratuita y garantiza su participación con voz y voto en las asambleas generales y su postulación a programas como <strong>Colombia Solar</strong> y subsidios de <strong>Gas Domiciliario</strong>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            
            {/* Row 1: Nombre & Documento */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-7">
                <label className="block font-bold text-slate-800 mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej. Juan Pérez Martínez"
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none bg-[#fdfdfd]"
                />
              </div>

              <div className="sm:col-span-5 grid grid-cols-5 gap-2">
                <div className="col-span-2">
                  <label className="block font-bold text-slate-800 mb-1">Tipo *</label>
                  <select
                    value={documentType}
                    onChange={(e: any) => setDocumentType(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] outline-none bg-[#fdfdfd]"
                  >
                    <option value="CC">C.C.</option>
                    <option value="TI">T.I.</option>
                    <option value="CE">C.E.</option>
                  </select>
                </div>
                <div className="col-span-3">
                  <label className="block font-bold text-slate-800 mb-1">Número *</label>
                  <input
                    type="text"
                    required
                    value={documentNumber}
                    onChange={(e) => setDocumentNumber(e.target.value)}
                    placeholder="Ej. 12345678"
                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] outline-none bg-[#fdfdfd]"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Teléfono & Correo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. 320 764 5119"
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] outline-none bg-[#fdfdfd]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Correo Electrónico (Opcional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ej. vecino@gmail.com"
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] outline-none bg-[#fdfdfd]"
                />
              </div>
            </div>

            {/* Row 3: Dirección & Núcleo Familiar */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-8">
                <label className="block font-bold text-slate-800 mb-1">
                  Dirección en el Barrio Nuevo Achí *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Ej. Manzana 01 Bloque 13 Casa 15"
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] outline-none bg-[#fdfdfd]"
                />
              </div>

              <div className="sm:col-span-4">
                <label className="block font-bold text-slate-800 mb-1">
                  Personas en el Hogar
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={familyMembersCount}
                  onChange={(e) => setFamilyMembersCount(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] outline-none bg-[#fdfdfd]"
                />
              </div>
            </div>

            {/* Row 4: Comisión de Trabajo */}
            <div>
              <label className="block font-bold text-slate-800 mb-1">
                Comisión de Trabajo de Interés * (Obligatorio Art. 47 Estatutos)
              </label>
              <select
                required
                value={workCommission}
                onChange={(e) => setWorkCommission(e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] outline-none bg-[#fdfdfd]"
              >
                <option value="">Seleccione una comisión de trabajo...</option>
                <option value="Educacion y Cultura">Educación y Cultura (Formación, artes, cumbia y tambora)</option>
                <option value="Obras y Servicios Publicos">Obras y Servicios Públicos (Agua, gas natural, infraestructura)</option>
                <option value="Salud y Medio Ambiente">Salud y Medio Ambiente (Salud preventiva, arbolado y no quemas)</option>
                <option value="Recreacion y Deportes">Recreación y Deportes (Polideportivo, torneos y juegos comunales)</option>
                <option value="Juventud">Juventud (Consejo de juventudes, conectividad y liderazgo)</option>
                <option value="Desarrollo Social">Desarrollo Social (Atención a niñez, mujer, adultos mayores)</option>
              </select>
            </div>

            {/* Differential Ley 1448 Checkbox */}
            <div className="bg-amber-50/80 p-3 rounded-lg border border-amber-200 flex items-start gap-2.5 text-xs text-amber-950">
              <input
                type="checkbox"
                id="conflictVictim"
                checked={isConflictVictim}
                onChange={(e) => setIsConflictVictim(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded mt-0.5 cursor-pointer"
              />
              <label htmlFor="conflictVictim" className="cursor-pointer leading-tight">
                <strong>Enfoque Diferencial:</strong> Pertenezco a población sujeta de especial protección constitucional o soy víctima del conflicto armado en el marco de la <strong>Ley 1448 de 2011</strong>.
              </label>
            </div>

            {/* Statutory Acceptance */}
            <div className="flex items-start gap-2.5 text-xs text-slate-600">
              <input
                type="checkbox"
                id="terms"
                required
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 text-[#003366] rounded mt-0.5 cursor-pointer"
              />
              <label htmlFor="terms" className="cursor-pointer leading-tight">
                Declaro bajo juramento residir en el Barrio Nuevo Achí, ser mayor de 14 años y comprometerme a cumplir los estatutos comunales y la Ley 2166 de 2021.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-xl font-bold text-sm bg-[#008000] text-white hover:bg-green-700 active:scale-[0.99] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Registrando en Libro Oficial...</span>
                </>
              ) : (
                <>
                  <UserCheck className="w-4 h-4" />
                  <span>Enviar Actualización y Generar Comprobante</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Digital Certificate / Carnet Comunal Preview */}
        <div className="lg:col-span-5">
          <div className="bg-gradient-to-b from-slate-50 to-blue-50/40 p-5 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#003366] font-['Montserrat',sans-serif]">
                Comprobante Digital de Afiliación
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                Ley 2166 de 2021
              </span>
            </div>

            {submittedCert ? (
              <div className="bg-white p-4 rounded-xl border-2 border-dashed border-[#003366]/30 shadow-xs space-y-3 print:shadow-none">
                
                {/* Certificate Header */}
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <img src="/logo_jac.svg" alt="Logo JAC" className="w-12 h-12 object-contain" />
                  <div>
                    <h4 className="font-black text-xs text-[#003366] leading-tight font-['Montserrat',sans-serif]">
                      JAC BARRIO NUEVO ACHÍ
                    </h4>
                    <p className="text-[10px] text-slate-500">Constancia Oficial de Registro Comunal</p>
                    <p className="text-[9px] font-mono text-emerald-700 font-bold">{submittedCert.verificationCode}</p>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-xs space-y-1.5 text-slate-700">
                  <p><span className="text-slate-400">Afiliado:</span> <strong className="text-slate-900">{submittedCert.fullName}</strong></p>
                  <p><span className="text-slate-400">Identificación:</span> <strong className="font-mono">{submittedCert.documentType} {submittedCert.documentNumber}</strong></p>
                  <p><span className="text-slate-400">Dirección:</span> <span>{submittedCert.address}</span></p>
                  <p><span className="text-slate-400">Comisión:</span> <span className="font-semibold text-[#003366]">{submittedCert.workCommission}</span></p>
                  <p><span className="text-slate-400">Hogar:</span> <span>{submittedCert.familyMembersCount} personas</span></p>
                  <p><span className="text-slate-400">Fecha:</span> <span>{submittedCert.registrationDate}</span></p>
                  {submittedCert.isConflictVictim && (
                    <div className="mt-1 p-1.5 bg-amber-50 rounded text-[10px] text-amber-900 border border-amber-200 font-medium">
                      ✓ Priorizado bajo Enfoque Diferencial Ley 1448
                    </div>
                  )}
                </div>

                {/* Signatures Representation */}
                <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-center text-[9px] text-slate-500">
                  <div>
                    <div className="font-bold text-slate-800">Jorge Luis Caballero</div>
                    <div className="text-[8px]">Presidente & Repr. Legal</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Carolina Galvis M.</div>
                    <div className="text-[8px]">Secretaria General</div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={handlePrintCertificate}
                    className="flex-1 py-1.5 px-2 rounded-lg bg-[#003366] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-blue-900 transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Imprimir / Guardar</span>
                  </button>
                  <button
                    onClick={() => setSubmittedCert(null)}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 px-4 text-slate-500 space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-slate-800 text-xs font-['Montserrat',sans-serif]">
                  Comprobante Oficial al Instante
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Al completar y enviar el formulario se emitirá su credencial digital con código de verificación QR y firma comunal para postularse a subsidios de gas y energía solar.
                </p>
                <div className="pt-2 text-[11px] text-emerald-700 font-semibold">
                  Total afiliados vigentes en sistema: <strong>{registrations.length}</strong>
                </div>
              </div>
            )}

            {/* Legal Notice */}
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 leading-normal flex items-start gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
              <span>
                Los datos suministrados están amparados por la Ley 1581 de 2012 de Protección de Datos Personales y serán de uso exclusivo de la Junta de Acción Comunal.
              </span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
