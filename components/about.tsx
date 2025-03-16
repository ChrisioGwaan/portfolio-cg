"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        Software Engineer with experience in designing, monitoring, operating,
        and maintaining software systems tailored to diverse business
        requirements. My expertise lies particularly in developing secure and
        efficient microservices, leveraging cloud native solutions, and
        orchestrating streamlined project workflows through Jenkins CI/CD
        pipelines.
      </p>

      <br />

      <p>
        Recently, I have been expanding my skillset by integrating advanced and
        trending AI models into software solutions, enhancing user interaction
        and system capabilities through pioneering technologies.
      </p>

      <br />

      <p>
        Outside of work, my curiosity drives me toward mathematical research,
        riding adventures, and delving deep into historical documentary. I
        believe in a growth mindset, continually seeking challenges and
        opportunities for learning, both in and out of the workplace. Dedication
        and curiosity are central to my philosophy, applying my approach to all
        aspects of life.
      </p>
    </motion.section>
  );
}
