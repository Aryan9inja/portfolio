"use client";

import { motion } from "motion/react";
import Container from "@/components/layout/Container";
import { FileDown, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-14 lg:pt-0">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          <p className="font-roboto text-accent text-base md:text-lg">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text">
            Aryan Singh Thakur.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-muted">
            I build things for the web.
          </h2>
          <p className="max-w-xl text-text-muted text-base md:text-lg leading-relaxed mt-2">
            I&apos;m a full stack developer and Computer Science student specializing in
            building scalable web applications. Currently interning at{" "}
            <a
              href="https://www.linkedin.com/company/svaraai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Svara AI
            </a>
            , working on B2B SaaS infrastructure with Node.js, NestJS, and AWS.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
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
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
