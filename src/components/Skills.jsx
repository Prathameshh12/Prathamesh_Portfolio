import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React",
  "Swift / SwiftUI",
  "Node.js",
  "Java",
  "Tailwind CSS",
  "Framer Motion",
  "Git & GitHub",
  "Python",
  "Pentesting"
];

export default function Skills() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-[#334155] px-6 py-3 rounded-full shadow text-sm font-medium transition-all hover:scale-105">
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
