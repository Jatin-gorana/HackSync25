import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import gdglogo from "../assets/webp2logos/gdglogofinalll.webp";

// Social and quick links data
const socialLinks = [
  { Icon: FaInstagram, href: "https://www.instagram.com/gdg_tsec/" },
  { Icon: FaTwitter, href: "https://x.com/GdscTsec" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/company/gdg-tsec/" },
  { Icon: FaWhatsapp, href: "https://chat.whatsapp.com/LIzMQUQ1GDxEuBdfULoTwG" },
];

const quickLinks = [
  { label: "Home", targetId: "home" },
  { label: "About", targetId: "about" },
  { label: "Domains", targetId: "domains" },
  { label: "Timeline", targetId: "timeline" },
  { label: "Sponsors", targetId: "sponsors" },
  { label: "FAQ", targetId: "faq" },
];

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 md:px-8 border-t border-primary-500/20 relative z-10 bg-black bg-opacity-25 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left side: GDG Logo */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src={gdglogo}
            alt="GDG Logo"
            className="w-24 h-24"
            loading="lazy"
          />
        </div>

        {/* Middle: Quick Links */}
        <div className="flex flex-col space-y-4 items-center md:items-start">
          <h3 className="text-xl font-semibold text-primary-500">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(({ label, targetId }, index) => (
              <li key={index}>
                <ScrollLink
                  to={targetId}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="cursor-pointer text-gray-400 hover:text-primary-500 transition-colors"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Map */}
        <div className="flex flex-col items-center md:items-start space-y-5">
          <div className="rounded-lg overflow-hidden shadow-lg border-4 border-yellow-400 mb-4 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=Thadomal+Shahani+Engineering+College,+Off+Linking+Rd,+TPS+III,+Bandra+West,+Mumbai,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Social Media Accounts and Tagline */}
      <div className="mt-8 flex flex-col items-center space-y-4">
        <p className="text-gray-400 text-xl font-semibold text-center text-primary-500">
          Stay Connected!!
        </p>
        <motion.div className="flex justify-center space-x-6">
          {socialLinks.map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
        <p className="text-gray-400 text-md text-center">dsctsec@gmail.com</p>
        <p className="text-gray-400 text-sm text-center">
          © HackSync 2025 . All rights reserved.
        </p>
        <p className="text-gray-400 text-sm text-center">
          Made with ❤️ by GDG TSEC
        </p>
      </div>
    </footer>
  );
};

// Memoize the Footer component to avoid unnecessary re-renders
export default memo(Footer);












// OG

// import React from "react";
// import { motion } from "framer-motion";
// import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
// import gdglogo from "../assets/webp2logos/gdglogofinalll.webp";

// const socialLinks = [
//   { Icon: FaInstagram, href: "https://www.instagram.com/gdg_tsec/" },
//   { Icon: FaTwitter, href: "https://x.com/GdscTsec" },
//   { Icon: FaLinkedin, href: "https://www.linkedin.com/company/gdg-tsec/" },
//   { Icon: FaWhatsapp, href: "https://chat.whatsapp.com/LIzMQUQ1GDxEuBdfULoTwG" },
// ];

// const quickLinks = [
//   { label: "Home", targetId: "home" },
//   { label: "About", targetId: "about" },
//   { label: "Domains", targetId: "domains" },
//   { label: "Timeline", targetId: "timeline" },
//   { label: "Sponsors", targetId: "sponsors" },
//   { label: "FAQ", targetId: "faq" },
// ];

// const Footer: React.FC = () => {
//   return (
//     <footer className="py-12 px-4 md:px-8 border-t border-primary-500/20 relative z-10 bg-black bg-opacity-25 text-white">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Left side: GDG Logo */}
//         <div className="flex flex-col items-center md:items-start space-y-4">
//           <img src={gdglogo} alt="GDG Logo" className="w-24 h-24" loading="lazy" />
//         </div>

//         {/* Middle: Quick Links */}
//         <div className="flex flex-col space-y-4 items-center md:items-start">
//           <h3 className="text-xl font-semibold text-primary-500">Quick Links</h3>
//           <ul className="space-y-2">
//             {quickLinks.map(({ label, targetId }, index) => (
//               <li key={index}>
//                 <ScrollLink
//                   to={targetId}
//                   smooth={true}
//                   duration={600}
//                   offset={-70}
//                   className="cursor-pointer text-gray-400 hover:text-primary-500 transition-colors"
//                 >
//                   {label}
//                 </ScrollLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right side: Map */}
//         <div className="flex flex-col items-center md:items-start space-y-5">
//           <div className="rounded-lg overflow-hidden shadow-lg border-4 border-yellow-400 mb-4 md:mb-0">
//             <iframe
//               src="https://www.google.com/maps/embed/v1/place?q=Thadomal+Shahani+Engineering+College,+Off+Linking+Rd,+TPS+III,+Bandra+West,+Mumbai,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
//               width="100%"
//               height="250"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="w-full"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Social Media Accounts and Tagline */}
//       <div className="mt-8 flex flex-col items-center space-y-4">
//         <p className="text-gray-400 text-xl font-semibold text-center text-primary-500">
//           Stay Connected!!
//         </p>
//         <div className="flex justify-center space-x-6">
//           {socialLinks.map(({ Icon, href }, index) => (
//             <motion.a
//               key={index}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-primary-500 transition-colors"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Icon className="w-6 h-6" />
//             </motion.a>
//           ))}
//         </div>
//         <p className="text-gray-400 text-md text-center">dsctsec@gmail.com</p>
//         <p className="text-gray-400 text-sm text-center">
//           © HackSync 2025 . All rights reserved.
//         </p>
//         <p className="text-gray-400 text-sm text-center">
//           Made with ❤️ by GDG TSEC
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;












// working perfect but links baki

// import React from "react";
// import { motion } from "framer-motion";
// import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// import gdglogo from "../assets/gdglogofinalll.png";

// const socialLinks = [
//   { Icon: FaInstagram, href: "#" },
//   { Icon: FaTwitter, href: "#" },
//   { Icon: FaLinkedin, href: "#" },
// ];

// const quickLinks = [
//   { label: "Home", href: "/" },           // Route to the homepage
//   { label: "About", href: "/about" },     // Route to the About page
//   { label: "Domains", href: "/domains" }, // Route to the Domains page
//   { label: "Timeline", href: "/timeline" },// Route to the Timeline page
//   { label: "Sponsors", href: "/sponsors" },// Route to the Sponsors page
//   { label: "FAQ", href: "/faq" },         // Route to the FAQ page
// ];

// const Footer: React.FC = () => {
//   return (
//     <footer className="py-12 px-4 md:px-8 border-t border-primary-500/20 relative z-10 bg-black bg-opacity-25 text-white">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Left side: GDG Logo */}
//         <div className="flex flex-col items-center md:items-start space-y-4">
//           <img
//             src={gdglogo}
//             alt="GDG Logo"
//             className="w-24 h-24"
//           />
//         </div>

//         {/* Middle: Quick Links */}
//         <div className="flex flex-col space-y-4 items-center md:items-start">
//           <h3 className="text-xl font-semibold text-primary-500">Quick Links</h3>
//           <ul className="space-y-2">
//             {quickLinks.map(({ label, href }, index) => (
//               <li key={index}>
//                 <a
//                   href={href}
//                   className="text-gray-400 hover:text-primary-500 transition-colors"
//                 >
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right side: Map */}
//         <div className="flex flex-col items-center md:items-start space-y-5">
//           <div className="rounded-lg overflow-hidden shadow-lg border-4 border-yellow-400 mb-4 md:mb-0">
//             <iframe
//               src="https://www.google.com/maps/embed/v1/place?q=Thadomal+Shahani+Engineering+College,+Off+Linking+Rd,+TPS+III,+Bandra+West,+Mumbai,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
//               width="100%"
//               height="250"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="w-full"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Social Media Accounts and Tagline */}
//       <div className="mt-8 flex flex-col items-center space-y-4">
//       <p className="text-gray-400 text-xl font-semibold text-center text-primary-500">Stay Connected!!</p>
//         <div className="flex justify-center space-x-6">
//           {socialLinks.map(({ Icon, href }, index) => (
//             <motion.a
//               key={index}
//               href={href}
//               className="text-gray-400 hover:text-primary-500 transition-colors"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Icon className="w-6 h-6" />
//             </motion.a>
//           ))}
//         </div>
//         <p className="text-gray-400 text-sm text-center">© HackSync 2025 . All rights reserved.</p>
//         <p className="text-gray-400 text-sm text-center">Made with ❤️ by GDG TSEC</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;







// OG

// import React from "react";
// import { motion } from "framer-motion";
// import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// const socialLinks = [
//   { Icon: FaInstagram, href: "#" },
//   { Icon: FaTwitter, href: "#" },
//   { Icon: FaLinkedin, href: "#" },
// ];

// const Footer: React.FC = () => {
//   return (
//     <footer className="py-12 px-4 md:px-8 border-t border-primary-500/20 relative z-10">
//       <div className="max-w-4xl mx-auto text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-bold mb-4 text-primary-500">
//             Stay Connected!!
//           </h3>

//           <div className="flex justify-center space-x-6 mb-8">
//             {socialLinks.map(({ Icon, href }, index) => (
//               <motion.a
//                 key={index}
//                 href={href}
//                 className="text-gray-400 hover:text-primary-500 transition-colors"
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Icon className="w-6 h-6" />
//               </motion.a>
//             ))}
//           </div>

//           <p className="text-gray-400">© HackSync 2025 . All rights reserved.</p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
