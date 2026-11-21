import { describe, expect, it } from 'vitest';
import { cvData } from '@/data/cv-data';
import { findForbiddenTerms } from '@/test/public-copy';
import { GET } from './route';

describe('GET /llms.txt', () => {
  it('returns plain text', async () => {
    const response = GET();
    expect(response.headers.get('content-type')).toBe('text/plain; charset=utf-8');
  });

  it('lists the sections in order', async () => {
    const text = await GET().text();
    const headings = text.match(/^## .+$/gm);
    expect(headings).toEqual([
      '## Summary',
      '## Contact',
      '## Experience',
      '## Skills',
      '## Courses & Certificates',
      '## Education',
      '## Languages',
      '## Interests',
    ]);
    expect(text.startsWith('# Samuel David Arenas Pareja — Senior Full-Stack Engineer')).toBe(true);
  });

  it('is built from the CV data', async () => {
    const text = await GET().text();
    expect(text).toContain(cvData.summary.en);
    expect(text).toContain('- Senior Software Engineer (Apr 2024 – Present)');
    expect(text).toContain('- Mid-Level Software Engineer (Jan 2022 – Apr 2024)');
    for (const line of cvData.experience.flatMap((item) => item.achievements.en)) {
      expect(text).toContain(line);
    }
    for (const cert of cvData.certifications) expect(text).toContain(cert.name);
    expect(text).toContain(`- Now: ${cvData.skills.now.join(', ')}`);
  });

  it('points to both language versions of the site', async () => {
    const text = await GET().text();
    expect(text).toContain('https://samuel-arenas-cv.vercel.app/en');
    expect(text).toContain('https://samuel-arenas-cv.vercel.app/es');
  });

  it('contains no forbidden public terms', async () => {
    expect(findForbiddenTerms(await GET().text())).toEqual([]);
  });
});
