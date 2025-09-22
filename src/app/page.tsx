import { Footer } from "@/components/Home/footer";
import Gradient from "@/components/Home/gradient";
import Header from "@/components/Home/header";
import Main from "@/components/Home/main";

export default function Home() {
  return (
    <div className="p-0 md:p-6">
      <Header />
      <Gradient/>
      <Main />
      <Footer/>
    </div>
  );
}
