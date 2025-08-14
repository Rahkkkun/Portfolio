import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / Logo */}
        <div>
          <h1 className="text-2xl font-bold">Rahul Maity</h1>
          <p className="mt-2 text-sm text-gray-400">
            When I code, people think <br /> I am doing cool shit.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#about" className="hover:text-white">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Hire Me</h2>
          <div className="flex flex-col space-y-3 text-gray-400">
            <div className="flex items-center space-x-4">
              {/* Social Icons */}
              <a
                href="https://www.linkedin.com/in/rahul-maity-171065346/"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/rrm.wav/"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/Rahkkkun"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
