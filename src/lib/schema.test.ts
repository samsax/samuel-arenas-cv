import { describe, expect, it } from 'vitest';
import { cvData } from '@/data/cv-data';
import { findForbiddenTerms } from '@/test/public-copy';
import { generateJsonLd } from './schema';

type Node = Record<string, unknown>;

function nodeOfType(locale: string, type: string): Node {
  const node = (generateJsonLd(locale)['@graph'] as Node[]).find((item) => item['@type'] === type);
  if (!node) throw new Error(`No ${type} node in JSON-LD`);
  return node;
}

describe('generateJsonLd', () => {
  it.each(['en', 'es'])('links the ProfilePage to the Person (%s)', (locale) => {
    const page = nodeOfType(locale, 'ProfilePage');
    const person = nodeOfType(locale, 'Person');
    expect(page.mainEntity).toEqual({ '@id': person['@id'] });
    expect(page.url).toBe(`https://samuel-arenas-cv.vercel.app/${locale}`);
    expect(page.inLanguage).toBe(locale);
  });

  it('localizes the description and job title', () => {
    expect(nodeOfType('en', 'Person')).toMatchObject({
      description: cvData.summary.en,
      jobTitle: cvData.personal.title.en,
    });
    expect(nodeOfType('es', 'Person')).toMatchObject({
      description: cvData.summary.es,
      jobTitle: cvData.personal.title.es,
    });
  });

  it('lists only the LinkedIn and personal GitHub profiles in sameAs', () => {
    expect(nodeOfType('en', 'Person').sameAs).toEqual([
      cvData.personal.linkedin,
      cvData.personal.githubPersonal,
    ]);
  });

  it('lists current and earlier skills in knowsAbout', () => {
    expect(nodeOfType('en', 'Person').knowsAbout).toEqual([
      ...cvData.skills.now,
      ...cvData.skills.earlier,
    ]);
  });

  it('lists one credential per certificate with its issuer and date', () => {
    const credentials = nodeOfType('en', 'Person').hasCredential as Node[];
    expect(credentials).toHaveLength(cvData.certifications.length);
    credentials.forEach((credential, index) => {
      const cert = cvData.certifications[index];
      expect(credential).toMatchObject({
        '@type': 'EducationalOccupationalCredential',
        name: cert.name,
        recognizedBy: { name: cert.issuer },
        dateCreated: cert.issuedAt,
      });
    });
  });

  it('names FullStack Labs as the employer', () => {
    expect(nodeOfType('en', 'Person').worksFor).toEqual({
      '@type': 'Organization',
      name: cvData.experience[0].company,
    });
  });

  it.each(['en', 'es'])('contains no forbidden public terms (%s)', (locale) => {
    expect(findForbiddenTerms(JSON.stringify(generateJsonLd(locale)))).toEqual([]);
  });
});
