import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { words, wordsB, wordsC } from "./words";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-bg-muted/80 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center md:justify-between gap-6">
      <div className="w-full md:w-[60%] flex flex-col gap-2">
        <p className="text-2xl md:text-4xl mb-1 font-bold">
          Hi! <span className="animate-bounce inline-block">🤟</span>
        </p>
        <p className="text-4xl md:text-6xl mb-2">
          I&apos;m{" "}
          <span className="text-accent font-semibold font-roboto">Aryan</span>{" "}
          Singh Thakur
        </p>
        <TypewriterEffect
          words={words}
          className="font-bitcount font-semibold text-left"
          cursorClassName="hidden"
        />
        <TypewriterEffect
          words={wordsB}
          className="font-bitcount font-semibold text-left"
          cursorClassName="hidden"
        />
        <TypewriterEffect
          words={wordsC}
          className="font-bitcount font-semibold text-left"
          cursorClassName="hidden"
        />
      </div>
      <div className="hidden md:flex items-center justify-center">
        <Image
          src="/dev.png"
          alt="Aryan Avatar"
          width={176}
          height={176}
          className="rounded-full w-44 h-44 object-cover shadow-md border-4 border-accent"
        />
      </div>
    </header>
  );
}
