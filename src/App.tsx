import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ParticleBackground from "./components/ParticleBackground";
import HeroSection from "./components/herosection";
import HackSyncAbout from "./components/textbox";
import DestinationSection from "./components/destination";
import DomainsSection from "./components/DomainSection";
import EventTimeline from "./components/EventTimeline";
import SponsorsSection from "./components/sponsor";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import gdgLogo from "./assets/webp2logos/gdglogofinall.webp";
import gdgLogo2 from "./assets/webp2logos/gdgtextlogo.webp";

// Move script loading to useEffect hook directly in the App component.
const useDevfolioScript = () => {
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
};

function App() {
  useDevfolioScript();

  return (
    <div className="min-h-screen bg-gradient-mesh text-white font-space">
      <ParticleBackground />
      <Navbar />
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="about">
        <HackSyncAbout />
      </Element>
      <Element name="domains">
        <DomainsSection />
      </Element>
      <Element name="timeline">
        <EventTimeline />
      </Element>
      <Element name="sponsors">
        <SponsorsSection />
      </Element>
      <Element name="faq">
        <FAQSection />
      </Element>
      <Footer />
    </div>
  );
}

const Navbar = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Domains", path: "domains" },
    { name: "Timeline", path: "timeline" },
    { name: "Sponsors", path: "sponsors" },
    { name: "FAQ", path: "faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-10 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-0">
          <div className="flex items-center space-x-3">
            <img
              src={gdgLogo}
              alt="GDG Logo"
              className="h-14 w-auto"
              loading="lazy" // Lazy load the logo for performance
            />
            <img
              src={gdgLogo2}
              alt="GDG Logo"
              className="h-24 w-auto"
              loading="lazy" // Lazy load the logo for performance
            />
          </div>

          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <motion.div key={item.path} whileHover={{ scale: 1.1 }}>
                <ScrollLink
                  to={item.path}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="cursor-pointer text-white hover:text-yellow-500 transition"
                >
                  {item.name}
                </ScrollLink>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-full left-0 w-full bg-black bg-opacity-90 ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.path}
              to={item.path}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-white text-lg hover:text-yellow-500 transition"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
});

export default App;











// OG but not optimized

// import React, { useState } from "react";
// import { Link as ScrollLink, Element } from "react-scroll";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import ParticleBackground from "./components/ParticleBackground";
// import HeroSection from "./components/herosection";
// import HackSyncAbout from "./components/textbox";
// import DestinationSection from "./components/destination";
// import DomainsSection from "./components/DomainSection";
// import EventTimeline from "./components/EventTimeline";
// import SponsorsSection from "./components/sponsor";
// import FAQSection from "./components/FAQSection";
// import Footer from "./components/Footer";
// import gdgLogo from "./assets/webp2logos/gdglogofinall.webp";
// import gdgLogo2 from "./assets/webp2logos/gdgtextlogo.webp";

// function App() {
//   React.useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://apply.devfolio.co/v2/sdk.js";
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-mesh text-white font-space">
//       <ParticleBackground />
//       <Navbar />

//       <Element name="home">
//         <HeroSection />
//       </Element>

//       <Element name="about">
//         <HackSyncAbout />
//       </Element>


//       <Element name="domains">
//         <DomainsSection />
//       </Element>

//       <Element name="timeline">
//         <EventTimeline />
//       </Element>

//       <Element name="sponsors">
//         <SponsorsSection />
//       </Element>

//       <Element name="faq">
//         <FAQSection />
//       </Element>

//       <Footer />
//     </div>
//   );
// }

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   const menuItems = [
//     { name: "Home", path: "home" },
//     { name: "About", path: "about" },
//     { name: "Domains", path: "domains" },
//     { name: "Timeline", path: "timeline" },
//     { name: "Sponsors", path: "sponsors" },
//     { name: "FAQ", path: "faq" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-10 backdrop-blur-md shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-0">

//           {/* <div className="text-2xl font-bold text-white">HackSync</div> */}
//           <div className="flex items-center space-x-3">
//           <img
//             src={gdgLogo}
//             alt="GDG Logo"
//             className="h-14 w-auto"
//             loading="lazy"
//           />
//           <img
//             src={gdgLogo2}
//             alt="GDG Logo"
//             className="h-24 w-auto"
//           />

//           {/* <h1 className="font-sans text-2xl">GDG</h1> */}
//           </div>



//           <div className="hidden md:flex space-x-6">
//             {menuItems.map((item) => (
//               <motion.div key={item.path} whileHover={{ scale: 1.1 }}>
//                 <ScrollLink
//                   to={item.path}
//                   smooth={true}
//                   duration={600}
//                   offset={-70}
//                   className="cursor-pointer text-white hover:text-yellow-500 transition"
//                 >
//                   {item.name}
//                 </ScrollLink>
//               </motion.div>
//             ))}
//           </div>
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-white focus:outline-none">
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
//         transition={{ duration: 0.3 }}
//         className={`absolute top-full left-0 w-full bg-black bg-opacity-90 ${
//           isOpen ? "block" : "hidden"
//         } md:hidden`}
//       >
//         <div className="flex flex-col items-center py-4 space-y-4">
//           {menuItems.map((item) => (
//             <ScrollLink
//               key={item.path}
//               to={item.path}
//               smooth={true}
//               duration={600}
//               offset={-70}
//               onClick={() => setIsOpen(false)}
//               className="cursor-pointer text-white text-lg hover:text-yellow-500 transition"
//             >
//               {item.name}
//             </ScrollLink>
//           ))}
//         </div>
//       </motion.div>
//     </nav>
//   );
// };

// export default App;













// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Github,
//   Linkedin,
//   Twitter,
//   Orbit,
//   Plane as Planet,
//   Telescope,
//   ChevronDown,
//   Sparkles,
//   BookOpen,
//   BrainCircuit,
//   Instagram,
// } from "lucide-react";
// import CountdownTimer from "./components/CountdownTimer";
// import TypewriterText from "./components/TypewriterText";
// import ParticleBackground from "./components/ParticleBackground";
// import IllustrationCard from "./components/IllustrationCard";
// import HackSyncAbout from "./components/textbox.js";
// import DestinationSection from "./components/destination.js";
// import SponsorsSection from "./components/sponsor.js";
// import Navbar from "./components/Navbar.js";
// import HeroSection from "./components/herosection.js";  
// import DomainsSection from "./components/DomainSection.js";
// import EventTimeline from "./components/EventTimeline.js";
// import FAQSection from "./components/FAQSection.js";
// import Footer from "./components/Footer.js";
// function App() {
//   React.useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://apply.devfolio.co/v2/sdk.js";
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);
//   const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.5 },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-mesh text-white overflow-hidden font-space">
//       <ParticleBackground />

//       <Navbar />


//       <HeroSection />


//       {/* {about us} */}
//       <HackSyncAbout />

//       {/* {destination} */}
//       <DestinationSection />


//       {/* Features Section */}

//       <DomainsSection />

//       {/* Timeline Section */}

//       <EventTimeline />


//       {/* sponsor section */}
//       <SponsorsSection />


//       {/* FAQ Section */}

//       <FAQSection />

//       {/* Footer */}

//       <Footer />
//     </div>
//   );
// }

// export default App;
