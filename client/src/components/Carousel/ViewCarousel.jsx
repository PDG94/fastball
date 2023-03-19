import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

export const ViewCarousel = ({ children: slides, coment }) => {
    const [curr, setCurr] = useState(0)

    const prev = ()=> setCurr( curr => curr === 0 ? slides.length -1 : curr - 1 )
    const next = ()=> setCurr( curr => curr === slides.length -1 ? 0 : curr + 1 )

    useEffect(()=> {
        const slideInterval = setInterval(next, 6000)
        return ()=> clearInterval(slideInterval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
    <div className='mt-8 overflow-hidden relative rounded-lg drop-shadow-lg'>
        <div className='flex max-h-64 transition-transform ease-out duration-500' style={{transform: `translateX(-${curr * 100}%)`}}>
            {slides}
        </div>
        <div>
            {coment}
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={prev} className='p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white hover:opacity-90' style={{transition: '0.3s easy-in'}}>
            <ChevronLeft size={30} />
            </button>
            <button onClick={next} className='p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white hover:opacity-90'>
            <ChevronRight size={30}/>
            </button>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
            {slides.map((_, ind)=> (
                <div key={ind} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === ind ? "p-2" : "bg-opacity-50"}`}/>
            ))}
            </div>

        </div>
    </div>
    )
}
