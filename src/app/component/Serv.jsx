"use client";

import React from "react";
import useInView from "./useInView";
import { updates } from "../data/data";

const Serv = () => {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section
      ref={ref}
      className="bg-gray-100 text-black py-24 px-6 md:px-16 overflow-hidden"
    >
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-[4px]">
         Services
        </h1>
        <div className="w-24 h-[3px] bg-black mx-auto mt-5"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {updates.map((item, index) => (
          <div
            key={item.id}
            className={`group relative bg-[#111] rounded-3xl overflow-hidden border border-white/10 hover:border-red-500 hover:shadow-[0_0_25px_rgba(255,0,0,0.25)] transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 500}ms` : "0ms",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h2
                className="text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                style={{ fontSize: "21px", fontWeight: 500 }}
              >
                {item.title}
              </h2>

              <p className="text-gray-200 text-sm opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 group-hover:mt-2 transition-all duration-500">
                {item.description}
              </p>
            </div>

            <div className="p-5">
              <h2
                className="text-white group-hover:opacity-0 transition-all duration-300"
                style={{ fontSize: "21px", fontWeight: 500 }}
              >
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Serv;