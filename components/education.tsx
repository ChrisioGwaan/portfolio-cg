'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { educationData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

export default function Education() {
  const { ref } = useSectionInView('education');
  const { t } = useTranslation();

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t('Education')}</SectionHeading>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-2">
        {educationData.map(item => (
          <li key={item.id} className="mb-10 ms-6">
            <span className="absolute -left-5 flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 ring-8 ring-white dark:ring-gray-900">
              {item.icon}
            </span>

            <h3 className="font-bold capitalize text-gray-900 dark:text-white sm:text-2xl">
              {t(`${item.id}.title`)}
            </h3>

            <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mb-1">
              {t(`${item.id}.date`)}
            </time>

            <p className="font-semibold text-[#12ec22] dark:text-[#22ce12] mb-1">
              {t(`${item.id}.location`)}
            </p>

            {t(`${item.id}.status`) && (
              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-2
                ${
                  t(`${item.id}.status`) === 'Completed'
                    ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                }`}
              >
                {t(`${item.id}.status`)}
              </span>
            )}

            <hr className="my-2 border-gray-300 dark:border-gray-600" />

            {t(`${item.id}.description`) && (
              <p className="text-gray-700 dark:text-white/75 max-w-xl">
                {t(`${item.id}.description`)}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
