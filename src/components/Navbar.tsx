import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-primary text-white px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">NSR</h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/programs">Programs</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/partners">Partners</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 space-y-3">
          <li>
            <Link onClick={() => setOpen(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/programs">
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/team">
              Team
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/partners">
              Partners
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
