import React from 'react';
import { cvData } from '@/data/cv-data';

interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const isEs = locale === 'es';
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 py-8 border-t border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-500 no-print">
      <div className="max-w-4xl mx-auto px-4 space-y-2">
        <p>
          © {year} {cvData.personal.fullName}.{' '}
          {isEs ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </p>
        <p className="text-zinc-500">
          {isEs
            ? 'Construido con Next.js 16 (App Router, SSR), Tailwind CSS y estructurado para descubrimiento de agentes de IA y ATS.'
            : 'Built with Next.js 16 (App Router, SSR), Tailwind CSS & structured for AI recruitment agents and ATS discovery.'}
        </p>
      </div>
    </footer>
  );
}
