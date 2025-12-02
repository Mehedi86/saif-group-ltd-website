'use client'

import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io';

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            }
            else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if (!isVisible) {
        return null;
    }

    return (
        <div className='fixed bottom-4 right-4'>
            <button className='rouded-full bg-purple-600 hover:bg-purple-400 rounded cursor-pointer text-white p-2 hadow-lg transition-colors duration-300'>
                <IoIosArrowUp size={24}/>
            </button>
        </div>
    )
}
