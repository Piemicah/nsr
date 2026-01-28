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
          Mr. Paul Ndahimana
        </li>
        <li className="p-4 rounded shadow-sm bg-gray-50">
          <strong>Vice President</strong>
          <br />
          Dr. Onaadepo Olufunke
        </li>
        <li className="p-4 rounded shadow-sm bg-gray-50">
          <strong>General Secretary</strong>
          <br />
          Mrs. Owoinsike Victor
        </li>
        <li className="p-4 rounded shadow-sm bg-gray-50">
          <strong>Treasurer</strong>
          <br />
          Mr. Habumuremyi Schadrack
        </li>
        <li className="p-4 rounded shadow-sm bg-gray-50">
          <strong>Advisors</strong>
          <br />
          <ol className="pl-4">
            <li>
              ⁠Dr. Victor Archibong- Advisor & coordinator of the Neuroscience
              society registration
            </li>
            <li>⁠Dr. Samson Olorunnado-Advisor in Charge of Welfare</li>
            <li>Dr. Abdullahi Mohammed- Advisor</li>
          </ol>
        </li>
      </ul>
    </div>
  );
};

export default Team;
