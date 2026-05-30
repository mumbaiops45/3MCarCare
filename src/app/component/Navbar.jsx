// "use client";

// import React, { useEffect, useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [navTheme, setNavTheme] = useState("light");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const attr = entry.target.getAttribute("data-navbar");

//             if (attr === "white") {
//               setNavTheme("dark");
//             } else if (attr === "black") {
//               setNavTheme("light");
//             } else if (attr === "red") {
//               setNavTheme("red");
//             } else {
//               setNavTheme("light");
//             }
//           }
//         });
//       },
//       {
//         threshold: 0.6,
//       }
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   const services = [
//     "3M Paint Protection",
//     "3M Sun Control",
//     "3M Graphene",
//     "3M Ceramic",
//     "3M Interior",
//     "3M Anti-Corrosion",
//     "3M Car Wraps & Custom Styling",
//     "3M Nomad Floor Mats",
//   ];

//   return (
//     <nav
//       className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-500 ${navTheme === "dark"
//           ? "bg-black/80 text-white border-white/10"
//           : navTheme === "red"
//             ? "bg-red-600/80 text-white border-red-400/20"
//             : "bg-gray-900 text-gray-100 border-gray-300"
//         }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <div className="flex items-center justify-between h-20">


//           <img
//             src="/logo.png"
//             alt="logo"
//             className="h-14 w-auto object-contain cursor-pointer hover:scale-105 transition duration-300"
//           />


//           <ul className="hidden lg:flex items-center gap-10 font-medium text-[15px]">
//             <li className="cursor-pointer hover:text-red-500 transition">Home</li>
//             <li className="cursor-pointer hover:text-red-500 transition">About Us</li>
//             <li className="cursor-pointer hover:text-red-500 transition">FAQ</li>
//             <li className="cursor-pointer hover:text-red-500 transition">Blog</li>
//             <li className="cursor-pointer hover:text-red-500 transition">Contact</li>
//           </ul>

//           <a
//             href="tel:+919380104749"
//             className="hidden lg:block"
//           >
//             <button className="hidden lg:block px-6 py-2.5 rounded-full bg-red-500 hover:bg-red-600 text-white font-medium shadow-lg shadow-red-500/20 transition-all duration-300 hover:scale-105">
//               Book Now
//             </button>
//           </a>


//           <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden">
//             {mobileMenu ? (
//               <X className="w-7 h-7" />
//             ) : (
//               <Menu className="w-7 h-7" />
//             )}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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

            if (attr === "white") setNavTheme("dark");
            else if (attr === "black") setNavTheme("light");
            else if (attr === "red") setNavTheme("red");
            else setNavTheme("light");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // 🔒 lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  const navLinks = ["Home", "About Us", "FAQ", "Blog", "Contact"];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-500
        ${
          navTheme === "dark"
            ? "bg-black/80 text-white border-white/10"
            : navTheme === "red"
            ? "bg-red-600/80 text-white border-red-400/20"
            : "bg-white/80 text-gray-900 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <img
              src="/logo.png"
              alt="logo"
              className="h-12 md:h-14 w-auto object-contain cursor-pointer hover:scale-105 transition"
            />

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-10 font-medium text-[15px]">
              {navLinks.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-red-500 transition"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* DESKTOP CTA */}
            <a href="tel:+919380104749" className="hidden lg:block">
              <button className="px-6 py-2.5 rounded-full bg-red-500 hover:bg-red-600 text-white font-medium shadow-lg shadow-red-500/20 transition hover:scale-105">
                Book Now
              </button>
            </a>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden p-2"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden
        ${mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileMenu(false)}
        />

        {/* PANEL */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-6 transform transition-transform duration-300
          ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">
            <img src="/logo.png" className="h-10" alt="logo" />

            <button onClick={() => setMobileMenu(false)}>
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-6 text-lg font-medium">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setMobileMenu(false)}
                className="hover:text-red-500 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA BUTTON */}
          <a href="tel:+919380104749">
            <button className="mt-10 w-full py-3 rounded-xl bg-red-500 text-white font-semibold shadow-lg hover:bg-red-600 transition">
              Book Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;