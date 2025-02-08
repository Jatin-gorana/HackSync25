import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "When and where will 'HackSync 2025' take place?",
    answer:
      "Hackathon begins on 22nd February 2025 at 10:00 AM to 24th February 2025 10:00 AM and the Final Round will be offline on 25th February 2025 at Thadomal Shahani Engineering College, Bandra, Mumbai.",
  },
  {
    question: "What is the last date for registration?",
    answer:
      "Registrations close on 15th February 2025 at 11:59 PM IST.",
  },
  {
    question: "Can I participate individually?",
    answer:
      "Teams of 2-4 members. You can come with a team or find teammates via whatsapp group given below.",
  },
  {
    question: "How can I register for 'HackSync 2025' and is there a registration fee?",
    answer:
      "You can register for HackSync 2025 through Devfolio. No participation fees are required; the hackathon is completely free.",
  },
  {
    question: "Can we form intercollege team?",
    answer:
      "Yes Intercollege teams are allowed.",
  },
  {
    question: "Will there be prizes?",
    answer:
      "Yes! Top teams will receive exciting prizes and opportunities from our sponsors.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative z-10">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16 text-primary-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="flex justify-between items-start cursor-pointer"
              whileHover={{ color: "#2196F3" }}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
            </motion.div>
            <motion.p
              className="mt-2 text-gray-300"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;












// OG

// import React from "react";
// import { motion } from "framer-motion";

// const faqs = [
//   {
//     question: "When and where will 'HackSync 2025 take place?'",
//     answer:
//       "Hackathon begins on 22th February 2025 at 10:00 AM to 24th February 2025 10:00 AM and Final Round will be offline on 25th February 2025 at Thadomal Shahani Engineering College, Bandra, Mumbai",
//   },
//   {
//     question: "What is the last date for registration?",
//     answer:
//       "Registrations close on 15th February 2025 at 11:59 PM IST.",
//   },
//   {
//     question: "How are teams formed?",
//     answer:
//       "Teams of 2-4 members. You can come with a team or find teammates during team formation.",
//   },
//   {
//     question: "How can i register of HackSync 2025 and is there a registration fee?",
//     answer:
//       "You can register for Need For Code 3.0 through Devfolio. No participation fees are required, Hackathon is completely free.",
//   },
//   {
//     question: "Will there be prizes?",
//     answer:
//       "Yes! Top teams will receive exciting prizes and opportunities from our sponsors.",
//   },
// ];

// const FAQSection: React.FC = () => {
//   return (
//     <section className="py-20 px-4 md:px-8 relative z-10">
//       <motion.h2
//         className="text-3xl md:text-5xl font-bold text-center mb-16 text-primary-500"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         Frequently Asked Questions
//       </motion.h2>

//       <div className="max-w-3xl mx-auto space-y-6">
//         {faqs.map((faq, index) => (
//           <motion.div
//             key={index}
//             className="bg-white/5 backdrop-blur-sm rounded-lg p-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.02 }}
//           >
//             <motion.div
//               className="flex justify-between items-start cursor-pointer"
//               whileHover={{ color: "#2196F3" }}
//             >
//               <h3 className="text-lg font-semibold">{faq.question}</h3>
//             </motion.div>
//             <motion.p
//               className="mt-2 text-gray-300"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               transition={{ duration: 0.3 }}
//             >
//               {faq.answer}
//             </motion.p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQSection;
