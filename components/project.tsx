'use client';

import { useState, useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

function ImagePreviewModal({
  src,
  alt,
  onClose,
}: {
  src: string | StaticImageData;
  alt: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div onClick={e => e.stopPropagation()} className="relative m-4">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="rounded-lg shadow-2xl max-w-full h-auto"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-1 focus:outline-none hover:bg-gray-900"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <>
      <motion.div
        ref={containerRef}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="group mb-8 last:mb-0"
      >
        <section
          className="
            max-w-[42rem] 
            bg-gray-100
            dark:bg-white/10 
            border border-black/5 
            rounded-lg 
            overflow-hidden 
            transition 
            hover:bg-gray-200 
            dark:hover:bg-white/20
            dark:text-white
            mx-auto
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center p-6">
            <div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-700 dark:text-white/70 leading-relaxed">{description}</p>
              <ul className="flex flex-wrap mt-4 gap-2">
                {tags.map((tag, index) => (
                  <li
                    className="
                      bg-black/[0.7] 
                      text-white 
                      dark:text-white/70 
                      px-3 
                      py-1 
                      text-[0.7rem] 
                      uppercase 
                      tracking-wider 
                      rounded-full
                    "
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <Image
                src={imageUrl}
                alt={title}
                width={500}
                height={300}
                className="
                  rounded-lg
                  shadow-xl
                  cursor-pointer
                  transition-transform
                  group-hover:scale-[1.04]
                  group-hover:-rotate-1
                "
                onClick={() => setIsPreviewOpen(true)}
              />
            </div>
          </div>
        </section>
      </motion.div>

      <AnimatePresence>
        {isPreviewOpen && (
          <ImagePreviewModal src={imageUrl} alt={title} onClose={() => setIsPreviewOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
