'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useTranslation } from 'react-i18next';
import { sectionReveal } from '@/lib/animations';
import '../lib/i18n';

export default function About() {
  const { ref } = useSectionInView('about');
  const { t } = useTranslation();

  return (
    <motion.section
      ref={ref}
      className="mb-28 w-full max-w-5xl scroll-mt-28 leading-8 sm:mb-40"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      id="about"
    >
      <SectionHeading>{t('aboutTitle')}</SectionHeading>

      <div className="grid gap-6 rounded-[8px] border border-black/10 bg-white/72 p-5 shadow-panel backdrop-blur dark:border-white/10 dark:bg-white/[0.05] dark:shadow-panel-dark sm:p-7 md:grid-cols-[13rem_1fr]">
        <div className="space-y-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          <div className="border-l-2 border-[#43f0b3] pl-3">AI-adjacent tooling</div>
          <div className="border-l-2 border-[#58d7ff] pl-3">Cloud product systems</div>
          <div className="border-l-2 border-[#e3b253] pl-3">Human-useful software</div>
        </div>

        <div className="text-left text-base leading-8 text-[var(--muted)] sm:text-lg">
          <p>{t('aboutIntro')}</p>
          <p className="mt-4">{t('aboutPersonalNote')}</p>
        </div>
      </div>
    </motion.section>
  );
}
