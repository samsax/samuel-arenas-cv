import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/cv/Header';
import { Summary } from '@/components/cv/Summary';
import { Experience } from '@/components/cv/Experience';
import { Skills } from '@/components/cv/Skills';
import { Certifications } from '@/components/cv/Certifications';
import { Education } from '@/components/cv/Education';
import { Languages } from '@/components/cv/Languages';
import { Hobbies } from '@/components/cv/Hobbies';
import { DownloadButton } from '@/components/cv/DownloadButton';

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-zinc-200/80 p-6 sm:p-12 print:shadow-none print:border-none print:p-0">
        <Header locale={locale} />
        <Summary locale={locale} />
        <Experience locale={locale} />
        <Skills locale={locale} />
        <Certifications locale={locale} />
        <Education locale={locale} />
        <Languages locale={locale} />
        <Hobbies locale={locale} />
        <div className="mt-12 text-center pt-6 border-t border-zinc-200 print:hidden">
          <DownloadButton locale={locale} />
        </div>
      </div>
    </div>
  );
}
