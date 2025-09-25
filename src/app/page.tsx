import { Footer } from "@/components/Home/footer";
import Header from "@/components/Home/header";
import Main from "@/components/Home/main";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl px-4 md:px-8 py-8 flex flex-col gap-10">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
