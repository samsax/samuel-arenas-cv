export interface CVData {
  personal: PersonalInfo;
  summary: {
    en: string;
    es: string;
  };
  experience: ExperienceItem[];
  skills: {
    advanced: SkillItem[];
    intermediate: SkillItem[];
    earlierCareer: string[];
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
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  githubPersonal: string;
  githubProfessional: string;
}

export interface ExperienceItem {
  company: string;
  client?: string;
  team?: string;
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
  startDate: string;
  endDate: string;
}

export interface SkillItem {
  name: string;
  years: number;
  highlight?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export interface Education {
  degree: {
    en: string;
    es: string;
  };
  institution: string;
  period: string;
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
