import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { cvData } from '@/data/cv-data';

interface SkillsProps {
  locale: string;
}

export function Skills({ locale }: SkillsProps) {
  const isEs = locale === 'es';
  const sectionTitle = isEs ? 'Habilidades' : 'Skills';

  return (
    <Section id="skills" title={sectionTitle} className="print:break-inside-avoid">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-800 mb-2">
            {isEs ? 'Actuales' : 'Now'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.now.map((skill) => (
              <Badge key={skill} variant="blue">{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-700 mb-2">
            {isEs ? 'Experiencia previa' : 'Earlier'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.earlier.map((skill) => (
              <Badge key={skill} variant="gray">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
