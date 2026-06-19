'use client';

import { useTheme } from '@/context/theme-context';
import clsx from 'clsx';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

type ThemeSwitchProps = {
  compact?: boolean;
  className?: string;
};

export default function ThemeSwitch({ compact = false, className }: ThemeSwitchProps) {
  const { toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle color mode"
      className={clsx(
        'flex shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/85 text-ink backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#43f0b3] active:translate-y-0 dark:border-white/10 dark:bg-[#071016]/85 dark:text-white',
        compact ? 'h-10 w-10 shadow-sm' : 'h-12 w-12 shadow-panel',
        className
      )}
      onClick={toggleTheme}
      title="Toggle color mode"
    >
      <BsSun className="block dark:hidden" />
      <BsMoon className="hidden dark:block" />
    </button>
  );
}
