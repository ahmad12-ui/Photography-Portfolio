import React from "react";
import { motion } from "framer-motion";

// Simple SVG-based speed meter component
const SpeedMeter = ({ value, max, label, icon }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="flex flex-col items-center">
      <svg className="w-32 h-32" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="10"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#4A7043"
          strokeWidth="10"
          strokeDasharray="283"
          strokeDashoffset={283 - (283 * percentage) / 100}
          initial={{ strokeDashoffset: 283 }}
          animate={{ strokeDashoffset: 283 - (283 * percentage) / 100 }}
          transition={{ duration: 1.5 }}
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dy=".3em"
          className="text-lg font-bold fill-leaf-green"
        >
          {value}
        </text>
      </svg>
      <div className="mt-2 text-leaf-green flex items-center space-x-2">
        {icon}
        <span>{label}</span>
      </div>
    </div>
  );
};

const DashboardSection = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-leaf-green mb-8">
        Photography Stats
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
        <SpeedMeter
          value={1500}
          max={2000}
          label="Total Users"
          icon={<i className="fas fa-users" />}
        />
        <SpeedMeter
          value={5000}
          max={10000}
          label="Total Likes"
          icon={<i className="fas fa-heart" />}
        />
        <SpeedMeter
          value={300}
          max={500}
          label="Total Comments"
          icon={<i className="fas fa-comment" />}
        />
      </div>
    </section>
  );
};

export default DashboardSection;
