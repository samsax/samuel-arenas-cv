// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { cvData } from '@/data/cv-data';
import { Header } from './Header';

// Header is an async Server Component; read its text from the real message files.
vi.mock('next-intl/server', async () => {
  const messages = {
    en: (await import('@/messages/en.json')).default,
    es: (await import('@/messages/es.json')).default,
  };
  return {
    getTranslations: async ({ locale, namespace }: { locale: 'en' | 'es'; namespace: 'header' }) =>
      (key: keyof (typeof messages)['en']['header']) => messages[locale][namespace][key],
  };
});

afterEach(cleanup);

describe('Header', () => {
  it('shows the name, English title and flexible-hours location', async () => {
    render(await Header({ locale: 'en' }));
    expect(screen.getByRole('heading', { level: 1, name: cvData.personal.fullName })).toBeTruthy();
    expect(screen.getByText(cvData.personal.title.en)).toBeTruthy();
    expect(screen.getByText(/La Ceja, Colombia · Flexible for US Eastern overlap/)).toBeTruthy();
  });

  it('shows the Spanish title and location', async () => {
    render(await Header({ locale: 'es' }));
    expect(screen.getByText(cvData.personal.title.es)).toBeTruthy();
    expect(screen.getByText(/Flexibilidad para coincidir con el horario del Este de EE\. UU\./)).toBeTruthy();
  });

  it('never shows exact work hours', async () => {
    const { container } = render(await Header({ locale: 'en' }));
    expect(container.textContent).not.toMatch(/\d{1,2}:\d{2}/);
    expect(container.textContent).not.toMatch(/COT/);
  });

  it('links email, phone, LinkedIn and the personal GitHub only', async () => {
    render(await Header({ locale: 'en' }));
    const hrefs = screen.getAllByRole('link').map((link) => link.getAttribute('href'));
    expect(hrefs).toEqual([
      `mailto:${cvData.personal.email}`,
      `tel:${cvData.personal.phone.replace(/\s+/g, '')}`,
      cvData.personal.linkedin,
      cvData.personal.githubPersonal,
    ]);
    expect(screen.queryByText(/Professional\)/)).toBeNull();
  });

  it('opens external profiles safely in a new tab', async () => {
    render(await Header({ locale: 'en' }));
    for (const name of [/LinkedIn/, /GitHub \(Personal\)/]) {
      const link = screen.getByRole('link', { name });
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    }
  });
});
