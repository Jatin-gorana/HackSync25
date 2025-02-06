import React from 'react';
import { motion } from 'framer-motion';

interface IllustrationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const IllustrationCard: React.FC<IllustrationCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-black/40 backdrop-blur-lg rounded-lg p-6 border border-primary-500/20 gargantua-glow"
      whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(228, 185, 77, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="w-16 h-16 mb-4 text-primary-500"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2 text-primary-500">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default IllustrationCard;