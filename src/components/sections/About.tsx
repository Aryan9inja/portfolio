import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading number="01" title="About Me" />
      <div className="space-y-4 text-text-muted text-base md:text-lg leading-relaxed max-w-2xl">
        <p>
          I&apos;m a Computer Science Engineering student at{" "}
          <span className="text-accent">ICFAI University, Baddi</span> (CGPA: 8.9/10,
          graduating 2027) passionate about building scalable applications and
          understanding how systems work under the hood.
        </p>
        <p>
          I&apos;ve had the opportunity to work at{" "}
          <span className="text-accent">Svara AI</span> building B2B SaaS
          infrastructure — from backend APIs with NestJS and MySQL, to production
          email systems on AWS EC2 with NGINX.
        </p>
        <p>
          My current interests revolve around backend engineering with Go and
          Node.js, containerized deployments with Docker, and building developer
          tools. I enjoy contributing to open source and exploring how databases
          and operating systems work internally.
        </p>
      </div>
    </Section>
  );
}
