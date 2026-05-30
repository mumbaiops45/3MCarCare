"use client"

import React, { useState } from "react";
import { faqData } from "../data/data";
import { Phone, MessageCircle } from "lucide-react";

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

            {/* <div className="w-full flex justify-center mt-20 px-4">
                <div className="w-full max-w-5xl bg-red-400 text-white text-center rounded-2xl py-16 px-6 md:px-12 shadow-2xl relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-r from-red-700/40 to-black/20" />

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-4xl font-bold mb-4">
                            Book your slot today at 3M Car Care Studio
                        </h3>

                        <p className="text-white/80 mb-8 text-sm md:text-base">
                            Protect, clean and upgrade your car with professional 3M services.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            
                            <a
                                href="tel:+919380104749"
                                className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition"
                            >
                                <Phone size={20} />
                                Call Now
                            </a>
                            <a
                                href="https://wa.me/919380104749"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition"
                            >
                                <MessageCircle size={20} />
                                WhatsApp Now
                            </a>
                        </div>
                    </div>

                </div>
            </div> */}

            <div className="w-full flex justify-center mt-24 px-4">
                <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B0B] shadow-[0_25px_80px_rgba(0,0,0,0.5)]">

                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/15 via-transparent to-red-500/5" />

                    <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
                    <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-red-500/20 blur-3xl" />

                    <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">

                        <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold leading-tight text-white md:text-5xl">Give Your Car the
                            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent"> {" "}Premium Protection{" "}</span>
                            It Deserves
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-400 md:text-lg">
                            Experience world-class detailing , pain protection films, ceramic coatings, interior treatments , and complete car care solutions delivered by cretified professionals.
                        </p>

                       

                        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

                            <a
                                href="tel:+919380104749"
                                className="group flex min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)]"
                            >
                                <Phone size={20} />
                                Phone
                            </a>

                            <a
                                href="https://wa.me/919380104749"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(34,197,94,0.35)]"
                            >
                                <MessageCircle size={20} />
                                WhatsApp Now
                            </a>
                        </div>

                        {/* <p>Trusted by hundreds of car owners for premium detailing and protection services.</p> */}

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Faq;