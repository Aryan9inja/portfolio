"use client";

import Link from "next/link";
import { NavItem } from "./types";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: Url) => pathname === path;

  const navItems: NavItem[] = [
    { id: "home", href: "/", label: "Home" },
    { id: "about", href: "/about", label: "About" },
    { id: "experience", href: "#", label: "Experience" },
    { id: "projects", href: "#", label: "Projects" },
  ];

  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2 
        z-50 w-[90%] md:w-[40%] 
        rounded-full px-6 py-3 
        backdrop-blur-lg backdrop-saturate-150
        dark:bg-bg/60
        border border-border
        shadow-lg
      "
    >
      <ul className="flex justify-center gap-8 items-center">
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            <Link
              href={navItem.href}
              className={`transition-colors duration-200 
                ${
                  isActive(navItem.href)
                    ? "text-highlight-active font-semibold"
                    : "text-text dark:text-gray-200 hover:text-highlight-hover"
                }
              `}
            >
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
