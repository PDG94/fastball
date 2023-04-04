import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import ModalYesNo from '../ModalYesNo/ModalYesNo';
import { updateReview } from '../../reduxToolkit/actions/reviewAction';
const { clearProductDetail } = require('./../../reduxToolkit/slices/productSlice').productActions

const AddReview = ({reviewId, productDetail, clickAcept, clickClose}) => {
  const dispatch = useDispatch()
  const formatImage = `${productDetail.image.slice(0,50)}c_fill,f_auto,h_200,q_auto,w_200/${productDetail.image.slice(50)}`
  const { name, profilePic} = useSelector((state) => state.user);
  const stars = ['Very bad', 'Bad', 'Good', 'Very good', 'Excellent']
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [descriptionRev, setDescriptionRev] = useState('');
  const [showQuestionDecline, setShowQuestionDecline] = useState(false);

  const handleClick = value => {
    setCurrentValue( value )
  }

  const handleMouseHover = value => {
    setHoverValue( value )
  }

  const handleMouseLeave = () => {
    setHoverValue( undefined )
  }

  const handleChangeDescrip = event => setDescriptionRev(event.target.value)

  const handleClickAccept = ()=>{
    if(!currentValue) return toast.info(`You must rate the product with stars`);
    if(!descriptionRev) return toast.info(`You must put a comment about the product`);
    
    const date = new Date(Date.now())
   
    dispatch(
      updateReview({
        reviewId, 
        changes: 
        {
          date: date.toLocaleDateString(),
          score: currentValue,
          description: descriptionRev,
          status: 'Done'
        },
        user: {
          name,
          profilePic
        }
      })
      ).then(()=> {
        toast.info(`Review successfully posted`);
        clickAcept()
        dispatch(clearProductDetail())
    })
  }

  const handleClickDecline = () =>{
    setShowQuestionDecline(true)
  }
  const handleClickDeclineQuestion = (object) =>{
    if(object.action){
      dispatch(updateReview({reviewId, changes: {status: 'Declined'}}))
      clickClose()
    }
    setShowQuestionDecline(false)
  }

  return (
    <>
      {
        showQuestionDecline
          ? <ModalYesNo 
              objectModal={{text: 'Are you sure to decline the review? You will not be able to give your opinion of this product'}}
              functionModal={handleClickDeclineQuestion}
            />
          : <div className="relative z-10">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            {/* <div className='relative z-10 container h-[85vh] w-full flex items-center justify-center fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'> */}
                    <div className='mt-20 flex flex-col items-center bg-white border-all w-[50%] p-8 drop-shadow-lg'>
                        <img src={formatImage} alt="product review" className='w-24 h-24 mb-2' />
                        <h1 className='mb-4 text-2xl font-medium'>{productDetail.name}</h1>
                        <div className='flex'>
                            {stars.map((_, index)=>
                              <FaStar 
                                key={index} 
                                size={28}
                                className='mr-2.5 cursor-pointer'
                                onClick={()=> handleClick(index+1)}
                                color={(hoverValue || currentValue) > index? 'rgb(251 191 36)': '#dddddd' }
                                onMouseOver={()=>handleMouseHover(index+1)}
                                onMouseLeave={handleMouseLeave}
                              />
                            )}
                        </div>
                        <div className='h-4 flex'>
                          {(hoverValue>0 || currentValue>0) && <p>{stars[hoverValue? hoverValue-1: currentValue-1]}</p>}
                        </div>
                        <textarea 
                          placeholder="what's your feedback?" 
                          className='w-full h-[30vh] my-4 rounded-lg p-4 border border-solid'
                          value={descriptionRev}
                          onChange={handleChangeDescrip}
                        />
                        <div className='flex w-full justify-around'>
                          <button 
                            className='px-4 py-2 text-white bg-green-600 hover:bg-green-500 
                              rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm'
                            onClick={handleClickAccept}
                          >
                            Accept
                          </button>
                          <button 
                            className='px-4 py-2 text-white bg-red-600 hover:bg-red-500 
                              rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm'
                            onClick={handleClickDecline}
                          >
                            Decline
                          </button>
                          <button 
                            className='px-4 py-2 text-white bg-gray-600 hover:bg-gray-500 
                              rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm'
                            onClick={clickClose}
                          >
                            Cancel
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
      }
    </>
  )
}

export default AddReview