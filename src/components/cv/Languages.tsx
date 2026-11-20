import React from 'react';
import { Section } from '@/components/ui/Section';
import { cvData } from '@/data/cv-data';

interface LanguagesProps {
  locale: string;
}

export function Languages({ locale }: LanguagesProps) {
  const isEs = locale === 'es';
  const sectionTitle = isEs ? 'Idiomas' : 'Languages';

  return (
    <Section id="languages" title={sectionTitle}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cvData.languages.map((lang, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 bg-white"
          >
            <div className="flex items-center gap-2">
              <span>🌐</span>
              <span className="font-semibold text-sm text-zinc-900">
                {isEs ? lang.name.es : lang.name.en}
              </span>
            </div>
            <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {isEs ? lang.level.es : lang.level.en}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
