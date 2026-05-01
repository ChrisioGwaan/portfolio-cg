'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { LuCalendarDays, LuChevronLeft, LuChevronRight, LuExternalLink, LuX } from 'react-icons/lu';

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
        className="mx-auto flex w-full max-w-5xl flex-col items-stretch gap-5 px-0 py-5 sm:px-2 md:flex-row md:items-start md:gap-6"
      >
        <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg md:w-1/2 lg:w-3/5">
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
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              {hasPrev && (
                <button
                  onClick={() => paginate(-1)}
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-gray-800 shadow-md backdrop-blur transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#8cfa9e] dark:bg-gray-950/75 dark:text-white dark:hover:bg-gray-900"
                  aria-label="Previous project screenshot"
                >
                  <LuChevronLeft size={20} />
                </button>
              )}
              {hasNext && (
                <button
                  onClick={() => paginate(1)}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-gray-800 shadow-md backdrop-blur transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#8cfa9e] dark:bg-gray-950/75 dark:text-white dark:hover:bg-gray-900"
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
                      index === imageIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/55 hover:bg-white/80'
                    }`}
                    aria-label={`Show project screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="w-full min-w-0 flex flex-col gap-3 md:w-1/2 lg:w-2/5">
          <div>
            <h3 className="text-xl font-bold leading-tight sm:text-2xl">{title}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <LuCalendarDays className="h-4 w-4" />
                {date}
              </span>
              {association && <span>{association}</span>}
            </div>
          </div>

          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-[#8cfa9e] hover:text-gray-950 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-white"
            >
              Show project
              <LuExternalLink className="h-4 w-4" />
            </a>
          )}

          <div className="rounded-lg border border-gray-200 bg-gray-50/80 p-3 dark:border-gray-800 dark:bg-gray-900/70">
            <div className="mb-2 text-xs font-semibold uppercase text-gray-400">Tech stack</div>
            <ul className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <li
                  key={skill}
                  className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-950 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:text-white sm:text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
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
                className="absolute left-2 top-1/2 z-10 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow focus:outline-none sm:left-4"
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
                className="absolute right-2 top-1/2 z-10 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow focus:outline-none sm:right-4"
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
                    className="max-h-[90vh] w-auto rounded-lg object-contain"
                  />
                </motion.div>
              </AnimatePresence>
              <button
                onClick={() => setPreviewOpen(false)}
                className="
                  absolute top-2 right-2 
                  w-8 h-8 flex items-center justify-center 
                  bg-black bg-opacity-40 
                  text-white text-xl rounded-full 
                  focus:outline-none 
                  hover:bg-white hover:bg-opacity-80 hover:text-black 
                  transition-colors duration-200
                "
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
