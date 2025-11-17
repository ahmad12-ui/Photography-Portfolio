import React from "react";
import { motion } from "framer-motion";
import placeholder from "/src/assets/placeholder.jpg";

const FamousFiveSection = () => {
  // Placeholder data
  const famousPhotos = [
    { id: 1, src: placeholder, title: "Sunset Over Mountains" },
    { id: 2, src: placeholder, title: "Wild Deer in Forest" },
    { id: 3, src: placeholder, title: "Ocean Waves" },
    { id: 4, src: placeholder, title: "City Lights" },
    { id: 5, src: placeholder, title: "Blooming Meadow" },
  ];

  return (
    <section className="py-16 px-4 bg-cream-beige">
      <h2 className="text-3xl font-bold text-leaf-green text-center mb-8">
        Famous Five
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {famousPhotos.map((photo) => (
          <motion.div
            key={photo.id}
            className="relative rounded-lg shadow-lg border-2 border-leaf-green"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-leaf-green bg-opacity-70 text-soft-white p-2 text-center">
              {photo.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FamousFiveSection;
