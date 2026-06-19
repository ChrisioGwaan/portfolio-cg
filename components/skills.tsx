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

      <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
        {t('skillsIntro')}
      </p>

      <ul className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
        {skillCategoriesData.map((category, index) => (
          <motion.li key={category.id} variants={itemReveal} custom={index}>
            <Card className="h-full rounded-[8px] border border-black/10 bg-white/76 shadow-panel backdrop-blur transition hover:-translate-y-1 hover:border-[#43f0b3]/70 dark:border-white/10 dark:bg-white/[0.05] dark:shadow-panel-dark">
              <CardBody className="flex h-full flex-col gap-5 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-black/10 bg-ink text-[#43f0b3] dark:border-white/10 dark:bg-white dark:text-ink">
                    {category.icon}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold text-ink dark:text-white sm:text-lg">
                      {t(`${category.id}.title`)}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                      {t(`${category.id}.description`)}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <Chip
                      key={skill}
                      className="border border-black/10 bg-white/70 px-1 font-medium text-[var(--muted)] dark:border-white/10 dark:bg-white/10 dark:text-white/80"
                      radius="sm"
                      size="sm"
                      variant="flat"
                    >
                      {skill}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
