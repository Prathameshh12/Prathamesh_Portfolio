import React from "react";
import { motion } from "framer-motion";

export default function FloatingBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-tr from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        initial={{ x: 400, y: 400 }}
        animate={{ x: [ 400, 300, -200 ], y: [ 400, 200, -100 ] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-tr from-blue-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        initial={{ x: 300, y: 300 }}
        animate={{ x: [ 300, -300, 200 ], y: [ 300, -200, 100 ] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-tr from-yellow-300 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        initial={{ x: 0, y: 0 }}
        animate={{ x: [ 0, -200, 200 ], y: [ 0, 150, -150 ] }}
        transition={{ duration: 40, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
    </div>
  );
}
