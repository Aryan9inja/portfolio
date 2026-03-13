"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const paraVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <Section id="about">
      <SectionHeading number="01" title="About Me" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-4 text-text-muted text-base md:text-lg leading-relaxed max-w-2xl"
      >
        <motion.p variants={paraVariants}>
          I&apos;m a software engineer and computer science student focused on backend
          systems, networking, and AI-powered applications. My work spans from writing
          networking systems in{" "}
          <span className="text-accent">C</span> to building full-stack SaaS platforms
          deployed in production.
        </motion.p>
        <motion.p variants={paraVariants}>
          I care about understanding how things work internally rather than only relying
          on frameworks. This curiosity has led me to explore HTTP internals,
          event-driven networking, retrieval systems, and AI-powered tools. I&apos;m
          currently building B2B infrastructure at{" "}
          <span className="text-accent">Svara AI</span>.
        </motion.p>
        <motion.p variants={paraVariants}>
          My long-term interests include distributed systems, operating systems, and
          building intelligent developer infrastructure. I enjoy designing clean backend
          architectures and experimenting with systems programming concepts.
        </motion.p>
      </motion.div>
    </Section>
  );
}
