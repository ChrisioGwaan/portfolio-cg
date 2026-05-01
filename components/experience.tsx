'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { itemReveal, sectionReveal } from '@/lib/animations';
import '../lib/i18n';

export default function Experience() {
  const { ref } = useSectionInView('experience');
  const { t } = useTranslation();

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="w-full max-w-4xl scroll-mt-28 mb-28 sm:mb-40"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionHeading>{t('Experience')}</SectionHeading>

      <div className="relative mx-auto">
        <div className="absolute left-4 top-0 h-full w-px bg-gray-200 dark:bg-gray-700 sm:left-6" />

        <ol className="space-y-5">
          {experiencesData.map((item, index) => (
            <motion.li
              key={item.id}
              className="relative pl-12 sm:pl-16"
              variants={itemReveal}
              custom={index}
            >
              <span className="absolute left-0 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-lg shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:h-12 sm:w-12">
                {item.icon}
              </span>

              <article className="rounded-lg border border-gray-200 bg-white p-5 text-left shadow-sm transition-colors dark:border-gray-700 dark:bg-white/5 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-950 dark:text-white sm:text-xl">
                      {t(`${item.id}.title`)}
                    </h3>
                    <p className="mt-1 font-medium text-[#0f9f1a] dark:text-[#8cfa9e]">
                      {t(`${item.id}.location`)}
                    </p>
                  </div>

                  <time className="inline-flex w-fit shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    {t(`${item.id}.date`)}
                  </time>
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-700 dark:text-white/75 sm:text-base">
                  {t(`${item.id}.description`)}
                </p>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
