'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import '../lib/i18n';
import { useTranslation } from 'react-i18next';
import { itemReveal, sectionReveal } from '@/lib/animations';

export default function Skills() {
  const { ref } = useSectionInView('skills');
  const { t } = useTranslation();

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionHeading>{t('Skills')}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800 sm:text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-3 py-2 dark:bg-white/10 dark:text-white/80 sm:px-5 sm:py-3"
            key={index}
            variants={itemReveal}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
