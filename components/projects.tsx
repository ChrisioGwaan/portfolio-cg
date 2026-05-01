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
      <div>
        {projectsData.map(project => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
