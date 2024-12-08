import React from 'react';

const About: React.FC = () => {
    return (
        <section className="text-zinc-300 mt-8 mb-24 px-12">
            <div className="max-w-5xl mx-auto lg:py-8 p-6 lg:px-16 rounded-xl border-neutral-700 border">
                <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
                <p className="leading-relaxed text-justify mx-auto text-base xl:text-lg">
                    I am a skilled full-stack developer with a strong foundation in <b> artificial intelligence and machine learning </b>,  pursuing a B.E. at Ramaiah Institute of Technology with a CGPA of <b>
                        9.5/10  </b>. Proficient in  <b>
                        React, Next.js, TypeScript, Python, and Node.js </b> , I specialize in building robust web applications.
                    <br />
                    <br />
                    My portfolio includes innovative projects like Regal Estate, a real estate platform, and Bytes, a Medium-inspired blogging app. At <b>Larsen & Toubro Defence</b>, I gained valuable experience in synthetic data generation, real-time optimization, and advanced denoising techniques for predictive maintenance.
                    <br />
                    <br />
                    Committed to continuous learning and innovation, I bring technical expertise, problem-solving skills, and a passion for innovation to every project I undertake.
                </p>
            </div>
        </section>
    );
};

export default About;