'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <h2
      className={`text-3xl font-medium capitalize mb-8 text-center ${
        isEnglish ? 'font-minecraft' : ''
      }`}
    >
      {children}
    </h2>
  );
}
