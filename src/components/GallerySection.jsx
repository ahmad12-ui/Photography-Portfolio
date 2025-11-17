import React, { useState } from "react";
import { motion } from "framer-motion";
import placeholder from "/src/assets/placeholder.jpg";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("Nature");

  // Placeholder data
  const galleryData = {
    Nature: [
      { id: 1, src: placeholder, likes: 120, comments: 15 },
      { id: 2, src: placeholder, likes: 85, comments: 10 },
    ],
    Animals: [
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        likes: 200,
        comments: 25,
      },
      { id: 4, src: placeholder, likes: 150, comments: 20 },
    ],
    World: [
      { id: 5, src: placeholder, likes: 50, comments: 5 },
      { id: 6, src: placeholder, likes: 30, comments: 3 },
    ],
  };

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-leaf-green text-center mb-8">
        My Gallery
      </h2>
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {["Nature", "Animals", "World"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab
                ? "bg-leaf-green text-soft-white"
                : "bg-cream-beige text-leaf-green"
            } hover:scale-105 transition-all duration-300`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData[activeTab].map((item) => (
          <motion.div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img
              src={item.src}
              alt={activeTab}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-leaf-green bg-opacity-70 text-soft-white p-2 flex justify-between">
              <span>{item.likes} Likes 👍</span>
              <span>{item.comments} Comments </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
