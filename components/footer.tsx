'use client';

import React from 'react';
import { LuGithub, LuLinkedin, LuMail, LuPhone } from 'react-icons/lu';
import { TbBrandWechat } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

const contactLinks = [
  {
    label: 'Email',
    value: 'chrisiogwaan@gmail.com',
    href: 'mailto:chrisiogwaan@gmail.com',
    icon: LuMail,
  },
  {
    label: 'WeChat',
    value: 'chrisiogwaan',
    href: undefined,
    icon: TbBrandWechat,
  },
  {
    label: 'Phone',
    value: '+61 411 146 832',
    href: 'tel:+61411146832',
    icon: LuPhone,
  },
] as const;

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/ChrisioGwaan',
    icon: LuGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chrisiogwaan/',
    icon: LuLinkedin,
  },
] as const;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-12 border-t border-gray-200 bg-white px-4 py-8 pb-28 dark:border-gray-800 dark:bg-gray-950 sm:px-6 sm:pb-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 text-sm text-gray-600 dark:text-gray-300 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 text-center md:text-left">
          <p className="font-semibold text-gray-950 dark:text-white">Chrisio Gwaan</p>
          <small className="mt-1 block text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {t('footerCopyright')}
          </small>
        </div>

        <address className="grid w-full grid-cols-1 gap-2 not-italic sm:grid-cols-2 md:w-auto lg:grid-cols-3">
          {contactLinks.map(item => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" />
                <span className="shrink-0 text-xs font-medium uppercase text-gray-400">
                  {item.label}
                </span>
                <span className="min-w-0 truncate font-medium text-gray-700 dark:text-gray-200">
                  {item.value}
                </span>
              </>
            );

            const className =
              'flex min-w-0 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 transition-colors hover:border-[#8cfa9e] hover:text-gray-950 dark:border-gray-800 dark:bg-gray-900 dark:hover:text-white';

            return item.href ? (
              <a key={item.label} className={className} href={item.href} title={item.value}>
                {content}
              </a>
            ) : (
              <span key={item.label} className={className} title={item.value}>
                {content}
              </span>
            );
          })}
        </address>

        <div className="flex justify-center gap-3 md:justify-end">
          {socialLinks.map(item => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700 transition-colors hover:border-[#8cfa9e] hover:text-gray-950 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-white"
                title={item.label}
                aria-label={item.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
