import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const Experience: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16">
      <WobbleCard containerClassName="bg-blue-900 ">
  <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
    Experience
  </h2>

  {/* TCS Experience */}
  <div className="flex justify-between flex-col sm:flex-row text-neutral-300">
    <div>
      <h3 className="text-xl xl:text-2xl font-bold text-white">
        Tata Consultancy Services (TCS)
      </h3>
      <p className="sm:text-lg italic">CRM Developer</p>
    </div>
    <div>
      <p className="sm:text-right text-base xl:text-lg">
        Sept 2024 – Present
      </p>
    </div>
  </div>

  <p className="mt-4 text-base xl:text-lg font-medium">
    Working as part of the L3 CRM and Open UI team, collaborating with Saudi Telecom Company (STC) to deliver change requests for modernizing billing and customer care systems. Responsibilities include impact assessment, implementing enhancements in the Siebel CRM system, and driving IT process updates aligned with evolving business needs. 
    <br />
    <span className="block mt-2">Skills Developed: <b>JavaScript, OracleDB, PL/SQL, Angular</b></span>
  </p>
</WobbleCard>
    </div>
  );
};

export default Experience;
