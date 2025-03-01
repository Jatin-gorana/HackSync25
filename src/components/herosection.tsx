import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import { ChevronDown } from "lucide-react";
import TypewriterText from "./TypewriterText";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl flex flex-col items-center mx-auto relative z-10"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-yellow-300 font-arsenica"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          HACKSYNC 2025
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl mb-12 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TypewriterText text="Innovate. Disrupt. Transform." />
        </motion.div>

        <CountdownTimer />
        <br />
        <br />
        <br />
        <br />

        {/* Devfolio Apply Button */}
        {/* <div
          className="apply-button"
          data-hackathon-slug="hacksync"
          data-button-theme="dark-inverted"
          style={{ height: "44px", width: "312px" }}
        ></div> */}
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronDown className="w-6 h-6 text-primary-500" />
      </motion.div>
    </header>
  );
};

export default HeroSection;











// import React from "react";
// import { motion } from "framer-motion";
// import CountdownTimer from "./CountdownTimer"; // Ensure this is correctly imported
// import { ChevronDown } from "lucide-react";
// import TypewriterText from "./TypewriterText"; // Ensure this is correctly imported

// const HeroSection: React.FC = () => {
//   return (
//     <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-4xl flex flex-col items-center mx-auto relative z-10"
//       >
//         <motion.h1
//           className="text-5xl md:text-7xl font-bold mb-6 text-yellow-300 font-arsenica"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           HACKSYNC 2025
//         </motion.h1>

//         <motion.div
//           className="text-xl md:text-2xl mb-12 text-gray-300"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           <TypewriterText text="Innovate. Disrupt. Transform." />
//         </motion.div>

//         <CountdownTimer />
//         <br />
//         <br />
//         <br />
//         <br />

//         <div
//           className="apply-button"
//           data-hackathon-slug="hacksync-2025-ai-ml"
//           data-button-theme="dark-inverted"
//           style={{ height: "44px", width: "312px" }}
//         ></div>
//       </motion.div>

//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//       >
//         <ChevronDown className="w-6 h-6 text-primary-500" />
//       </motion.div>
//     </header>
//   );
// };

// export default HeroSection;
