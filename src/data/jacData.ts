import { StrategicEje, ChronogramYear, OfficialDocumentItem, StatuteChapter } from '../types';

export const INSTITUTIONAL_INFO = {
  name: "Junta de Acción Comunal Barrio Nuevo Achí",
  shortName: "JAC Barrio Nuevo Achí",
  location: "Municipio de Achí, Departamento de Bolívar, Colombia",
  municipality: "Achí",
  department: "Bolívar",
  region: "Subregión La Mojana - Depresión Momposina (Margen izquierda del Río Cauca)",
  address: "Manzana 01 Bloque 13 Casa 15 (Sede Mz 1 Bl 18 Ca 03)",
  phoneMain: "(+57) 320 764 5119",
  phoneSecondary: "(+57) 317 353 9313",
  email: "jacnuevoachi@gmail.com",
  instagram: "@jacnuevoachi",
  instagramUrl: "https://www.instagram.com/jacnuevoachi",
  nit: "901784749-1",
  ruc: "5-5009-43192",
  legalResolution: "Resolución N° 768 del 05-Sept-2023 de Secretaría de Gobierno",
  modificationResolution: "Resolución N° 410 del 31-Jul-2024 de Secretaría de Gobierno",
  governingLaw: "Ley 2166 de 2021 de Acción Comunal",
  registeredAffiliates: 98,
  projectedFamilies: 706,
  deliveredHomes: "Más de 500 unidades (Fondo Adaptación)",
  coordinates: {
    lat: 8.574532616144996,
    lng: -74.56004785583337,
    elevation: "20 m.s.n.m."
  },
  boardMembers: [
    {
      role: "Presidente y Representante Legal",
      name: "Jorge Luis Caballero Dejanon",
      idDoc: "C.C. 9.292.195 de Turbaco/Bolívar",
      badge: "Representante Legal Principal"
    },
    {
      role: "Secretaria General",
      name: "Carolina Esther Galvis Muentes",
      idDoc: "C.C. 1.047.496.383 de Cartagena",
      badge: "Custodia del Libro de Afiliados"
    },
    {
      role: "Representante Legal Suplente",
      name: "Luis Alberto Márquez Sandoval",
      idDoc: "C.C. 10.880.383",
      badge: "Dignatario Registrado"
    },
    {
      role: "Miembro de Junta Directiva",
      name: "Edelfa Yanet Vergara Amaris",
      idDoc: "C.C. 33.209.244",
      badge: "Dignataria Registrada"
    }
  ],
  workingCommissions: [
    { name: "Educación y Cultura", icon: "GraduationCap", desc: "Formación ciudadana, eventos culturales de tambora y cumbia, derechos humanos y capacitaciones del SENA." },
    { name: "Obras y Servicios Públicos", icon: "HardHat", desc: "Veeduría y gestión de acueducto 100%, gas domiciliario, pavimentación y mitigación del riesgo hídrico." },
    { name: "Salud y Medio Ambiente", icon: "HeartPulse", desc: "Brigadas de salud, protección ecológica, reciclaje, jornadas contra quemas y saneamiento ambiental." },
    { name: "Recreación y Deportes", icon: "Trophy", desc: "Torneos comunitarios, juegos deportivos comunales, activación del futuro polideportivo y parques." },
    { name: "Juventud", icon: "Sparkles", desc: "Liderazgo juvenil, acceso a conectividad e internet comunal, orientación vocacional y proyectos de emprendimiento." },
    { name: "Desarrollo Social", icon: "Users", desc: "Atención prioritaria a adultos mayores, niñez, madres cabeza de familia y víctimas del conflicto armado (Ley 1448)." }
  ]
};

