import React from "react";

const Partners = () => {
  return (
    <div className="max-w-4xl py-10 mx-auto space-y-8">
      <h1 className="text-3xl font-bold md:text-4xl">
        Partners & Collaborations
      </h1>
      <p className="text-gray-700">
        NSR collaborates with local and international organizations to support
        neuroscience research, training, and funding opportunities.
      </p>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <li className="p-4 rounded bg-gray-50">
          International Brain Research Organization (IBRO)
        </li>
        <li className="p-4 rounded bg-gray-50">
          Universities & Research Institutions
        </li>
        <li className="p-4 rounded bg-gray-50">Healthcare Partners</li>
        <li className="p-4 rounded bg-gray-50">
          Academic & Training Organizations
        </li>
      </ul>
    </div>
  );
};

export default Partners;
