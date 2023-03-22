import React, { useState } from 'react'
import ImgLogo from './../Images/fastball.png'
import axios from 'axios'

import RegisterProduct from './RegisterProduct'

const ContainerRegiterPRoduct = ( ) => {
    const [currentImage, setCurrentImage] = useState('')
    const changeCurrentImage = async (urlImage)=> {
        try { 
            await axios(urlImage)
            setCurrentImage( urlImage )
        } catch (error) {
            setCurrentImage( '' )
        }
    }

    return (
        <div className='container mx-auto mt-8 min-height-full flex m-0'>
            <div className='hidden lg:block relative flex-1 mb-8'>
                <img src={!currentImage? 'https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,f_auto,h_750,q_auto,w_700/v1679507441/fastball/system/product_image_d3cm5a.webp': currentImage} alt="loginImage" className='w-full h-full object-cover' />
            </div>
            <div className='flex-1 flex flex-col'>
                <div className='ml-8 w-full max-w-sm lg:max-w-lg lg:w-[100rem]'>
                    <div className='text-center lg:text-left'>
                        <img src={ImgLogo} alt="LogoFastBall" className='bg-blue-700 h-12 w-auto m-auto lg:m-0' />
                        <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>REGISTER PRODUCT</h2>
                    </div>
                    <div >
                        <RegisterProduct changeCurrentImage = {changeCurrentImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerRegiterPRoduct