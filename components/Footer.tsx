import Link from "next/link";
import { FaLink, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
import { GridPatternDashed } from "./ui/GridPatternDashed";

const Footer = () => {
  return (
    <GridPatternDashed>
      <div className="px-8 md:px-20 sm:px-10 py-12 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 justify-start mb-2.5 font-bold">
          <FaLink className="size-5" />
          <div className="text-xl xl:text-2xl"> Connect with me</div>
        </div>
        <div className="flex items-start justify-center sm:gap-2 text-lg text-neutral-400 font-medium flex-col sm:flex-row">
          <div className="flex-1 w-full">
            <Link
              className="flex items-center gap-2 justify-start mb-2  hover:text-white hover:underline"
              href="https://github.com/tanishkadeep"
              target="_blank"
            >
              <LuGithub className="size-5" />
              <div> tanishkadeep</div>
            </Link>

            <Link
              className="flex items-center gap-2 justify-start mb-2 hover:text-white hover:underline"
              href="https://x.com/yestanishka"
              target="_blank"
            >
              <FaXTwitter className="size-5" />
              <div> @yestanishka</div>
            </Link>

            <Link
              className="flex items-center gap-2 justify-start mb-2 hover:text-white hover:underline"
              href="https://buymeacoffee.com/tanishkadeep"
              target="_blank"
            >
              <SiBuymeacoffee className="size-5" />
              <div> tanishkadeep </div>
            </Link>
          </div>
          <div className="flex-1 w-full">
            <Link
              className="flex items-center gap-2 justify-start mb-2  hover:text-white hover:underline flex-wrap"
              href="mailto:tanishkadeep09@gmail.com"
              target="_blank"
            >
              <MdOutlineEmail className="size-5" />
              <div className="break-all"> tanishkadeep09@gmail.com</div>
            </Link>

            <Link
              className="flex items-center gap-2 justify-start mb-2  hover:text-white hover:underline"
              href="https://www.linkedin.com/in/tanishkadeep/"
              target="_blank"
            >
              <FaLinkedinIn className="size-5" />
              <div> Tanishka Deep</div>
            </Link>
          </div>
        </div>
      </div>
    </GridPatternDashed>
  );
};

export default Footer;
