"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";

export type ProjectProps = {
  title: string;
  description: string;
  skills: string[];
  images: Array<string | StaticImageData>;
};

export default function Project({
  title,
  description,
  skills,
  images,
}: ProjectProps) {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [previewOpen, setPreviewOpen] = useState(false);

  const imageIndex = ((page % images.length) + images.length) % images.length;
  const hasPrev = images.length > 1 && imageIndex > 0;
  const hasNext = images.length > 1 && imageIndex < images.length - 1;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-start gap-6 max-w-4xl mx-auto p-4"
      >
        {/* Slideshow */}
        <div className="relative w-full md:w-2/3 aspect-video overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              className="absolute inset-0 cursor-pointer"
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              onClick={() => setPreviewOpen(true)}
            >
              <Image
                src={images[imageIndex]}
                alt={`${title} screenshot ${imageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          {hasPrev && (
            <button
              onClick={() => paginate(-1)}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 shadow focus:outline-none"
            >
              <LuChevronLeft size={24} />
            </button>
          )}
          {hasNext && (
            <button
              onClick={() => paginate(1)}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 shadow focus:outline-none"
            >
              <LuChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Details */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="bg-white text-[#8cfa9e] px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewOpen(false)}
          >
            {hasPrev && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(-1);
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 shadow focus:outline-none"
              >
                <LuChevronLeft size={24} />
              </button>
            )}
            {hasNext && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(1);
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 shadow focus:outline-none"
              >
                <LuChevronRight size={24} />
              </button>
            )}
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[imageIndex]}
                alt={`${title} large preview ${imageIndex + 1}`}
                width={1200}
                height={800}
                className="rounded-lg object-contain"
              />
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
