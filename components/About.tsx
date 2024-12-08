import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-12 text-zinc-300 my-8">
            <div className="w-2/3 mx-auto py-8 px-16 rounded-xl border-neutral-700 border">
                <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
                <p className="leading-relaxed text-justify mx-auto">
                    I am a highly motivated and skilled full-stack developer with a strong foundation in <b> artificial intelligence and machine learning </b>, currently pursuing a B.E. at Ramaiah Institute of Technology with an exceptional CGPA of <b>

                        9.5/10  </b>. Proficient in a wide range of programming languages and frameworks, including <b>
                        React, Next.js, TypeScript, Python, and Node.js </b> , I specialize in building robust and scalable web applications.
                    <br />
                    <br />
                    My expertise spans frontend and backend development, with a proven track record of delivering innovative projects such as Regal Estate, a full-stack real estate platform, and Bytes, a blogging web application inspired by Medium. I have also gained valuable industry experience through my internship at <b>Larsen & Toubro Defence</b>, where I worked on synthetic data generation, real-time algorithm optimization, and advanced denoising techniques for predictive maintenance.
                    <br />  <br />
                    Committed to continuous learning and innovation, I bring a blend of technical proficiency, problem-solving abilities, and collaborative skills, making me an asset to any development team.
                </p>
            </div>
        </section>
    );
};

export default About;