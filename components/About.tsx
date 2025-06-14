import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16" id="about">
      <WobbleCard>
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          About Me
        </h2>
       <p className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
  I’m a <b>Mumbai-based full-stack developer</b> with a specialization in <b>Computer Engineering</b>. I completed my B.E. from Terna Engineering College with a CGPA of <b>8.9/10</b>. Proficient in <b>React, JavaScript, Java, Python, and Node.js</b>, I enjoy building scalable and user-friendly web applications that solve real-world problems.
  <br />
  
 
</p>
      </WobbleCard>
    </div>
  );
};

export default About;
