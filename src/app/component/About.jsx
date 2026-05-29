// "use client"

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Sparkles,
//   Car,
//   MapPin,
// } from "lucide-react";

// const About = () => {
//   return (
//     <section className="relative overflow-hidden bg-black text-white">
     
//       <div className="absolute inset-0">
//         <div
//           className="h-full w-full bg-cover bg-center bg-fixed opacity-30 scale-110"
//           style={{
//             backgroundImage: "url('/about3m.jpg')",
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
//       </div>

//       <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
//       <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12">
//         <div className="grid items-center gap-16 lg:grid-cols-2">
          
          
//           <motion.div
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//           >
//             <span className="mb-4 inline-block rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-md">
//               Premium 3M Car Care Studio
//             </span>

//             <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
//               About{" "}
//               <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
//                 3M Car Care
//               </span>{" "}
//               Studio
//             </h2>

//             <p className="mb-6 text-md leading-relaxed text-gray-300">
//               3M Car Care Studio on Kanakapura Road is designed for car owners
//               who expect premium quality, trusted products, and professional
//               service. From daily-driven vehicles to luxury cars, our team
//               delivers tailored protection and detailing solutions based on your
//               vehicle’s condition and lifestyle.
//             </p>

//             <p className="mb-8 text-md leading-relaxed text-gray-400">
//               We specialize in advanced car care services including{" "}
//               <span className="font-semibold text-white">
//                 Car Detailing,
//               </span>{" "}
//               <span className="font-semibold text-white">
//                 Paint Protection Film (PPF),
//               </span>{" "}
//               <span className="font-semibold text-white">
//                 Ceramic & Graphene Coating,
//               </span>{" "}
//               Sun Control Films, Interior Deep Cleaning, and Anti-Corrosion
//               Treatments for complete vehicle protection.
//             </p>

          
//             <div className="grid gap-5 sm:grid-cols-2">
//               <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:border-red-500/40 hover:bg-white/10">
//                 <ShieldCheck className="mt-1 text-red-400" size={28} />
//                 <div>
//                   <h4 className="font-semibold">Trusted 3M Products</h4>
//                   <p className="text-sm text-gray-400">
//                     Industry-leading protection and detailing technology.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:border-yellow-400/40 hover:bg-white/10">
//                 <Sparkles className="mt-1 text-red-400" size={28} />
//                 <div>
//                   <h4 className="font-semibold">Premium Finish</h4>
//                   <p className="text-sm text-gray-400">
//                     Showroom-quality detailing with luxury care standards.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:border-red-500/40 hover:bg-white/10">
//                 <Car className="mt-1 text-red-400" size={28} />
//                 <div>
//                   <h4 className="font-semibold">Complete Car Care</h4>
//                   <p className="text-sm text-gray-400">
//                     Protection, detailing, cleaning, and restoration solutions.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:border-yellow-400/40 hover:bg-white/10">
//                 <MapPin className="mt-1 text-red-400" size={28} />
//                 <div>
//                   <h4 className="font-semibold">South Bangalore</h4>
//                   <p className="text-sm text-gray-400">
//                     Serving Kanakapura Road, JP Nagar, RR Nagar & nearby areas.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

        
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, x: 60 }}
//             whileInView={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-red-500 to-yellow-400 opacity-20 blur-2xl" />

//             <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
//               <img
//                 src="/about3m.jpg"
//                 alt="3M Car Care Studio"
//                 className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Car,
  MapPin,
} from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black text-white"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <div
          className="h-full w-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/about3m.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
      </motion.div>

     
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 h-72 w-72 rounded-full bg-red-500/20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl"
      />

     
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">

         
          <motion.div style={{ y: textY }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-4 inline-block rounded-full border border-red-500/40 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-400 backdrop-blur-md"
            >
              Premium 3M Car Care Studio
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6 text-4xl font-bold leading-tight lg:text-6xl"
            >
              About{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                3M Car Care
              </span>{" "}
              Studio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6 text-lg leading-relaxed text-gray-300"
            >
              3M Car Care Studio on Kanakapura Road delivers premium detailing
              experience for car owners who expect high-quality protection,
              trusted products, and professional service. From daily vehicles
              to luxury cars, we tailor solutions based on condition and usage.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-10 text-gray-400"
            >
              Services include{" "}
              <span className="text-white font-semibold">Car Detailing</span>,{" "}
              <span className="text-white font-semibold">PPF</span>,{" "}
              <span className="text-white font-semibold">
                Ceramic & Graphene Coating
              </span>
              , Sun Control Films, Interior Deep Cleaning, and Anti-Corrosion
              Treatment.
            </motion.p>

         
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Trusted 3M Products",
                  desc: "Industry-leading protection technology.",
                  color: "text-red-400",
                },
                {
                  icon: Sparkles,
                  title: "Premium Finish",
                  desc: "Showroom-quality detailing standards.",
                  color: "text-red-400",
                },
                {
                  icon: Car,
                  title: "Complete Car Care",
                  desc: "Protection, cleaning & restoration.",
                  color: "text-red-400",
                },
                {
                  icon: MapPin,
                  title: "South Bangalore",
                  desc: "Kanakapura Road & nearby areas.",
                  color: "text-red-400",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-white/30 hover:bg-white/10"
                >
                  <item.icon className={`mt-1 ${item.color}`} size={26} />
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          
          <motion.div style={{ y: imgY }} className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-red-500 to-red-400 opacity-20 blur-3xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md"
            >
              <motion.img
                src="/about3m.jpg"
                alt="3M Car Care Studio"
                className="h-[600px] w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;