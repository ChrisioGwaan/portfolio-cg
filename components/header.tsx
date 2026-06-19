'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useTranslation } from 'react-i18next';
import { LuMenu, LuX } from 'react-icons/lu';
import '../lib/i18n';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Mobile */}
      <div
        ref={menuRef}
        className="fixed left-4 right-4 top-4 z-[999] flex items-center justify-between md:hidden"
      >
        <Link
          href="#home"
          className="rounded-full border border-black/10 bg-white/85 px-4 py-2 font-display text-sm font-semibold text-ink shadow-panel backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-white"
          onClick={() => {
            setActiveSection('home');
            setTimeOfLastClick(Date.now());
            setMenuOpen(false);
          }}
        >
          CG
        </Link>

        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/85 text-xl text-ink shadow-panel backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#43f0b3] focus:outline-none focus:ring-2 focus:ring-[#43f0b3] focus:ring-offset-2 dark:border-white/10 dark:bg-white/10 dark:text-white"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <LuX size={22} /> : <LuMenu size={22} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-14 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-panel backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1820]/95"
            >
              <div className="grid grid-cols-2 gap-2">
                {links.map(link => (
                  <Link
                    key={link.hash}
                    href={link.hash}
                    className={clsx(
                      'rounded-xl px-3 py-3 text-center text-sm font-semibold transition',
                      activeSection === link.id
                        ? 'bg-ink text-white dark:bg-[#43f0b3] dark:text-ink'
                        : 'text-gray-600 hover:bg-black/5 hover:text-ink dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white'
                    )}
                    onClick={() => {
                      setActiveSection(link.id);
                      setTimeOfLastClick(Date.now());
                      setMenuOpen(false);
                    }}
                  >
                    {t(link.name)}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop */}
      <header className="fixed left-1/2 top-5 z-[999] hidden w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 md:block">
        <motion.nav
          className="grid h-14 grid-cols-[auto_1fr] items-center gap-4 rounded-full border border-black/10 bg-white/80 px-3 shadow-panel backdrop-blur-xl dark:border-white/10 dark:bg-[#071016]/78 dark:shadow-panel-dark"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="#home"
            className="flex h-10 items-center gap-2 rounded-full border border-black/10 bg-ink px-4 font-display text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white dark:text-ink"
            onClick={() => {
              setActiveSection('home');
              setTimeOfLastClick(Date.now());
            }}
          >
            <span className="font-mono text-[0.7rem] text-[#43f0b3] dark:text-[#0f766e]">
              01
            </span>
            CG
          </Link>

          <ul className="relative flex min-w-0 flex-nowrap items-center justify-end gap-1 overflow-x-auto text-[0.83rem] font-semibold text-gray-500 lg:gap-2">
            {links.map(link => (
              <motion.li
                className="relative z-10 flex h-full items-center justify-center"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  data-section-id={link.id}
                  className={clsx(
                    'flex w-full items-center justify-center whitespace-nowrap rounded-full px-3 py-3 transition hover:bg-black/5 hover:text-ink dark:text-white/65 dark:hover:bg-white/10 dark:hover:text-white lg:px-4',
                    {
                      'bg-ink text-white hover:bg-ink hover:text-white dark:bg-white dark:text-ink dark:hover:bg-white dark:hover:text-ink':
                        activeSection === link.id,
                      'text-gray-500': activeSection !== link.id,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.id);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {t(link.name)}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </header>
    </>
  );
}
