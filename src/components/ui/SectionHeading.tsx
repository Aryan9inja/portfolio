"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className="flex items-center gap-2 text-2xl md:text-3xl font-semibold text-text mb-10"
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, x: -12 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
        }}
        className="font-roboto text-accent text-base md:text-lg"
      >
        {number}.
      </motion.span>
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
        }}
      >
        {title}
      </motion.span>
      <motion.span
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        style={{ transformOrigin: "left" }}
        className="ml-4 h-px flex-1 bg-border"
      />
    </motion.h2>
  );
}
