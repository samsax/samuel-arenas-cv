import { describe, expect, it } from 'vitest';
import { cvData } from '@/data/cv-data';
import { findForbiddenTerms } from '@/test/public-copy';
import { BASE_URL, generateMetadata } from './metadata';

describe('generateMetadata', () => {
  it('builds the English title, description and Open Graph locale', () => {
    const meta = generateMetadata('en');
    expect(meta.title).toBe('Samuel David Arenas Pareja | Senior Software Engineer');
    expect(meta.description).toBe(cvData.summary.en);
    expect(meta.openGraph).toMatchObject({ locale: 'en_US', url: `${BASE_URL}/en` });
  });

  it('builds the Spanish title, description and Open Graph locale', () => {
    const meta = generateMetadata('es');
    expect(meta.title).toBe('Samuel David Arenas Pareja | Ingeniero de Software Senior');
    expect(meta.description).toBe(cvData.summary.es);
    expect(meta.openGraph).toMatchObject({ locale: 'es_CO', url: `${BASE_URL}/es` });
  });

  it.each(['en', 'es'])('sets a canonical URL and both language alternates (%s)', (locale) => {
    expect(generateMetadata(locale).alternates).toEqual({
      canonical: `${BASE_URL}/${locale}`,
      languages: { en: `${BASE_URL}/en`, es: `${BASE_URL}/es` },
    });
  });

  it('indexes the page', () => {
    expect(generateMetadata('en').robots).toEqual({ index: true, follow: true });
  });

  it('includes Next.js and leaves the client name out of the keywords', () => {
    const keywords = generateMetadata('en').keywords as string[];
    expect(keywords).toContain('Next.js');
    expect(keywords.join(' ')).not.toMatch(/procore/i);
  });

  it.each(['en', 'es'])('contains no forbidden public terms (%s)', (locale) => {
    expect(findForbiddenTerms(JSON.stringify(generateMetadata(locale)))).toEqual([]);
  });
});
