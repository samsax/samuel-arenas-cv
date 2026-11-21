import React from 'react';
import { Section } from '@/components/ui/Section';
import { cvData } from '@/data/cv-data';
import { formatMonthYear } from '@/lib/format-date';

interface ExperienceProps {
  locale: string;
}

export function Experience({ locale }: ExperienceProps) {
  const isEs = locale === 'es';
  const sectionTitle = isEs ? 'Experiencia Profesional' : 'Professional Experience';

  return (
    <Section id="experience" title={sectionTitle}>
      <div className="space-y-8 print:space-y-4">
        {cvData.experience.map((exp, index) => {
          const overviewText = exp.overview ? (isEs ? exp.overview.es : exp.overview.en) : null;
          const achievements = isEs ? exp.achievements.es : exp.achievements.en;

          return (
            <article
              key={index}
              className={`relative pl-0 sm:pl-4 border-l-0 sm:border-l-2 border-zinc-200 print:border-l-0 ${
                index > 0 ? 'print:break-inside-avoid' : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">
                    {exp.company}
                  </h3>
                  {exp.client && (
                    <p className="text-sm font-semibold text-blue-700">
                      {isEs ? 'Cliente' : 'Client'}: {exp.client}{' '}
                      {exp.team ? `(${exp.team})` : ''}
                    </p>
                  )}
                </div>
                <span className="text-xs sm:text-sm text-zinc-500 font-medium">
                  {exp.location}
                </span>
              </div>

              {/* Roles */}
              <div className="space-y-1 my-2">
                {exp.roles.map((role, rIndex) => (
                  <div
                    key={rIndex}
                    className="flex flex-col sm:flex-row sm:items-center justify-between text-sm"
                  >
                    <span className="font-semibold text-zinc-800">
                      {isEs ? role.title.es : role.title.en}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      {formatMonthYear(role.startDate, locale)} –{' '}
                      {role.endDate ? formatMonthYear(role.endDate, locale) : isEs ? 'Presente' : 'Present'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Context overview */}
              {overviewText && (
                <p className="text-sm text-zinc-600 italic mt-2 mb-3 leading-relaxed">
                  {overviewText}
                </p>
              )}

              {/* Achievements */}
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-700 mt-2">
                {achievements.map((item, aIndex) => (
                  <li key={aIndex} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
