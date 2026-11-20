import React from 'react';
import { Section } from '@/components/ui/Section';
import { cvData } from '@/data/cv-data';
import { formatMonthDate } from '@/lib/dates';

interface CertificationsProps {
  locale: string;
}

export function Certifications({ locale }: CertificationsProps) {
  const isEs = locale === 'es';
  const sectionTitle = isEs ? 'Cursos y certificados' : 'Courses & Certificates';

  return (
    <Section id="certifications" title={sectionTitle} className="print:mb-1">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm print:gap-1 print:text-xs">
        {cvData.certifications.map((cert, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 p-3 print:p-1 rounded-lg border border-zinc-200 bg-white shadow-xs print:break-inside-avoid"
          >
            <div className="flex-1">
              <span className="font-semibold text-zinc-900 block leading-tight">
                {cert.name}
              </span>
              {(cert.issuer || cert.issuedAt) && (
                <span className="text-xs text-zinc-500 mt-0.5 block">
                  {[cert.issuer, cert.issuedAt && formatMonthDate(cert.issuedAt, locale)]
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
