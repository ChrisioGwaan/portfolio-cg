'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-12 border-t border-[var(--line-color)] bg-white/40 px-4 py-6 pb-28 backdrop-blur dark:bg-[#071016]/45 sm:px-6 sm:pb-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-1 text-center text-sm text-[var(--muted)]">
        <p className="font-display font-semibold text-ink dark:text-white">Chrisio Gwaan</p>
        <small className="text-xs leading-5">
          &copy; {new Date().getFullYear()} {t('footerCopyright')}
        </small>
      </div>
    </footer>
  );
}
