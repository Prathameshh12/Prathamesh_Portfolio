import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="section relative overflow-hidden">
    
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I’m a Software Engineering student at UTS with a strong interest in software development and Cybersecurity.
          I enjoy turning ideas into practical, working solutions and continuously learning new skills along the way.
          Currently exploring Cybersecurity, iOS app development, AI integrations, UI Design.
        </p>
      </motion.div>
    </section>
  );
}
