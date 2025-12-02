'use client'

import React, { useRef } from 'react'

interface NoticesEventesProps {
    title: string;
    data: any
}

export default function NoticesEventes({ data, title }: NoticesEventesProps) {
    
    const marqueeRef = useRef<HTMLDivElement | null>(null);
    if (!data) return null;

    return (
        <section className="bg-[#1a2a4a] text-white py-4 overflow-hidden">
            <div className='container mx-auto px-6 md:px-8'>
                <div className='flex items-center gap-4'>
                    <span className="font-bold text-sm md:text-base whitespace-nowrap">
                        {title}
                    </span>
                    <div className='flex-1 overflow-hidden relative'>
                        <div
                            ref={marqueeRef}
                            className='whitespace-nowrap flex'
                            style={{
                                animation: 'scrollLeft 30s linear infinite',
                                willChange: 'transform'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.animationPlayState = "paused";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.animationPlayState = "running"
                            }}
                        >
                            <span>{data.title}</span>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </section>
    )
}
