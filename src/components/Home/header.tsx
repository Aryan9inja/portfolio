import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { words } from "./words";

export default function Header() {
  return (
    <header className="text-text font-playfair flex items-center md:justify-between">
      <div className="w-full md:w-[55%]">
        <p className="text-2xl md:text-4xl mb-1 md:mb-2 font-bold">Hi! 🤟</p>
        <p className="text-4xl md:text-6xl mb-1 md:mb-2">
          I&apos;m{" "}
          <span className="text-accent font-semibold font-roboto">Aryan</span>{" "}
          Singh Thakur
        </p>
        <TypewriterEffect
          words={words}
          className="font-bitcount font-semibold text-left md:text-left"
        />
      </div>
      <div className="hidden md:block">
        <img src="/dev.png" />
      </div>
    </header>
  );
}
