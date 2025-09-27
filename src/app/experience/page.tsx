import Contributions from "@/components/Experience/contributions";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl px-4 md:px-8 py-8 flex flex-col gap-10">
        <Contributions/>
      </div>
    </div>
  );
}
