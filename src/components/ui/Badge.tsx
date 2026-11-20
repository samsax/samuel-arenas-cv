import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'gray' | 'emerald';
  className?: string;
}

export function Badge({ children, variant = 'blue', className = '' }: BadgeProps) {
  const variantStyles = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    gray: 'bg-zinc-100 text-zinc-700 border-zinc-200',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs sm:text-sm font-medium border ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}
