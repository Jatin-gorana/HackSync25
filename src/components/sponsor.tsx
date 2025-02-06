import React from "react";
import { motion } from "framer-motion";
import devfolio from "../assets/webp/Devfolio_Logo-White.webp";
import ethindia from "../assets/webp/ethindia-light.webp";
import polygon from "../assets/webp/Polygon_Logo-White.webp";
import goldSponsor from "../assets/webp/goldsponsor1.webp"; // Replace with actual Gold sponsor logo

type Sponsor = {
  name: string;
  alt: string;
  logo: string;
  website: string;
};

const platinumSponsors: Sponsor[] = [
  {
    name: "Devfolio",
    alt: "DEVFOLIO LOGO",
    logo: devfolio,
    website: "https://devfolio.co",
  },
  {
    name: "ETHIndia",
    alt: "ETHINDIA LOGO",
    logo: ethindia,
    website: "https://ethindia.co",
  },
  {
    name: "Polygon",
    alt: "POLYGON LOGO",
    logo: polygon,
    website: "https://polygon.technology",
  },
];

const goldSponsors: Sponsor[] = [
  {
    name: "Gold Sponsor 1",
    alt: "FES Study Abroad",
    logo: goldSponsor,
    website: "https://www.fesstudyabroad.com/",
  },
];

