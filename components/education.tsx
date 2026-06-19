'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { educationData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { itemReveal, sectionReveal } from '@/lib/animations';
import '../lib/i18n';

export default function Education() {
  const { ref } = useSectionInView('education');
  const { t } = useTranslation();

  return (
    <motion.section
      id="education"
      ref={ref}
      className="w-full max-w-4xl scroll-mt-28 mb-28 sm:mb-40"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionHeading>{t('Education')}</SectionHeading>

      <div className="relative mx-auto">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#58d7ff] via-[var(--line-color)] to-[#e3b253] sm:left-6" />

        <ol className="space-y-5">
          {educationData.map((item, index) => (
            <motion.li
              key={item.id}
              className="relative pl-12 sm:pl-16"
              variants={itemReveal}
              custom={index}
            >
              <span className="absolute left-0 top-5 flex h-8 w-8 items-center justify-center rounded-[8px] border border-black/10 bg-white text-lg text-ink shadow-sm dark:border-white/10 dark:bg-ink dark:text-[#58d7ff] sm:h-12 sm:w-12">
                {item.icon}
              </span>

              <article className="rounded-[8px] border border-black/10 bg-white/76 p-5 text-left shadow-panel backdrop-blur transition hover:-translate-y-1 hover:border-[#58d7ff]/70 dark:border-white/10 dark:bg-white/[0.05] dark:shadow-panel-dark sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold capitalize text-ink dark:text-white sm:text-xl">
                      {t(`${item.id}.title`)}
                    </h3>
                    <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#0f766e] dark:text-[#43f0b3]">
                      {t(`${item.id}.location`)}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <time className="inline-flex w-fit rounded-full border border-black/10 bg-ink px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white dark:border-white/10 dark:bg-white dark:text-ink">
                      {t(`${item.id}.date`)}
                    </time>

                    {t(`${item.id}.status`) && (
                      <span
                        className={`inline-flex w-fit rounded-full px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] ${
                          t(`${item.id}.status`) === 'Completed' ||
                          t(`${item.id}.status`) === '已完成'
                            ? 'bg-[#43f0b3]/20 text-[#0f766e] dark:bg-[#43f0b3]/18 dark:text-[#43f0b3]'
                            : 'bg-[#e3b253]/25 text-[#7c4a03] dark:bg-[#e3b253]/18 dark:text-[#ffd27c]'
                        }`}
                      >
                        {t(`${item.id}.status`)}
                      </span>
                    )}
                  </div>
                </div>

                {t(`${item.id}.description`) && (
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {t(`${item.id}.description`)}
                  </p>
                )}
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
