import React from "react";
import { motion } from "framer-motion";
import placeholder from "/src/assets/placeholder.jpg"; // Replace with your image

const HeroSection = () => {
  // Animation variants for text and button
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${placeholder})` }}
    >
      <div className="text-center text-soft-white bg-leaf-green bg-opacity-50 backdrop-blur-md p-8 rounded-lg">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Capturing the Beauty of the World
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          Welcome to my photography portfolio
        </motion.p>
        <motion.button
          className="bg-cream-beige text-leaf-green px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.4 }}
        >
          View My Gallery
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
