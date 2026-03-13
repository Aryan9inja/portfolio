"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  name: string;
  intro: string;
  technologies?: string[];
  imageUrldark: string;
  imageUrlLight: string;
  slug: string;
  githubUrl?: string;
  liveUrl?: string;
  reverse?: boolean;
}

export default function ProjectCard({
  name,
  intro,
  technologies,
  imageUrldark,
  imageUrlLight,
  slug,
  githubUrl,
  liveUrl,
  reverse,
}: ProjectCardProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc = mounted
    ? resolvedTheme === "dark"
      ? imageUrldark
      : imageUrlLight
    : imageUrldark;

  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-6 md:gap-10 items-center`}
    >
      {/* Image */}
      <div className="w-full md:w-[58%] shrink-0 relative aspect-[16/10] rounded-xl overflow-hidden bg-bg-muted">
        <Link href={`/projects/${slug}`}>
          <div className="relative w-full h-full group">
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 640px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className={`w-full md:w-[42%] ${reverse ? "md:text-right" : ""}`}>
        <p className="font-roboto text-accent text-xs uppercase tracking-widest mb-2">
          Featured Project
        </p>
        <Link href={`/projects/${slug}`}>
          <h3 className="text-xl md:text-2xl font-semibold text-text hover:text-accent transition-colors mb-3">
            {name}
          </h3>
        </Link>
        <div className="bg-bg-muted border border-border rounded-xl p-5 mb-4">
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            {intro}
          </p>
        </div>
        {technologies && (
          <ul
            className={`flex flex-wrap gap-2 mb-4 ${
              reverse ? "md:justify-end" : ""
            }`}
          >
            {technologies.map((tech) => (
              <li
                key={tech}
                className="font-roboto text-xs text-accent bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-md"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
        <div className={`flex gap-4 ${reverse ? "md:justify-end" : ""}`}>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label={`${name} GitHub`}
            >
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label={`${name} Live`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
