"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Photography() {
  const { ref } = useSectionInView("Photography");

  return (
    <section
      id="photography"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Photography</SectionHeading>

      {/* <div className="flex flex-wrap justify-center gap-4">
        <img src="/image1.jpg" alt="Image 1" className="w-1/5 h-auto" />
        <img src="/image2.jpg" alt="Image 2" className="w-1/5 h-auto" />
        <img src="/image3.jpg" alt="Image 3" className="w-1/5 h-auto" />
        <img src="/image4.jpg" alt="Image 4" className="w-1/5 h-auto" />
        <img src="/image5.jpg" alt="Image 5" className="w-1/5 h-auto" />
      </div> */}

      <p>Coming soon ...</p>

    </section>
  );
}
