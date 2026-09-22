export interface AffiliateRegistration {
  id: string;
  fullName: string;
  documentType: 'CC' | 'TI' | 'CE' | 'OTRO';
  documentNumber: string;
  phone: string;
  email?: string;
  address: string;
  workCommission: string;
  familyMembersCount: number;
  isConflictVictim: boolean;
  populationGroup?: string;
  registrationDate: string;
  verificationCode: string;
}

export interface StrategicEje {
  id: number;
  name: string;
  iconName: string;
  color: string;
  bgGradient: string;
  accentBorder: string;
  objective: string;
  projects: string[];
  actions: string[];
  indicator: string;
  targetCount: string;
  leadCommission: string;
}

export interface ChronogramYear {
  year: string;
  period: string;
  focus: string;
  activities: string[];
  status: 'Completado' | 'En Ejecución' | 'Programado';
}

export interface OfficialDocumentItem {
  id: string;
  title: string;
  category: 'Institucional' | 'Legal' | 'Planificación' | 'Técnico';
  resolutionOrCode: string;
  date: string;
  pages: number;
  summary: string;
  fileLabel: string;
  type: 'pdf' | 'rut' | 'estatutos' | 'informe';
}

export interface StatuteChapter {
  id: string;
  title: string;
  articlesCount: number;
  summary: string;
  highlights: {
    articleNumber: number;
    title: string;
    description: string;
  }[];
}
