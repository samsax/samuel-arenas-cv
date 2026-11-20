export type YearMonth = `${number}-${number}`;
export type RoleEndDate = YearMonth | 'present';

export interface CVData {
  personal: PersonalInfo;
  summary: {
    en: string;
    es: string;
  };
  experience: ExperienceItem[];
  skills: {
    now: string[];
    earlier: string[];
  };
  certifications: Certification[];
  education: Education;
  languages: Language[];
}

export interface PersonalInfo {
  fullName: string;
  title: {
    en: string;
    es: string;
  };
  email: string;
  phone: string;
  linkedin: string;
  githubPersonal: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  roles: Role[];
  overview?: {
    en: string;
    es: string;
  };
  achievements: {
    en: string[];
    es: string[];
  };
}

export interface Role {
  title: {
    en: string;
    es: string;
  };
  startDate: YearMonth;
  endDate: RoleEndDate;
}

export interface Certification {
  name: string;
  issuer?: string;
  issuedAt?: YearMonth;
}

export interface Education {
  degree: {
    en: string;
    es: string;
  };
  institution: string;
  startDate: YearMonth;
  endDate: YearMonth;
}

export interface Language {
  name: {
    en: string;
    es: string;
  };
  level: {
    en: string;
    es: string;
  };
}
