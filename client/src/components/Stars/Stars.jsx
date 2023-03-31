import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'

const Stars = ({score, reviews}) => {
  const ratingStar = Array.from({length: 5}, (elem, index)=> {
    let number = index + 0.5
    return (
      <span key={index}>
        {score >= index + 1
          ? <FaStar className='text-amber-400 text-xl'/>
          : score >= number
            ? <FaStarHalfAlt className='text-amber-400 text-xl'/>
            : <AiOutlineStar className='text-amber-400 text-2xl'/>
        }
      </span>
    )
  })

  return (
    <div className='flex w-fit items-center'>
      {ratingStar}
      {reviews > 0 && <p className='m-0 pl-2 text-sm'>({reviews} customer reviews)</p>}
    </div>
  )
}

export default Stars