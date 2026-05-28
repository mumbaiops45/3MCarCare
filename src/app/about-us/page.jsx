


// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const Page = () => {
//   const sectionRef = useRef(null);

//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const sectionHeight = sectionRef.current.offsetHeight;
//       const windowHeight = window.innerHeight;

//       const scrollable = sectionHeight - windowHeight;

//       let current = -rect.top;

//       current = Math.max(0, Math.min(current, scrollable));

//       const percent = current / scrollable;

//       setProgress(percent);
//     };

//     window.addEventListener("scroll", handleScroll);

//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // IMAGE ANIMATION
//   const imageWidth = 28 + progress * 42;
//   const imageHeight = 38 + progress * 38;

//   // TEXT ANIMATION
//   const textOpacity = progress * 2;
//   const textTranslate = 100 - progress * 100;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-black text-white h-[220vh]"
//     >
//       {/* STICKY CONTAINER */}
//       <div className="sticky top-0 h-screen overflow-hidden">

//         {/* TOP LEFT LABEL */}
//         <div className="absolute top-10 left-8 z-30">
//           <div className="bg-[#c5d9ec] text-black px-10 py-2 text-sm tracking-[0.3em] font-medium">
//             001
//           </div>
//         </div>

//         {/* TOP RIGHT LABEL */}
//         <div className="absolute top-10 right-8 z-30">
//           <div className="bg-[#c5d9ec] text-black px-6 py-2 text-sm tracking-[0.25em] font-medium uppercase">
//             Luxury And Comfort
//           </div>
//         </div>

//         {/* LEFT CONTENT */}
//         <div className="absolute inset-0 z-20 flex items-end pb-24 md:pb-28">

//           <div className="w-full px-6 md:px-10">

//             <div className="max-w-[420px]">

//               <div
//                 className="transition-all duration-300"
//                 style={{
//                   opacity: textOpacity,
//                   transform: `translateY(${textTranslate}px)`,
//                 }}
//               >
//                 <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
//                   Sedans
//                 </h2>
//               </div>

//               <div
//                 className="mt-8 transition-all duration-300"
//                 style={{
//                   opacity: textOpacity,
//                   transform: `translateY(${textTranslate}px)`,
//                 }}
//               >
//                 <p className="text-lg md:text-2xl leading-relaxed text-white">
//                   Our sedans blend luxury with cutting edge technology,
//                   providing a smooth and comfortable ride. With innovative
//                   features and premium materials, our sedans offer a refined
//                   driving experience that sets new standards in the industry.
//                 </p>
//               </div>

//             </div>

//             {/* BOTTOM BORDER */}
//             <div className="mt-16 border-t border-[#8aa5bd]" />

//             <div className="flex justify-between mt-5">

//               <div className="w-28 h-[4px] bg-[#c5d9ec]" />

//               <div className="w-28 h-[4px] bg-[#c5d9ec]" />

//             </div>

//           </div>

//         </div>

//         {/* IMAGE RIGHT SIDE */}
//         <div className="absolute inset-0 flex items-center justify-end pr-6 md:pr-16">

//           <div
//             className="relative overflow-hidden transition-all duration-300"
//             style={{
//               width: `${imageWidth}%`,
//               height: `${imageHeight}vh`,
//             }}
//           >
//             <img
//               src="/banglorecar.jpg"
//               alt="car"
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute inset-0 bg-black/10" />
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Page;


// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const Page = () => {
//   const sectionRef = useRef(null);

//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const sectionHeight = sectionRef.current.offsetHeight;
//       const windowHeight = window.innerHeight;

//       const scrollable = sectionHeight - windowHeight;

//       let current = -rect.top;

//       current = Math.max(0, Math.min(current, scrollable));

//       const percent = current / scrollable;

//       setProgress(percent);
//     };

//     window.addEventListener("scroll", handleScroll);

//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // IMAGE ANIMATION
//   const imageScale = 0.6 + progress * 0.4;

