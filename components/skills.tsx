'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillCategoriesData } from '@/lib/data';
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
      className="mb-28 w-full max-w-5xl scroll-mt-28 text-center sm:mb-40"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionHeading>{t('Skills')}</SectionHeading>

      <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-gray-600 dark:text-white/65 sm:text-base">
        {t('skillsIntro')}
      </p>

      <ul className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
        {skillCategoriesData.map((category, index) => (
          <motion.li key={category.id} variants={itemReveal} custom={index}>
            <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-white/5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-[#0f9f1a] dark:bg-green-900/25 dark:text-[#8cfa9e]">
                  {category.icon}
                </span>

                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-gray-950 dark:text-white sm:text-lg">
                    {t(`${category.id}.title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/65">
                    {t(`${category.id}.description`)}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-white/75 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
