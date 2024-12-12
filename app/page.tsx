import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-screen-2xl">
        <Hero />

        <About />
        <Experience />
      </div>
    </div>
  );
}
