import { cvData } from '@/data/cv-data';
import { formatMonthYear } from '@/lib/format-date';

export const dynamic = 'force-static';

const BASE_URL = 'https://samuel-arenas-cv.vercel.app';
const LOCATION = 'La Ceja, Antioquia, Colombia (UTC−5, works US Eastern hours)';

// Built from the same data as the page so the file cannot drift from the CV.
export function GET() {
  const { personal, summary, experience, skills, certifications, education, languages, hobbies } = cvData;

  const roleLines = (roles: (typeof experience)[number]['roles']) =>
    roles.map((role) => {
      const end = role.endDate ? formatMonthYear(role.endDate, 'en') : 'Present';
      return `- ${role.title.en} (${formatMonthYear(role.startDate, 'en')} – ${end})`;
    });

  const experienceBlocks = experience.map((item) =>
    [
      `### ${item.company.en}`,
      `Location: ${item.location.en}`,
      ...roleLines(item.roles),
      ...(item.overview ? ['', item.overview.en] : []),
      '',
      ...item.achievements.en.map((line) => `- ${line}`),
    ].join('\n'),
  );

  const body = [
    `# ${personal.fullName} — ${personal.title.en}`,
    '',
    '## Summary',
    summary.en,
    '',
    '## Contact',
    `- Location: ${LOCATION}`,
    `- Email: ${personal.email}`,
    `- LinkedIn: ${personal.linkedin}`,
    `- GitHub: ${personal.githubPersonal}`,
    `- Web: ${BASE_URL}/en (English), ${BASE_URL}/es (Spanish)`,
    '',
    '## Experience',
    ...experienceBlocks.flatMap((block) => [block, '']),
    '## Skills',
    `- Now: ${skills.now.join(', ')}`,
    `- Earlier: ${skills.earlier.join(', ')}`,
    '',
    '## Courses & Certificates',
    ...certifications.map(
      (cert) =>
        `- ${cert.name}${cert.issuer ? `, ${cert.issuer}` : ''}${cert.issuedAt ? ` (${formatMonthYear(cert.issuedAt, 'en')})` : ''}`,
    ),
    '',
    '## Education',
    `- ${education.degree.en}, ${education.institution} (${formatMonthYear(education.startDate, 'en')} – ${formatMonthYear(education.endDate, 'en')})`,
    `- ${education.note.en}`,
    '',
    '## Languages',
    ...languages.map((language) => `- ${language.name.en}: ${language.level.en}`),
    '',
    '## Interests',
    hobbies.en.join('; '),
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
