import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { cvData } from '@/data/cv-data';

interface SkillsProps {
  locale: string;
}

export function Skills({ locale }: SkillsProps) {
  const isEs = locale === 'es';
  const sectionTitle = isEs ? 'Habilidades Técnicas' : 'Technical Skills Matrix';

  return (
    <Section id="skills" title={sectionTitle}>
      <div className="space-y-6">
        {/* Advanced Tier */}
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-800 flex items-center gap-1.5">
              <span>🌟</span> {isEs ? 'Avanzado (4+ Años / Respaldado en Producción Procore)' : 'Advanced (4+ Years / Production Backed)'}
            </h3>
            <span className="text-xs text-zinc-500 hidden sm:inline">
              {isEs ? 'Sólida trayectoria de entrega' : 'High-impact production record'}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {cvData.skills.advanced.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2.5 rounded-lg border border-blue-100 bg-blue-50/50 hover:bg-blue-50 transition-colors"
              >
                <div>
                  <span className="font-semibold text-sm text-zinc-900">{skill.name}</span>
                  {skill.highlight && (
                    <span className="block text-xs text-zinc-500">{skill.highlight}</span>
                  )}
                </div>
                <Badge variant="blue">{skill.years} {isEs ? 'años' : 'yrs'}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Intermediate Tier */}
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <span>⚡</span> {isEs ? 'Intermedio (1–3 Años / Producción Activa)' : 'Intermediate (1–3 Years / Active Production)'}
            </h3>
            <span className="text-xs text-zinc-500 hidden sm:inline">
              {isEs ? 'Sistemas distribuidos e infra' : 'Distributed systems & tooling'}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {cvData.skills.intermediate.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2.5 rounded-lg border border-emerald-100 bg-emerald-50/40 hover:bg-emerald-50/70 transition-colors"
              >
                <div>
                  <span className="font-semibold text-sm text-zinc-900">{skill.name}</span>
                  {skill.highlight && (
                    <span className="block text-xs text-zinc-500">{skill.highlight}</span>
                  )}
                </div>
                <Badge variant="emerald">{skill.years} {isEs ? 'años' : 'yrs'}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Earlier Career & Foundations */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-700 mb-2 flex items-center gap-1.5">
            <span>🏛️</span> {isEs ? 'Trayectoria Previa y Fundamentos (Pre-Procore / Investigación)' : 'Earlier Career & Foundations (Pre-Procore / Research)'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.earlierCareer.map((skill, index) => (
              <Badge key={index} variant="gray">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