export const STRATEGIC_EJES: StrategicEje[] = [
  {
    id: 1,
    name: "Eje 1: Desarrollo Social y Comunitario",
    iconName: "Users",
    color: "#003366",
    bgGradient: "from-blue-50 to-indigo-50/50",
    accentBorder: "border-[#003366]",
    objective: "Consolidar el tejido comunitario y la infraestructura para el cuidado de la primera infancia y el encuentro vecinal.",
    projects: [
      "Gestión de un Centro de Desarrollo Infantil (CDI)",
      "Construcción y dotación integral del Salón Comunal"
    ],
    actions: [
      "Censo e identificación de población infantil y familias beneficiarias",
      "Formulación técnica bajo lineamientos normativos del ICBF",
      "Gestión de recursos ante Alcaldía de Achí, Gobernación de Bolívar y Sistema General de Regalías (SGR)"
    ],
    indicator: "1 CDI gestionado y 1 Salón Comunal edificado y equipado",
    targetCount: "Impacto a más de 300 niños y 706 familias",
    leadCommission: "Comisión de Desarrollo Social y Educación"
  },
  {
    id: 2,
    name: "Eje 2: Espacio Público y Recreación",
    iconName: "Trees",
    color: "#008000",
    bgGradient: "from-green-50 to-emerald-50/50",
    accentBorder: "border-[#008000]",
    objective: "Habilitar espacios deportivos, ecológicos y recreativos saludables para toda la comunidad de la urbanización.",
    projects: [
      "Parques Infantiles, Ecológicos y Biosaludables",
      "Construcción de Polideportivo Comunitario Multifuncional"
    ],
    actions: [
      "Levantamiento topográfico del lote disponible en la urbanización",
      "Diseño arquitectónico participativo con la comunidad",
      "Gestión ante entes deportivos municipales, departamentales y alianzas público-privadas"
    ],
    indicator: "3 parques construidos y 1 polideportivo en pleno funcionamiento",
    targetCount: "3 Parques Temáticos + 1 Polideportivo",
    leadCommission: "Comisión de Recreación y Deportes"
  },
  {
    id: 3,
    name: "Eje 3: Servicios Públicos y Calidad de Vida",
    iconName: "Flame",
    color: "#0284c7",
    bgGradient: "from-sky-50 to-blue-50/50",
    accentBorder: "border-sky-600",
    objective: "Garantizar servicios públicos domiciliarios dignos, continuos y seguros que erradiquen el uso de leña contaminante.",
    projects: [
      "Mejoramiento y presurización continua del sistema de agua potable",
      "Implementación de redes y acometidas de Gas Natural Domiciliario"
    ],
    actions: [
      "Diagnóstico técnico y topográfico del acueducto actual",
      "Articulación con empresas de gas y Ministerio de Minas y Energía",
      "Estructuración de proyectos para subsidios de conexión integral a 706 viviendas"
    ],
    indicator: "Agua potable al 100% de cobertura y 706 viviendas conectadas a gas",
    targetCount: "706 Viviendas conectadas",
    leadCommission: "Comisión de Obras y Servicios Públicos"
  },
  {
    id: 4,
    name: "Eje 4: Energía y Sostenibilidad",
    iconName: "SunMedium",
    color: "#eab308",
    bgGradient: "from-amber-50 to-yellow-50/50",
    accentBorder: "border-amber-500",
    objective: "Impulsar la transición energética justa y limpia con autogeneración solar fotovoltaica para abaratar el costo de vida.",
    projects: [
      "Transición energética comunitaria (Granja Solar Fotovoltaica)",
      "Inclusión de afiliados en la convocatoria nacional Colombia Solar"
    ],
    actions: [
      "Caracterización y censo de consumo energético del barrio",
      "Formulación de proyecto ante el FENOGE y MinMinas",
      "Capacitación de jóvenes comunales en montaje y mantenimiento de paneles solares"
    ],
    indicator: "Granja solar aprobada y 70% de viviendas con suministro solar",
    targetCount: "70% de autarquía limpia",
    leadCommission: "Comisión Empresarial y de Medio Ambiente"
  }
];

