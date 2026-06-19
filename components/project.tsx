'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { LuCalendarDays, LuChevronLeft, LuChevronRight, LuExternalLink, LuX } from 'react-icons/lu';
import { Button, Chip } from '@heroui/react';

const imageTransition = {
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1],
} as const;

export type ProjectProps = {
  title: string;
  date: string;
  sortOrder: number;
  association?: string;
  description: string;
  skills: readonly string[];
  images: readonly (string | StaticImageData)[];
  projectUrl?: string;
};

export default function Project({
  title,
  date,
  association,
  description,
  skills,
  images,
  projectUrl,
}: ProjectProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  const hasPrev = images.length > 1 && imageIndex > 0;
  const hasNext = images.length > 1 && imageIndex < images.length - 1;

  const paginate = (newDirection: number) => {
    setImageIndex(currentIndex =>
      Math.min(Math.max(currentIndex + newDirection, 0), images.length - 1)
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto my-6 grid w-full max-w-6xl gap-5 rounded-[8px] border border-black/10 bg-white/76 p-3 shadow-panel backdrop-blur transition hover:-translate-y-1 hover:border-[#43f0b3]/70 dark:border-white/10 dark:bg-white/[0.05] dark:shadow-panel-dark md:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.85fr)] md:gap-6 md:p-4"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-[6px] border border-black/10 bg-ink shadow-lg dark:border-white/10">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={imageIndex}
              className="absolute inset-0 cursor-pointer"
              initial={{ opacity: 0, scale: 1.02, filter: 'blur(6px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.985, filter: 'blur(4px)' }}
              transition={imageTransition}
              onClick={() => setPreviewOpen(true)}
            >
              <Image
                src={images[imageIndex]}
                alt={`${title} screenshot ${imageIndex + 1}`}
                fill
                loading={imageIndex === 0 ? 'eager' : 'lazy'}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              {hasPrev && (
                <button
                  onClick={() => paginate(-1)}
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-md backdrop-blur transition hover:-translate-x-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#43f0b3] dark:bg-[#071016]/75 dark:text-white dark:hover:bg-[#071016]"
                  aria-label="Previous project screenshot"
                >
                  <LuChevronLeft size={20} />
                </button>
              )}
              {hasNext && (
                <button
                  onClick={() => paginate(1)}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-md backdrop-blur transition hover:translate-x-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#43f0b3] dark:bg-[#071016]/75 dark:text-white dark:hover:bg-[#071016]"
                  aria-label="Next project screenshot"
                >
                  <LuChevronRight size={20} />
                </button>
              )}

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/35 px-2.5 py-2 backdrop-blur">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setImageIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === imageIndex
                        ? 'w-5 bg-[#43f0b3]'
                        : 'w-1.5 bg-white/55 hover:bg-white/80'
                    }`}
                    aria-label={`Show project screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex w-full min-w-0 flex-col gap-4 p-1 md:p-2">
          <div>
            <div className="mb-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#0f766e] dark:text-[#43f0b3]">
              Case study
            </div>
            <h3 className="font-display text-xl font-semibold leading-tight text-ink dark:text-white sm:text-2xl">
              {title}
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em]">
                <LuCalendarDays className="h-4 w-4" />
                {date}
              </span>
              {association && <span className="font-medium">{association}</span>}
            </div>
          </div>

          {projectUrl && (
            <Button
              as="a"
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-full border border-black/10 bg-white px-4 font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-[#43f0b3] data-[hover=true]:opacity-100 dark:border-white/10 dark:bg-white/10 dark:text-white"
              radius="full"
              size="sm"
            >
              Show project
              <LuExternalLink className="h-4 w-4" />
            </Button>
          )}

          <div>
            <div className="mb-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Tech stack
            </div>
            <ul className="flex flex-wrap gap-2">
              {skills.map(skill => (
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
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            {description}
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {previewOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewOpen(false)}
          >
            {hasPrev && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  paginate(-1);
                }}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink shadow transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#43f0b3] sm:left-4"
                aria-label="Previous large project screenshot"
              >
                <LuChevronLeft size={24} />
              </button>
            )}
            {hasNext && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  paginate(1);
                }}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink shadow transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#43f0b3] sm:right-4"
                aria-label="Next large project screenshot"
              >
                <LuChevronRight size={24} />
              </button>
            )}
            <motion.div
              className="relative max-h-[90vh] max-w-[92vw]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={imageIndex}
                  initial={{ opacity: 0, scale: 1.01, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.99, filter: 'blur(4px)' }}
                  transition={imageTransition}
                >
                  <Image
                    src={images[imageIndex]}
                    alt={`${title} large preview ${imageIndex + 1}`}
                    width={1200}
                    height={800}
                    className="max-h-[90vh] w-auto rounded-[8px] object-contain"
                  />
                </motion.div>
              </AnimatePresence>
              <button
                onClick={() => setPreviewOpen(false)}
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-xl text-white transition hover:bg-white hover:text-ink focus:outline-none focus:ring-2 focus:ring-[#43f0b3]"
                aria-label="Close project preview"
              >
                <LuX size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
