import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, BrainCircuit, Trophy } from "lucide-react";
import IllustrationCard from "./IllustrationCard"; // Ensure correct path

const fadeIn = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const domains = [
  {
    icon: <Sparkles className="w-full h-full text-yellow-500" />,
    title: "Gen AI",
    description:
      "Push the boundaries of creativity with AI-powered text, image, and code generation.",
  },
  {
    icon: <BookOpen className="w-full h-full text-yellow-500" />,
    title: "LLMs",
    description:
      "Build groundbreaking applications using cutting-edge AI-driven language models.",
  },
  {
    icon: <BrainCircuit className="w-full h-full text-yellow-500" />,
    title: "Agentic AI",
    description:
      "Develop intelligent, autonomous agents capable of reasoning and executing complex tasks.",
  },
];

const prizes = [
  {
    title: "1st Place",
    amount: "₹15,000",
    icon: <Trophy className="w-16 h-16 text-yellow-500" />,
  },
  {
    title: "2nd Place",
    amount: "₹10,000",
    icon: <Trophy className="w-14 h-14 text-gray-400" />,
  },
  {
    title: "3rd Place",
    amount: "₹5,000",
    icon: <Trophy className="w-12 h-12 text-orange-500" />,
  },
];

const DomainsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative z-10 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Domains Section */}
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-500">
            Domains
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Like Cooper's journey through the tesseract, explore the infinite
            possibilities of AI and ML in this 48-hour odyssey.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          {...fadeIn}
        >
          {domains.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <IllustrationCard {...feature} />
            </motion.div>
          ))}
        </motion.div>

        {/* Prize Pool Section */}
        <motion.div className="text-center mt-24 mb-12" {...fadeIn}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-500">
            🏆 Prize Pool 🏆
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compete for glory and cash prizes in this high-stakes AI hackathon!
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          {...fadeIn}
        >
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-all duration-300"
            >
              {prize.icon}
              <h3 className="text-2xl font-bold mt-4">{prize.title}</h3>
              <p className="text-lg text-gray-400">{prize.amount}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DomainsSection;











// working perfect

// import React from "react";
// import { motion } from "framer-motion";
// import { Sparkles, BookOpen, BrainCircuit } from "lucide-react"; // Ensure you have Lucide React installed
// import IllustrationCard from "./IllustrationCard"; // Ensure this is correctly imported

// const fadeIn = {
//   initial: { opacity: 0, y: -20 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: "easeOut" }, // Added easing for smoother animation
//   viewport: { once: true },
// };

// const DomainsSection: React.FC = () => {
//   const domains = [
//     {
//       icon: <Sparkles className="w-full h-full" />,
//       title: "Gen AI",
//       description:
//         "Push the boundaries of creativity with AI-powered text, image, and code generation.",
//     },
//     {
//       icon: <BookOpen className="w-full h-full" />,
//       title: "LLMs",
//       description:
//         "Build groundbreaking applications using cutting-edge AI-driven language models.",
//     },
//     {
//       icon: <BrainCircuit className="w-full h-full" />,
//       title: "Agentic AI",
//       description:
//         "Develop intelligent, autonomous agents capable of reasoning and executing complex tasks.",
//     },
//   ];

//   return (
//     <section className="py-20 px-4 md:px-8 relative z-10 tesseract-grid">
//       <div className="max-w-6xl mx-auto">
//         <motion.div className="text-center mb-16" {...fadeIn}>
//           <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-500">
//             Domains
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Like Cooper's journey through the tesseract, explore the infinite
//             possibilities of AI and ML in this 48-hour odyssey.
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           {...fadeIn} // Apply animation to grid container for a smoother effect
//         >
//           {domains.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               aria-label={feature.title} // Adding ARIA labels for accessibility
//             >
//               <IllustrationCard {...feature} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DomainsSection;












// import React from "react";
// import { motion } from "framer-motion";
// import { Sparkles, BookOpen, BrainCircuit } from "lucide-react"; // Ensure you have Lucide React installed
// import IllustrationCard from "./IllustrationCard"; // Ensure this is correctly imported

// const fadeIn = {
//   initial: { opacity: 0, y: -20 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true },
// };

// const DomainsSection: React.FC = () => {
//   const domains = [
//     {
//       icon: <Sparkles className="w-full h-full" />,
//       title: "Gen AI",
//       description:
//         "Push the boundaries of creativity with AI-powered text, image, and code generation.",
//     },
//     {
//       icon: <BookOpen className="w-full h-full" />,
//       title: "LLMs",
//       description:
//         "Build groundbreaking applications using cutting-edge AI-driven language models.",
//     },
//     {
//       icon: <BrainCircuit className="w-full h-full" />,
//       title: "Agentic AI",
//       description:
//         "Develop intelligent, autonomous agents capable of reasoning and executing complex tasks.",
//     },
//   ];

//   return (
//     <section className="py-20 px-4 md:px-8 relative z-10 tesseract-grid">
//       <div className="max-w-6xl mx-auto">
//         <motion.div className="text-center mb-16" {...fadeIn}>
//           <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-500">
//             Domains
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Like Cooper's journey through the tesseract, explore the infinite
//             possibilities of AI and ML in this 48-hour odyssey.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {domains.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <IllustrationCard {...feature} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DomainsSection;
