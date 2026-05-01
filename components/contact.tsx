'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LuGithub, LuLinkedin, LuMail, LuPhone } from 'react-icons/lu';
import { TbBrandWechat } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { sectionReveal } from '@/lib/animations';
import '../lib/i18n';

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

export default function Contact() {
  const { ref } = useSectionInView('contact');
  const { t } = useTranslation();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 w-full max-w-3xl scroll-mt-28 text-center sm:mb-40"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionHeading>{t('contactTitle')}</SectionHeading>

      <p className="mx-auto max-w-xl text-gray-700 dark:text-white/80">
        {t('contactIntro')}
      </p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-3">
        {contactLinks.map(item => {
          const Icon = item.icon;
          const inner = (
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
            'flex min-w-0 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm transition-colors hover:border-[#8cfa9e] hover:text-gray-950 dark:border-gray-800 dark:bg-gray-900 dark:hover:text-white';

          return (
            <li key={item.label} className="min-w-0">
              {item.href ? (
                <a className={className} href={item.href} title={item.value}>
                  {inner}
                </a>
              ) : (
                <span className={className} title={item.value}>
                  {inner}
                </span>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex justify-center gap-3">
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
    </motion.section>
  );
}

