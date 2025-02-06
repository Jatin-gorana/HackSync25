import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }, // Added easing for smoother animation
  viewport: { once: true },
};

const EventTimeline: React.FC = () => {
  const timeline = [
    {
      day: "Day 1",
      events: [
        { time: "10:00 AM", title: "Inauguration Ceremony" },
        { time: "11:00 AM", title: "Hacking Begins" },
      ],
    },
    {
      day: "Day 2",
      events: [
        { time: "06:00 PM", title: "Mentorship Sessions" },
        { time: "10:00 PM", title: "Final Hour Alert" },
      ],
    },
    {
      day: "Day 3",
      events: [
        { time: "10:00 AM", title: "Online Judging Starts" },
        { time: "7:00 PM", title: "Top 10 Shortlisted Teams Announcement" },
      ],
    },
    {
      day: "Day 4",
      events: [
        { time: "10:00 AM", title: "Shortlisted Teams Offline Judging Starts" },
        { time: "5:00 PM", title: "Winners Announcement & Closing Ceremony" },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-10"></div>

      <div className="max-w-4xl mx-auto relative">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-primary-500"
          {...fadeIn}
        >
          Event Timeline
        </motion.h2>

        <div className="space-y-12">
          {timeline.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary-500"
            >
              <h3 className="text-2xl font-bold mb-4">{day.day}</h3>
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: eventIndex * 0.1 }}
                    viewport={{ once: true }}
                    aria-labelledby={`event-${eventIndex}`}
                  >
                    <span className="text-primary-500 min-w-[100px]">
                      {event.time}
                    </span>
                    <span id={`event-${eventIndex}`}>{event.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;














// OG

// import React from "react";
// import { motion } from "framer-motion";

// const fadeIn = {
//   initial: { opacity: 0, y: -20 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true },
// };

// const EventTimeline: React.FC = () => {
//   const timeline = [
//     {
//       day: "Day 1",
//       events: [
//         { time: "10:00 AM", title: "Inauguration Ceremony" },
//         { time: "11:00 AM", title: "Hacking Begins" },
//       ],
//     },
//     {
//       day: "Day 2",
//       events: [
//         { time: "06:00 PM", title: "Mentorship Sessions" },
//         { time: "10:00 PM", title: "Final Hour Alert" },
//       ],
//     },
//     {
//       day: "Day 3",
//       events: [
//         { time: "10:00 AM", title: "Online Judging Starts" },
//         { time: "7:00 PM", title: "Top 10 Shortlisted Teams Announcement" },
//       ],
//     },
//     {
//       day: "Day 4",
//       events: [
//         { time: "10:00 AM", title: "Shortlisted Teams Offline Judging Starts" },
//         { time: "5:00 PM", title: "Winners Announcement & Closing Ceremony" },
//       ],
//     },
//   ];

//   return (
//     <section className="py-20 px-4 md:px-8 relative">
//       <div className="absolute inset-0 flex items-center justify-center opacity-10"></div>

//       <div className="max-w-4xl mx-auto relative">
//         <motion.h2
//           className="text-3xl md:text-5xl font-bold text-center mb-16 text-primary-500"
//           {...fadeIn}
//         >
//           Event Timeline
//         </motion.h2>

//         <div className="space-y-12">
//           {timeline.map((day, index) => (
//             <motion.div
//               key={day.day}
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="relative pl-8 border-l-2 border-primary-500"
//             >
//               <h3 className="text-2xl font-bold mb-4">{day.day}</h3>
//               <div className="space-y-4">
//                 {day.events.map((event, eventIndex) => (
//                   <motion.div
//                     key={eventIndex}
//                     className="flex items-start space-x-4"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3, delay: eventIndex * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <span className="text-primary-500 min-w-[100px]">
//                       {event.time}
//                     </span>
//                     <span>{event.title}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventTimeline;










// import React from "react";
// import { motion } from "framer-motion";

// // Animation variants
// const fadeIn = {
//   initial: { opacity: 0, y: -20 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true },
// };

// const circleAnimation = {
//   initial: { scale: 0, opacity: 0 },
//   whileInView: { scale: 1, opacity: 1 },
//   transition: { duration: 0.6, type: "spring", stiffness: 100 },
//   viewport: { once: true },
// };

// const EventTimeline: React.FC = () => {
//   const timeline = [
//     {
//       day: "Day 1",
//       events: [
//         { time: "10:00 AM", title: "Inauguration Ceremony" },
//         { time: "11:00 AM", title: "Hacking Begins" },
//       ],
//     },
//     {
//       day: "Day 2",
//       events: [
//         { time: "06:00 PM", title: "Mentorship Sessions" },
//         { time: "10:00 PM", title: "Final Hour Alert" },
//       ],
//     },
//     {
//       day: "Day 3",
//       events: [
//         { time: "10:00 AM", title: "Online Judging Starts" },
//         { time: "7:00 PM", title: "Top 10 Shortlisted Teams Announcement" },
//       ],
//     },
//     {
//       day: "Day 4",
//       events: [
//         { time: "10:00 AM", title: "Shortlisted Teams Judging Starts" },
//         { time: "5:00 PM", title: "Winners Announcement & Closing Ceremony" },
//       ],
//     },
//   ];

//   return (
//     <section className="py-20 px-4 md:px-8 relative bg-black bg-opacity-25">
//       <div className="max-w-4xl mx-auto relative">
//         <motion.h2
//           className="text-3xl md:text-5xl font-bold text-center mb-16 text-primary-500"
//           {...fadeIn}
//         >
//           Event Timeline
//         </motion.h2>

//         <div className="relative">
//           {/* Vertical Line */}
//           <div className="absolute left-1/2 w-1 h-full bg-primary-500 transform -translate-x-1/2"></div>

//           {/* Timeline Events */}
//           <div className="space-y-12">
//             {timeline.map((day, index) => (
//               <motion.div
//                 key={day.day}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 {/* Day Label */}
//                 <h3 className="text-2xl font-bold mb-8 text-center text-primary-500 pl-20">
//                   {day.day}
//                 </h3>

//                 {/* Events */}
//                 <div className="space-y-8">
//                   {day.events.map((event, eventIndex) => (
//                     <motion.div
//                       key={eventIndex}
//                       className="flex items-center justify-center"
//                       initial={{ opacity: 0, x: eventIndex % 2 === 0 ? -50 : 50 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.6, delay: eventIndex * 0.2 }}
//                       viewport={{ once: true }}
//                     >
//                       {/* Event Circle */}
//                       <motion.div
//                         className="w-6 h-6 rounded-full bg-primary-500 border-4 border-white shadow-lg relative z-10"
//                         {...circleAnimation}
//                         whileHover={{ scale: 1.2 }}
//                       ></motion.div>

//                       {/* Event Details */}
//                       <div
//                         className={`absolute ${
//                           eventIndex % 2 === 0 ? "left-1/2 ml-8" : "right-1/2 mr-8"
//                         } w-1/2 p-4 bg-black bg-opacity-50 rounded-lg shadow-lg`}
//                       >
//                         <span className="text-primary-500 font-semibold">
//                           {event.time}
//                         </span>
//                         <p className="text-white">{event.title}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventTimeline;

