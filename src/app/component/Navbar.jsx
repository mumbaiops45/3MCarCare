"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navTheme, setNavTheme] = useState("light");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const attr = entry.target.getAttribute("data-navbar");

            if (attr === "white") {
              setNavTheme("dark");
            } else if (attr === "black") {
              setNavTheme("light");
            } else if (attr === "red") {
              setNavTheme("red");
            } else {
              setNavTheme("light");
            }
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    "3M Paint Protection",
    "3M Sun Control",
    "3M Graphene",
    "3M Ceramic",
    "3M Interior",
    "3M Anti-Corrosion",
    "3M Car Wraps & Custom Styling",
    "3M Nomad Floor Mats",
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-500 ${navTheme === "dark"
          ? "bg-black/80 text-white border-white/10"
          : navTheme === "red"
            ? "bg-red-600/80 text-white border-red-400/20"
            : "bg-gray-900 text-gray-100 border-gray-300"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">


          <img
            src="/logo.png"
            alt="logo"
            className="h-14 w-auto object-contain cursor-pointer hover:scale-105 transition duration-300"
          />


          <ul className="hidden lg:flex items-center gap-10 font-medium text-[15px]">
            <li className="cursor-pointer hover:text-red-500 transition">Home</li>
            <li className="cursor-pointer hover:text-red-500 transition">About Us</li>


            {/* <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition">
                Services
                <ChevronDown className="w-4 h-4 mt-[1px]" />
              </div> */}

              {/* <div
                className={`absolute left-0 top-12 invisible opacity-0 group-hover:visible group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 min-w-[320px] rounded-2xl overflow-hidden shadow-2xl border ${navTheme === "dark"
                    ? "bg-[#111111] border-white/10"
                    : "bg-black border-gray-200"
                  }`}
              > */}
                {/* <div className="py-3">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`px-5 py-3 text-sm cursor-pointer transition-all duration-300 ${navTheme === "dark"
                          ? "hover:bg-white/5"
                          : "hover:bg-red-50"
                        } hover:text-red-500`}
                    >
                      {service}
                    </div>
                  ))}
                </div> */}
              {/* </div>
            </li> */}

            <li className="cursor-pointer hover:text-red-500 transition">FAQ</li>
            <li className="cursor-pointer hover:text-red-500 transition">Blog</li>
            <li className="cursor-pointer hover:text-red-500 transition">Contact</li>
          </ul>

          <a
            href="tel:+919380104749"
            className="hidden lg:block"
          >
            <button className="hidden lg:block px-6 py-2.5 rounded-full bg-red-500 hover:bg-red-600 text-white font-medium shadow-lg shadow-red-500/20 transition-all duration-300 hover:scale-105">
              Book Now
            </button>
          </a>


          <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden">
            {mobileMenu ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

