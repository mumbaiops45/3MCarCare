"use client"

import React, { useState } from "react";
import { faqData } from "../data/data";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-100 py-24 px-6 md:px-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-3xl font-bold uppercase tracking-[4px]">
                    Frequently Asked Questions
                </h2>
                <div className="w-24 h-[3px] bg-red-500 mx-auto mt-5 rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-5">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg"
                    >

                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center px-6 py-5 text-left"
                        >
                            <p className="text-md md:text-md ">
                                {item.q}
                            </p>

                            <span className="text-2xl text-red-500">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        <div
                            className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index
                                    ? "max-h-40 opacity-100 pb-5"
                                    : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-black leading-7">{item.a}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center mt-20 px-4">
                <div className="w-full max-w-5xl bg-red-400 text-white text-center rounded-2xl py-16 px-6 md:px-12 shadow-2xl relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-r from-red-700/40 to-black/20" />

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-4xl font-bold mb-4">
                            Book your slot today at 3M Car Care Studio
                        </h3>

                        <p className="text-white/80 mb-8 text-sm md:text-base">
                            Protect, clean and upgrade your car with professional 3M services.
                        </p>

                        <button className="bg-black hover:bg-gray-900 px-10 py-4 rounded-full uppercase tracking-[3px] font-semibold transition-all duration-500 hover:scale-105">
                            Book Now
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Faq;