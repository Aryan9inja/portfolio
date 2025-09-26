import Education from "@/components/About/education";
import AboutHeader from "@/components/About/header";
import Hobbies from "@/components/About/hobbies";
import Passion from "@/components/About/passion";
import SocialLinks from "@/components/About/socials";
import Tagline from "@/components/About/tagline";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl px-4 md:px-8 py-8 flex flex-col gap-10">
        <AboutHeader />
        <Tagline />
        <Education />
        <Passion />
        <Hobbies/>
        <SocialLinks/>
      </div>
    </div>
  );
}
