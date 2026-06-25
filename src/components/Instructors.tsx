// "use client";

// import { motion } from "motion/react";
// import { AuroraBackground } from "./ui/aurora-background";
// import { AnimatedTooltip } from "./ui/animated-tooltip";

// const Instructors = () => {
//   const instructors = [
//     {
//       id: 1,
//       name: "Dr. Sarah Ahmed",
//       designation: "Senior Vocal Coach",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//     },
//     {
//       id: 2,
//       name: "Ali Raza",
//       designation: "Lead Guitar Instructor",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//     },
//     {
//       id: 3,
//       name: "Ayesha Khan",
//       designation: "Classical Piano Specialist",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//     },
//     {
//       id: 4,
//       name: "Hamza Malik",
//       designation: "Music Production Mentor",
//       image:
//         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
//     },
//     {
//       id: 5,
//       name: "Fatima Noor",
//       designation: "Violin Performance Coach",
//       image:
//         "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//     },
//     {
//       id: 6,
//       name: "Usman Tariq",
//       designation: "Drums & Rhythm Expert",
//       image:
//         "https://images.unsplash.com/photo-1504593811423-6dd665756598",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden">
//       <AuroraBackground>
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="relative z-10 flex flex-col items-center justify-center px-4 text-center"
//         >
//           <span className="mb-4 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1 text-sm text-teal-400">
//             Meet Our Experts
//           </span>

//           <h2 className="max-w-4xl text-4xl font-bold text-white md:text-6xl">
//             Learn From Industry
//             <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
//               {" "}
//               Professionals
//             </span>
//           </h2>

//           <p className="mt-6 max-w-2xl text-lg text-neutral-300">
//             Our experienced instructors bring years of professional
//             performance, teaching, and production expertise to help you
//             achieve your musical goals.
//           </p>

//           <div className="mt-14 flex flex-row items-center justify-center">
//             <AnimatedTooltip items={instructors} />
//           </div>

//           <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
//             <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
//               <h3 className="text-3xl font-bold text-white">15+</h3>
//               <p className="text-neutral-400">Expert Mentors</p>
//             </div>

//             <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
//               <h3 className="text-3xl font-bold text-white">10K+</h3>
//               <p className="text-neutral-400">Students Trained</p>
//             </div>

//             <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
//               <h3 className="text-3xl font-bold text-white">50+</h3>
//               <p className="text-neutral-400">Courses Available</p>
//             </div>

//             <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
//               <h3 className="text-3xl font-bold text-white">95%</h3>
//               <p className="text-neutral-400">Success Rate</p>
//             </div>
//           </div>
//         </motion.div>
//       </AuroraBackground>
//     </section>
//   );
// };

// export default Instructors;

"use client";

import { motion } from "motion/react";
import { AuroraBackground } from "./ui/aurora-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import instructorData from "@/data/instructors.json";

const Instructors = () => {
  const tooltipInstructors = instructorData.instructors
    .slice(0, 6)
    .map((instructor) => ({
      id: instructor.id,
      name: instructor.name,
      designation: instructor.designation,
      image: instructor.image,
    }));

  return (
    <section className="relative overflow-hidden">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative z-10 flex flex-col items-center justify-center px-4 text-center"
        >
          <span className="mb-4 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1 text-sm text-teal-400">
            Meet Our Experts
          </span>

          <h2 className="max-w-4xl text-4xl font-bold text-white md:text-6xl">
            Learn From Industry
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Professionals
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Our experienced instructors bring years of professional
            performance, teaching, and production expertise to help you
            achieve your musical goals.
          </p>

          <div className="mt-14 flex flex-row items-center justify-center">
            <AnimatedTooltip items={tooltipInstructors} />
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">15+</h3>
              <p className="text-neutral-400">Expert Mentors</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">10K+</h3>
              <p className="text-neutral-400">Students Trained</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-neutral-400">Courses Available</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">95%</h3>
              <p className="text-neutral-400">Success Rate</p>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default Instructors;