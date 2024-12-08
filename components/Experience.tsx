import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="text-zinc-300 mt-8 mb-24 px-12">
      <div className="max-w-5xl mx-auto lg:py-8 p-6 lg:px-16 rounded-xl border-neutral-700 border">
        <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Larsen & Toubro Defence</h3>
          <p className="text-lg italic">ML Intern</p>
          <p className="text-sm text-neutral-400">March 2024 – Sep 2024 | Remote</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-base xl:text-lg">
            <li>Designed and implemented GAN models to generate realistic datasets for predictive maintenance and anomaly detection, simulating real-world equipment conditions.</li>
            <li>Collaborated with industry experts to validate the effectiveness of synthetic data, refining methodologies, and algorithms for improved performance in predictive maintenance models.</li>
            <li>Evaluated CentreNet on multi-class PCB datasets and optimized inference times for real-time performance.</li>
            <li>Developed and optimized Gaussian, Median, and Non-Local Means denoising algorithms in Python and C++.</li>
            <li>Gained hands-on experience in synthetic data, computer vision, and real-time algorithm optimization for defense applications.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
