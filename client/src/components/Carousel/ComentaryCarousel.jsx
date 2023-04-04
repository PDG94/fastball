import React from 'react'

const ComentaryCarousel = ({text}) => {
  return (
    <div className='absolute top-4 w-full flex justify-center items-center h-[67vh] flex flex-col'>
      <div className='w-[50%] h-[60%] bg-current opacity-40 rounded-lg' />
      <div className='w-[50%] h-[60%] absolute p-8 flex items-center justify-center'>
        <h1 
          className='text-center text-6xl text-white font-bold drop-shadow-xl'
        >
          {text}
        </h1>
      </div>
    </div>
  )
}

export default ComentaryCarousel