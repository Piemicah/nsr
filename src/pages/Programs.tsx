import React from "react";

const Programs = () => {
  return (
    <div className="max-w-5xl py-10 mx-auto space-y-10">
      <h1 className="text-3xl font-bold md:text-4xl">Programs & Initiatives</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="p-6 rounded-lg shadow-sm bg-gray-50">
          <h2 className="mb-2 text-lg font-semibold">Education & Training</h2>
          <p className="text-gray-700">
            Workshops, seminars, and training programs aimed at students and
            early-career researchers in neuroscience.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-sm bg-gray-50">
          <h2 className="mb-2 text-lg font-semibold">Research Development</h2>
          <p className="text-gray-700">
            Support for local research through mentorship and initiatives such
            as IBRO Seeding Neuroscience Grants.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-sm bg-gray-50">
          <h2 className="mb-2 text-lg font-semibold">Collaboration</h2>
          <p className="text-gray-700">
            Building national and international partnerships to strengthen
            knowledge exchange and interdisciplinary research.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
