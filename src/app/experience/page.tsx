import Contributions from "@/components/Experience/contributions";
import Internships from "@/components/Experience/internships";
import Head from "next/head";

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience | Aryan Singh Thakur Portfolio</title>
        <meta
          name="description"
          content="Professional experience and contributions by Aryan Singh Thakur."
        />
        <meta
          name="keywords"
          content="Aryan Singh Thakur, experience, contributions, portfolio"
        />
        <meta
          property="og:title"
          content="Experience | Aryan Singh Thakur Portfolio"
        />
        <meta
          property="og:description"
          content="Professional experience and contributions by Aryan Singh Thakur."
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl px-4 md:px-8 py-8 flex flex-col gap-10">
          <Internships />
          <Contributions />
        </div>
      </div>
    </>
  );
}
