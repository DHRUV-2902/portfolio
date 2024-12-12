import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const Experience: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16">
      <WobbleCard containerClassName="bg-blue-900 ">
        <h2 className="text-3xl font-extrabold mb-4 text-left">Experience</h2>

        <div className="flex justify-between flex-col sm:flex-row text-neutral-300">
          <div>
            <h3 className="text-xl font-bold text-white">
              Larsen & Toubro Defence
            </h3>
            <p className="sm:text-lg italic">ML Intern</p>
          </div>
          <div>
            <p className="sm:text-right">March 2024 – Sep 2024</p>
          </div>
        </div>

        <p className="text-justify mt-4">
          Developed GAN models for synthetic data generation, optimized
          CentreNet for real-time PCB analysis, and implemented denoising
          algorithms in Python and C++. Gained expertise in synthetic data,
          computer vision, and real-time algorithm optimization for defense
          applications.
        </p>
      </WobbleCard>
    </div>
  );
};

export default Experience;
