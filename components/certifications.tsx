"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CertificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { FiExternalLink } from "react-icons/fi";

export default function Certifications() {
  const { ref } = useSectionInView("Certifications");
  const { theme } = useTheme();

  return (
    <section
      id="certifications"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>Education & Certifications</SectionHeading>

      <VerticalTimeline lineColor="">
        {CertificationsData.map((item, index) => (
          <React.Fragment key={`${item.title}-${index}`}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light"
                    ? "#f3f4f6"
                    : "rgba(255, 255, 255, 0.05)",
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
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light"
                    ? "white"
                    : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <div className="relative pr-8">
                <h3 className="font-semibold">{item.title}</h3>

                {item.location && (
                  <p className="mt-1 text-sm text-gray-500 dark:text-white/50">
                    {item.location}
                  </p>
                )}

                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title} certificate`}
                    className="absolute right-0 bottom-0 z-10 flex cursor-pointer items-center gap-2 rounded-full borderBlack bg-white p-2 text-[1.2rem] text-gray-700 transition hover:scale-[1.1] hover:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
                  >
                    <FiExternalLink aria-hidden="true" />
                  </a>
                )}
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}