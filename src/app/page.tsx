import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import OtherProjects from "@/components/sections/OtherProjects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
