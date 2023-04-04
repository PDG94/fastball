import React, { Fragment } from 'react'
import { ViewCarousel } from './ViewCarousel'
import ComentaryCarousel from './ComentaryCarousel'

const formatImg = 'c_fill,h_1000,w_3000'
const slidesCarousel = [
    {   
        img: `https://res.cloudinary.com/dviri5ov1/image/upload/${formatImg}/v1679507441/fastball/system/img1_dba101.webp`, 
        coment: <ComentaryCarousel text={'More than 100 users have been interested in this page !!!'}/>
    },
    {   
        img: `https://res.cloudinary.com/dviri5ov1/image/upload/${formatImg}/v1679507442/fastball/system/img2_g0rwfp.webp`, 
        coment: <ComentaryCarousel text={'We have 11 categories of sports products !!!'}/>
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

export const Carousel = () => {
  return    <div className='max-w-fit mx-auto px-12'>
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
