import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white py-4 px-6 flex justify-between items-center z-50">
      <Link to="/">
        <img src="/logonew.png" alt="Logo" className="h-20 ml-4 cursor-pointer" />
      </Link>

      <div className="flex space-x-12">
        <Link to="/" className="hover:text-orange-300 cursor-pointer text-xl">
          Home
        </Link>
        <Link to="/projects" className="hover:text-orange-300 cursor-pointer text-xl">
          Projects
        </Link>
        <Link to="/experience" className="hover:text-orange-300 cursor-pointer text-xl">
          Experience
        </Link>
        <a href="/Marc_Humphrey_Resume_2025.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300 cursor-pointer text-xl">
          Resume
        </a>
      </div>

      <div className="flex space-x-4">
        <a href="https://github.com/TrippieGlop" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-orange-300" />
        </a>
        <a href="www.linkedin.com/in/marc-humphrey-1b5a2a31b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-orange-300" />
        </a>
        <a href="https://www.instagram.com/mawrk.6/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-orange-300" />
        </a>
      </div>
    </nav>
  );
}
