import React from "react";
import { motion } from "framer-motion";
import placeholder from "/src/assets/placeholder.jpg";

const AboutUsSection = () => {
  return (
    <section className="py-16 px-4 bg-cream-beige flex flex-col md:flex-row items-center justify-center">
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-leaf-green mb-4">About Me</h2>
        <p className="text-leaf-green">
          I'm a passionate photographer capturing the beauty of nature, animals,
          and candid moments. With years of experience, I aim to tell stories
          through my lens, bringing emotions and moments to life.
        </p>
      </motion.div>
      <motion.img
        src={placeholder}
        alt="Photographer"
        className="md:w-1/3 rounded-lg shadow-lg mt-6 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </section>
  );
};

export default AboutUsSection;
