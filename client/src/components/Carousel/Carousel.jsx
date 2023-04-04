import React, { Fragment, useEffect, useState } from 'react'
import { ViewCarousel } from './ViewCarousel'
import ComentaryCarousel from './ComentaryCarousel'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../reduxToolkit/actions/userActions';
import { fetchCategory } from '../../reduxToolkit/actions/categoryAction';

export const Carousel = () => {  
  const dispatch = useDispatch();
  const [users, setUsers] = useState([])
  const { allCategories } = useSelector( state => state.category )
  const { allProducts } = useSelector( state => state.product )

  useEffect(() => {
    dispatch(getAllUsers()).then((response) => setUsers(response.payload))
    dispatch(fetchCategory())

  }, [dispatch])
  
  const formatImg = 'c_fill,h_1000,w_3000'
  const slidesCarousel = [
    {   
        img: `https://res.cloudinary.com/dviri5ov1/image/upload/${formatImg}/v1679507441/fastball/system/img1_dba101.webp`, 
        coment: <ComentaryCarousel text={`${users.length>0?users.length:0} users have been interested in this page !!!`}/>
    },
    {   
        img: `https://res.cloudinary.com/dviri5ov1/image/upload/${formatImg}/v1679507442/fastball/system/img2_g0rwfp.webp`, 
        coment: <ComentaryCarousel text={`We have ${allCategories.length>0?allCategories.length:0} categories of sports products and ${allProducts.length>0?allProducts.length:0} products of excellent quality!!!`}/>
    },
    {   
        img: `https://res.cloudinary.com/dviri5ov1/image/upload/${formatImg}/v1679507442/fastball/system/img3_fylx1i.webp`, 
        coment: <ComentaryCarousel text={'Easy access to desired product !!!'}/>
    },
    {   
        img: `https://res.cloudinary.com/dviri5ov1/image/upload/${formatImg}/v1679507442/fastball/system/img4_oseduk.webp`, 
        coment: <ComentaryCarousel text={'Shopping cart, discounts and much more !!!'}/>
    },
    {   
        img: `https://res.cloudinary.com/dviri5ov1/image/upload/${formatImg}/v1679507441/fastball/system/img5_shdi0o.webp`, 
        coment: <ComentaryCarousel text={'Rate and see the ratings of our users about the product of interest !!!'}/>
    },
  ]

  return  <div className='max-w-fit mx-auto px-12'>
            <ViewCarousel>
              { slidesCarousel.map( (slide, ind) =>{
                return <Fragment key={ind}>
                  <h1>{slide.coment}</h1>
                  <img className="object-cover h-[80vh]" src={slide.img} alt={`img carousel ${ind}`} /> 
                </Fragment>
              })}
            </ViewCarousel>
          </div>
}
