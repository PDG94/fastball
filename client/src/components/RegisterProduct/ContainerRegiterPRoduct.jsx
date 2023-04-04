import React, { useState } from 'react'
// import ImgLogo from './../Images/fastball.png'
import axios from 'axios'
import { useNavigate } from "react-router";
import RegisterProduct from './RegisterProduct'

const ContainerRegiterPRoduct = () => {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState('')
    const changeCurrentImage = async (urlImage) => {
        try {
            await axios(urlImage)
            setCurrentImage(urlImage)

        } catch (error) {
            setCurrentImage('')
        }
    }

    const habldeBack=()=>{
        navigate(-1)
      }

    return (

        <div className='container mx-auto mt-22 min-height-full flex p-20 bg-white'>
            <div className='flex w-4/5 h-[100vh] items-center justify-center mb-8 drop-shadow-lg bg-white '>
                {!currentImage ? <h1 className='w-fit bg-blue-600 px-5 py-3 font-bold text-white'>Product image</h1> : <img src={currentImage} alt="loginImage" className='object-cover h-full' />}

            </div>
            <div className='flex-1 flex flex-col'>
                <div className='ml-8 w-full max-w-sm lg:max-w-lg lg:w-[100rem]'>
                    <div className='absolute top-20 right-10 mt-4 mr-4'>
                        <button className='border  text-gray-500 hover:bg-blue-400 hover:text-white font-bold py-1 px-2 rounded' onClick={habldeBack}>
                            Go back
                        </button>
                    </div>
                    <div className='text-center lg:text-left'>
                        {/* <img src={ImgLogo} alt="LogoFastBall" className='bg-blue-700 h-12 w-auto m-auto lg:m-0' /> */}
                        <h2 className='text-3xl font-extrabold text-gray-900'>CREATE PRODUCT</h2>
                    </div>
                    <div className='' >
                        <RegisterProduct changeCurrentImage={changeCurrentImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerRegiterPRoduct