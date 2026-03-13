"use client";

import { motion } from "motion/react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { SimpleIcon } from "simple-icons";
import {
  siC,
  siCplusplus,
  siJavascript,
  siTypescript,
  siGo,
  siNodedotjs,
  siNestjs,
  siExpress,
  siMongodb,
  siPostgresql,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siHtml5,
  siCss,
  siLinux,
  siNginx,
  siGit,
  siGithub,
  siPostman,
} from "simple-icons";

interface SkillItem {
  name: string;
  icon?: SimpleIcon;
}

interface SkillCategory {
  label: string;
  items: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    items: [
      { name: "C", icon: siC },
      { name: "C++", icon: siCplusplus },
      { name: "JavaScript", icon: siJavascript },
      { name: "TypeScript", icon: siTypescript },
      { name: "Go", icon: siGo },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "NestJS", icon: siNestjs },
      { name: "Express", icon: siExpress },
      { name: "MongoDB", icon: siMongodb },
      { name: "PostgreSQL", icon: siPostgresql },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "HTML", icon: siHtml5 },
      { name: "CSS", icon: siCss },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Linux", icon: siLinux },
      { name: "NGINX", icon: siNginx },
      { name: "AWS EC2" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "Postman", icon: siPostman },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function SkillIcon({ icon, size = 18 }: { icon: SimpleIcon; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <path d={icon.path} />
    </svg>
  );
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading number="04" title="Skills & Technologies" />
      <div className="grid gap-8 md:gap-10">
        {skillCategories.map((cat) => (
          <div key={cat.label}>
            <h3 className="font-roboto text-accent text-sm uppercase tracking-wider mb-4">
              {cat.label}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {cat.items.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-text-muted
                             bg-bg-muted/60 rounded-lg border border-border hover:border-accent/40
                             hover:text-text transition-colors"
                >
                  {skill.icon && <SkillIcon icon={skill.icon} />}
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}
