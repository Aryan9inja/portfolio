"use client";

import { motion } from "motion/react";
import Container from "@/components/layout/Container";
import { FileDown, Mail } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-14 lg:pt-0">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5"
        >
          <motion.p
            variants={itemVariants}
            className="font-roboto text-accent text-base md:text-lg"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-text"
          >
            Aryan Singh Thakur.
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-muted"
          >
            I build systems and AI applications.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-text-muted text-base md:text-lg leading-relaxed mt-2"
          >
            I&apos;m a software engineer and CS student focused on backend systems,
            networking, and AI-powered applications. Currently building B2B SaaS
            infrastructure at{" "}
            <a
              href="https://www.linkedin.com/company/svaraai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Svara AI
            </a>
            {" "}with Node.js, NestJS, and AWS.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded
                         font-roboto text-sm hover:bg-accent/10 transition-colors"
            >
              <FileDown size={16} />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded
                         font-roboto text-sm hover:bg-accent-hover transition-colors"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
