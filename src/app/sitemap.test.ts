import { describe, expect, it } from 'vitest';
import { BASE_URL } from '@/lib/metadata';
import sitemap from './sitemap';

describe('sitemap', () => {
  const entries = sitemap();

  it('lists the English and Spanish pages', () => {
    expect(entries.map((entry) => entry.url)).toEqual([`${BASE_URL}/en`, `${BASE_URL}/es`]);
  });

  it('declares both languages as alternates on every entry', () => {
    for (const entry of entries) {
      expect(entry.alternates?.languages).toEqual({
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
      });
    }
  });

  it('does not list the root path, which only redirects', () => {
    expect(entries.map((entry) => entry.url)).not.toContain(`${BASE_URL}/`);
  });
});
