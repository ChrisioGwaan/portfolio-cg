"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { ref } = useSectionInView("experience");
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t("Experience")}</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            date={item.date}
            icon={item.icon}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">
              {t(`${item.id}.title`)}
            </h3>
            <p className="font-normal !mt-0">{t(`${item.id}.location`)}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {t(`${item.id}.description`)}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
