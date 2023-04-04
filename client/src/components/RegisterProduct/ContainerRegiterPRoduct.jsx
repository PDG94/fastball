import React, { useState } from 'react'
// import ImgLogo from './../Images/fastball.png'
import axios from 'axios'
import { toast } from "react-toastify";
import RegisterProduct from './RegisterProduct'

const ContainerRegiterPRoduct = ( ) => {
    const [currentImage, setCurrentImage] = useState('')
    const changeCurrentImage = async (urlImage)=> {
        try { 
            await axios(urlImage)
            setCurrentImage( urlImage )
            toast.success("Product Created Succesfully!");
        } catch (error) {
            setCurrentImage( '' )
        }
    }

    return (
        <div className='container mx-auto mt-24 min-height-full flex mb-12'>
            <div className='flex w-4/5 h-[100vh] items-center justify-center mb-8 shad border-all bg-white '>
                { !currentImage? <h1 className='w-fit bg-blue-600 px-5 py-3 font-bold text-white'>Product image</h1> : <img src={ currentImage } alt="loginImage" className='object-cover h-full' />}
            </div>
            <div className='flex-1 flex flex-col'>
                <div className='ml-8 w-full max-w-sm lg:max-w-lg lg:w-[100rem]'>
                    <div className='text-center lg:text-left'>
                        {/* <img src={ImgLogo} alt="LogoFastBall" className='bg-blue-700 h-12 w-auto m-auto lg:m-0' /> */}
                        <h2 className='text-3xl font-extrabold text-gray-900'>CREATE PRODUCT</h2>
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