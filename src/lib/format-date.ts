const LOCALE_TAGS: Record<string, string> = {
  en: 'en-US',
  es: 'es-CO',
};

/** Formats an ISO year-month (`2024-04`) as a short month and year in the page locale. */
export function formatMonthYear(isoMonth: string, locale: string): string {
  const [year, month] = isoMonth.split('-').map(Number);

  return new Intl.DateTimeFormat(LOCALE_TAGS[locale] ?? LOCALE_TAGS.en, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}
