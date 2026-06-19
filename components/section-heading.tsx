'use client';

import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="h-px flex-1 bg-[var(--line-color)]" />
      <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.18em] text-ink dark:text-white sm:text-3xl">
        {children}
      </h2>
      <span className="h-px flex-1 bg-[var(--line-color)]" />
    </div>
  );
}
