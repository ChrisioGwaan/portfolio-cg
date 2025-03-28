"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "react-i18next";
import "../lib/i18n";

export default function About() {
  const { ref } = useSectionInView("about");
  const { t } = useTranslation();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("aboutTitle")}</SectionHeading>
      <p>
        {t("aboutDescription1")}
      </p>

      <br />

      <p>
      {t("aboutDescription2")}
      </p>

      <br />

      <p>
        {t("aboutDescription3")}
      </p>
    </motion.section>
  );
}
