import React from "react";

const Enquiry = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        <div className="text-white">
          <p className="uppercase tracking-[4px] text-gray-300 mb-4">
            Enquire Now
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            Why Choose <span className="text-red-500">3M Car Care Studio</span>{" "}
            In Kanakapura Road
          </h2>

          <p className="text-gray-300 leading-8 text-md mb-6">
            Choosing the right car care studio matters when your vehicle needs protection, shine and long term maintenance. At 3M Car Care Studio in Kanakapura Road, every service is recommended based on what your car actually needs.
          </p>

          <p className="text-gray-400 leading-8 text-md">
            Our team provides service specific guidance for paint protection, coating, detailing, interior cleaning, sun control film, anti corrosion treatment, car wraps and 3M Nomad floor mats. We help customers understand the difference between PPF in Kanakapura Road, Ceramic Coating in Kanakapura Road and Graphene Coating in Kanakapura Road so they can choose the right option with confidence.
          </p>



          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-colors duration-300 hover:border-red-500">
              <h3 className="text-2xl font-bold text-red-500">
                Professional 3M Car Care Solutions
              </h3>
              <p className="text-gray-300 mt-2">
                We use trusted 3M car care solutions and follow a careful service process to improve your vehicle's look, comfort and protection.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-colors duration-300 hover:border-red-500">
              <h3 className="text-2xl font-bold text-red-500">
                Convenient South Bangalore Location
              </h3>
              <p className="text-gray-300 mt-2">
                Our Kanakapura Road studio is easily accessible from Banashankari, RR Nagar, JP Nagar, Uttarahalli, Konanakunte and nearby areas.
              </p>
            </div>

          </div>


          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-colors duration-300 hover:border-red-500">
              <h3 className="text-2xl font-bold text-red-500">Complete Car Protection Services</h3>
              <p className="text-gray-300 mt-2">From Car Detailing in Kanakapura Road to Sun Control Film for Cars in Kanakapura Road, our services are designed to protect, clean and enhance your vehicle.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-colors duration-300 hover:border-red-500">
              <h3 className="text-2xl font-bold text-red-500">Service Guidance Before Booking</h3>
              <p className="text-gray-300 mt-2">We recommend the right car care treatment based on your car model, paint condition, usage and budget.</p>
            </div>
          </div>

        </div>


        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-3">
            Enquire for Car Care Service
          </h2>

          <p className="text-gray-300 mb-8 leading-7">
            Fill the enquiry form and our team will contact you with the right
            service recommendation for your vehicle.
          </p>

          <form className="space-y-5">

            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-red-500 transition-all"
              />
            </div>


            <div>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-red-500 transition-all"
              />
            </div>


            <div>
              <input
                type="text"
                placeholder="Car Model"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-red-500 transition-all"
              />
            </div>


            <div>
              <select
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white outline-none focus:border-red-500 transition-all"
              >
                <option className="text-black">
                  Select Service Required
                </option>
                <option className="text-black">Ceramic Coating</option>
                <option className="text-black">PPF Protection</option>
                <option className="text-black">Car Detailing</option>
                <option className="text-black">Interior Cleaning</option>
                <option className="text-black">Paint Protection</option>
              </select>
            </div>


            <div>
              <input
                type="date"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white outline-none focus:border-red-500 transition-all"
              />
            </div>


            <div>
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-red-500 transition-all"
              ></textarea>
            </div>


            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold tracking-[2px] uppercase transition-all duration-500 hover:scale-[1.02]"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;