export const CHRONOGRAM_YEARS: ChronogramYear[] = [
  {
    year: "Año 1",
    period: "2024 - 2025",
    focus: "Diagnóstico, Formulación y Articulación",
    status: "Completado",
    activities: [
      "Actualización del Libro de Afiliados oficial (98 miembros fundadores activos).",
      "Elaboración del Informe Técnico Oficial de Servicios Públicos y Gas Natural (marzo 2026).",
      "Presentación institucional ante la Secretaría de Gobierno y Alcaldía de Achí (Res. 410 de 2024).",
      "Identificación y delimitación topográfica de predios para CDI, salón comunal y parques."
    ]
  },
  {
    year: "Año 2",
    period: "2025 - 2026",
    focus: "Gestión Institucional y Consecución de Fondos",
    status: "En Ejecución",
    activities: [
      "Radicación de proyectos ante Ministerio de Minas y Energía (Colombia Solar y Gas Domiciliario).",
      "Convocatoria comunitaria y actualización del censo de beneficiarios con enfoque Ley 1448.",
      "Gestión de alianzas con la Gobernación de Bolívar e ICBF para el Centro de Desarrollo Infantil.",
      "Rendición anual de cuentas y asambleas ordinarias estatutarias."
    ]
  },
  {
    year: "Año 3",
    period: "2026 - 2027",
    focus: "Ejecución de Obras e Instalaciones Prioritarias",
    status: "Programado",
    activities: [
      "Construcción del Salón Comunal de la JAC y adecuación del primer parque infantil.",
      "Inicio del tendido de tubería para gas natural domiciliario en los bloques residenciales.",
      "Implementación de la primera fase de paneles solares fotovoltaicos comunitarios.",
      "Brigadas de salud y torneos deportivos comunales interveredales."
    ]
  },
  {
    year: "Año 4",
    period: "2027 - 2028",
    focus: "Consolidación, Evaluación y Sostenibilidad",
    status: "Programado",
    activities: [
      "Entrega del Polideportivo Comunal funcional y culminación de las 706 conexiones de gas.",
      "Operación sostenible de la Granja Solar Comunitaria bajo supervisión comunal.",
      "Evaluación del impacto social y de la calidad de vida de las familias beneficiarias.",
      "Empalme administrativo y elecciones generales de dignatarios conforme a la Ley 2166."
    ]
  }
];

