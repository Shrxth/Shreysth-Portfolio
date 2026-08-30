"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const categoryVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function Skills() {
  const { ref, inView } = useSectionInView("Skills", 0.6);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Technical Skills</SectionHeading>

      <motion.div
        className="grid gap-6 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skillsData.map((skillGroup) => (
          <motion.div
            key={skillGroup.category}
            variants={categoryVariants}
            className="rounded-2xl border border-black/5 bg-white p-6 text-left shadow-sm transition duration-300 hover:shadow-md dark:border-white/10 dark:bg-white/10"
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {skillGroup.category}
            </h3>

            <motion.ul
              className="flex flex-wrap gap-2"
              variants={containerVariants}
            >
              {skillGroup.skills.map((skill) => (
                <motion.li
                  key={skill}
                  variants={itemVariants}
                  className="rounded-xl border border-black/5 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-800 transition duration-300 hover:scale-105 hover:bg-gray-100 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}