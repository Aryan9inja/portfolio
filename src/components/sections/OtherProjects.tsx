"use client";

import { motion } from "motion/react";
import Container from "@/components/layout/Container";
import { Projects } from "@/components/Projects/projectData";
import { Folder, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function OtherProjects() {
  const other = Projects.filter((p) => !p.featured);

  return (
    <section className="py-8">
      <Container>
        <h3 className="text-xl md:text-2xl font-semibold text-text text-center mb-8">
          Other Noteworthy Projects
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {other.map((project) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              className="bg-bg-muted rounded-xl p-6 flex flex-col justify-between
                         hover:-translate-y-1 transition-transform duration-200
                         border border-border hover:border-accent/40 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Folder className="text-accent" size={30} />
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors"
                        aria-label={`${project.name} GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors"
                        aria-label={`${project.name} Live`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <Link href={`/projects/${project.slug}`}>
                  <h4 className="text-lg font-semibold text-text hover:text-accent transition-colors mb-2">
                    {project.name}
                  </h4>
                </Link>
                <p className="text-text-muted text-sm leading-relaxed">
                  {project.intro}
                </p>
              </div>
              {project.technologies && (
                <ul className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="font-roboto text-xs text-accent bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
