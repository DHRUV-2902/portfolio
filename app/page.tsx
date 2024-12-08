import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero/>
      <About/>
    </div>
  );
}
