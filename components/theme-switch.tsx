'use client';

import { useTheme } from '@/context/theme-context';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { toggleTheme } = useTheme();

  return (
    <button
      className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/85 text-ink shadow-panel backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#43f0b3] active:translate-y-0 dark:border-white/10 dark:bg-[#071016]/85 dark:text-white"
      onClick={toggleTheme}
      title="Toggle Theme"
    >
      <BsSun className="block dark:hidden" />
      <BsMoon className="hidden dark:block" />
    </button>
  );
}