const SponsorItem: React.FC<{ sponsor: Sponsor; index: number }> = React.memo(
  ({ sponsor, index }) => {
    return (
      <motion.a
        key={sponsor.name}
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex justify-center"
        whileInView={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-black bg-opacity-50 p-6 rounded-lg transition-all duration-300 group-hover:bg-opacity-70 flex items-center justify-center w-[250px] h-[150px] border border-[#e4b94d] shadow-lg"
          whileHover={{
            boxShadow: "0 0 20px rgba(228, 185, 77, 0.7)",
          }}
        >
          <img
            src={sponsor.logo}
            alt={`${sponsor.alt} LOGO`}
            className="transition-all duration-300 group-hover:scale-105 max-h-20"
            loading="lazy"
          />
        </motion.div>
      </motion.a>
    );
  }
);

const SponsorGrid: React.FC<{ sponsors: Sponsor[]; title: string }> = ({
  sponsors,
  title,
}) => {
  return (
    <motion.div
      key={title}
      className="mb-16"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold mb-6 text-[#e4b94d] capitalize text-center">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
        {sponsors.map((sponsor, index) => (
          <SponsorItem key={sponsor.name} sponsor={sponsor} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default function SponsorShowcase() {
  return (
    <motion.section
      className="py-16 px-4 bg-transparent"
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#e4b94d]"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Sponsors
        </motion.h2>

        {/* Platinum Sponsors */}
        <SponsorGrid sponsors={platinumSponsors} title="Platinum Sponsors" />

        {/* Gold Sponsors */}
        <SponsorGrid sponsors={goldSponsors} title="Gold Sponsors" />
      </div>
    </motion.section>
  );
}












// import { motion } from "framer-motion";
// import devfolio from "../assets/webp/Devfolio_Logo-White.webp";
// import ethindia from "../assets/webp/ethindia-light.webp";
// import polygon from "../assets/webp/Polygon_Logo-White.webp";
// import goldSponsor from "../assets/webp/goldsponsor1.webp"; // Replace with actual Gold sponsor logo

// type Sponsor = {
//   name: string;
//   alt: string;
//   logo: string;
//   website: string;
// };

// const platinumSponsors: Sponsor[] = [
//   {
//     name: "Devfolio",
//     alt: "DEVFOLIO",
//     logo: devfolio,
//     website: "https://devfolio.co",
//   },
//   {
//     name: "ETHIndia",
//     alt: "ETHINDIA",
//     logo: ethindia,
//     website: "https://ethindia.co",
//   },
//   {
//     name: "Polygon",
//     alt: "POLYGON",
//     logo: polygon,
//     website: "https://polygon.technology",
//   },
// ];

// const goldSponsors: Sponsor[] = [
//   {
//     name: "Gold Sponsor 1",
//     alt: "FES Study Abroad",
//     logo: goldSponsor,
//     website: "https://www.fesstudyabroad.com/",
//   },
// ];

// export default function SponsorShowcase() {
//   return (
//     <motion.section
//       className="py-16 px-4 bg-transparent"
//       whileInView={{ opacity: 1 }}
//       initial={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Title */}
//         <motion.h2
//           className="text-4xl font-bold text-center mb-12 text-[#e4b94d]"
//           whileInView={{ y: 0, opacity: 1 }}
//           initial={{ y: -20, opacity: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Our Sponsors
//         </motion.h2>

//         {/* Platinum Sponsors Section */}
//         <motion.div
//           key="platinum"
//           className="mb-16"
//           whileInView={{ y: 0, opacity: 1 }}
//           initial={{ y: 50, opacity: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-semibold mb-6 text-[#e4b94d] capitalize text-center">
//             Platinum Sponsors
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
//             {platinumSponsors.map((sponsor, index) => (
//               <motion.a
//                 key={sponsor.name}
//                 href={sponsor.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group flex justify-center"
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 viewport={{ once: true }}
//               >
//                 <motion.div
//                   className="bg-black bg-opacity-50 p-6 rounded-lg transition-all duration-300 group-hover:bg-opacity-70 flex items-center justify-center w-[250px] h-[150px] border border-[#e4b94d] shadow-lg"
//                   whileHover={{
//                     boxShadow: "0 0 20px rgba(228, 185, 77, 0.7)",
//                   }}
//                 >
//                   <img
//                     src={sponsor.logo}
//                     alt={`${sponsor.alt} LOGO`}
//                     className="transition-all duration-300 group-hover:scale-105 max-h-20"
//                     loading="lazy"
//                   />
//                 </motion.div>
//               </motion.a>
//             ))}
//           </div>
//         </motion.div>

//         {/* Gold Sponsors Section */}
//         <motion.div
//           key="gold"
//           className="mb-16"
//           whileInView={{ y: 0, opacity: 1 }}
//           initial={{ y: 50, opacity: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-semibold mb-6 text-[#e4b94d] capitalize text-center">
//             Gold Sponsors
//           </h3>
//           <div className="grid grid-cols-1 gap-8 justify-center items-center">
//             {goldSponsors.length === 1 ? (
//               <div className="flex justify-center items-center w-full">
//                 <motion.a
//                   key={goldSponsors[0].name}
//                   href={goldSponsors[0].website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex justify-center"
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   transition={{ delay: 0.1, duration: 0.3 }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div
//                     className="bg-black bg-opacity-50 p-6 rounded-lg transition-all duration-300 group-hover:bg-opacity-70 flex items-center justify-center w-[250px] h-[150px] border border-[#e4b94d] shadow-lg"
//                     whileHover={{
//                       boxShadow: "0 0 20px rgba(228, 185, 77, 0.7)",
//                     }}
//                   >
//                     <img
//                       src={goldSponsors[0].logo}
//                       alt={`${goldSponsors[0].alt} LOGO`}
//                       className="transition-all duration-300 group-hover:scale-105 max-h-20"
//                       loading="lazy"
//                     />
//                   </motion.div>
//                 </motion.a>
//               </div>
//             ) : (
//               goldSponsors.map((sponsor, index) => (
//                 <motion.a
//                   key={sponsor.name}
//                   href={sponsor.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex justify-center"
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div
//                     className="bg-black bg-opacity-50 p-6 rounded-lg transition-all duration-300 group-hover:bg-opacity-70 flex items-center justify-center w-[250px] h-[150px] border border-[#e4b94d] shadow-lg"
//                     whileHover={{
//                       boxShadow: "0 0 20px rgba(228, 185, 77, 0.7)",
//                     }}
//                   >
//                     <img
//                       src={sponsor.logo}
//                       alt={`${sponsor.alt} LOGO`}
//                       className="transition-all duration-300 group-hover:scale-105 max-h-20"
//                       loading="lazy"
//                     />
//                   </motion.div>
//                 </motion.a>
//               ))
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }











// working but gold not on center


// import { motion } from "framer-motion";
// import devfolio from "../assets/Devfolio_Logo-White.png";
// import ethindia from "../assets/ethindia-light.png";
// import polygon from "../assets/Polygon_Logo-White.png";
// import goldSponsor from "../assets/goldsponsor1.jpg"; // Replace with actual Gold sponsor logo
// // import silverSponsor from "../assets/silverSponsor.png"; // Replace with actual Silver sponsor logo

// type Sponsor = {
//   name: string;
//   alt: string;
//   logo: string;
//   website: string;
// };

// const sponsors: Record<string, Sponsor[]> = {
//   platinum: [
//     {
//       name: "Devfolio",
//       alt: "DEVFOLIO",
//       logo: devfolio,
//       website: "https://devfolio.co",
//     },
//     {
//       name: "ETHIndia",
//       alt: "ETHINDIA",
//       logo: ethindia,
//       website: "https://ethindia.co",
//     },
//     {
//       name: "Polygon",
//       alt: "POLYGON",
//       logo: polygon,
//       website: "https://polygon.technology",
//     },
//   ],
//   gold: [
//     {
//       name: "Gold Sponsor 1",
//       alt: "FES Study Abroad",
//       logo: goldSponsor,
//       website: "https://www.fesstudyabroad.com/",
//     },
//   ],
// };

// export default function SponsorShowcase() {
//   return (
//     <motion.section
//       className="py-16 px-4 bg-transparent"
//       whileInView={{ opacity: 1 }}
//       initial={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Title */}
//         <motion.h2
//           className="text-4xl font-bold text-center mb-12 text-[#e4b94d]"
//           whileInView={{ y: 0, opacity: 1 }}
//           initial={{ y: -20, opacity: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Our Sponsors
//         </motion.h2>

//         {Object.entries(sponsors).map(([tier, tierSponsors], tierIndex) => (
//           <motion.div
//             key={tier}
//             className="mb-16"
//             whileInView={{ y: 0, opacity: 1 }}
//             initial={{ y: 50, opacity: 0 }}
//             transition={{ delay: 0.2 * (tierIndex + 1), duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             {/* Section Title */}
//             <h3 className="text-2xl font-semibold mb-6 text-[#e4b94d] capitalize text-center">
//               {tier} Sponsors
//             </h3>

//             {/* Sponsor Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
//               {tierSponsors.map((sponsor, index) => (
//                 <motion.a
//                   key={sponsor.name}
//                   href={sponsor.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex justify-center"
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div
//                     className="bg-black bg-opacity-50 p-6 rounded-lg transition-all duration-300 group-hover:bg-opacity-70 flex items-center justify-center w-[250px] h-[150px] border border-[#e4b94d] shadow-lg"
//                     whileHover={{
//                       boxShadow: "0 0 20px rgba(228, 185, 77, 0.7)",
//                     }}
//                   >
//                     <img
//                       src={sponsor.logo}
//                       alt={`${sponsor.alt} LOGO`}
//                       className="transition-all duration-300 group-hover:scale-105 max-h-20"
//                     />
//                   </motion.div>
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// }
