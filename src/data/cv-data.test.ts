import { describe, expect, it } from 'vitest';
import { collectStrings, findForbiddenTerms } from '@/test/public-copy';
import { cvData } from './cv-data';

const ISO_YEAR_MONTH = /^\d{4}-(0[1-9]|1[0-2])$/;

describe('cvData public copy', () => {
  it('does not name internal products, work hours or the professional GitHub account', () => {
    for (const text of collectStrings(cvData)) {
      expect(findForbiddenTerms(text), text).toEqual([]);
    }
  });

  it('discloses the FullStack Labs contract in both languages', () => {
    expect(cvData.summary.en).toContain('FullStack Labs');
    expect(cvData.summary.es).toContain('FullStack Labs');
    expect(cvData.experience[0].company.en).toContain('FullStack Labs');
    expect(cvData.experience[0].company.es).toContain('FullStack Labs');
  });

  it('keeps both the senior and the mid-level title on the current employer', () => {
    const titles = cvData.experience[0].roles.map((role) => role.title.en);
    expect(titles).toEqual(['Senior Software Engineer', 'Mid-Level Software Engineer']);
  });

  it('exposes only the LinkedIn and personal GitHub profiles', () => {
    const links = Object.entries(cvData.personal)
      .filter(([, value]) => typeof value === 'string' && value.startsWith('https://'))
      .map(([key]) => key);
    expect(links).toEqual(['linkedin', 'githubPersonal']);
  });
});

describe('cvData English and Spanish parity', () => {
  it('has a non-empty summary and title in both languages', () => {
    for (const text of [
      cvData.summary.en,
      cvData.summary.es,
      cvData.personal.title.en,
      cvData.personal.title.es,
    ]) {
      expect(text.trim().length).toBeGreaterThan(0);
    }
  });

  it('has the same number of achievements in both languages for every employer', () => {
    for (const item of cvData.experience) {
      expect(item.achievements.es).toHaveLength(item.achievements.en.length);
      for (const line of [...item.achievements.en, ...item.achievements.es]) {
        expect(line.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('has an overview in both languages whenever one exists', () => {
    for (const item of cvData.experience) {
      if (item.overview) {
        expect(item.overview.en.trim()).not.toBe('');
        expect(item.overview.es.trim()).not.toBe('');
      }
    }
  });

  it('has the same number of interests in both languages', () => {
    expect(cvData.hobbies.es).toHaveLength(cvData.hobbies.en.length);
  });

  it('translates every language name and level', () => {
    for (const language of cvData.languages) {
      expect(language.name.en && language.name.es && language.level.en && language.level.es).toBeTruthy();
    }
  });
});

describe('cvData dates', () => {
  const roles = cvData.experience.flatMap((item) => item.roles);

  it('stores every date as an ISO year-month', () => {
    for (const role of roles) {
      expect(role.startDate).toMatch(ISO_YEAR_MONTH);
      if (role.endDate) expect(role.endDate).toMatch(ISO_YEAR_MONTH);
    }
    for (const cert of cvData.certifications) {
      if (cert.issuedAt) expect(cert.issuedAt).toMatch(ISO_YEAR_MONTH);
    }
    expect(cvData.education.startDate).toMatch(ISO_YEAR_MONTH);
    expect(cvData.education.endDate).toMatch(ISO_YEAR_MONTH);
  });

  it('has exactly one current role, and it is the first one', () => {
    expect(roles.filter((role) => role.endDate === null)).toHaveLength(1);
    expect(cvData.experience[0].roles[0].endDate).toBeNull();
  });

  it('never ends a role before it starts', () => {
    for (const role of roles) {
      if (role.endDate) expect(role.endDate >= role.startDate).toBe(true);
    }
    expect(cvData.education.endDate > cvData.education.startDate).toBe(true);
  });

  it('lists roles newest first without overlap inside each employer', () => {
    for (const item of cvData.experience) {
      item.roles.forEach((role, index) => {
        const older = item.roles[index + 1];
        if (!older) return;
        expect(older.startDate < role.startDate).toBe(true);
        expect(older.endDate && older.endDate <= role.startDate).toBe(true);
      });
    }
  });
});

describe('cvData skills', () => {
  const allSkills = [...cvData.skills.now, ...cvData.skills.earlier];
  const experienceText = cvData.experience
    .flatMap((item) => [
      ...item.achievements.en,
      ...item.achievements.es,
      ...(item.overview ? [item.overview.en, item.overview.es] : []),
    ])
    .join(' ')
    .toLowerCase();

  it('has no duplicate skills', () => {
    expect(new Set(allSkills).size).toBe(allSkills.length);
  });

  it('shows no years of experience on skills', () => {
    for (const skill of allSkills) expect(skill).not.toMatch(/\d/);
  });

  it('only lists a current skill when an experience bullet mentions it', () => {
    for (const skill of cvData.skills.now) {
      expect(experienceText, skill).toContain(skill.toLowerCase());
    }
  });
});

describe('cvData certifications', () => {
  it('has unique names and an issuer for each certificate', () => {
    const names = cvData.certifications.map((cert) => cert.name);
    expect(new Set(names).size).toBe(names.length);
    for (const cert of cvData.certifications) expect(cert.issuer).toBeTruthy();
  });
});
