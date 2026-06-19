'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillCategoriesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import '../lib/i18n';
import { useTranslation } from 'react-i18next';
import { itemReveal, sectionReveal } from '@/lib/animations';
import { Card, CardBody, Chip } from '@heroui/react';

const skillModes = [
  'Copilots, extraction, and retrieval flows',
  'Enterprise cloud and automation surfaces',
  'Interfaces that make systems usable',
  'Services, APIs, and application data',
  'Shipping habits and review loops',
] as const;

const skillSignals = [
  'linear-gradient(180deg, #43f0b3, #58d7ff)',
  'linear-gradient(180deg, #58d7ff, #e3b253)',
  'linear-gradient(180deg, #e3b253, #ff5c8a)',
  'linear-gradient(180deg, #ff5c8a, #43f0b3)',
  'linear-gradient(180deg, #43f0b3, #e3b253)',
] as const;

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

      <Card className="overflow-hidden rounded-[8px] border border-black/10 bg-white/72 text-left shadow-panel backdrop-blur-md dark:border-white/10 dark:bg-white/[0.055] dark:shadow-panel-dark">
        <CardBody className="p-0">
          <div className="grid gap-4 border-b border-black/10 px-5 py-5 dark:border-white/10 sm:grid-cols-[0.8fr_1.2fr] sm:px-6">
            <div>
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#0f766e] dark:text-[#43f0b3]">
                Capability map
              </p>
              <p className="mt-2 font-display text-2xl font-semibold leading-none text-ink dark:text-white">
                Practical stack, not keyword soup.
              </p>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              {t('skillsIntro')}
            </p>
          </div>

          <ul className="divide-y divide-black/10 dark:divide-white/10">
            {skillCategoriesData.map((category, index) => (
              <motion.li key={category.id} variants={itemReveal} custom={index}>
                <div className="group grid gap-4 px-4 py-5 transition-colors hover:bg-white/68 dark:hover:bg-white/[0.045] sm:px-6 lg:grid-cols-[16rem_1fr]">
                  <div className="grid grid-cols-[0.3rem_1fr] gap-4">
                    <span
                      className="rounded-full opacity-80 transition-opacity group-hover:opacity-100"
                      style={{ background: skillSignals[index % skillSignals.length] }}
                    />

                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-black/10 bg-ink text-[#43f0b3] shadow-sm dark:border-white/10 dark:bg-white dark:text-ink">
                          {category.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                            Signal {String(index + 1).padStart(2, '0')}
                          </p>
                          <h3 className="mt-1 font-display text-base font-semibold text-ink dark:text-white sm:text-lg">
                            {t(`${category.id}.title`)}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                        {t(`${category.id}.description`)}
                      </p>
                    </div>
                  </div>

                  <div className="min-w-0 lg:pt-1">
                    <p className="mb-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink/55 dark:text-white/55">
                      {skillModes[index % skillModes.length]}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map(skill => (
                        <Chip
                          key={skill}
                          className="border border-black/10 bg-white/74 px-1 font-medium text-[var(--muted)] shadow-[0_1px_0_rgba(10,21,28,0.04)] transition group-hover:border-black/15 group-hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:group-hover:border-white/20 dark:group-hover:bg-white/[0.14]"
                          radius="sm"
                          size="sm"
                          variant="flat"
                        >
                          {skill}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </motion.section>
  );
}
