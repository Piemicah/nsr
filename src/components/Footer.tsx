import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">
            Neuroscience Society of Rwanda
          </h3>
          <p className="text-sm text-gray-300 mt-1">
            Advancing neuroscience education, research, and collaboration in
            Rwanda.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          {/* Twitter */}
          <a
            href="https://x.com/nsr_rwanda"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white transition"
            aria-label="Follow NSR on Twitter"
          >
            <img src={twitter} className="size-[24px]" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/nsr_rwanda"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white transition"
            aria-label="Follow NSR on Instagram"
          >
            <img src={instagram} />
          </a>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>© {new Date().getFullYear()} NSR</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