export const OFFICIAL_DOCUMENTS: OfficialDocumentItem[] = [
  {
    id: "plan-cuatrienal",
    title: "Plan de Acción Cuatrienal (2024 - 2028)",
    category: "Planificación",
    resolutionOrCode: "Aprobado por Asamblea General",
    date: "Septiembre 2023 / Actualizado 2024",
    pages: 3,
    summary: "Documento guía con los 4 ejes estratégicos: Desarrollo Social (CDI y Salón), Espacio Público (3 Parques y Polideportivo), Servicios Públicos (Agua 100% y Gas a 706 viviendas) y Transición Energética (Colombia Solar).",
    fileLabel: "Plan_de_Accion_Cuatrienal_JAC_Barrio_Nuevo_Achi.pdf",
    type: "pdf"
  },
  {
    id: "estatutos-jac",
    title: "Estatutos Oficiales JAC Barrio Nuevo Achí",
    category: "Legal",
    resolutionOrCode: "Ley 2166 de 2021 / Acta N° 001",
    date: "03 de Septiembre de 2023",
    pages: 64,
    summary: "Texto estatutario completo de 132 artículos. Define la estructura de gobierno comunal, funciones del Presidente, Secretaria, Tesorero, Fiscal, 6 Comisiones de Trabajo, Comisión Empresarial, régimen económico y libros oficiales.",
    fileLabel: "Estatutos_Oficiales_JAC_Barrio_Nuevo_Achi.pdf",
    type: "estatutos"
  },
  {
    id: "informe-tecnico",
    title: "Informe Técnico de Caracterización y Servicios Públicos",
    category: "Técnico",
    resolutionOrCode: "Radicado Oficial - Marzo 19 de 2026",
    date: "19 de Marzo de 2026",
    pages: 6,
    summary: "Sustentación técnica del proyecto Urbanización Nuevo Achí originado por el Fondo Adaptación tras la ola invernal 2010-2011. Justifica la necesidad urgente de gas natural y la granja solar comunitaria.",
    fileLabel: "Informe_Tecnico_Servicios_Publicos_Nuevo_Achi_2026.pdf",
    type: "informe"
  },
  {
    id: "rut-dian",
    title: "Registro Único Tributario (RUT) - DIAN",
    category: "Institucional",
    resolutionOrCode: "NIT: 901784749-1 / Formulario 141118031521",
    date: "22 de Agosto de 2024",
    pages: 4,
    summary: "Certificado oficial de la Dirección de Impuestos y Aduanas Nacionales de Colombia. Razón Social: JUNTA DE ACCION COMUNAL DEL BARRIO NUEVO ACHI, Actividad Económica 9499, Representante Legal Jorge Luis Caballero Dejanon.",
    fileLabel: "RUT_DIAN_901784749-1_JAC_Barrio_Nuevo_Achi.pdf",
    type: "rut"
  },
  {
    id: "res-reconocimiento",
    title: "Resoluciones de Personería Jurídica y Reconocimiento",
    category: "Legal",
    resolutionOrCode: "Res. N° 768 (2023) y Res. N° 410 (2024)",
    date: "31 de Julio de 2024",
    pages: 1,
    summary: "Actos administrativos expedidos por la Secretaría de Gobierno de la Alcaldía de Achí reconociendo la personería jurídica e inscribiendo los dignatarios oficiales.",
    fileLabel: "Resolucion_410_2024_SecGobierno_Achi.pdf",
    type: "pdf"
  },
  {
    id: "ruc-mininterior",
    title: "Certificado Registro Único Comunal (RUC)",
    category: "Institucional",
    resolutionOrCode: "RUC N° 5-5009-43192",
    date: "Vigente MinInterior",
    pages: 1,
    summary: "Inscripción en el Registro Único Comunal del Ministerio del Interior de Colombia para acceder a la contratación comunal directa y convocatorias nacionales.",
    fileLabel: "Certificado_RUC_MinInterior_5-5009-43192.pdf",
    type: "pdf"
  }
];

