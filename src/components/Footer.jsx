import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-orange-500 p-10 text-center mt-20">
      <p className="text-lg">&copy; 2025 Marc Humphrey. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="mailto:humphreymn6@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-2xl hover:text-orange-300" />
        </a>
        <a href="https://github.com/TrippieGlop" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-orange-300" />
        </a>
        <a href="https://www.linkedin.com/in/marc-humphrey-1b5a2a31b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-orange-300" />
        </a>
        <a href="https://www.instagram.com/mawrk.6/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-orange-300" />
        </a>
      </div>
    </footer>
  );
}

