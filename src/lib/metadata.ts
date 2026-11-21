import type { Metadata } from 'next';
import { cvData } from '@/data/cv-data';

export const BASE_URL = 'https://samuel-arenas-cv.vercel.app';

export function generateMetadata(locale: string): Metadata {
  const isEs = locale === 'es';
  const { personal, summary } = cvData;
  const title = `${personal.fullName} | ${isEs ? personal.title.es : personal.title.en}`;
  const description = isEs ? summary.es : summary.en;

  return {
    title,
    description,
    keywords: [
      'Samuel David Arenas Pareja',
      'Senior Software Engineer',
      'Full Stack Developer',
      'React',
      'Next.js',
      'Ruby on Rails',
      'Apache Kafka',
      'Colombia',
      'Remote Engineer',
      'WCAG 2.1 Accessibility',
    ],
    authors: [{ name: personal.fullName, url: personal.linkedin }],
    creator: personal.fullName,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}`,
      siteName: `${personal.fullName} — CV`,
      locale: isEs ? 'es_CO' : 'en_US',
      type: 'profile',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
