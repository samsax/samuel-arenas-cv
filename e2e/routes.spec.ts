import { expect, test } from '@playwright/test';
import { cvData } from '../src/data/cv-data';

const SITE = 'https://samuel-arenas-cv.vercel.app';

test.describe('discovery files', () => {
  test('robots.txt allows crawling and points to the sitemap', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain('Allow: /');
    expect(body).toContain('Sitemap: https://samuel-arenas-cv.vercel.app/sitemap.xml');
  });

  test('sitemap.xml lists both languages with alternates', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('xml');
    const body = await response.text();
    expect(body).toContain(`<loc>${SITE}/en</loc>`);
    expect(body).toContain(`<loc>${SITE}/es</loc>`);
    expect(body).toContain(`hreflang="es" href="${SITE}/es"`);
  });

  test('llms.txt is plain text and describes the CV', async ({ request }) => {
    const response = await request.get('/llms.txt');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/plain');
    const body = await response.text();
    expect(body.startsWith(`# ${cvData.personal.fullName}`)).toBe(true);
    expect(body).toContain(cvData.summary.en);
  });
});

test.describe('unknown paths', () => {
  for (const path of ['/foo', '/foo/bar', '/xx']) {
    test(`${path} returns 404 and is not indexed`, async ({ request }) => {
      const response = await request.get(path);
      expect(response.status()).toBe(404);
      const body = await response.text();
      expect(body).toContain('name="robots" content="noindex"');
      expect(body).not.toContain('content="index, follow"');
    });
  }

  test('the root redirects to /en', async ({ request }) => {
    const response = await request.get('/', { maxRedirects: 0 });
    expect(response.status()).toBe(307);
    expect(response.headers().location).toMatch(/\/en$/);
  });
});
