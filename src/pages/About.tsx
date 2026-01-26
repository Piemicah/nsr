import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl py-10 mx-auto space-y-8">
      <h1 className="text-3xl font-bold md:text-4xl">About NSR</h1>
      <p className="leading-relaxed text-gray-700">
        The Neuroscience Society of Rwanda (NSR) was established to build a
        strong foundation for neuroscience in Rwanda, particularly within a
        resourcelimited setting. The society serves as a national platform for
        neuroscientists, clinicians, educators, and students.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Our Mission</h2>
          <p className="text-gray-700">
            To advance neuroscience education, research, and collaboration while
            empowering local expertise to address neurological and mental health
            challenges.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">Our Vision</h2>
          <p className="text-gray-700">
            A vibrant and sustainable neuroscience community contributing to
            improved health, innovation, and scientific excellence in Rwanda and
            across Africa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
