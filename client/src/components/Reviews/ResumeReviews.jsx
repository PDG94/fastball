import React, { useEffect, useState } from 'react'
import Stars from '../Stars/Stars'
import ProgressBarReview from './ProgressBarReview';
import { useSelector } from 'react-redux';

const ResumeReviews = ({reviewsProduct}) => {
  const [starReviews, setStarReviews] = useState([]);
  const { productDetail } = useSelector((state) => state.product);

  let start = true

  useEffect(()=>{
    const newStarsReview = []
    if(start){
      // eslint-disable-next-line react-hooks/exhaustive-deps
      start = false
      for(let i=5; i>0; i--){
        newStarsReview.push(reviewsProduct.filter(rev => rev.score === i).length)
      }
      setStarReviews( newStarsReview )
    }
  }, [reviewsProduct])

  return (
    <div className='bg-white p-8 rounded-lg drop-shadow-lg'>
        <h2 className="text-center text-xl md:text-2xl font-semibold font-medium mb-4">Resume reviews</h2>
        <div className='flex items-center'>
            <div>
                <h1 className='text-5xl font-bold text-blue-700'>{productDetail.score.toFixed(2)}</h1>
            </div>
            <div className='ml-4'>
                <Stars score={productDetail.score} />
                <h2>{productDetail.cantReviews} {productDetail.cantReviews===1? 'review' : 'reviews'}</h2>
            </div>
            <div className='ml-8'>
                { (starReviews.length > 0) &&
                  starReviews.map( 
                    (score, ind)=> 
                      <ProgressBarReview 
                        key={ind}
                        starReviews={starReviews}
                        nStar={5-ind} 
                        nPorcent={(150*(score/productDetail.cantReviews)).toFixed(0)}
                      />
                  )}
            </div>
        </div>
    </div>
  )
}

export default ResumeReviews