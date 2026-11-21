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
  hobbies: {
    en: string[];
    es: string[];
  };
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
  /** ISO year-month, e.g. `2024-04`. */
  startDate: string;
  /** ISO year-month, or `null` for the current role. */
  endDate: string | null;
}

export interface Certification {
  name: string;
  issuer?: string;
  /** ISO year-month. */
  issuedAt?: string;
}

export interface Education {
  degree: {
    en: string;
    es: string;
  };
  institution: string;
  /** ISO year-month. */
  startDate: string;
  /** ISO year-month. */
  endDate: string;
  note: {
    en: string;
    es: string;
  };
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
