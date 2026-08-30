"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Get in touch</SectionHeading>

      <p className="!mt-0 text-gray-700 dark:text-white/80">
        Interested in AI, data, automation, or building practical technical
        solutions? You can contact me directly at{" "}
        <a
          className="underline transition hover:text-gray-950 dark:hover:text-white"
          href="mailto:shreysthkumar@gmail.com"
        >
          shreysthkumar@gmail.com
        </a>{" "}
        or send me a message using the form below.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          aria-label="Your email"
        />

        <textarea
          className="my-3 h-30 rounded-lg borderBlack p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          aria-label="Your message"
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}