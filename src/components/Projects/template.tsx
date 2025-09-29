"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export interface ProjectDetailsProps {
  title: string;
  description: React.ReactNode;
  imageDark: string;
  imageLight: string;
  technologies?: string[];
  link?: string;
  slug:string;
}

export default function Template(props: ProjectDetailsProps) {
  const { title, description, imageDark, imageLight, technologies, link } =
    props;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const image = mounted ? (resolvedTheme === "dark" ? imageDark : imageLight) : undefined;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl px-4 md:px-8 py-8 flex flex-col gap-10">
        <section className="rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center gap-8 cursor-pointer">
          {image && (
            <div className="flex items-center justify-center mb-4 w-full relative aspect-[16/9]">
              {!imageLoaded && (
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg absolute inset-0 z-10 flex items-center justify-center">
                  <span className="loader border-4 border-accent border-t-transparent rounded-full w-10 h-10 animate-spin" />
                </div>
              )}
              <Image
                src={image}
                alt={title}
                width={1920}
                height={1080}
                className="object-cover shadow-lg border border-dashed border-accent/40 hover:border-accent transition duration-300 rounded-lg"
                priority
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          )}
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-2xl md:text-4xl font-bold mb-1 text-accent font-playfair animate-fade-in">
              {title}
            </h2>
            <div className="text-base md:text-lg text-text mb-2 animate-fade-in">
              {description}
            </div>
            {technologies && (
              <ul className="flex flex-wrap gap-2 mt-2">
                {technologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-medium border border-accent/30"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-5 py-2 rounded-lg bg-accent text-text-inverse font-semibold shadow hover:bg-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`View ${title} project`}
              >
                View Project
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
