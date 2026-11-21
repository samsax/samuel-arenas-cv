import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/metadata';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, `${BASE_URL}/${locale}`]),
  );

  return routing.locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    alternates: { languages },
  }));
}
