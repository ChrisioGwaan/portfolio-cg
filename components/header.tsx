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
import { LuMenu, LuX } from 'react-icons/lu';
import { links } from '@/lib/data';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const selectSection = (section: (typeof links)[number]['id']) => {
    setActiveSection(section);
    setTimeOfLastClick(Date.now());
    setMenuOpen(false);
  };

  return (
    <div className="fixed inset-x-4 top-4 z-[999] mx-auto max-w-6xl">
      <Navbar
        isBlurred
        isBordered
        isMenuOpen={menuOpen}
        maxWidth="full"
        position="static"
        shouldHideOnScroll={false}
        onMenuOpenChange={setMenuOpen}
        classNames={{
          base: 'rounded-full border-black/10 bg-white/[0.78] shadow-panel backdrop-blur-xl dark:border-white/10 dark:bg-[#071016]/[0.78] dark:shadow-panel-dark',
          wrapper: 'h-14 max-w-6xl gap-2 px-3 sm:gap-3 sm:px-4',
          brand: 'basis-auto grow-0',
          content: 'gap-1',
          item: 'data-[active=true]:text-white',
          menu: 'top-[4.5rem] rounded-[8px] border border-black/10 bg-white/95 px-3 py-4 shadow-panel backdrop-blur-xl dark:border-white/10 dark:bg-[#071016]/95',
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
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
  );
}
