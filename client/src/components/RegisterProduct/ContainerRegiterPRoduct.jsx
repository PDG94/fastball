import React, { useState } from 'react'
import ImgLogo from './../Images/fastball.png'
import imgProduct from './../../images/product_image.png'
import axios from 'axios'

// import imgRegister from './../../images/register.jpg'
import RegisterProduct from './RegisterProduct'

const ContainerRegiterPRoduct = ( ) => {
    const [currentImage, setCurrentImage] = useState('')
    const changeCurrentImage = async (urlImage)=> {
        try { 
            await axios(urlImage)
            setCurrentImage( urlImage )
            console.log('URL Correcta');
        } catch (error) {
            console.log('Entra al Error');
            setCurrentImage( '' )
        }
    }

    return (
        <div className='min-height-full flex m-0'>
            <div className='hidden lg:block relative h-full flex-1'>
                <img src={!currentImage? imgProduct: currentImage} alt="loginImage" className='width' />
            </div>
            <div className='flex-1 flex flex-col justify-center '>
                <div className='mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]'>
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