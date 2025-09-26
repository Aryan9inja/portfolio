export default function Passion() {
  return (
    <section className="relative bg-bg-muted/80 rounded-2xl shadow-lg p-8">
      {/* Title */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-highlight">
          What Drives Me
        </h1>
      </div>

      {/* Content */}
      <p className="text-base md:text-lg text-text/80 leading-relaxed max-w-3xl mx-auto">
        <span className="italic">
          The magic of coding is turning ideas into reality - one keystroke at a
          time.
        </span>{" "}
        I thrive on exploring how things work, from databases to operating
        systems, and I&apos;m always eager to dive into new tech. Building and
        creating keeps me curious, motivated, and excited to learn more every
        day.
      </p>
      <div className="mt-8">
        <span className="text-lg md:text-xl font-semibold text-accent">
          Let&apos;s build something amazing together!
        </span>
      </div>
    </section>
  );
}
