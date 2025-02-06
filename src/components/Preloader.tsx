import React, { useState, useEffect } from 'react';
import { Rocket, Stars, Sparkles } from 'lucide-react';
import './Preloader.css';
import ParticleBackground from './ParticleBackground';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader-container">
      <div className="stars-background" />
      <div className="preloader">
        <div className="rocket-container">
          <div className="rocket-wrapper">
            <Rocket className="rocket" size={48} style={{ transform: 'rotate(-90deg)' }} />
            <div className="flame" />
            <div className="flame-particles">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="particle"
                  style={{
                    left: `${Math.random() * 40 - 20}px`,
                    animationDelay: `${Math.random() * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="space-objects">
          <ParticleBackground />
        </div>
        <h1 className="preloader-text">Launching Ideas Into the Cosmos</h1>
        {/* <p className="preloader-subtext">Where AI Meets the Cosmos</p> */}
      </div>
    </div>
  );
};

export default Preloader;














// import React, { useState, useEffect } from 'react';
// import './Preloader.css'; // CSS for preloader

// const Preloader = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000); // Preloader will show for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   if (!loading) return null;

//   return (
//     <div className="preloader-container">
//       <div className="preloader">
//         <div className="dots-container">
//           <div className="dot"></div>
//           <div className="dot"></div>
//           <div className="dot"></div>
//         </div>
//         <h1 className="preloader-text">Launching Ideas Into the Cosmos</h1>
//       </div>
//     </div>
//   );
// };

// export default Preloader;
