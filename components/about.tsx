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
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for web development. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Typescript, Node.js, and TailwindCSS
        </span>
        . I am also familiar with Prisma, Drizzle and MongoDB. I never stop
        learning and always try to keep myself up-to-date with latest trends and
        technologies.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        tennis, hanging out with friends and travelling.
      </p>
    </motion.section>
  );
}
