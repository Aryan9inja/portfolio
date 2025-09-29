
import { Footer } from "@/components/Home/footer";
import Header from "@/components/Home/header";
import Main from "@/components/Home/main";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Aryan Singh Thakur | Portfolio</title>
        <meta name="description" content="Portfolio of Aryan Singh Thakur - showcasing projects, experience, and more." />
        <meta name="keywords" content="Aryan Singh Thakur, portfolio, projects, experience, web developer" />
        <meta name="author" content="Aryan Singh Thakur" />
        <meta property="og:title" content="Aryan Singh Thakur | Portfolio" />
        <meta property="og:description" content="Portfolio of Aryan Singh Thakur - showcasing projects, experience, and more." />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl px-4 md:px-8 py-8 flex flex-col gap-10">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}
