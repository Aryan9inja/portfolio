"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeBtn() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="fixed z-10 bottom-6 text-3xl md:text-4xl right-4 cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme==="light"?"🌙":"🔆"}
    </button>
  );
}
