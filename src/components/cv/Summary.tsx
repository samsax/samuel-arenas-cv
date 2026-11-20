import React from 'react';
import { Section } from '@/components/ui/Section';
import { cvData } from '@/data/cv-data';

interface SummaryProps {
  locale: string;
}

export function Summary({ locale }: SummaryProps) {
  const isEs = locale === 'es';
  const title = isEs ? 'Resumen Profesional' : 'Professional Summary';
  const summaryText = isEs ? cvData.summary.es : cvData.summary.en;

  return (
    <Section id="summary" title={title}>
      <p className="text-zinc-700 text-base leading-relaxed text-justify sm:text-left">
        {summaryText}
      </p>
    </Section>
  );
}
