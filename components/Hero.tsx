import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DownloadResume from "./ui/DownloadResume";
import Image from "next/image";
import BGimage from "@/public/images/background.jpg";
import { GridBeam } from "./ui/GridBeam";
import { FaArrowDown } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="h-screen relative bg-[#0e0e0e] overflow-hidden flex flex-col items-center justify-center px-4">
      <Image
        src={BGimage}
        alt="Background"
        className="absolute md:top-1/2 bottom-0"
      />

      <div className="absolute top-8 right-8 z-10">
        <DownloadResume />
      </div>

      <GridBeam className="flex items-center justify-center flex-col max-w-lg h-1/2">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 relative z-10 text-center font-recoleta">
            Tanishka Deep
          </h1>

          <div className="text-xl lg:text-2xl text-neutral-400 mb-4 relative z-10 font-medium text-center">
            Full Stack Developer
          </div>
          <div className="flex justify-center items-center gap-4 relative z-10">
            <a
              href="https://github.com/tanishkadeep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/tanishkadeep/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-2xl hover:scale-110" />
            </a>
            <a
              href="mailto:tanishkadeep09@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="text-2xl hover:scale-110" />
            </a>
          </div>
        </div>
      </GridBeam>

      <div className="absolute bottom-10 mx-auto z-10">
        <FaArrowDown className="bg-neutral-800 rounded-full animate-bounce w-8 h-8 p-2" />
      </div>
    </div>
  );
}
