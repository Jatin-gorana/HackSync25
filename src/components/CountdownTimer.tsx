import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const targetDate = useMemo(() => new Date('2025-02-22T09:00:00').getTime(), []);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const updateTimeLeft = () => {
    const now = Date.now();
    const distance = targetDate - now;

    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    });
  };

  useEffect(() => {
    const updateTimer = (timestamp: number) => {
      updateTimeLeft();
      requestAnimationFrame(updateTimer);
    };

    updateTimer(0); // Start updating immediately

    return () => cancelAnimationFrame(updateTimer as any); // Clean up the animation frame on component unmount
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex gap-8 justify-center">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold"
          >
            {String(unit.value).padStart(2, '0')}
          </motion.div>
          <div className="text-sm uppercase tracking-wider mt-2">{unit.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;













// OG

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const CountdownTimer = () => {
//   const targetDate = new Date('2025-02-22T09:00:00').getTime();
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000)
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const timeUnits = [
//     { label: 'Days', value: timeLeft.days },
//     { label: 'Hours', value: timeLeft.hours },
//     { label: 'Minutes', value: timeLeft.minutes },
//     { label: 'Seconds', value: timeLeft.seconds }
//   ];

//   return (
//     <div className="flex gap-8 justify-center">
//       {timeUnits.map((unit, index) => (
//         <motion.div
//           key={unit.label}
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: index * 0.1 }}
//           className="text-center"
//         >
//           <motion.div
//             key={unit.value}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-4xl md:text-6xl font-bold"
//           >
//             {String(unit.value).padStart(2, '0')}
//           </motion.div>
//           <div className="text-sm uppercase tracking-wider mt-2">{unit.label}</div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default CountdownTimer;