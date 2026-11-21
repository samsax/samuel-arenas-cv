import { describe, expect, it } from 'vitest';
import { collectStrings, findForbiddenTerms } from '@/test/public-copy';
import en from './en.json';
import es from './es.json';

function flattenKeys(value: unknown, prefix = ''): string[] {
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) => flattenKeys(child, `${prefix}${key}.`));
  }
  return [prefix.slice(0, -1)];
}

describe('messages', () => {
  it('has the same keys in English and Spanish', () => {
    expect(flattenKeys(es).sort()).toEqual(flattenKeys(en).sort());
  });

  it('has no empty values', () => {
    for (const text of [...collectStrings(en), ...collectStrings(es)]) {
      expect(text.trim().length).toBeGreaterThan(0);
    }
  });

  it('does not contain forbidden public terms such as exact work hours', () => {
    for (const text of [...collectStrings(en), ...collectStrings(es)]) {
      expect(findForbiddenTerms(text), text).toEqual([]);
    }
  });

  it('keeps the flexible US Eastern overlap wording in the header location', () => {
    expect(en.header.location).toBe('La Ceja, Colombia · Flexible for US Eastern overlap');
    expect(es.header.location).toContain('La Ceja, Colombia');
    expect(es.header.location).toContain('Este de EE. UU.');
  });
});
