import { cvData } from '@/data/cv-data';
import { formatMonthYear } from '@/lib/format-date';

export const dynamic = 'force-static';

const BASE_URL = 'https://samuel-arenas-cv.vercel.app';
const LOCATION = 'La Ceja, Antioquia, Colombia (UTC−5, flexible for US Eastern overlap)';

// Built from the same data as the page so the file cannot drift from the CV.
export function GET() {
  const { personal, summary, experience, skills, education, languages } = cvData;

  const roleLines = (roles: (typeof experience)[number]['roles']) =>
    roles.map((role) => {
      const end = role.endDate ? formatMonthYear(role.endDate, 'en') : 'Present';
      return `- ${role.title.en} (${formatMonthYear(role.startDate, 'en')} – ${end})`;
    });

  const experienceBlocks = experience.map((item) =>
    [
      `### ${item.company}`,
      ...(item.client ? [`Client: ${item.client}${item.team ? ` (${item.team})` : ''}`] : []),
      `Location: ${item.location}`,
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
    `- Phone: ${personal.phone}`,
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
    '## Education',
    `- ${education.degree.en}, ${education.institution} (${formatMonthYear(education.startDate, 'en')} – ${formatMonthYear(education.endDate, 'en')})`,
    `- ${education.note.en}`,
    '',
    '## Languages',
    ...languages.map((language) => `- ${language.name.en}: ${language.level.en}`),
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
