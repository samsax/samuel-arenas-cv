import React from 'react';
import { Section } from '@/components/ui/Section';
import { cvData } from '@/data/cv-data';

interface HobbiesProps {
  locale: string;
}

export function Hobbies({ locale }: HobbiesProps) {
  const isEs = locale === 'es';
  const sectionTitle = isEs ? 'Intereses y Pasatiempos' : 'Interests & Hobbies';
  const hobbiesList = isEs ? cvData.hobbies.es : cvData.hobbies.en;

  const icons = ['🎷', '☕', '🥩'];

  return (
    <Section id="hobbies" title={sectionTitle} className="print:hidden">
      <div className="flex flex-wrap gap-3">
        {hobbiesList.map((hobby, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-sm font-medium text-zinc-800"
          >
            <span>{icons[index % icons.length]}</span>
            <span>{hobby}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
