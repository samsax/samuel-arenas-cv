'use client';

import React from 'react';
import { usePathname, Link } from '@/i18n/navigation';
import { cvData } from '@/data/cv-data';

interface NavbarProps {
  locale: string;
}

export function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();
  const isEs = locale === 'es';
  const targetLocale = isEs ? 'en' : 'es';

  return (
    <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-zinc-200 no-print transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex flex-col text-left group"
        >
          <span className="font-bold text-zinc-900 group-hover:text-blue-600 transition-colors text-base sm:text-lg">
            {cvData.personal.fullName}
          </span>
          <span className="text-xs text-zinc-500 hidden sm:inline">
            {isEs ? cvData.personal.title.es : cvData.personal.title.en}
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Print Quick Action */}
          <button
            onClick={() => window.print()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md text-zinc-700 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 transition-colors"
            title={isEs ? 'Imprimir CV' : 'Print CV'}
          >
            <span>🖨️</span>
            <span>{isEs ? 'Imprimir' : 'Print'}</span>
          </button>

          {/* Language Switcher */}
          <Link
            href={pathname}
            locale={targetLocale}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors"
            aria-label={isEs ? 'Switch to English' : 'Cambiar a Español'}
          >
            <span>🌐</span>
            <span>{isEs ? 'English' : 'Español'}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
