import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Regal from "@/public/images/Blood.png";
import Bytes from "@/public/images/port.png";
import ContiqAI from "@/public/images/contiqai.png";
import Chattr from "@/public/images/chattr.png";
import Stream from "@/public/images/stream.png";
import Page from "@/public/images/notes.png";
import Bill from "@/public/images/bill.png";
import Link from "next/link";

const projects = [
  {
   title: "BloodNexus-Studio Website",
description:
  "A professionally designed landing page for BloodNexus Studio, built to showcase the brand, services, and improve client engagement with responsive and modern UI.",
    image: Regal,
    liveLink: "https://bloodnexusstudio.in/",
    githubLink: "https://github.com/tanishkadeep/Regal-Estate",
    tags: [
      "Next js ",
      "gasp",
      "TypeScript",
      "Tailwind CSS",
      "React js",
    ],
  },

  {
    title: "StreamVibe",
    description:
      "StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. ",
    image: Stream,
    liveLink: "https://streaming-ge5fiq3a1-dhruv2902s-projects.vercel.app/",
    githubLink: "https://github.com/DHRUV-2902/Streaming",
    tags: [
  "React",
  "Vite",
  "Tailwind CSS",
  "Material Tailwind",
  "Framer Motion",
  "Font Awesome",
  "JavaScript",
],
  },

  {
    title: "Electricity Billing System",
    description:
      "Electricity Billing System is a software-based application developed in Java programming language. The main objective is to manage the details of Electricity Bill, Connections, Store Record.",
    image: Bill,
    liveLink: "https://github.com/DHRUV-2902/Electricity_Management_System",
    githubLink: "https://github.com/DHRUV-2902/Electricity_Management_System",
    tags: [
  "Java",
  "Java Swing",
  "MySQL",
  "JDBC",
  "Desktop Application",
  "Object-Oriented Programming",
  "CRUD Operations",
  "Billing System"
]
  },
  {
    title: "PortFolio ",
    description:
     "A personal portfolio website to showcase my projects, experience, and skills. Built with React and styled using Tailwind CSS for a responsive and visually appealing design.",
    image: Bytes,
    liveLink: "https://chattr-orpin.vercel.app/",
    githubLink: "https://github.com/tanishkadeep/chattr",
    tags: ["React.js", "ws", "Node.js", "TypeScript", "Vercel"],
  },
  {
    title: "Notes App",
description:
  "A simple and efficient note-taking app built with React.js, Vite, Redux Toolkit, and ShadCN. It enables users to create, update, and delete todos with a clean and responsive UI. Smooth navigation is handled using React Router, and the app is optimized for fast performance and modern UX.",
image: Page, // Replace 'Page' with your actual image import or asset
liveLink: "https://your-notesapp.vercel.app/", // Replace with the actual live URL
githubLink: "https://github.com/DHRUV-2902/Notes-App", // Replace with your actual repo link
tags: [
  "React.js",
  "Vite",
  "Redux Toolkit",
  "React Router",
  "ShadCN",
  "JavaScript"
]
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16">
      <div className="font-extrabold text-3xl xl:text-4xl font-recoleta text-center">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-foreground border-neutral-600 border-2 rounded-xl p-4"
          >
            <div className="overflow-hidden rounded-lg">
              <Link href={project.liveLink} target="_blank">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg hover:scale-110 transition-transform duration-500"
                />
              </Link>
            </div>
            <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
              <Link
                href={project.liveLink}
                className="text-2xl font-bold font-inter"
              >
                {project.title}
              </Link>
              <Link href={project.githubLink} target="_blank">
                <FaGithub className="hover:scale-110 size-6" />
              </Link>
            </div>
            <div className="px-3 text-neutral-400 italic">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
              {project.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
