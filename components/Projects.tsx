import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Regal from "@/public/images/regal.png";
import Bytes from "@/public/images/bytes.png";
import ContiqAI from "@/public/images/contiqai.png";
import Page from "@/public/images/page.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16">
      <div className="font-extrabold text-3xl xl:text-4xl font-recoleta text-center">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4 order-1">
          <div className="overflow-hidden rounded-lg">
            <Link href={"https://regal-estate.vercel.app/"} target="_blank">
              <Image
                src={Regal}
                alt="Regal Estate"
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">Regal Estate</div>
            <Link
              href={"https://github.com/tanishkadeep/Regal-Estate"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            a secure full-stack real estate app with dynamic property listings,
            detailed property pages, and landlord contact features, enhancing
            user engagement and efficiency.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              MERN
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Zod
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              JWT
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              TypeScript
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Firebase
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              bcryptjs
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Tailwind CSS
            </div>
          </div>
        </div>

        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4 order-3">
          <div className="overflow-hidden rounded-lg">
            <Link
              href={"https://landing-page-rho-hazel.vercel.app/"}
              target="_blank"
            >
              <Image
                src={Page}
                alt="Page"
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">
              {" "}
              Modern SaaS Landing Page
            </div>
            <Link
              href={"https://github.com/tanishkadeep/landing-page"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            a modern SaaS landing page using Tailwind CSS, TypeScript, Next.js,
            and Framer Motion to create a visually appealing user interface with
            engaging animations.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Next.js
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Framer Motion
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Tailwind CSS
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              TypeScript
            </div>
          </div>
        </div>

        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4 order-4">
          <div className="overflow-hidden rounded-lg">
            <Link href={"https://bytes-kohl.vercel.app/"} target="_blank">
              <Image
                src={Bytes}
                alt="Bytes"
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">Bytes</div>
            <Link
              href={"https://github.com/tanishkadeep/Bytes"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            a full-stack blogging app inspired by Medium, with JWT
            authentication, TypeScript and Zod validation, and scalable
            deployment via Vercel and Cloudflare Workers.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              React.js
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              PostgreSQL
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Prisma
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Hono
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              TypeScript
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Cloudflare Workers
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Vercel
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Zod
            </div>
          </div>
        </div>

        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4 order-2">
          <div className="overflow-hidden rounded-lg">
            <Link href={"https://contiq-ai.vercel.app/"} target="_blank">
              <Image
                src={ContiqAI}
                alt="ContiqAI"
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">ContiqAI</div>
            <Link
              href={"https://github.com/tanishkadeep/contiqAI"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            AI-powered tool to quickly create high-quality content for social
            media.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Next.js
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              PostgreSQL
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Prisma
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Google Gemini
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Clerk
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              TypeScript
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              shadcn/ui
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
