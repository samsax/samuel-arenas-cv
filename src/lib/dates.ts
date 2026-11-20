import type { YearMonth } from '@/data/types';

export function formatMonthDate(value: YearMonth, locale: string) {
  const [year, month] = value.split('-').map(Number);

  if (!Number.isInteger(year) || !Number.isInteger(month) || month < 1 || month > 12) {
    throw new RangeError(`Invalid year-month date: ${value}`);
  }

  return new Intl.DateTimeFormat(locale === 'es' ? 'es-CO' : 'en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}
