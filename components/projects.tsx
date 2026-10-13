'use client';

import { useMemo, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import {
  Button,
  Card,
  CardBody,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
} from '@heroui/react';
import {
  LuArrowUpRight,
  LuBriefcase,
  LuCalendarDays,
  LuChevronLeft,
  LuChevronRight,
  LuExpand,
  LuLayers,
} from 'react-icons/lu';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import '../lib/i18n';
import { useTranslation } from 'react-i18next';
import { sectionReveal } from '@/lib/animations';

type ProjectItem = (typeof projectsData)[number];
type ProjectImage = string | StaticImageData;

const imageTransition = {
  duration: 0.34,
  ease: [0.22, 1, 0.36, 1],
} as const;

const projectShortLabels = [
  'Document AI',
  'CGC Agent',
  'Cargo SaaS',
  'Instrument Hub',
  'Scrabble',
] as const;

const projectKinds = ['Automation', 'Knowledge', 'Operations', 'Platform', 'Game'] as const;

function getProjectLabel(project: ProjectItem, index: number) {
  return projectShortLabels[index] ?? project.title.split(' ').slice(0, 2).join(' ');
}

function getProjectKind(index: number) {
  return projectKinds[index] ?? 'Project';
}

function getProjectUrl(project: ProjectItem) {
  return 'projectUrl' in project ? project.projectUrl : undefined;
}

function getClampedImageIndex(project: ProjectItem, imageIndex: number) {
  return Math.max(0, Math.min(imageIndex, project.images.length - 1));
}

export default function Projects() {
  const { ref } = useSectionInView('projects');
  const { t } = useTranslation();
  const sortedProjects = useMemo(
    () => [...projectsData].sort((a, b) => b.sortOrder - a.sortOrder),
    []
  );
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const activeProject = sortedProjects[activeProjectIndex] ?? sortedProjects[0];
  const activeProjectUrl = getProjectUrl(activeProject);
  const safeImageIndex = getClampedImageIndex(activeProject, imageIndex);
  const activeImage = activeProject.images[safeImageIndex] as ProjectImage;
  const hasMultipleImages = activeProject.images.length > 1;

  const selectProject = (index: number) => {
    if (!sortedProjects[index]) return;

    setActiveProjectIndex(index);
    setImageIndex(0);
  };

  const paginateImage = (direction: number) => {
    setImageIndex(currentIndex => {
      const nextIndex = currentIndex + direction;

      if (nextIndex < 0) return activeProject.images.length - 1;
      if (nextIndex >= activeProject.images.length) return 0;

      return nextIndex;
    });
  };

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="mb-28 scroll-mt-28"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <SectionHeading>{t('Projects')}</SectionHeading>

      <Card
        className="mx-auto w-full max-w-6xl overflow-hidden rounded-[8px] border border-black/10 bg-white/78 shadow-panel backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-panel-dark"
        shadow="none"
      >
        <CardBody className="gap-0 p-0">
          <div className="grid min-h-[34rem] xl:grid-cols-[18rem_minmax(0,1fr)]">
            <aside className="hidden border-r border-black/10 bg-white/54 p-3 dark:border-white/10 dark:bg-white/[0.035] xl:block">
              <div className="mb-3 flex items-center justify-between px-2">
                <div>
                  <div className="font-mono text-[0.66rem] font-semibold uppercase text-[#0f766e] dark:text-[#43f0b3]">
                    Project index
                  </div>
                </div>
                <LuLayers className="h-5 w-5 text-[var(--muted)]" />
              </div>

              <ScrollShadow className="max-h-[30rem] overflow-y-auto pr-1" hideScrollBar>
                <div className="flex flex-col gap-2">
                  {sortedProjects.map((project, index) => {
                    const isActive = index === activeProjectIndex;

                    return (
                      <Button
                        key={project.title}
                        className={`h-auto justify-start rounded-[8px] px-3 py-3 text-left transition data-[hover=true]:-translate-y-0.5 data-[hover=true]:opacity-100 ${
                          isActive
                            ? 'bg-ink text-white shadow-md dark:bg-white dark:text-ink'
                            : 'border border-black/10 bg-white/58 text-ink dark:border-white/10 dark:bg-white/[0.055] dark:text-white'
                        }`}
                        radius="sm"
                        variant={isActive ? 'solid' : 'flat'}
                        onPress={() => selectProject(index)}
                      >
                        <span className="flex w-full min-w-0 items-start gap-3">
                          <span
                            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] font-mono text-[0.68rem] font-semibold ${
                              isActive
                                ? 'bg-white/14 text-[#43f0b3] dark:bg-ink/10 dark:text-[#0f766e]'
                                : 'bg-black/[0.045] text-[var(--muted)] dark:bg-white/10'
                            }`}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-semibold">
                              {getProjectLabel(project, index)}
                            </span>
                            <span
                              className={`mt-1 block text-xs ${
                                isActive ? 'text-white/68 dark:text-ink/64' : 'text-[var(--muted)]'
                              }`}
                            >
                              {project.date}
                            </span>
                          </span>
                        </span>
                      </Button>
                    );
                  })}
                </div>
              </ScrollShadow>
            </aside>

            <div className="min-w-0 p-3 sm:p-4 xl:p-5">
              <div className="mb-4 grid grid-cols-2 gap-2 xl:hidden" aria-label="Project selector">
                {sortedProjects.map((project, index) => {
                  const isActive = index === activeProjectIndex;

                  return (
                    <Button
                      key={project.title}
                      aria-pressed={isActive}
                      className={`h-12 justify-start rounded-[8px] px-3 font-mono text-[0.68rem] font-semibold uppercase transition data-[hover=true]:opacity-100 ${
                        isActive
                          ? 'bg-ink text-white dark:bg-white dark:text-ink'
                          : 'border border-black/10 bg-white/72 text-[var(--muted)] dark:border-white/10 dark:bg-white/10'
                      }`}
                      radius="sm"
                      variant={isActive ? 'solid' : 'flat'}
                      onPress={() => selectProject(index)}
                    >
                      <span className="mr-1 text-[0.62rem] opacity-60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {getProjectLabel(project, index)}
                    </Button>
                  );
                })}
              </div>

              <div className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)]">
                <div className="min-w-0">
                  <div className="relative aspect-video overflow-hidden rounded-[8px] border border-black/10 bg-ink shadow-lg dark:border-white/10">
                    <AnimatePresence initial={false} mode="wait">
                      <motion.button
                        key={`${activeProject.title}-${safeImageIndex}`}
                        className="absolute inset-0 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#43f0b3]"
                        type="button"
                        initial={{ opacity: 0, scale: 1.018, filter: 'blur(7px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 0.985, filter: 'blur(4px)' }}
                        transition={imageTransition}
                        onClick={() => setDetailsOpen(true)}
                        aria-label={`Open ${activeProject.title} details`}
                      >
                        <Image
                          src={activeImage}
                          alt={`${activeProject.title} screenshot ${safeImageIndex + 1}`}
                          fill
                          priority={activeProjectIndex === 0 && safeImageIndex === 0}
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 86vw, 56vw"
                        />
                      </motion.button>
                    </AnimatePresence>

                    <div className="absolute left-3 top-3 flex items-center gap-2">
                      <Chip
                        className="border border-white/12 bg-black/44 font-mono text-[0.65rem] font-semibold uppercase text-white backdrop-blur"
                        radius="sm"
                        size="sm"
                        variant="flat"
                      >
                        {getProjectKind(activeProjectIndex)}
                      </Chip>
                      <Chip
                        className="border border-white/12 bg-black/44 font-mono text-[0.65rem] font-semibold text-white backdrop-blur"
                        radius="sm"
                        size="sm"
                        variant="flat"
                      >
                        {safeImageIndex + 1}/{activeProject.images.length}
                      </Chip>
                    </div>

                    <Button
                      isIconOnly
                      aria-label="Open project details"
                      className="absolute right-3 top-3 h-9 w-9 rounded-[8px] border border-white/12 bg-black/44 text-white backdrop-blur data-[hover=true]:bg-white data-[hover=true]:text-ink"
                      radius="sm"
                      size="sm"
                      variant="flat"
                      onPress={() => setDetailsOpen(true)}
                    >
                      <LuExpand className="h-4 w-4" />
                    </Button>

                    {hasMultipleImages && (
                      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                        <div className="flex gap-1.5 rounded-full bg-black/38 px-2 py-2 backdrop-blur">
                          {activeProject.images.map((_, index) => (
                            <button
                              key={index}
                              className={`h-1.5 rounded-full transition-all ${
                                index === safeImageIndex
                                  ? 'w-5 bg-[#43f0b3]'
                                  : 'w-1.5 bg-white/55 hover:bg-white/85'
                              }`}
                              type="button"
                              onClick={() => setImageIndex(index)}
                              aria-label={`Show screenshot ${index + 1}`}
                            />
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            isIconOnly
                            aria-label="Previous screenshot"
                            className="h-9 w-9 rounded-[8px] border border-white/12 bg-black/44 text-white backdrop-blur data-[hover=true]:bg-white data-[hover=true]:text-ink"
                            radius="sm"
                            size="sm"
                            variant="flat"
                            onPress={() => paginateImage(-1)}
                          >
                            <LuChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            isIconOnly
                            aria-label="Next screenshot"
                            className="h-9 w-9 rounded-[8px] border border-white/12 bg-black/44 text-white backdrop-blur data-[hover=true]:bg-white data-[hover=true]:text-ink"
                            radius="sm"
                            size="sm"
                            variant="flat"
                            onPress={() => paginateImage(1)}
                          >
                            <LuChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {activeProject.images.slice(0, 3).map((image, index) => (
                      <button
                        key={`${activeProject.title}-thumb-${index}`}
                        className={`relative aspect-video overflow-hidden rounded-[6px] border transition focus:outline-none focus:ring-2 focus:ring-[#43f0b3] ${
                          index === safeImageIndex
                            ? 'border-[#43f0b3] opacity-100'
                            : 'border-black/10 opacity-66 hover:opacity-100 dark:border-white/10'
                        }`}
                        type="button"
                        onClick={() => setImageIndex(index)}
                        aria-label={`Show ${activeProject.title} screenshot ${index + 1}`}
                      >
                        <Image
                          src={image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 28vw, 14vw"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex min-w-0 flex-col gap-4">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase">
                        <LuCalendarDays className="h-4 w-4" />
                        {activeProject.date}
                      </span>
                      {activeProject.association && (
                        <span className="inline-flex min-w-0 items-center gap-1.5">
                          <LuBriefcase className="h-4 w-4 shrink-0" />
                          <span className="truncate">{activeProject.association}</span>
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl font-semibold leading-tight text-ink dark:text-white sm:text-3xl">
                      {activeProject.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {activeProject.description}
                    </p>
                  </div>

                  <div>
                    <div className="mb-2 font-mono text-[0.68rem] font-semibold uppercase text-[var(--muted)]">
                      Stack in view
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {activeProject.skills.map(skill => (
                        <li key={skill}>
                          <Chip
                            className="border border-black/10 bg-white/72 px-1 font-medium text-[var(--muted)] dark:border-white/10 dark:bg-white/10 dark:text-white/80"
                            radius="sm"
                            size="sm"
                            variant="flat"
                          >
                            {skill}
                          </Chip>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    <Button
                      className="rounded-[8px] bg-ink px-4 font-semibold text-white data-[hover=true]:-translate-y-0.5 data-[hover=true]:opacity-100 dark:bg-white dark:text-ink"
                      radius="sm"
                      onPress={() => setDetailsOpen(true)}
                    >
                      Inspect case study
                      <LuExpand className="h-4 w-4" />
                    </Button>
                    {activeProjectUrl && (
                      <Button
                        as="a"
                        className="rounded-[8px] border border-black/10 bg-white/72 px-4 font-semibold text-ink data-[hover=true]:-translate-y-0.5 data-[hover=true]:border-[#43f0b3] data-[hover=true]:opacity-100 dark:border-white/10 dark:bg-white/10 dark:text-white"
                        href={activeProjectUrl}
                        radius="sm"
                        rel="noopener noreferrer"
                        target="_blank"
                        variant="flat"
                      >
                        Open project
                        <LuArrowUpRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <Modal
        classNames={{
          backdrop: 'bg-ink/70 backdrop-blur-sm',
          base: 'rounded-[8px] border border-black/10 bg-[var(--panel-strong)] text-ink shadow-panel dark:border-white/10 dark:bg-[#071016] dark:text-white',
          body: 'px-4 pb-4 sm:px-6 sm:pb-6',
          closeButton: 'rounded-[8px] text-[var(--muted)] hover:bg-black/5 dark:hover:bg-white/10',
          footer: 'px-4 pb-4 sm:px-6 sm:pb-6',
          header: 'px-4 pt-5 sm:px-6',
        }}
        isOpen={detailsOpen}
        placement="center"
        radius="sm"
        scrollBehavior="inside"
        size="5xl"
        onOpenChange={setDetailsOpen}
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-2">
                <div className="font-mono text-[0.68rem] font-semibold uppercase text-[#0f766e] dark:text-[#43f0b3]">
                  {getProjectKind(activeProjectIndex)} case study
                </div>
                <div className="max-w-3xl font-display text-2xl font-semibold leading-tight">
                  {activeProject.title}
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]">
                  <div className="grid gap-3">
                    {activeProject.images.map((image, index) => (
                      <div
                        key={`${activeProject.title}-modal-${index}`}
                        className="relative aspect-video overflow-hidden rounded-[8px] border border-black/10 bg-ink dark:border-white/10"
                      >
                        <Image
                          src={image}
                          alt={`${activeProject.title} detailed screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 88vw, 54vw"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="rounded-[8px] border border-black/10 bg-white/64 p-4 dark:border-white/10 dark:bg-white/[0.055]">
                      <div className="mb-2 font-mono text-[0.68rem] font-semibold uppercase text-[var(--muted)]">
                        Context
                      </div>
                      <p className="text-sm leading-7 text-[var(--muted)]">
                        {activeProject.description}
                      </p>
                    </div>

                    <div className="rounded-[8px] border border-black/10 bg-white/64 p-4 dark:border-white/10 dark:bg-white/[0.055]">
                      <div className="mb-3 font-mono text-[0.68rem] font-semibold uppercase text-[var(--muted)]">
                        Tech stack
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {activeProject.skills.map(skill => (
                          <li key={skill}>
                            <Chip
                              className="border border-black/10 bg-white/72 px-1 font-medium text-[var(--muted)] dark:border-white/10 dark:bg-white/10 dark:text-white/80"
                              radius="sm"
                              size="sm"
                              variant="flat"
                            >
                              {skill}
                            </Chip>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="rounded-[8px]" radius="sm" variant="flat" onPress={onClose}>
                  Close
                </Button>
                {activeProjectUrl && (
                  <Button
                    as="a"
                    className="rounded-[8px] bg-ink font-semibold text-white dark:bg-white dark:text-ink"
                    href={activeProjectUrl}
                    radius="sm"
                    rel="noopener noreferrer"
                    target="_blank"
                    onPress={onClose}
                  >
                    Open project
                    <LuArrowUpRight className="h-4 w-4" />
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </motion.section>
  );
}
