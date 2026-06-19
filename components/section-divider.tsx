'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      className="my-14 hidden h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-ink/20 to-transparent dark:via-white/20 sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
