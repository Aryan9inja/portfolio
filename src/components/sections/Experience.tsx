import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceItem from "@/components/ui/ExperienceItem";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Svara AI",
    companyUrl: "https://www.linkedin.com/company/svaraai/",
    period: "Oct 2025 - Mar 2026",
    bullets: [
      "Built backend services and REST APIs using Node.js, NestJS, and MySQL for a B2B SaaS campaign management platform.",
      "Developed frontend features using Next.js and Tailwind CSS.",
      "Designed a production email infrastructure with Node.js inbound processing and Azure Email Services for outbound delivery.",
      "Deployed and managed application infrastructure on AWS EC2 using NGINX reverse proxy.",
      "Configured DNS authentication including SPF, DKIM, and DMARC for reliable email delivery.",
    ],
  },
];

const openSourceContributions = [
  {
    project: "EbookFoundation/free-programming-books",
    context: "Hacktoberfest 2024",
    prUrl:
      "https://github.com/EbookFoundation/free-programming-books/pull/11449",
    description:
      "Contributed documentation — added correct licensing to programming books and fixed the README.",
  },
  {
    project: "RocketChat/fuselage",
    context: null,
    prUrl: "https://github.com/RocketChat/fuselage/pull/1749",
    description:
      "Fixed component rendering bug — corrected colors and layouts in Box stories, improved type safety.",
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading number="02" title="Experience" />
      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>

      <div className="mt-14">
        <h3 className="text-xl font-semibold text-text mb-6">
          Open Source Contributions
        </h3>
        <div className="space-y-6">
          {openSourceContributions.map((contrib, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h4 className="text-base md:text-lg font-medium text-text">
                  {contrib.project}
                  {contrib.context && (
                    <span className="text-accent text-sm ml-2 font-roboto">
                      [{contrib.context}]
                    </span>
                  )}
                </h4>
                <a
                  href={contrib.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors"
                  aria-label="View PR on GitHub"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-text-muted text-sm md:text-base flex gap-2">
                <span className="text-accent mt-0.5 flex-shrink-0">
                  &#9656;
                </span>
                <span>{contrib.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
