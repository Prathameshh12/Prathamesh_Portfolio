import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-[#0f172a]/70 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Name */}
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">
          Prathamesh
        </h1>

        <div className="flex items-center space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/Prathameshh12"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110 hover:text-black dark:hover:text-gray-300 text-gray-700 dark:text-white"
          >
            <FaGithub size={22} className="transition-transform duration-300 hover:rotate-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/prathamesh-ahire-9b38a9298/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110 hover:text-blue-700 dark:hover:text-blue-300 text-blue-800 dark:text-blue-400"
          >
            <FaLinkedin size={22} className="transition-transform duration-300 hover:-rotate-6" />
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1mtyZHK0-trSLtvH_eBzzBGEPLajCMSu7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-[17px] font-semibold text-gray-800 dark:text-white transform transition-transform duration-300 hover:scale-110 hover:rotate-1 hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
