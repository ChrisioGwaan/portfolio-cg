'use client';

import React, { useState } from 'react';
import {
  Button,
  Link as HeroLink,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import {
  LuBriefcase,
  LuFolderKanban,
  LuHome,
  LuMail,
  LuMenu,
  LuSparkles,
  LuX,
} from 'react-icons/lu';
import { links } from '@/lib/data';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from './language-switch';
import ThemeSwitch from './theme-switch';
import '../lib/i18n';

const mobilePrimaryLinks = ['home', 'experience', 'projects', 'skills', 'contact'] as const;

const mobileLinkIcons = {
  home: LuHome,
  experience: LuBriefcase,
  projects: LuFolderKanban,
  skills: LuSparkles,
  contact: LuMail,
} as const;

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t } = useTranslation();
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileNavLinks = links.filter(link =>
    mobilePrimaryLinks.includes(link.id as (typeof mobilePrimaryLinks)[number])
  );

  const selectSection = (section: (typeof links)[number]['id']) => {
    setActiveSection(section);
    setTimeOfLastClick(Date.now());
    setDesktopMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed inset-x-4 top-4 z-[999] mx-auto hidden max-w-6xl md:block">
        <Navbar
          isBlurred
          isBordered
          isMenuOpen={desktopMenuOpen}
          maxWidth="full"
          position="static"
          shouldHideOnScroll={false}
          onMenuOpenChange={setDesktopMenuOpen}
          classNames={{
            base: 'rounded-full border-black/10 bg-white/[0.78] shadow-panel backdrop-blur-xl dark:border-white/10 dark:bg-[#071016]/[0.78] dark:shadow-panel-dark',
            wrapper: 'h-14 max-w-6xl gap-2 px-3 sm:gap-3 sm:px-4',
            brand: 'basis-auto grow-0',
            content: 'gap-1',
            item: 'data-[active=true]:text-white',
            menu: 'hidden top-[4.5rem] rounded-[8px] border border-black/10 bg-white/95 px-3 py-4 shadow-panel backdrop-blur-xl dark:border-white/10 dark:bg-[#071016]/95 md:flex',
            menuItem: 'rounded-[8px]',
            toggle:
              'h-10 w-10 rounded-full border border-black/10 bg-white text-ink shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white',
          }}
        >
          <NavbarBrand>
            <Button
              as={HeroLink}
              href="#home"
              className="h-10 rounded-full border border-black/10 bg-ink px-4 font-display text-sm font-semibold text-white data-[hover=true]:opacity-100 dark:border-white/10 dark:bg-white dark:text-ink"
              radius="full"
              size="sm"
              variant="flat"
              onPress={() => selectSection('home')}
            >
              <span className="font-mono text-[0.7rem] text-[#43f0b3] dark:text-[#0f766e]">01</span>
              CG
            </Button>
          </NavbarBrand>

          <NavbarContent className="hidden flex-1 lg:flex" justify="center">
            {links.map(link => {
              const active = activeSection === link.id;

              return (
                <NavbarItem key={link.hash} isActive={active}>
                  <HeroLink
                    aria-current={active ? 'page' : undefined}
                    className={clsx(
                      'rounded-full px-4 py-2 text-sm font-semibold transition data-[hover=true]:opacity-100',
                      active
                        ? 'bg-ink text-white dark:bg-white dark:text-ink'
                        : 'text-gray-600 hover:bg-black/5 hover:text-ink dark:text-white/65 dark:hover:bg-white/10 dark:hover:text-white'
                    )}
                    color="foreground"
                    href={link.hash}
                    onPress={() => selectSection(link.id)}
                  >
                    {t(link.name)}
                  </HeroLink>
                </NavbarItem>
              );
            })}
          </NavbarContent>

          <NavbarContent className="hidden flex-1 md:flex lg:hidden" justify="center">
            <NavbarItem>
              <span className="rounded-full border border-black/10 bg-white/60 px-3 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] dark:border-white/10 dark:bg-white/10">
                {t(activeSection)}
              </span>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent className="flex basis-auto grow-0 justify-end lg:hidden" justify="end">
            <NavbarMenuToggle
              aria-label={desktopMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white"
              icon={isOpen => (isOpen ? <LuX size={20} /> : <LuMenu size={20} />)}
            />
          </NavbarContent>

          <NavbarMenu>
            {links.map((link, index) => {
              const active = activeSection === link.id;

              return (
                <NavbarMenuItem key={link.hash}>
                  <HeroLink
                    aria-current={active ? 'page' : undefined}
                    className={clsx(
                      'flex w-full items-center justify-between rounded-[8px] px-4 py-3 font-display text-lg font-semibold transition data-[hover=true]:opacity-100',
                      active
                        ? 'bg-ink text-white dark:bg-[#43f0b3] dark:text-ink'
                        : 'text-ink hover:bg-black/5 dark:text-white/75 dark:hover:bg-white/10'
                    )}
                    color="foreground"
                    href={link.hash}
                    onPress={() => selectSection(link.id)}
                  >
                    <span>{t(link.name)}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] opacity-50">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </HeroLink>
                </NavbarMenuItem>
              );
            })}
          </NavbarMenu>
        </Navbar>
      </div>

      <div className="fixed inset-x-3 bottom-3 z-[999] md:hidden">
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="absolute bottom-[calc(100%+0.75rem)] left-0 right-0 rounded-[14px] border border-black/10 bg-white/95 p-2 shadow-panel backdrop-blur-xl dark:border-white/10 dark:bg-[#071016]/95 dark:shadow-panel-dark"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid grid-cols-2 gap-2">
                {links.map((link, index) => {
                  const active = activeSection === link.id;

                  return (
                    <Button
                      key={link.hash}
                      as={HeroLink}
                      aria-current={active ? 'page' : undefined}
                      className={clsx(
                        'h-11 justify-between rounded-[8px] px-3 font-semibold data-[hover=true]:opacity-100',
                        active
                          ? 'bg-ink text-white dark:bg-[#43f0b3] dark:text-ink'
                          : 'bg-transparent text-ink hover:bg-black/5 dark:text-white/75 dark:hover:bg-white/10'
                      )}
                      href={link.hash}
                      radius="sm"
                      size="sm"
                      variant="flat"
                      onPress={() => selectSection(link.id)}
                    >
                      <span className="truncate">{t(link.name)}</span>
                      <span className="font-mono text-[0.62rem] opacity-50">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </Button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="rounded-[18px] border border-black/10 bg-white/[0.86] p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-panel backdrop-blur-xl dark:border-white/10 dark:bg-[#071016]/[0.88] dark:shadow-panel-dark">
          <nav className="grid grid-cols-5 gap-1" aria-label="Mobile primary navigation">
            {mobileNavLinks.map(link => {
              const active = activeSection === link.id;
              const Icon = mobileLinkIcons[link.id as keyof typeof mobileLinkIcons];

              return (
                <Button
                  key={link.hash}
                  as={HeroLink}
                  aria-current={active ? 'page' : undefined}
                  className={clsx(
                    'h-[3.25rem] min-w-0 flex-col gap-1 rounded-[12px] px-1 font-semibold data-[hover=true]:opacity-100',
                    active
                      ? 'bg-ink text-white shadow-sm dark:bg-white dark:text-ink'
                      : 'bg-transparent text-[var(--muted)] hover:bg-black/5 dark:hover:bg-white/10'
                  )}
                  href={link.hash}
                  radius="sm"
                  size="sm"
                  variant="flat"
                  onPress={() => selectSection(link.id)}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="max-w-full truncate text-[0.62rem] leading-none">{t(link.name)}</span>
                </Button>
              );
            })}
          </nav>

          <div className="mt-2 flex items-center justify-between gap-2 border-t border-black/10 pt-2 dark:border-white/10">
            <Button
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close section menu' : 'Open section menu'}
              className="h-10 rounded-full border border-black/10 bg-white/70 px-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink data-[hover=true]:opacity-100 dark:border-white/10 dark:bg-white/10 dark:text-white"
              radius="full"
              size="sm"
              variant="flat"
              onPress={() => setMobileMenuOpen(open => !open)}
            >
              {mobileMenuOpen ? <LuX className="h-4 w-4" /> : <LuMenu className="h-4 w-4" />}
              {t(activeSection)}
            </Button>

            <div className="flex shrink-0 items-center gap-2">
              <LanguageSwitch compact />
              <ThemeSwitch compact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
