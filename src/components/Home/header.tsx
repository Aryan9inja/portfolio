import { TypewriterEffect } from "../ui/typewriter-effect";

export default function Header() {
  const words = [
    { text: "A" },
    { text: "passionate" },
    { text: "full" },
    { text: "-" },
    { text: "stack" },
    { text: "developer" },
  ];
  return (
    <header className="text-text font-playfair">
      <p className="text-2xl md:text-4xl mb-1 md:mb-2 font-bold">Hi! 🤟</p>
      <p className="text-4xl md:text-6xl mb-2 md:mb-4">
        I&apos;m <span className="text-accent font-semibold font-roboto">Aryan</span> Singh
        Thakur
      </p>
      <TypewriterEffect words={words} className="font-bitcount font-medium tracking-tighter text-left text-sm"/>
    </header>
  );
}
