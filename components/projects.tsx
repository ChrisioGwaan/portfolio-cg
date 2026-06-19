'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import '../lib/i18n';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { sectionReveal } from '@/lib/animations';

export default function Projects() {
  const { ref } = useSectionInView('projects');
  const { t } = useTranslation();
  const sortedProjects = [...projectsData].sort((a, b) => b.sortOrder - a.sortOrder);

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <SectionHeading>{t('Projects')}</SectionHeading>
      <div className="mx-auto mb-7 max-w-3xl text-center text-sm leading-7 text-[var(--muted)] sm:text-base">
        Selected work across AI automation, cloud workflows, enterprise systems, and older fundamentals.
      </div>
      <div>
        {sortedProjects.map(project => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
