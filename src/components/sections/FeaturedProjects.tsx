import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { Projects } from "@/components/Projects/projectData";

export default function FeaturedProjects() {
  const featured = Projects.filter((p) => p.featured);

  return (
    <Section id="projects">
      <SectionHeading number="03" title="Featured Projects" />
      <div className="space-y-20">
        {featured.map((project, idx) => (
          <ProjectCard
            key={project.slug}
            {...project}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
    </Section>
  );
}
