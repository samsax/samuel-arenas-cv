import { expect, test } from '@playwright/test';
import { cvData } from '../src/data/cv-data';

test.describe('English page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en');
  });

  test('is served in English with the right title and language', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page).toHaveTitle('Samuel David Arenas Pareja | Senior Full-Stack Engineer');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(cvData.personal.fullName);
  });

  test('shows every section heading in order', async ({ page }) => {
    const headings = await page.locator('section > h2').allTextContents();
    expect(headings).toEqual([
      'Professional Summary',
      'Professional Experience',
      'Skills',
      'Courses & Certificates',
      'Education',
      'Languages',
    ]);
  });

  test('shows the summary and the US Eastern hours location', async ({ page }) => {
    await expect(page.getByText(cvData.summary.en)).toBeVisible();
    await expect(page.getByText('Works US Eastern hours')).toBeVisible();
  });

  test('shows the employer, both titles and the current role', async ({ page }) => {
    // FullStack Labs is the first employer; DataHome also has a "Senior Software Engineer" role.
    const employer = page.locator('#experience article').first();
    await expect(employer.getByRole('heading', { name: /FullStack Labs/ })).toBeVisible();
    await expect(employer.getByText('Senior Software Engineer', { exact: true })).toBeVisible();
    await expect(employer.getByText('Mid-Level Software Engineer', { exact: true })).toBeVisible();
    await expect(employer.getByText('Apr 2024 – Present')).toBeVisible();
  });

  test('lists nine certificates', async ({ page }) => {
    await expect(page.locator('#certifications li')).toHaveCount(cvData.certifications.length);
  });

  test('shows interests as one line under Languages, not as a section', async ({ page }) => {
    await expect(page.locator('#hobbies')).toHaveCount(0);
    await expect(page.locator('#languages')).toContainText('Interests:');
  });

  test('switches to Spanish from the language toggle', async ({ page }) => {
    await page.getByRole('link', { name: 'Cambiar a Español' }).click();
    await expect(page).toHaveURL(/\/es$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expect(page.getByRole('heading', { name: 'Resumen Profesional' })).toBeVisible();
  });

  test('links to the email, LinkedIn and personal GitHub only, with no phone', async ({ page }) => {
    const main = page.locator('main');
    await expect(main.locator(`a[href="mailto:${cvData.personal.email}"]`)).toBeVisible();
    await expect(main.locator(`a[href="${cvData.personal.linkedin}"]`)).toBeVisible();
    await expect(main.locator(`a[href="${cvData.personal.githubPersonal}"]`)).toBeVisible();
    await expect(page.locator('a[href*="samuelfsl"]')).toHaveCount(0);
    await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);
  });

  test('offers a PDF download that is served as a real PDF', async ({ page, request }) => {
    const link = page.getByRole('link', { name: 'Download PDF File' });
    await expect(link).toHaveAttribute('href', '/Samuel_Arenas_CV_EN.pdf');
    const response = await request.get('/Samuel_Arenas_CV_EN.pdf');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/pdf');
    expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
  });

  test('embeds JSON-LD that parses and describes the person', async ({ page }) => {
    const raw = await page.locator('script[type="application/ld+json"]').textContent();
    const graph = JSON.parse(raw ?? '{}')['@graph'];
    const person = graph.find((node: { '@type': string }) => node['@type'] === 'Person');
    expect(person.name).toBe(cvData.personal.fullName);
    expect(person.sameAs).toEqual([cvData.personal.linkedin, cvData.personal.githubPersonal]);
  });
});

test.describe('Spanish page', () => {
  test('is served in Spanish with localized dates and headings', async ({ page }) => {
    await page.goto('/es');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expect(page.getByRole('heading', { name: 'Experiencia Profesional' })).toBeVisible();
    await expect(page.getByText('abr de 2024 – Presente')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Descargar Archivo PDF' })).toHaveAttribute(
      'href',
      '/Samuel_Arenas_CV_ES.pdf',
    );
  });

  test('serves the Spanish PDF as a real PDF', async ({ request }) => {
    const response = await request.get('/Samuel_Arenas_CV_ES.pdf');
    expect(response.status()).toBe(200);
    expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
  });
});

test.describe('print', () => {
  test('hides navigation, footer and buttons when printing', async ({ page }) => {
    await page.goto('/en');
    await page.emulateMedia({ media: 'print' });
    await expect(page.locator('nav')).toBeHidden();
    await expect(page.locator('footer')).toBeHidden();
    await expect(page.getByRole('button', { name: 'Print / Save as PDF' })).toBeHidden();
    await expect(page.getByRole('heading', { name: 'Professional Experience' })).toBeVisible();
  });
});
