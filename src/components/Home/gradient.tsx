"use client";

export default function Gradient() {
  return (
    <section className="relative h-[80px] md:h-[200px] w-full flex items-center justify-center my-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[90vw] md:w-[60vw] h-[80px] md:h-[200px] rounded-full bg-gradient-to-b from-accent/40 via-accent/10 to-bg blur-2xl opacity-80"></div>
      </div>
    </section>
  );
}
