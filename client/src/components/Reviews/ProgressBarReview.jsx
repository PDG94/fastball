import React from 'react'
import { FaStar } from 'react-icons/fa'

const ProgressBarReview = ({nStar, nPorcent }) => {
  return (
    <div className='flex items-center'>
        <div className='w-[150px] h-[3px] rounded-lg bg-gray-300 mr-2 drop-shadow-md'>
            <div className={`h-[3px] bg-blue-600`} style={{width: `${nPorcent}px`}}></div>
        </div>
        <span className='mr-1'>{nStar} </span>
        <FaStar className='text-amber-400'/>
    </div>
  )
}

export default ProgressBarReview