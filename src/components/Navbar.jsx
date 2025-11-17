import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  // Animation variants for navbar entrance
  const navVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.nav
      className="fixed top-4 left-0 right-0 mx-4 bg-leaf-green bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg p-4 flex justify-between items-center z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      {/* Navbar links */}
      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-soft-white hover:text-cream-beige transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-soft-white hover:text-cream-beige transition-colors duration-300"
        >
          About Us
        </Link>
        <Link
          to="/hire-me"
          className="text-soft-white hover:text-cream-beige transition-colors duration-300"
        >
          Hire Me
        </Link>
        <Link
          to="/dashboard"
          className="text-soft-white hover:text-cream-beige transition-colors duration-300"
        >
          Dashboard
        </Link>
      </div>
      {/* Sign Up and Login buttons */}
      <div className="flex space-x-4">
        <button className="bg-cream-beige text-leaf-green px-4 py-2 rounded-lg hover:scale-105 hover:bg-soft-white transition-all duration-300">
          Sign Up
        </button>
        <button className="bg-soft-white text-leaf-green px-4 py-2 rounded-lg hover:scale-105 hover:bg-cream-beige transition-all duration-300">
          Login
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
