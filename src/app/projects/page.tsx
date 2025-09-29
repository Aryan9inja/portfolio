
import { Projects } from "@/components/Projects/projectData";
import ProjectTemplate from "@/components/Projects/projectTemplate";
import Head from "next/head";


export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Aryan Singh Thakur Portfolio</title>
        <meta name="description" content="Explore projects by Aryan Singh Thakur, built with modern tech and a passion for solving real problems." />
        <meta name="keywords" content="Aryan Singh Thakur, projects, portfolio, web development" />
        <meta property="og:title" content="Projects | Aryan Singh Thakur Portfolio" />
        <meta property="og:description" content="Explore projects by Aryan Singh Thakur, built with modern tech and a passion for solving real problems." />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl px-4 md:px-8 py-12 flex flex-col gap-12">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-accent drop-shadow-lg mb-2 animate-fade-in">
            My Projects
          </h1>
          <p className="text-lg md:text-2xl text-center text-text-muted animate-fade-in">
            Explore some of my favorite work, built with modern tech and a passion for solving real problems.
          </p>
          <p className="text-sm text-text-muted/80 text-center">
            Tip: Click on a project to know more
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Projects.map((project, idx) => (
              <div
                key={idx}
                className="transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl"
              >
                <ProjectTemplate
                  imageUrldark={project.imageUrldark}
                  imageUrlLight={project.imageUrlLight}
                  name={project.name}
                  intro={project.intro}
                  slug={project.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
