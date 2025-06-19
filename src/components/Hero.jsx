import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Prathamesh Ahire
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Software Engineer • Cybersecurity Enthusiast • Software Developer
        </p>
      </motion.div>
    </section>
  );
}