export const STATUTE_CHAPTERS: StatuteChapter[] = [
  {
    id: "tit1",
    title: "Título I: Naturaleza, Principios y Afiliados",
    articlesCount: 15,
    summary: "Establece la personería jurídica como expresión social autónoma, defensora de los DDHH, la convivencia pacífica y el desarrollo sostenible.",
    highlights: [
      { articleNumber: 2, title: "Naturaleza Jurídica", description: "Expresión autónoma, multiétnica, multicultural y solidaria que promueve la paz y la democracia participativa." },
      { articleNumber: 6, title: "Objetivos de la JAC", description: "Crear procesos de formación, gestionar proyectos autónomos, celebrar convenios con el Estado y entidades solidarias." },
      { articleNumber: 10, title: "Requisitos de Afiliación", description: "Ser persona natural mayor de 14 años, residir en el territorio de la JAC y poseer documento de identidad." },
      { articleNumber: 12, title: "Derechos de los Afiliados", description: "Voz y voto en asamblea, elegir y ser elegido, fiscalizar la gestión económica y participar en comisiones." },
      { articleNumber: 13, title: "Deberes de los Afiliados", description: "Inscribirse activamente en comisiones de trabajo, asistir a asambleas y mantener actualizados sus datos en el libro." }
    ]
  },
  {
    id: "tit2",
    title: "Título II: Órganos de Gobierno y Dignatarios",
    articlesCount: 78,
    summary: "Estructura interna: Asamblea General (máxima autoridad), Junta Directiva, 6 Comisiones de Trabajo, Comisión de Convivencia y Fiscalía.",
    highlights: [
      { articleNumber: 17, title: "Asamblea General de Afiliados", description: "Órgano supremo integrado por todos los afiliados inscritos con derecho a deliberar y decidir." },
      { articleNumber: 38, title: "Junta Directiva", description: "Conformada por Presidente, Vicepresidente, Tesorero y Secretaria para un período de 4 años." },
      { articleNumber: 43, title: "Funciones del Presidente", description: "Representación legal de la entidad, ordenación de gastos dentro del presupuesto y ejecución de acuerdos." },
      { articleNumber: 46, title: "Funciones de la Secretaria", description: "Custodiar el libro oficial de afiliados, emitir certificados y comunicar convocatorias formales." },
      { articleNumber: 54, title: "Comisiones de Trabajo", description: "Seis comisiones permanentes obligatorias integradas por mínimo tres afiliados para orientar la ejecución de los planes." },
      { articleNumber: 62, title: "La Fiscalía", description: "Órgano de control interno y veeduría económica que supervisa los libros contables e inversiones de la JAC." }
    ]
  },
  {
    id: "tit3",
    title: "Título III: Comisión Empresarial y Proyectos Productivos",
    articlesCount: 15,
    summary: "Regula las iniciativas económicas solidarias, granjas solares y proyectos rentables comunitarios.",
    highlights: [
      { articleNumber: 79, title: "Creación de la Comisión Empresarial", description: "Comité técnico y operativo que vela por la viabilidad y sostenibilidad de iniciativas comerciales de la comunidad." },
      { articleNumber: 80, title: "Composición", description: "Integrada por 3 afiliados electos con perfil productivo más el Presidente, Vicepresidente y Tesorero (6 miembros)." },
      { articleNumber: 87, title: "Presentación de Proyectos Productivos", description: "Cualquier afiliado o directiva puede formular proyectos con presupuesto, viabilidad y retorno social." },
      { articleNumber: 93, title: "Participación de los Afiliados", description: "Las empresas comunales deben generar empleo local, estímulos y redistribución de beneficios sociales en el barrio." }
    ]
  },
  {
    id: "tit4",
    title: "Título IV: Régimen Económico, Presupuesto y Libros",
    articlesCount: 24,
    summary: "Normas de transparencia contable, manejo de fondos, presupuesto anual y los 6 libros oficiales registrados.",
    highlights: [
      { articleNumber: 116, title: "Libros Obligatorios", description: "Libro de Registro de Afiliados, Libro de Actas de Asamblea, Libro de Tesorería, Libro de Inventarios, Libro de Reuniones Directivas y de Convivencia." },
      { articleNumber: 119, title: "Libro de Tesorería", description: "Registro estricto de entradas, salidas y saldos respaldados siempre por comprobantes y firmas conjuntas con la Presidencia." },
      { articleNumber: 124, title: "Patrimonio Comunitario", description: "Los bienes y recursos pertenecen a la comunidad y son inalienables sin autorización de la Asamblea General." }
    ]
  }
];

export const ACHI_HISTORY = {
  foundation: "1770 (Ojolargo) / 1815-1817 (Achí)",
  municipalityDate: "24 de Septiembre de 1934",
  firstMayor: "Pedro Badrán Constantino",
  population: "Aproximadamente 23.000 habitantes (70-80% rural)",
  geography: "Subregión La Mojana, Depresión Momposina, margen izquierda del Río Cauca a 20 m.s.n.m.",
  culturalRoots: "Cultura anfibia ribereña, arraigo campesino, música tradicional de tambora, chalupa y cumbia caribeña.",
  neighborhoodOrigin: "La Urbanización Nuevo Achí fue desarrollada por el Fondo Adaptación como respuesta estratégica a la catástrofe de la ola invernal 2010-2011. El proyecto contempla más de 748 viviendas unifamiliares construidas de 47.72 m² en lotes de 89.25 m², de las cuales más de 500 fueron entregadas y habitadas entre 2022 y 2024.",
  specialFocus: "Gran porcentaje de los pobladores son sujetos de reparación integral y víctimas del conflicto armado bajo la Ley 1448 de 2011, lo que exige atención estatal prioritaria en servicios domiciliarios y programas productivos."
};
