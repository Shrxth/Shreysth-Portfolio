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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-4">
        I&apos;m a Computer Science professional focused on applying{" "}
        <span className="font-medium">AI, data, and software engineering</span>{" "}
        to real-world problems. I enjoy understanding a problem first,
        identifying where intelligent automation can create value, and then
        building the technical solution around it.
      </p>

      <p className="mb-4">
        My work spans{" "}
        <span className="font-medium">
          data analytics, machine learning, AI agents, API integration,
          automation, and application development
        </span>
        . I&apos;m particularly interested in the space between business
        requirements and engineering—translating ambiguous problems into
        practical, measurable systems.
      </p>

      <p>
        My recent work includes an{" "}
        <span className="font-medium">AI agent orchestration system</span>, an{" "}
        <span className="font-medium">
          automated data intelligence pipeline
        </span>
        , predictive machine-learning solutions, and business intelligence
        dashboards.
      </p>
    </motion.section>
  );
}