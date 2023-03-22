import React, { Fragment } from 'react'
import { ViewCarousel } from './ViewCarousel'
// https://res.cloudinary.com/dviri5ov1/image/upload/c_scale,h_280,w_1300/v1679507441/fastball/system/img1_dba101.webp
const slidesCarousel = [
    {   
        img: 'https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,h_280,w_1300/v1679507441/fastball/system/img1_dba101.webp', 
        coment: 
            <div className='absolute top-4 w-full flex justify-center items-center'>
                <h1 className='text-2xl text-white font-bold drop-shadow-lg'>Comentario en la página 1</h1>
            </div>
    },
    {   
        img: 'https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,h_280,w_1300/v1679507442/fastball/system/img2_g0rwfp.webp', 
        coment: 
            <div className='absolute top-4 w-full flex justify-center items-center'>
                <h1 className='text-2xl text-white font-bold drop-shadow-lg'>Comentario en la página 2</h1>
            </div>
    },
    {   
        img: 'https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,h_280,w_1300/v1679507442/fastball/system/img3_fylx1i.webp', 
        coment:
            <div className='absolute top-4 w-full flex justify-center items-center'>
                <h1 className='text-2xl text-white font-bold drop-shadow-lg'>Comentario en la página 3</h1>
            </div>
    },
    {   
        img: 'https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,h_280,w_1300/v1679507442/fastball/system/img4_oseduk.webp', 
        coment:
            <div className='absolute top-4 w-full flex justify-center items-center'>
                <h1 className='text-2xl text-white font-bold drop-shadow-lg'>Comentario en la página 4</h1>
            </div>
    },
    {   
        img: 'https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,h_280,w_1300/v1679507441/fastball/system/img5_shdi0o.webp', 
        coment: 
            <div className='absolute top-4 w-full flex justify-center items-center'>
                <h1 className='text-2xl text-white font-bold drop-shadow-lg'>Comentario en la página 5</h1>
            </div>
    },
  ]

export const Carousel = () => {
  return    <div className='max-w-fit mx-auto px-12'>
                <ViewCarousel>
                    { slidesCarousel.map( (slide, ind) =>{
                        return <Fragment key={ind}>
                            <h1>{slide.coment}</h1>
                            <img className="object-cover" src={slide.img} alt={`img carousel ${ind}`} /> 
                        </Fragment>
                    })}
                </ViewCarousel>
            </div>
}
