// @vitest-environment jsdom
import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { cvData } from '@/data/cv-data';
import { Experience } from './Experience';

afterEach(cleanup);

describe('Experience', () => {
  it('shows each employer with localized role dates in English', () => {
    render(<Experience locale="en" />);
    expect(screen.getByRole('heading', { name: 'Professional Experience' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'FullStack Labs' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'DataHome, S. de R.L. de C.V.' })).toBeTruthy();
    expect(screen.getByText('Apr 2024 – Present')).toBeTruthy();
    expect(screen.getByText('Jan 2022 – Apr 2024')).toBeTruthy();
    expect(screen.getByText('Mar 2019 – Dec 2021')).toBeTruthy();
  });

  it('localizes dates, "Present" and role titles in Spanish', () => {
    render(<Experience locale="es" />);
    expect(screen.getByRole('heading', { name: 'Experiencia Profesional' })).toBeTruthy();
    expect(screen.getByText('abr de 2024 – Presente')).toBeTruthy();
    expect(screen.getByText('ene de 2022 – abr de 2024')).toBeTruthy();
    expect(screen.getByText('Ingeniero de Software de nivel intermedio')).toBeTruthy();
    expect(screen.queryByText(/Present$/)).toBeNull();
  });

  it.each([
    ['en', 'en'],
    ['es', 'es'],
  ] as const)('renders every achievement and overview (%s)', (locale, key) => {
    render(<Experience locale={locale} />);
    const expected = cvData.experience.flatMap((item) => item.achievements[key]);
    expect(screen.getAllByRole('listitem')).toHaveLength(expected.length);
    for (const line of expected) expect(screen.getByText(line)).toBeTruthy();
    for (const item of cvData.experience) {
      if (item.overview) expect(screen.getByText(item.overview[key])).toBeTruthy();
    }
  });

  it('does not show a client or team line', () => {
    render(<Experience locale="en" />);
    expect(screen.queryByText(/Client:/)).toBeNull();
    expect(screen.queryByText(/Team/)).toBeNull();
  });

  it('lists three roles under DataHome', () => {
    render(<Experience locale="en" />);
    const article = screen.getByRole('heading', { name: 'DataHome, S. de R.L. de C.V.' }).closest('article');
    expect(article).not.toBeNull();
    const scope = within(article as HTMLElement);
    for (const title of ['Senior Software Engineer', 'Junior Software Developer', 'Developer Intern']) {
      expect(scope.getByText(title)).toBeTruthy();
    }
  });
});
