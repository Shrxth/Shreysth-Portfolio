"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
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
  const { ref, inView } = useSectionInView("Skills", 0.6); // trigger when 60% in view

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      <motion.ul
        className="flex flex-wrap justify-center gap-3 text-lg text-gray-800 dark:text-white/80"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // 🔥 trigger every time inView changes
      >
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white borderBlack rounded-xl px-5 py-3 shadow-md dark:bg-white/10 transform-gpu hover:scale-105 hover:rotate-[0.5deg] transition duration-300 ease-in-out"
            variants={itemVariants}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
