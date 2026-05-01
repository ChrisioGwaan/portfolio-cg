'use client';

import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
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
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMarker, setActiveMarker] = useState({ left: 0, width: 0, opacity: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const desktopListRef = useRef<HTMLUListElement>(null);

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

  useLayoutEffect(() => {
    const updateActiveMarker = () => {
      const activeLink = desktopListRef.current?.querySelector<HTMLElement>(
        `[data-section-id="${activeSection}"]`
      );

      if (!activeLink || !desktopListRef.current) {
        setActiveMarker(marker => ({ ...marker, opacity: 0 }));
        return;
      }

      const linkRect = activeLink.getBoundingClientRect();
      const listRect = desktopListRef.current.getBoundingClientRect();

      setActiveMarker({
        left: linkRect.left - listRect.left + desktopListRef.current.scrollLeft,
        width: linkRect.width,
        opacity: 1,
      });
    };

    const animationFrame = window.requestAnimationFrame(updateActiveMarker);
    window.addEventListener('resize', updateActiveMarker);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', updateActiveMarker);
    };
  }, [activeSection, i18n.language]);

  return (
    <>
      {/* Mobile */}
      <div ref={menuRef} className="fixed left-4 right-4 top-4 z-[999] md:hidden">
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-gray-800 shadow-md transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8cfa9e] focus:ring-offset-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
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
              className="mt-3 w-full rounded-2xl border border-black/5 bg-white/95 p-2 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-gray-900/95"
            >
              <div className="grid grid-cols-2 gap-2">
                {links.map(link => (
                  <Link
                    key={link.hash}
                    href={link.hash}
                    className={clsx(
                      'rounded-xl px-3 py-3 text-center text-sm font-medium transition',
                      activeSection === link.id
                        ? 'bg-green-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                        : 'text-gray-600 hover:text-[#8cfa9e] dark:hover:text-[#8cfa9e]'
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
      <header className="z-[999] relative hidden md:block">
        <motion.div
          className="fixed left-1/2 top-6 h-[3.25rem] w-[calc(100%-2rem)] max-w-[56rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          initial={{ y: -100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
        ></motion.div>

        <nav className="fixed left-1/2 top-[1.7rem] flex h-[initial] w-[calc(100%-2rem)] max-w-[56rem] -translate-x-1/2 overflow-x-auto py-0">
          <ul
            ref={desktopListRef}
            className="relative mx-auto flex min-w-max flex-nowrap items-center justify-center gap-2 text-[0.9rem] font-medium text-gray-500 lg:gap-4"
          >
            <motion.span
              className="pointer-events-none absolute inset-y-0 rounded-full bg-green-100 dark:bg-gray-800"
              animate={activeMarker}
              transition={{
                type: 'spring',
                stiffness: 360,
                damping: 34,
              }}
            />
            {links.map(link => (
              <motion.li
                className="relative z-10 h-3/4 flex items-center justify-center"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  data-section-id={link.id}
                  className={clsx(
                    'flex w-full items-center justify-center px-2.5 py-3 hover:text-[#8cfa9e] transition dark:text-gray-300 dark:hover:text-[#8cfa9e]',
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
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
