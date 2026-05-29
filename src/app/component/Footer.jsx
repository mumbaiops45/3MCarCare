import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#070B14] text-white">
     
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-red-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
            <div>
              <img
                src="/logo.png"
                alt="3M Car Care Studio"
                className="mb-6 w-40 object-contain"
              />
              <p className="mb-6 text-sm leading-7 text-gray-400">
                Premium car detailing, ceramic coating, paint protection film,
                and luxury car care solutions designed to keep your vehicle
                looking flawless.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-red-500 hover:bg-red-500"
                >
                </a>
              </div>
            </div>

            
            <div>
              <h3 className="mb-6 text-xl font-semibold">
                Nagasandra Branch
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-red-500" size={18} />
                  <p className="text-sm leading-6 text-gray-400">
                    No 7, 14th Main Road, MS Ramaiah Enclave Main Rd,
                    Bengaluru, Karnataka 560073
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-red-500" size={18} />
                  <a
                    href="tel:+919019924749"
                    className="text-sm text-gray-300 transition hover:text-red-400"
                  >
                    +91 9019924749
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-red-500" size={18} />
                  <a
                    href="mailto:3mcarcarenagasandra@gmail.com"
                    className="text-sm text-gray-300 transition hover:text-red-400"
                  >
                    3mcarcarenagasandra@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-semibold">
                Kanakapura Branch
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-red-500" size={18} />
                  <p className="text-sm leading-6 text-gray-400">
                    2nd Block, B No 1124, 80 Feet Rd, Banashankari Stage 6,
                    Bengaluru, Karnataka 560098
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-red-500" size={18} />
                  <a
                    href="tel:+919380104749"
                    className="text-sm text-gray-300 transition hover:text-red-400"
                  >
                    +91 9380104749
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-red-500" size={18} />
                  <a
                    href="mailto:3mcarcarestudiokrr@gmail.com"
                    className="text-sm text-gray-300 transition hover:text-red-400"
                  >
                    3mcarcarestudiokrr@gmail.com
                  </a>
                </div>
              </div>
            </div>

            
            <div>
              <h3 className="mb-6 text-xl font-semibold">Our Services</h3>

              <ul className="space-y-4">
                {[
                  "Paint Protection Film (PPF)",
                  "Ceramic Coating",
                  "Graphene Coating",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-white"
                    >
                      <span className="flex items-center gap-2">
                        <ChevronRight
                          size={16}
                          className="text-red-500"
                        />
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

         
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-gray-500">
              © 2026{" "}
              <span className="font-semibold text-red-500">
                3M Car Care Studio
              </span>
              . All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a
                href="#"
                className="transition hover:text-red-400"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition hover:text-red-400"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;