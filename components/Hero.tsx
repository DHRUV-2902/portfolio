import { BackgroundBeams } from "./ui/background-beams";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {


  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">

      <h1 className="text-4xl md:text-6xl font-bold mb-2 relative z-10 text-center">
        Tanishka Deep
      </h1>

      <p className="text-xl md:text-2xl text-neutral-400 mb-4 relative z-10">
        Full Stack Developer
      </p>
      <div className="flex justify-center items-center gap-4 relative z-10">
        <a href="https://github.com/tanishkadeep" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/tanishkadeep/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-2xl" />
        </a>
        <a href="mailto:tanishkadeep09@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail className="text-2xl" />
        </a>
      </div>
      <BackgroundBeams className="z-0" />
    </div>
  );
}