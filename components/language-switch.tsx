'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuLanguages } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';
import '../lib/i18n';

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const availableLanguages = [
    { code: 'en', label: 'English' },
    { code: 'sc', label: '简体中文' },
    { code: 'tc', label: '繁體中文' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-[#43f0b3] text-ink shadow-panel backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#58d7ff] active:translate-y-0 dark:border-white/10 dark:bg-[#43f0b3] dark:text-ink"
        title="Select Language"
      >
        <LuLanguages className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute bottom-14 right-0 w-36 overflow-hidden rounded-[8px] border border-black/10 bg-white/95 shadow-panel backdrop-blur-xl dark:border-white/10 dark:bg-[#071016]/95"
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {availableLanguages.map(lang => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`block w-full truncate px-4 py-2 text-left text-sm transition hover:bg-black/5 dark:hover:bg-white/10 ${
                  i18n.language === lang.code ? 'font-bold' : ''
                }`}
                title={lang.label}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
