"use client";

import React from 'react'
import { WhatsAppOutlined } from "@ant-design/icons";


const WhatsAppButton = () => {
    return (
        <a
            href='https://wa.me/919380104749'
            target='_blank'
            rel='noopener noreferrer'
            className='fixed bottom-15 right-0 z-50 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600  text-green px-5 py-4 rounded-full shadow-lg font-semibold transition-all duration-300 hover:scale-105'>
            <WhatsAppOutlined size={20} />
        </a>
    )
}

export default WhatsAppButton
