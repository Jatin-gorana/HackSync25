import React from "react";
import { motion } from "framer-motion";

const HackSyncAbout = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg text-white shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}  // Smoother easing for a more natural animation
    >
      <h2 className="text-3xl font-bold text-primary-500 mb-4 text-center">
        About HackSync 2025
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-200 text-center">
        HackSync: The Premier AI-ML Hackathon by GDG TSEC. HackSync marks the
        inaugural hackathon by Google Developer Groups (GDG) TSEC, setting the
        stage for a groundbreaking 48-hour, hybrid AI-ML hackathon.
        Hosted at Thadomal Shahani Engineering College, Bandra, this event is
        designed to ignite creativity and push the boundaries of artificial
        intelligence and machine learning. As GDG TSEC's flagship hackathon,
        HackSync is more than just a coding competition—it's a launchpad for
        groundbreaking ideas, a collaborative arena for problem-solving, and an
        immersive experience for aspiring technologists. Whether you're a
        seasoned developer or just stepping into the world of AI-ML, HackSync
        provides the perfect environment to learn, innovate, and network with
        like-minded enthusiasts. Join us in shaping the future of AI-ML—one hack
        at a time! 🚀
      </p>
    </motion.div>
  );
};

export default HackSyncAbout;












// import React from "react";
// import { motion } from "framer-motion";

// const HackSyncAbout = () => {
//   return (
//     <motion.div
//       className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-lg text-white shadow-lg"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="text-3xl font-bold text-primary-500 mb-4 text-center">
//         About HackSync 2025
//       </h2>
//       <p className="text-lg text-gray-300 text-center">
//         HackSync: The Premier AI-ML Hackathon by GDG TSEC HackSync marks the
//         inaugural hackathon by Google Developer Groups (GDG) TSEC, setting the
//         stage for a groundbreaking 48-hour, hybrid AI-ML hackathon.
//         Hosted at Thadomal Shahani Engineering College, Bandra, this event is
//         designed to ignite creativity and push the boundaries of artificial
//         intelligence and machine learning. As GDG TSEC's flagship hackathon,
//         HackSync is more than just a coding competition—it's a launchpad for
//         groundbreaking ideas, a collaborative arena for problem-solving, and an
//         immersive experience for aspiring technologists. Whether you're a
//         seasoned developer or just stepping into the world of AI-ML, HackSync
//         provides the perfect environment to learn, innovate, and network with
//         like-minded enthusiasts. Join us in shaping the future of AI-ML—one hack
//         at a time!🚀
//       </p>
//     </motion.div>
//   );
// };

// export default HackSyncAbout;
