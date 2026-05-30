"use client";

import React from 'react'
import { WhatsAppOutlined , PhoneOutlined } from "@ant-design/icons";


// const WhatsAppButton = () => {
//     return (
//         <a
//             href='https://wa.me/919380104749'
//             target='_blank'
//             rel='noopener noreferrer'
//             className='fixed bottom-15 right-0 z-50 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600  text-green px-5 py-4 rounded-full shadow-lg font-semibold transition-all duration-300 hover:scale-105'>
//             <WhatsAppOutlined size={20} />
//         </a>
//     )
// }

// export default WhatsAppButton


const FloatingContactButtons = () => {
    return (
        <div className='fixed bottom-6 right-4 z-50 flex flex-col gap-3'>
            <a
            href='tel:+919380104749'
            aria-label='Call Now'
            className='flex h-14 w-14 items-center justify-center rounded-full bg-gray-700 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-800'
            > <PhoneOutlined style={{ fontSize: "24px" }} /></a>

            <a
            href="https://wa.me/919380104749"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Chat on WhatsApp'
            className='flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600'
            >
                <WhatsAppOutlined style={{ fontSize: "26px"}} />

            </a>

        </div>
    );
};


export default FloatingContactButtons;