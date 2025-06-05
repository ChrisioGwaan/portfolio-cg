'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useTranslation } from 'react-i18next';
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
      <div ref={menuRef} className="fixed top-4 left-4 z-[999] flex items-center gap-3 sm:hidden">
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-xl text-gray-800 dark:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8cfa9e] focus:ring-offset-2"
        >
          ☰
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-xl rounded-full px-6 py-2 flex gap-3 overflow-x-auto max-w-[70vw] whitespace-nowrap"
            >
              {links.map(link => (
                <Link
                  key={link.hash}
                  href={link.hash}
                  className={clsx(
                    'text-sm font-medium px-4 py-2 rounded-full transition',
                    activeSection === link.id
                      ? 'bg-green-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-600 hover:text-[#ff91b5] dark:hover:text-[#ff91b5]'
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
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop */}
      <header className="z-[999] relative hidden sm:block">
        <motion.div
          className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[48rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          initial={{ y: -100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
        ></motion.div>

        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map(link => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    'flex w-full items-center justify-center px-3 py-3 hover:text-[#ff91b5] transition dark:text-gray-300 dark:hover:text-[#ff91b5]',
                    {
                      'text-gray-950 dark:text-gray-200': activeSection === link.id,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.id);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {t(link.name)}

                  {link.id === activeSection && (
                    <motion.span
                      className="bg-green-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{
                        type: 'spring',
                        stiffness: 220,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
