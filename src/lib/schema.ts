import { cvData } from '@/data/cv-data';

const BASE_URL = 'https://samuel-arenas-cv.vercel.app';

export function generateJsonLd(locale: string) {
  const isEs = locale === 'es';
  const { personal, summary, experience, skills, certifications, education } = cvData;

  const currentJob = experience[0];
  const allSkills = [
    ...skills.advanced.map((s) => s.name),
    ...skills.intermediate.map((s) => s.name),
    ...skills.earlierCareer,
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${BASE_URL}/${locale}#profilepage`,
        url: `${BASE_URL}/${locale}`,
        name: `${personal.fullName} — ${isEs ? personal.title.es : personal.title.en}`,
        description: isEs ? summary.es : summary.en,
        inLanguage: locale,
        mainEntity: { '@id': `${BASE_URL}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#person`,
        name: personal.fullName,
        jobTitle: isEs ? personal.title.es : personal.title.en,
        description: isEs ? summary.es : summary.en,
        email: `mailto:${personal.email}`,
        telephone: personal.phone,
        url: `${BASE_URL}/${locale}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'La Ceja',
          addressRegion: 'Antioquia',
          addressCountry: 'CO',
        },
        sameAs: [
          personal.linkedin,
          personal.githubPersonal,
          personal.githubProfessional,
        ],
        knowsAbout: allSkills,
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: education.institution,
        },
        worksFor: {
          '@type': 'Organization',
          name: currentJob.company,
        },
        hasCredential: certifications.map((cert) => ({
          '@type': 'EducationalOccupationalCredential',
          name: cert.name,
          ...(cert.issuer ? { recognizedBy: { '@type': 'Organization', name: cert.issuer } } : {}),
          ...(cert.year ? { dateCreated: cert.year } : {}),
        })),
      },
    ],
  };
}
