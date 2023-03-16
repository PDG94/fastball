import React, { Fragment } from 'react'
import Img1 from "./../../images/img1.jpeg" 
import Img2 from "./../../images/img2.jpeg" 
import Img3 from "./../../images/img3.jpeg" 
import Img4 from "./../../images/img4.jpeg" 
import Img5 from "./../../images/img5.jpeg" 
import { ViewCarousel } from './ViewCarousel'

const slidesCarousel = [
    {   
        img: Img1, 
        coment: 
            <div className='absolute top-4 w-full flex justify-center items-center'>
                <h1 className='text-2xl text-white font-bold drop-shadow-lg'>Comentario en la página 1</h1>
            </div>
    },
    {   
        img: Img2, 
        coment: 
            <div className='absolute top-4 w-full flex justify-center items-center'>
                <h1 className='text-2xl text-white font-bold drop-shadow-lg'>Comentario en la página 2</h1>
            </div>
    },
    {   
        img: Img3, 
        coment:
            <div className='absolute top-4 w-full flex justify-center items-center'>
                <h1 className='text-2xl text-white font-bold drop-shadow-lg'>Comentario en la página 3</h1>
            </div>
    },
    {   
        img: Img4, 
        coment:
            <div className='absolute top-4 w-full flex justify-center items-center'>
                <h1 className='text-2xl text-white font-bold drop-shadow-lg'>Comentario en la página 4</h1>
            </div>
    },
    {   
        img: Img5, 
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
