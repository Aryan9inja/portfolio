"use client";

export default function Gradient() {
  return (
    <section className="relative h-[50px] md:h-[150px] overflow-hidden mt-30 mb-5">
      <div className="absolute left-[-250%] h-[6000%] w-[600%] rounded-full bg-gradient-to-b from-accent from-0% to-bg to-[0.5%]"></div>
    </section>
  );
}
