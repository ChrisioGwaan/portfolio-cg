'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-12 border-t border-gray-200 bg-white px-4 py-6 pb-28 dark:border-gray-800 dark:bg-gray-950 sm:px-6 sm:pb-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-1 text-center text-sm text-gray-600 dark:text-gray-300">
        <p className="font-semibold text-gray-950 dark:text-white">Chrisio Gwaan</p>
        <small className="text-xs leading-5 text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {t('footerCopyright')}
        </small>
      </div>
    </footer>
  );
}
