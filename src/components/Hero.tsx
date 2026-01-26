import heroImage from "../assets/images/hero.jpg";
const Hero = () => (
  <section
    className="relative py-20 text-center text-white"
    style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Content */}
    <div className="relative max-w-3xl px-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">
        Neuroscience Society of Rwanda
      </h1>
      <p className="text-lg md:text-xl">
        Building the foundation for neuroscience education, research, and
        collaboration in Rwanda
      </p>
    </div>
  </section>
);

export default Hero;
