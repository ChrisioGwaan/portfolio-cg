'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion, AnimatePresence } from 'framer-motion';
import '../lib/i18n';
import { useTranslation } from 'react-i18next';
import { itemReveal, sectionReveal } from '@/lib/animations';

const images = [
  { src: '/images/20250310_153650.jpg', alt: 'Image 1' },
  { src: '/images/20250320_193222.jpg', alt: 'Image 2' },
];

export default function Photography() {
  const { ref } = useSectionInView('photography' as any);
  const { t } = useTranslation();
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  return (
    <motion.section
      id="photography"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionHeading>{t('Photography')}</SectionHeading>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((img, index) => (
          <motion.div
            key={img.src}
            className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-[1.02] transition"
            custom={index}
            variants={itemReveal}
            onClick={() => setPreviewSrc(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </motion.div>
        ))}
      </div>

      {/* Image Preview Overlay */}
      <AnimatePresence>
        {previewSrc && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewSrc(null)}
          >
            <motion.div
              className="relative w-[90vw] h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={previewSrc}
                alt="Preview"
                fill
                className="object-contain rounded-lg shadow-lg"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
