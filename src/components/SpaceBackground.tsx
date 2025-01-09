import React from 'react';
import { motion } from 'framer-motion';

export const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Black Hole */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black rounded-full shadow-[0_0_100px_20px_rgba(0,0,0,0.8)]" />
      
      {/* Orbiting Planet */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-400 rounded-full shadow-[0_0_20px_5px_rgba(255,255,255,0.2)]" />
      </motion.div>
    </div>
  );
};