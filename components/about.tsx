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
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      id="about"
    >
      <SectionHeading>{t('aboutTitle')}</SectionHeading>

      <p className="text-gray-700 dark:text-white/80">{t('aboutIntro')}</p>
      <p className="mt-4 text-gray-700 dark:text-white/80">{t('aboutPersonalNote')}</p>
    </motion.section>
  );
}
