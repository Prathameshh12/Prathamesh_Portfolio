import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
          Reach out to me anytime!
        </p>
        <a 
          href="mailto:prathamesh.ahire1204@gmail.com" 
          className="text-primary font-semibold text-lg hover:underline"
        >
          prathamesh.ahire1204@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
