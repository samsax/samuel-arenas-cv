import React from 'react';
import { cvData } from '@/data/cv-data';

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  const isEs = locale === 'es';
  const { personal } = cvData;
  const title = isEs ? personal.title.es : personal.title.en;

  return (
    <header className="mb-10 text-center pb-6 border-b border-zinc-200 print:mb-4 print:pb-3">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-2">
        {personal.fullName}
      </h1>
      <p className="text-lg sm:text-xl font-semibold text-blue-700 mb-4">
        {title}
      </p>

      <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-4 text-sm text-zinc-600">
        <span className="inline-flex items-center gap-1.5">
          <span>📍</span> {personal.location}
        </span>
        <span className="text-zinc-300 hidden sm:inline">•</span>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          <span>✉️</span> {personal.email}
        </a>
        <span className="text-zinc-300 hidden sm:inline">•</span>
        <a
          href={`tel:${personal.phone.replace(/\s+/g, '')}`}
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          <span>📞</span> {personal.phone}
        </a>
      </div>

      <div className="mt-3 flex flex-wrap justify-center items-center gap-3 text-sm">
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 hover:bg-blue-50 text-zinc-700 hover:text-blue-700 font-medium transition-colors border border-zinc-200"
        >
          <span>🔗</span> LinkedIn
        </a>
        <a
          href={personal.githubPersonal}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 hover:bg-blue-50 text-zinc-700 hover:text-blue-700 font-medium transition-colors border border-zinc-200"
        >
          <span>💻</span> GitHub (Personal)
        </a>
        <a
          href={personal.githubProfessional}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 hover:bg-blue-50 text-zinc-700 hover:text-blue-700 font-medium transition-colors border border-zinc-200"
        >
          <span>💼</span> GitHub (Professional)
        </a>
      </div>
    </header>
  );
}
