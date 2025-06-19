import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Portfolio Website",
    desc: "Creative minimalist personal website built with React, Vite, TailwindCSS, and Framer Motion.",
    image: "/images/portfolio.png",
    github: "https://github.com/Prathameshh12/Prathamesh_Portfolio",
    live: "https://prathameshahire.netlify.app"
  },
  {
    title: "iOS App - Singular",
    desc: "Singular — An iOS app using SwiftUI that trains your focus through creative puzzle-building, reflection, and mindful habit tracking.",
    image: "/images/singular.jpg",
    github: "https://github.com/Prathameshh12/CodeBrewers",
    live: "https://drive.google.com/file/d/1d0BK3cuB5GEeLcG8w2AI2DaGkm1h7zky/view"
  },
  {
    title: "iOS App - Colour Capture",
    desc: "A calming iOS app that challenges users to match a daily color using their camera, encouraging mindfulness and color awareness.",
    image: "/images/ColourCaptureLogo1.png",
    github: "https://github.com/Prathameshh12/ColourPhoto",
    live: "https://your-live-singular-demo.com"
  },
  {
    title: "Creative Portfolio",
    desc: "Interactive 3D solar system portfolio built with HTML, CSS, JavaScript, and Three.js,",
    image: "/images/colourcapture.png",
    github: "https://github.com/Prathameshh12/ColourPhoto",
    live: "https://your-live-singular-demo.com"
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="section relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-white dark:bg-[#1e293b] rounded-xl shadow-lg cursor-pointer overflow-hidden flex flex-col`}
              style={{
                height: isHovered ? '500px' : '220px',
                transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Title always visible */}
              <div className="p-5 flex-shrink-0">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: isHovered ? 1 : 1, y: 0 }}
                className="px-5 text-gray-600 dark:text-gray-300 flex-shrink-0"
                style={{ transition: 'opacity 0.5s ease, transform 0.5s ease' }}
              >
                {project.desc}
              </motion.p>

              {/* Image & Links container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 30,
                  pointerEvents: isHovered ? 'auto' : 'none'
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="px-5 mt-4 flex flex-col flex-grow"
                style={{ overflow: 'hidden' }}
              >
                <motion.img
                  src={project.image}
                  className="rounded-lg mb-6 object-cover w-full"
                  initial={{ scale: 1 }}
                  animate={{ scale: isHovered ? 1.1 : 1, height: isHovered ? 240 : 140 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{ borderRadius: '0.75rem' }}
                />
                <div className="flex justify-center gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-5 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition"
                  >
                    Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-5 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
