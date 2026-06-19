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

      <ul className="grid grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
        {skillCategoriesData.map((category, index) => (
          <motion.li key={category.id} variants={itemReveal} custom={index}>
            <Card className="h-full overflow-hidden rounded-[8px] border border-black/10 bg-white/72 shadow-panel backdrop-blur-md transition hover:-translate-y-0.5 hover:border-black/20 dark:border-white/10 dark:bg-white/[0.055] dark:shadow-panel-dark dark:hover:border-white/20">
              <CardBody className="p-0">
                <div className="h-1" style={{ background: skillSignals[index % skillSignals.length] }} />

                <div className="p-4 sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-black/10 bg-ink text-[#43f0b3] shadow-sm dark:border-white/10 dark:bg-white dark:text-ink">
                      {category.icon}
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink dark:text-white sm:text-lg">
                      {t(`${category.id}.title`)}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <Chip
                        key={skill}
                        className="border border-black/10 bg-white/74 px-1 font-medium text-[var(--muted)] shadow-[0_1px_0_rgba(10,21,28,0.04)] dark:border-white/10 dark:bg-white/10 dark:text-white/80"
                        radius="sm"
                        size="sm"
                        variant="flat"
                      >
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
