import React from 'react';
import { Section } from '@/components/ui/Section';
import { cvData } from '@/data/cv-data';
import { formatMonthYear } from '@/lib/format-date';

interface EducationProps {
  locale: string;
}

export function Education({ locale }: EducationProps) {
  const isEs = locale === 'es';
  const sectionTitle = isEs ? 'Educación' : 'Education';
  const { education } = cvData;

  return (
    <Section id="education" title={sectionTitle} className="print:break-inside-avoid">
      <div className="p-4 rounded-lg border border-zinc-200 bg-zinc-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎓</span>
          <div>
            <h3 className="font-bold text-zinc-900 text-base">
              {isEs ? education.degree.es : education.degree.en}
            </h3>
            <p className="text-sm font-medium text-blue-700">
              {education.institution}
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              {isEs ? education.note.es : education.note.en}
            </p>
          </div>
        </div>
        <span className="text-xs sm:text-sm font-mono text-zinc-500 pl-9 sm:pl-0">
          {formatMonthYear(education.startDate, locale)} – {formatMonthYear(education.endDate, locale)}
        </span>
      </div>
    </Section>
  );
}
