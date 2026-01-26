import Hero from "../components/Hero";
const Home = () => (
  <div className="space-y-12">
    <Hero />
    <section className="max-w-4xl mx-auto">
      <h2 className="mb-3 text-2xl font-semibold">Who We Are</h2>
      <p className="text-gray-700">
        The Neuroscience Society of Rwanda (NSR) is a pioneering organization
        dedicated to advancing neuroscience education, research, and
        collaboration in Rwanda.
      </p>
    </section>
    <section className="max-w-4xl mx-auto">
      <h2 className="mb-3 text-2xl font-semibold">Our Focus</h2>
      <ul className="grid grid-cols-1 gap-4 text-gray-700 md:grid-cols-2">
        <li>Education & Training</li>
        <li>Research Capacity Development</li>
        <li>National Platforms</li>
        <li>International Collaboration</li>
      </ul>
    </section>
  </div>
);
export default Home;
