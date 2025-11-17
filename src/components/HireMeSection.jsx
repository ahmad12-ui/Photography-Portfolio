import React from "react";
import { motion } from "framer-motion";
import placeholder from "/src/assets/placeholder.jpg";

const HireMeSection = () => {
  return (
    <section
      className="py-16 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${placeholder})` }}
    >
      <motion.div
        className="max-w-lg mx-auto bg-leaf-green bg-opacity-80 backdrop-blur-md p-8 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-soft-white mb-6 text-center">
          Hire Me
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-soft-white mb-1">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-cream-beige text-leaf-green"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-soft-white mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded-lg bg-cream-beige text-leaf-green"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-soft-white mb-1">Message</label>
            <textarea
              className="w-full p-2 rounded-lg bg-cream-beige text-leaf-green"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-cream-beige text-leaf-green py-2 rounded-lg hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default HireMeSection;
