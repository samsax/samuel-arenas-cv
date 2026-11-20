import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} aria-label={title} className={`mb-10 print:mb-6 ${className}`}>
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 tracking-tight border-b-2 border-blue-600 pb-1.5 mb-5 flex items-center justify-between">
        <span>{title}</span>
      </h2>
      {children}
    </section>
  );
}
