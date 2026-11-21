/** Terms that must never reach any public output (page, metadata, JSON-LD, llms.txt). */
export const FORBIDDEN_PUBLIC_TERMS: { name: string; pattern: RegExp }[] = [
  { name: 'client name', pattern: /procore/i },
  { name: 'internal product (Cornerstone)', pattern: /cornerstone/i },
  { name: 'internal product (Hubs)', pattern: /\bhubs?\b/i },
  { name: 'internal service name', pattern: /Feature Service/ },
  { name: 'work-hours clock time', pattern: /\b\d{1,2}:\d{2}\b/ },
  { name: 'work-hours time zone', pattern: /\bCOT\b/ },
  { name: 'professional GitHub account', pattern: /samuelfsl/i },
];

/** Returns the names of every forbidden term found in `text`. */
export function findForbiddenTerms(text: string): string[] {
  return FORBIDDEN_PUBLIC_TERMS.filter(({ pattern }) => pattern.test(text)).map(({ name }) => name);
}

/** Collects every string value in a nested object or array. */
export function collectStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
}
