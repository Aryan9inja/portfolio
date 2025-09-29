
import Education from "@/components/About/education";
import AboutHeader from "@/components/About/header";
import Hobbies from "@/components/About/hobbies";
import Passion from "@/components/About/passion";
import SocialLinks from "@/components/About/socials";
import Tagline from "@/components/About/tagline";
import Head from "next/head";


export default function About() {
  return (
    <>
      <Head>
        <title>About | Aryan Singh Thakur Portfolio</title>
        <meta name="description" content="Learn more about Aryan Singh Thakur, education, passions, hobbies, and social links." />
        <meta name="keywords" content="Aryan Singh Thakur, about, education, hobbies, passion, portfolio" />
        <meta property="og:title" content="About | Aryan Singh Thakur Portfolio" />
        <meta property="og:description" content="Learn more about Aryan Singh Thakur, education, passions, hobbies, and social links." />
        <meta property="og:type" content="website" />
      </Head>
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
    </>
  );
}
