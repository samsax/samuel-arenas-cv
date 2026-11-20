'use client';

import React from 'react';

interface DownloadButtonProps {
  locale: string;
}

export function DownloadButton({ locale }: DownloadButtonProps) {
  const isEs = locale === 'es';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 no-print">
      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm transition-all hover:shadow cursor-pointer"
        aria-label={isEs ? 'Imprimir o guardar como PDF' : 'Print or save as PDF'}
      >
        <span>🖨️</span>
        <span>{isEs ? 'Imprimir / Guardar como PDF' : 'Print / Save as PDF'}</span>
      </button>

      <a
        href={isEs ? '/Samuel_Arenas_CV_ES.pdf' : '/Samuel_Arenas_CV_EN.pdf'}
        download
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-medium text-sm border border-zinc-300 transition-all cursor-pointer"
        aria-label={isEs ? 'Descargar versión PDF' : 'Download PDF version'}
      >
        <span>📄</span>
        <span>{isEs ? 'Descargar Archivo PDF' : 'Download PDF File'}</span>
      </a>
    </div>
  );
}
