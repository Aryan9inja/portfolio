"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!isHomePage) {
    return (
      <nav className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-1 text-accent hover:text-accent-hover font-roboto text-sm transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
        {mounted && (
          <button
            onClick={toggleTheme}
            className="text-text-muted hover:text-text transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        )}
      </nav>
    );
  }

  return (
    <>
      {/* Desktop: fixed left sidebar */}
      <nav className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        {navSections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={cn(
              "text-xs font-roboto uppercase tracking-widest transition-colors",
              activeSection === id
                ? "text-accent"
                : "text-text-muted hover:text-text"
            )}
          >
            {label}
          </a>
        ))}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="mt-4 text-text-muted hover:text-text transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        )}
      </nav>

      {/* Mobile: fixed top bar */}
      <nav className="lg:hidden fixed top-0 w-full z-50 backdrop-blur-lg bg-bg/80 border-b border-border">
        <div className="flex items-center justify-between px-6 py-3">
          <a href="#hero" className="font-roboto text-accent text-sm font-semibold">
            AST
          </a>
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="text-text-muted hover:text-text transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-muted hover:text-text transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-bg/95 backdrop-blur-lg px-6 py-4 flex flex-col gap-3">
            {navSections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-roboto uppercase tracking-wider transition-colors py-1",
                  activeSection === id
                    ? "text-accent"
                    : "text-text-muted hover:text-text"
                )}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
