"use client";

import { motion } from "motion/react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceItem from "@/components/ui/ExperienceItem";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Svara AI",
    companyUrl: "https://www.linkedin.com/company/svaraai/",
    period: "Oct 2025 - Mar 2026",
    bullets: [
      "Built backend services and REST APIs using Node.js, NestJS, and MySQL for a B2B SaaS campaign management platform.",
      "Developed frontend features using Next.js and Tailwind CSS.",
      "Designed a production email infrastructure with Node.js inbound processing and Azure Email Services for outbound delivery.",
      "Deployed and managed application infrastructure on AWS EC2 using NGINX reverse proxy.",
      "Configured DNS authentication including SPF, DKIM, and DMARC for reliable email delivery.",
    ],
  },
];

const openSourceContributions = [
  {
    project: "EbookFoundation/free-programming-books",
    context: "Hacktoberfest 2024",
    prUrl:
      "https://github.com/EbookFoundation/free-programming-books/pull/11449",
    description:
      "Contributed documentation — added correct licensing to programming books and fixed the README.",
  },
  {
    project: "RocketChat/fuselage",
    context: null,
    prUrl: "https://github.com/RocketChat/fuselage/pull/1749",
    description:
      "Fixed component rendering bug — corrected colors and layouts in Box stories, improved type safety.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading number="02" title="Experience" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-10"
      >
        {experiences.map((exp, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <ExperienceItem {...exp} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-14">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-xl font-semibold text-text mb-6"
        >
          Open Source Contributions
        </motion.h3>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-6"
        >
          {openSourceContributions.map((contrib, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h4 className="text-base md:text-lg font-medium text-text">
                  {contrib.project}
                  {contrib.context && (
                    <span className="text-accent text-sm ml-2 font-roboto">
                      [{contrib.context}]
                    </span>
                  )}
                </h4>
                <a
                  href={contrib.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors"
                  aria-label="View PR on GitHub"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-text-muted text-sm md:text-base flex gap-2">
                <span className="text-accent mt-0.5 flex-shrink-0">
                  &#9656;
                </span>
                <span>{contrib.description}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
