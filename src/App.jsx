import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <ParticleBackground className="absolute inset-0 z-0" />

        <div className="relative z-30">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experiences />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
