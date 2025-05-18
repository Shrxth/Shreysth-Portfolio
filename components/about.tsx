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
{/*
Hi, I’m a Computer Science enthusiast with a passion for data-driven storytelling and intelligent automation. From building a Superstore Sales Dashboard that reveals hidden business trends, to predicting churn with machine learning, to crafting an AI-powered ID card generator—I love turning raw data into smart, actionable solutions.

Whether it’s dashboards, predictive models, or creative automation—I bring curiosity, code, and clarity to every project I build. Let’s decode the future, one dataset at a time!
*/}

     <SectionHeading>About me</SectionHeading>

<p className="mb-3">
  Hi, I’m a Computer Science enthusiast with a passion for data-driven storytelling and intelligent automation.
  From building a <span className="font-medium">Superstore Sales Dashboard</span> that reveals hidden business trends,
  to predicting churn with <span className="font-medium">machine learning</span>,
  to crafting an <span className="font-medium">AI-powered ID card generator</span> —
  I love turning raw data into smart, actionable solutions.
</p>

<p className="mb-3">
  Whether it’s dashboards, predictive models, or creative automation —
  I bring <span className="font-medium">curiosity</span>, <span className="font-medium">code</span>, and <span className="font-medium">clarity</span> to every project I build.
  Let’s decode the future, one dataset at a time!
</p>
    </motion.section>
  );
}
