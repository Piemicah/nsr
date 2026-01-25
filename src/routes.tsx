import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/programs" element={<Programs />} />
    <Route path="/team" element={<Team />} />
    <Route path="/partners" element={<Partners />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
export default AppRoutes;
