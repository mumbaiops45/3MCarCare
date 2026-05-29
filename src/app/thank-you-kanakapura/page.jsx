"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-black text-white px-6 md:px-12 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Thank You for Your Enquiry
          </h1>
          <p className="text-md md:text-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Thank you for contacting{" "}
            <span className="font-semibold text-white">
              3M Car Care Studio Kanakapura Road
            </span>
            . Our team has received your service request and will get in touch
            with you shortly to help with the right car care solution for your
            vehicle.
          </p>
        </div>
        <div className="px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "PPF",
              "Ceramic Coating",
              "Graphene Coating",
              "Sun Control Film",
              "Car Detailing",
              "Interior Cleaning",
              "Anti Corrosion",
              "Car Wraps",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl py-4 px-3 text-sm md:text-base font-medium hover:bg-black hover:text-white transition"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 px-6 md:px-12 py-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Happens Next?
          </h2>
          <div className="space-y-5">
            {[
              "Our car care team will review your enquiry and call you back shortly.",
              "We will understand your car care requirement.",
              "We will suggest the right service option for your vehicle.",
              "We will help you book a convenient slot at our Kanakapura Road studio.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white shadow-sm rounded-xl p-4"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 md:px-12 py-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Quick Assistance?
          </h2>
          <p className="text-gray-600 mb-8">
            For faster support, you can call or WhatsApp our team directly.
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
    </div>
  );
};

export default Page;

