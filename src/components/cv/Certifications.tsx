import React from 'react';
import { Section } from '@/components/ui/Section';
import { cvData } from '@/data/cv-data';

interface CertificationsProps {
  locale: string;
}

export function Certifications({ locale }: CertificationsProps) {
  const isEs = locale === 'es';
  const sectionTitle = isEs ? 'Cursos y certificados' : 'Courses & Certificates';

  return (
    <Section id="certifications" title={sectionTitle}>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        {cvData.certifications.map((cert, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 p-3 rounded-lg border border-zinc-200 bg-white shadow-xs"
          >
            <span className="text-blue-600 mt-0.5">📜</span>
            <div className="flex-1">
              <span className="font-semibold text-zinc-900 block leading-tight">
                {cert.name}
              </span>
              {(cert.issuer || cert.issuedAt) && (
                <span className="text-xs text-zinc-500 mt-0.5 block">
                  {[cert.issuer, cert.issuedAt && formatIssueDate(cert.issuedAt, locale)]
                    .filter(Boolean)
                    .join(' • ')}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function formatIssueDate(issuedAt: string, locale: string) {
  const [year, month] = issuedAt.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, 1));

  return new Intl.DateTimeFormat(locale === 'es' ? 'es-CO' : 'en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
