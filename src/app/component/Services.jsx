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
                <p className="text-md md:text-md leading-relaxed text-white">
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



// const Services = () => {
//   return (
//     <main className="bg-black">
//       {carsData.map((item, index) => (
//         <CarSection key={index} item={item} />
//       ))}
//     </main>
//   );
// };

// export default Services;

const Services = () => {
  return (
    <main className="bg-black">
      {carsData.map((item, index) => (
        <React.Fragment key={index}>
          <CarSection item={item} />

          {index !== carsData.length - 1 && (
            <div className="w-full flex justify-center bg-black">
              <div className="w-[100%] h-[2px] bg-red-600 opacity-80" />
            </div>
          )}
        </React.Fragment>
      ))}
    </main>
  );
};


export default Services;