//   // TEXT ANIMATION
//   const textOpacity = progress * 2;
//   const textTranslate = 100 - progress * 100;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-black text-white h-[220vh]"
//     >
//       {/* STICKY CONTAINER */}
//       <div className="sticky top-0 h-screen overflow-hidden">

//         {/* TOP LEFT LABEL */}
//         <div className="absolute top-10 left-8 z-30">
//           <div className="bg-[#c5d9ec] text-black px-10 py-2 text-sm tracking-[0.3em] font-medium">
//             001
//           </div>
//         </div>

//         {/* TOP RIGHT LABEL */}
//         <div className="absolute top-10 right-8 z-30">
//           <div className="bg-[#c5d9ec] text-black px-6 py-2 text-sm tracking-[0.25em] font-medium uppercase">
//             Luxury And Comfort
//           </div>
//         </div>

//         {/* LEFT CONTENT */}
//         <div className="absolute inset-0 z-20 flex items-end pb-24 md:pb-28">

//           <div className="w-full px-6 md:px-10">

//             <div className="max-w-[420px]">

//               <div
//                 className="transition-all duration-300"
//                 style={{
//                   opacity: textOpacity,
//                   transform: `translateY(${textTranslate}px)`,
//                 }}
//               >
//                 <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
//                   Sedans
//                 </h2>
//               </div>

//               <div
//                 className="mt-8 transition-all duration-300"
//                 style={{
//                   opacity: textOpacity,
//                   transform: `translateY(${textTranslate}px)`,
//                 }}
//               >
//                 <p className="text-lg md:text-2xl leading-relaxed text-white">
//                   Our sedans blend luxury with cutting edge technology,
//                   providing a smooth and comfortable ride. With innovative
//                   features and premium materials, our sedans offer a refined
//                   driving experience that sets new standards in the industry.
//                 </p>
//               </div>

//             </div>

//             {/* BOTTOM BORDER */}
//             <div className="mt-16 border-t border-[#8aa5bd]" />

//             <div className="flex justify-between mt-5">

//               <div className="w-28 h-[4px] bg-[#c5d9ec]" />

//               <div className="w-28 h-[4px] bg-[#c5d9ec]" />

//             </div>

//           </div>

//         </div>

//         {/* IMAGE RIGHT SIDE */}
//         <div className="absolute inset-0 flex items-center justify-end pr-6 md:pr-16">

//           <div
//             className="relative overflow-hidden transition-all duration-300 w-full"
//             style={{
//               maxWidth: "500px",
//               maxHeight: "400px",
//               transform: `scale(${imageScale})`,
//               transformOrigin: "right center",
//             }}
//           >
//             <img
//               src="/banglorecar.jpg"
//               alt="car"
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute inset-0 bg-black/10" />
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Page;



// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const Page = () => {
//   const sectionRef = useRef(null);

//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();

//       const sectionHeight = sectionRef.current.offsetHeight;

//       const windowHeight = window.innerHeight;

//       const scrollable = sectionHeight - windowHeight;

//       let current = -rect.top;

//       current = Math.max(0, Math.min(current, scrollable));

//       const percent = current / scrollable;

//       setProgress(percent);
//     };

//     window.addEventListener("scroll", handleScroll);

//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // IMAGE SIZE ANIMATION
//   const imageSize = 100 + progress * 470;

//   // TEXT ANIMATION
//   const textOpacity = Math.min(progress * 2, 1);

//   const textTranslate = 100 - progress * 100;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-black text-white h-[220vh]"
//     >
//       {/* STICKY CONTAINER */}
//       <div className="sticky top-0 h-screen overflow-hidden">

//         {/* TOP LEFT LABEL */}
//         <div className="absolute top-10 left-8 z-30">
//           <div className="bg-[#c5d9ec] text-black px-10 py-2 text-sm tracking-[0.3em] font-medium">
//             001
//           </div>
//         </div>

//         {/* TOP RIGHT LABEL */}
//         <div className="absolute top-10 right-8 z-30">
//           <div className="bg-[#c5d9ec] text-black px-6 py-2 text-sm tracking-[0.25em] font-medium uppercase">
//             Luxury And Comfort
//           </div>
//         </div>

