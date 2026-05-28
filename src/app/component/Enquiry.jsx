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

          <p className="text-gray-300 leading-8 text-lg mb-6">
            3M Car Care Studio in Kanakapura Road offers trusted car care
            services with professional attention, service specific
            recommendations and quality focused execution.
          </p>

          <p className="text-gray-400 leading-8 text-lg">
            We help customers choose the right treatment instead of pushing
            unnecessary services. Visit us for paint protection, coating,
            detailing, cleaning, styling and complete car care support across
            Kanakapura Road, Banashankari, RR Nagar, JP Nagar and South
            Bangalore.
          </p>

     
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <h3 className="text-2xl font-bold text-red-500">10+</h3>
              <p className="text-gray-300 mt-2">Years Experience</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <h3 className="text-2xl font-bold text-red-500">5000+</h3>
              <p className="text-gray-300 mt-2">Cars Detailed</p>
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