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
  Currently, I work as a <b>Software Developer</b> at <b>Tata Consultancy Services (TCS)</b>, where I’m part of the <b>L3 CRM and Open UI Team</b>. I’m actively involved in projects with <b>Saudi Telecom Company (STC)</b>, helping deliver change requests for advanced billing and customer care systems. My role includes performing impact assessments, implementing changes within the <b>Siebel CRM</b> system, and executing IT process updates based on evolving business needs.
  <br />
  This experience has helped me sharpen my skills in <b>JavaScript, OracleDB, and PL/SQL</b>, while also strengthening my problem-solving and communication abilities in enterprise-scale environments. I’m passionate about continuous learning, staying updated with the latest in tech, and using my skills to create clean, efficient, and impactful software solutions.
</p>
      </WobbleCard>
    </div>
  );
};

export default About;