//         {/* LEFT TEXT */}
//         <div className="absolute inset-0 z-20 flex items-end pb-24 md:pb-28">

//           <div className="w-full px-6 md:px-10">

//             <div className="max-w-[420px]">

//               <div
//                 className="transition-all duration-300"
//                 style={{
//                   opacity: textOpacity,
//                   transform: `translateY(${textTranslate}px)`,
//                 }}
//               >
//                 <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
//                   Sedans
//                 </h2>
//               </div>

//               <div
//                 className="mt-8 transition-all duration-300"
//                 style={{
//                   opacity: textOpacity,
//                   transform: `translateY(${textTranslate}px)`,
//                 }}
//               >
//                 <p className="text-lg md:text-2xl leading-relaxed text-white">
//                   Our sedans blend luxury with cutting edge technology,
//                   providing a smooth and comfortable ride. With innovative
//                   features and premium materials, our sedans offer a refined
//                   driving experience that sets new standards in the industry.
//                 </p>
//               </div>

//             </div>

            
//           </div>

//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="absolute inset-0 flex items-center justify-end pr-6 md:pr-16">

//           <div
//             className="relative overflow-hidden transition-all duration-300"
//             style={{
//               width: `${imageSize}px`,
//               height: `${imageSize}px`,
//               maxWidth: "400px",
//               maxHeight: "390px",
//             }}
//           >
//             <img
//               src="/banglorecar.jpg"
//               alt="car"
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute inset-0 bg-black/10" />

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Page;



"use client";

import React, { useEffect, useRef, useState } from "react";
import {carsData} from "../data/data"


const CarSection = ({ item }) => {
  const sectionRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const sectionHeight = sectionRef.current.offsetHeight;

      const windowHeight = window.innerHeight;

      const scrollable = sectionHeight - windowHeight;

      let current = -rect.top;

      current = Math.max(0, Math.min(current, scrollable));

      const percent = current / scrollable;

      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const imageSize = 100 + progress * 470;


  const textOpacity = Math.min(progress * 2, 1);

  const textTranslate = 100 - progress * 100;

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white h-[220vh]"
    >
    
      <div className="sticky top-0 h-screen overflow-hidden">

    
        <div className="absolute top-10 left-8 z-30">
          <div className="bg-[#c5d9ec] text-black px-10 py-2 text-sm tracking-[0.3em] font-medium">
            {item.id}
          </div>
        </div>


        <div className="absolute top-10 right-8 z-30">
          <div className="bg-[#c5d9ec] text-black px-6 py-2 text-sm tracking-[0.25em] font-medium uppercase">
            {item.subtitle}
          </div>
        </div>

       
        <div className="absolute inset-0 z-20 flex items-end pb-24 md:pb-28">

          <div className="w-full px-6 md:px-10">

            <div className="max-w-[420px]">

       
              <div
                className="transition-all duration-300"
                style={{
                  opacity: textOpacity,
                  transform: `translateY(${textTranslate}px)`,
                }}
              >
                <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
                  {item.title}
                </h2>
              </div>

             
              <div
                className="mt-8 transition-all duration-300"
                style={{
                  opacity: textOpacity,
                  transform: `translateY(${textTranslate}px)`,
                }}
              >
                <p className="text-lg md:text-2xl leading-relaxed text-white">
                  {item.description}
                </p>
              </div>

            </div>

          </div>

        </div>

       
        <div className="absolute inset-0 flex items-center justify-end pr-6 md:pr-16">

          <div
            className="relative overflow-hidden transition-all duration-300 rounded-xl"
            style={{
              width: `${imageSize}px`,
              height: `${imageSize}px`,
              maxWidth: "400px",
              maxHeight: "390px",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

          </div>

        </div>

      </div>
    </section>
  );
};



const Page = () => {
  return (
    <main className="bg-black">
      {carsData.map((item, index) => (
        <CarSection key={index} item={item} />
      ))}
    </main>
  );
};

export default Page;


