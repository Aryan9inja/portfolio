"use client";

import { motion } from "motion/react";
import Section from "@/components/layout/Section";

export default function Contact() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-lg mx-auto"
      >
        <p className="font-roboto text-accent text-base mb-4">05. What&apos;s Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
          Get In Touch
        </h2>
        <p className="text-text-muted text-base md:text-lg mb-8 leading-relaxed">
          I&apos;m currently looking for new opportunities. Whether you have a
          question, a project idea, or just want to say hi, my inbox is always
          open.
        </p>
        <a
          href="mailto:aryansingthakur@gmail.com"
          className="inline-block px-8 py-4 border border-accent text-accent rounded
                     font-roboto text-sm hover:bg-accent/10 transition-colors"
        >
          Say Hello
        </a>
      </motion.div>
    </Section>
  );
}
