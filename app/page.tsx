import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-screen-2xl pb-4">
        <Hero />
        <About />
        <Skills />
        <Experience />
      </div>
    </div>
  );
}
