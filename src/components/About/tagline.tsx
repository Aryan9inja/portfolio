export default function Tagline() {
  return (
    <section
      className="bg-bg-muted/80 rounded-2xl shadow-lg p-6 flex items-center justify-center min-h-[120px]"
      aria-label="About Tagline"
    >
      <p
        className="text-xl md:text-3xl font-roboto text-center transition-opacity duration-700"
        tabIndex={0}
      >
        I&apos;m a{" "}
        <span className="font-bold text-primary">
          Computer Science Engineering
        </span>{" "}
        student passionate about{" "}
        <span className="underline decoration-highlight">
          building scalable apps
        </span>{" "}
        and exploring how systems like{" "}
        <span className="text-accent">databases</span> and{" "}
        <span className="text-accent">operating systems</span> work.
      </p>
    </section>
  );
}
