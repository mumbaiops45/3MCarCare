// "use client";

// import React from "react";
// import { carsData } from "../data/data";

// const Service = () => {
//   return (
//     <section className="w-full py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
//           {carsData.map((item) => (
//             <div
//               key={item.id}
//               className="group relative overflow-hidden rounded-[30px] border-2 border-black bg-white h-[620px] cursor-pointer"
//             >
//               {/* Default White Card */}
//               <div className="absolute inset-0 bg-white transition-all duration-500 group-hover:opacity-0">
//                 <div className="p-6 h-full flex flex-col">
//                   <div className="overflow-hidden rounded-[20px]">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-[400px] object-cover"
//                     />
//                   </div>

//                   <div className="flex-1 flex flex-col justify-center text-center mt-6">
//                     <h3 className="text-[36px] font-bold leading-tight text-black">
//                       {item.title}
//                     </h3>

//                     <p className="mt-6 text-[20px] leading-relaxed text-gray-700">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Hover Card */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-red-900 via-red-700 to-black">
//                 <div className="p-6 h-full flex flex-col">
//                   <div className="overflow-hidden rounded-[20px]">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-[300px] object-cover"
//                     />
//                   </div>

//                   <div className="flex-1 flex flex-col justify-center text-center text-white mt-6">
//                     <h3 className="text-[36px] font-bold leading-tight">
//                       {item.title}
//                     </h3>

//                     <p className="mt-6 text-[20px] leading-relaxed text-gray-100">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;



"use client";

import React from "react";
import Image from "next/image";
import { carsData } from "../data/data";

const Service = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
         <h1 className="text-center text-4xl md:text-6xl font-extrabold uppercase tracking-[4px] mb-12">
      Services
    </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carsData.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[30px] border-2 border-black bg-white min-h-[400px] cursor-pointer hover:min-h-[490px]"
            >
              {/* Default Card */}
              <div className="absolute inset-0 bg-white transition-all duration-500 group-hover:opacity-0">
                <div className="p-6 h-full flex flex-col">
                  <div className="relative h-[250px] w-full overflow-hidden rounded-[20px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-center text-center">
                    <h3 className="text-[20px] font-bold leading-tight text-black mt-0">
                      {item.title}
                    </h3>

                    {/* <p className="mt-6 text-[20px] leading-relaxed text-gray-700">
                      {item.description}
                    </p> */}
                  </div>
                </div>
              </div>

              {/* Hover Card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#7a0000] via-[#450000] to-black">
                <div className="p-6 h-full flex flex-col">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-[20px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-center text-center text-white">
                    <h3 className="text-[18px] font-bold leading-tight ">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-[13px] leading-relaxed text-gray-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;