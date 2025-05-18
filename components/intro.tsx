"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="pt-32 mb-28 max-w-[50rem] text-center scroll-mt-28 min-h-screen flex flex-col justify-center"
    >
     <div className="flex items-center justify-center">
  <div className="relative group">
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      }}
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{ scale: 0.95, rotate: -3 }}
    >
      <Image
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        alt="Data Analyst Avatar"
        width={192}
        height={192}
        quality={95}
        priority={true}
        className="h-24 w-24 rounded-xl object-cover border-[0.35rem] border-white shadow-2xl bg-white"
      />
    </motion.div>

    <motion.span
      className="absolute bottom-0 right-0 text-3xl group-hover:animate-bounce"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.3,
        duration: 0.7,
      }}
    >
      📊
    </motion.span>
  </div>
</div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >

{/* Hi, I'm Shreysth. Transforming raw data into real-world impact—one smart solution at a time. */}
        <span className="font-bold">Hi, I'm Shreysth.</span> Transforming raw data into real-world impact—one smart solution at a time.{" "}
      
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact {" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="Resume_Shreysth.pdf"
          download
        >
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/shreysth-kumar-goyal-5375582ab/"
          target="_blank"
        >
          LinkedIn
         <BsLinkedin className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Shrxth"
          target="_blank"
        >
          GitHub
          <FaGithubSquare className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>
      </motion.div>
    </section>
  );
}
