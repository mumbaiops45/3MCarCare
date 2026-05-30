
"use client";
import React, { useEffect, useState } from "react";


const Home = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (

        <div className="bg-black min-h-screen overflow-hidden">
            <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
                <img
                    src="/Car-Paint.webp"
                    alt="Luxury Car"
                    className={`absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-[2000ms] ease-out
          ${loaded ? "scale-105 opacity-100" : "scale-125 opacity-0"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70" />
                <div className="absolute inset-0 bg-[#b8d2ea]/5" />
                <div className="relative z-20 w-full max-w-7xl px-6 md:px-12">
                    <p
                        className={`text-[#c9421d] tracking-[6px] uppercase text-xs md:text-sm mb-4 transition-all duration-700 ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    >
                        Premium Car Protection Studio
                    </p>
                    <h1 className="text-white font-extrabold uppercase leading-[0.9]">
                        <span
                            className={`block text-4xl md:text-4xl lg:text-4xl transition-all duration-1000 ease-out
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        >
                            3M Car Care Studio
                        </span>
                        <span
                            className={`block text-4xl md:text-4xl lg:text-4xl text-[#de1c1c] transition-all duration-1000 delay-150 ease-out
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        >
                            in Kanakapura Road
                        </span>
                    </h1>
                    <p
                        className={`mt-6 max-w-xl text-gray-300 text-sm md:text-base leading-relaxed transition-all duration-1000 delay-300 ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        Experience world-class Paint Protection Film (PPF) installation
                        with precision, durability, and a flawless finish that keeps your car
                        looking brand new.
                    </p>

                    <div
                        className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ease-out
  ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <a href="tel:+919380104749">
                            <button className="px-6 py-3 bg-[#b8d2ea] text-black font-semibold uppercase tracking-widest hover:scale-105 transition w-full">
                                Enquire Now
                            </button>
                        </a>

                        <a
                            href="https://wa.me/919380104749"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-6 py-3 border border-white/30 text-white uppercase tracking-widest hover:bg-white/10 transition w-full">
                                Book Your Slot
                            </button>
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
            </section>
        </div>
    );
};

export default Home;

