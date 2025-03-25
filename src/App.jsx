import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="bg-black text-orange-500 min-h-screen font-mono flex flex-col items-center justify-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experiences />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
