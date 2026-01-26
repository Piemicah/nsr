import React from "react";

const Team = () => {
  return (
    <div className="max-w-4xl py-10 mx-auto space-y-8">
      <h1 className="text-3xl font-bold md:text-4xl">Leadership & Team</h1>
      <p className="text-gray-700">
        The Neuroscience Society of Rwanda is led by a dedicated team of
        scientists, educators, and professionals committed to advancing
        neuroscience.
      </p>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <li className="p-4 rounded shadow-sm bg-gray-50">
          <strong>President</strong>
          <br />
          Name Here
        </li>
        <li className="p-4 rounded shadow-sm bg-gray-50">
          <strong>Vice President</strong>
          <br />
          Name Here
        </li>
        <li className="p-4 rounded shadow-sm bg-gray-50">
          <strong>Secretary</strong>
          <br />
          Name Here
        </li>
        <li className="p-4 rounded shadow-sm bg-gray-50">
          <strong>Treasurer</strong>
          <br />
          Name Here
        </li>
      </ul>
    </div>
  );
};

export default Team;
