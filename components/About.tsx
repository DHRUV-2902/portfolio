import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16">
      <WobbleCard containerClassName="">
        <h2 className="text-3xl font-extrabold mb-4 text-left">About Me</h2>
        <p className="mt-4 text-neutral-200 mx-auto text-base text-justify">
          I am a skilled full-stack developer with a strong foundation in{" "}
          <b> artificial intelligence and machine learning </b>, pursuing a B.E.
          at Ramaiah Institute of Technology with a CGPA of <b> 9.5/10 </b>.
          Proficient in <b> React, Next.js, TypeScript, Python, and Node.js </b>{" "}
          <br />
          My portfolio includes innovative projects like Regal Estate, a real
          estate platform, and Bytes, a Medium-inspired blogging app. At{" "}
          <b>Larsen & Toubro Defence</b>, I gained valuable experience in
          synthetic data generation, real-time optimization, and advanced
          denoising techniques for predictive maintenance. <br />
          Committed to continuous learning and innovation, I bring technical
          expertise, problem-solving skills, and a passion for innovation to
          every project I undertake.
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;
