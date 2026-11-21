// @vitest-environment jsdom
import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { cvData } from '@/data/cv-data';
import { Certifications } from './Certifications';
import { Education } from './Education';
import { Languages } from './Languages';
import { Skills } from './Skills';
import { Summary } from './Summary';

afterEach(cleanup);

describe('Summary', () => {
  it.each([
    ['en', 'Professional Summary', cvData.summary.en],
    ['es', 'Resumen Profesional', cvData.summary.es],
  ])('renders the %s summary under its heading', (locale, heading, text) => {
    render(<Summary locale={locale} />);
    expect(screen.getByRole('heading', { name: heading })).toBeTruthy();
    expect(screen.getByText(text)).toBeTruthy();
  });
});

describe('Skills', () => {
  it('groups skills as Now and Earlier with no year badges', () => {
    const { container } = render(<Skills locale="en" />);
    expect(screen.getByRole('heading', { name: 'Now' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Earlier' })).toBeTruthy();
    for (const skill of [...cvData.skills.now, ...cvData.skills.earlier]) {
      expect(screen.getByText(skill)).toBeTruthy();
    }
    expect(container.textContent).not.toMatch(/\d/);
  });

  it('localizes the group headings in Spanish', () => {
    render(<Skills locale="es" />);
    expect(screen.getByRole('heading', { name: 'Habilidades' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Actuales' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Experiencia previa' })).toBeTruthy();
  });
});

describe('Certifications', () => {
  it('renders one entry per certificate with issuer and localized date', () => {
    render(<Certifications locale="en" />);
    expect(screen.getByRole('heading', { name: 'Courses & Certificates' })).toBeTruthy();
    expect(screen.getAllByRole('listitem')).toHaveLength(cvData.certifications.length);
    for (const cert of cvData.certifications) expect(screen.getByText(cert.name)).toBeTruthy();
    expect(screen.getByText('Anthropic • May 2026')).toBeTruthy();
  });

  it('localizes the heading and dates in Spanish', () => {
    render(<Certifications locale="es" />);
    expect(screen.getByRole('heading', { name: 'Cursos y certificados' })).toBeTruthy();
    expect(screen.getByText('Anthropic • may de 2026')).toBeTruthy();
  });
});

describe('Education', () => {
  it('shows the degree, institution, research note and period in English', () => {
    render(<Education locale="en" />);
    expect(screen.getByRole('heading', { name: cvData.education.degree.en })).toBeTruthy();
    expect(screen.getByText(cvData.education.institution)).toBeTruthy();
    expect(screen.getByText(cvData.education.note.en)).toBeTruthy();
    expect(screen.getByText('Mar 2012 – Sep 2017')).toBeTruthy();
  });

  it('shows the Spanish degree, note and period', () => {
    const { container } = render(<Education locale="es" />);
    expect(screen.getByRole('heading', { name: cvData.education.degree.es })).toBeTruthy();
    expect(screen.getByText(cvData.education.note.es)).toBeTruthy();
    expect(container.textContent).toMatch(/mar de 2012 – .*2017/);
  });
});

describe('Languages', () => {
  it('shows each language and level in English, then interests on one line', () => {
    render(<Languages locale="en" />);
    expect(screen.getByRole('heading', { name: 'Languages' })).toBeTruthy();
    expect(screen.getByText('Spanish')).toBeTruthy();
    expect(screen.getByText('Native')).toBeTruthy();
    expect(screen.getByText('Professional Working Proficiency')).toBeTruthy();
    expect(screen.getByText('Interests:').parentElement?.textContent).toBe(
      `Interests: ${cvData.hobbies.en.join(' · ')}`,
    );
  });

  it('localizes languages and interests in Spanish', () => {
    render(<Languages locale="es" />);
    expect(screen.getByRole('heading', { name: 'Idiomas' })).toBeTruthy();
    expect(screen.getByText('Español')).toBeTruthy();
    expect(screen.getByText('Competencia Profesional')).toBeTruthy();
    expect(screen.getByText('Intereses:').parentElement?.textContent).toBe(
      `Intereses: ${cvData.hobbies.es.join(' · ')}`,
    );
  });

  it('does not render a separate hobbies section', () => {
    render(<Languages locale="en" />);
    expect(screen.queryByRole('heading', { name: /Hobbies/ })).toBeNull();
  });
});
