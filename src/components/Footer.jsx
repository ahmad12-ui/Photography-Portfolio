import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-leaf-green bg-opacity-80 backdrop-blur-md text-soft-white py-6 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Footer links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link
            to="/"
            className="hover:text-cream-beige transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-cream-beige transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="/hire-me"
            className="hover:text-cream-beige transition-colors duration-300"
          >
            Hire Me
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-cream-beige transition-colors duration-300"
          >
            Dashboard
          </Link>
        </div>
        {/* Social media icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream-beige transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream-beige transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream-beige transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream-beige transition-colors duration-300"
          >
            <FaDiscord size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream-beige transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream-beige transition-colors duration-300"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
      {/* Copyright text */}
      <p className="text-center text-sm mt-4">
        &copy; 2025 My Photography. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
