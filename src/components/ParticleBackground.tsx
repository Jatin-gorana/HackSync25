import React, { useEffect, useState } from "react";

const ParticleBackground = () => {
  const [particles, setParticles] = useState<{ 
    id: number;
    size: number;
    x: number;
    y: number;
    tx: number;
    ty: number;
    opacity: number;
  }[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 100; // Reduced count on mobile

    const generatedParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() < 0.1 ? Math.random() * 4 + 2 : Math.random() * 1.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      tx: (Math.random() - 0.5) * 80,  // Smaller movement range for performance
      ty: (Math.random() - 0.5) * 80,
      opacity: Math.random() * 0.7 + 0.3,
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 space-dust opacity-50"></div>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animation: `floatParticles ${10 + Math.random() * 15}s linear infinite`,
            willChange: "transform, opacity",
            "--tx": `${particle.tx}px`,
            "--ty": `${particle.ty}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;










// OG

// import React from 'react';
// import { motion } from 'framer-motion';

// const ParticleBackground = () => {
//   const particles = Array.from({ length: 150 }, (_, i) => ({
//     id: i,
//     size: Math.random() < 0.1 ? Math.random() * 4 + 2 : Math.random() * 1.5 + 0.5,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     tx: (Math.random() - 0.5) * 200,
//     ty: (Math.random() - 0.5) * 200,
//     opacity: Math.random() * 0.7 + 0.3,
//     delay: Math.random() * 5
//   }));

//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden">
//       <div className="absolute inset-0 space-dust opacity-50"></div>
//       {particles.map((particle) => (
//         <motion.div
//           key={particle.id}
//           className="absolute rounded-full bg-white"
//           style={{
//             width: particle.size,
//             height: particle.size,
//             left: `${particle.x}%`,
//             top: `${particle.y}%`,
//             opacity: particle.opacity,
//           }}
//           animate={{
//             x: [0, particle.tx, 0],
//             y: [0, particle.ty, 0],
//             opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
//           }}
//           transition={{
//             duration: 15 + Math.random() * 25,
//             repeat: Infinity,
//             ease: "linear",
//             delay: particle.delay
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default ParticleBackground;