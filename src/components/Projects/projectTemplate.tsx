"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export interface ProjectProps {
  imageUrldark: string;
  imageUrlLight: string;
  name: string;
  intro: string;
}

export default function ProjectTemplate({
  imageUrldark,
  imageUrlLight,
  name,
  intro,
}: ProjectProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className="rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center gap-8 border border-border transition-all duration-300 hover:shadow-2xl hover:border-accent/60 cursor-pointer">
      <div className="flex items-center justify-center mb-4 w-full relative aspect-[16/9]">
        {mounted ? (
          <Image
            src={resolvedTheme == "dark" ? imageUrldark : imageUrlLight}
            alt="Project Screenshot"
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover shadow-lg border border-dashed border-accent/40 hover:border-accent transition duration-300 rounded-lg"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg" />
        )}
      </div>
      <div className="flex flex-col gap-3 w-full">
        <h2 className="text-2xl md:text-4xl font-bold mb-1 text-accent font-playfair animate-fade-in">
          {name}
        </h2>
        <p className="text-base md:text-lg text-text-muted mb-2 animate-fade-in">
          {intro}
        </p>
      </div>
    </section>
  );
}
