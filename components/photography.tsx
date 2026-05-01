'use client';

import React, { useState } from 'react';
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
  const { ref } = useSectionInView('photography');
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
          <motion.img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="h-auto w-full cursor-pointer rounded-lg shadow-md hover:scale-[1.02] transition"
            custom={index}
            variants={itemReveal}
            onClick={() => setPreviewSrc(img.src)}
          />
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
            <motion.img
              src={previewSrc}
              alt="Preview"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
