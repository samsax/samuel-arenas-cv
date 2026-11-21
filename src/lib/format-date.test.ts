import { describe, expect, it } from 'vitest';
import { formatMonthYear } from './format-date';

describe('formatMonthYear', () => {
  it('formats an ISO year-month in English', () => {
    expect(formatMonthYear('2024-04', 'en')).toBe('Apr 2024');
  });

  it('formats an ISO year-month in Spanish', () => {
    expect(formatMonthYear('2024-04', 'es')).toBe('abr de 2024');
  });

  it('falls back to English for an unknown locale', () => {
    expect(formatMonthYear('2024-04', 'fr')).toBe('Apr 2024');
  });

  it('does not shift the month across year boundaries or time zones', () => {
    expect(formatMonthYear('2021-12', 'en')).toBe('Dec 2021');
    expect(formatMonthYear('2022-01', 'en')).toBe('Jan 2022');
  });
});
