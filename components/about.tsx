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
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      id="about"
    >
      <SectionHeading>{t('aboutTitle')}</SectionHeading>
      <p>{t('aboutDescription1')}</p>

      <br />

      <p>{t('aboutDescription2')}</p>

      <br />

      <p>{t('aboutDescription3')}</p>
    </motion.section>
  );
}
