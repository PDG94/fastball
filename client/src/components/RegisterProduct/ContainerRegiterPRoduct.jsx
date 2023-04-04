import React, { useEffect, useRef, useState } from 'react'
// import ImgLogo from './../Images/fastball.png'
import axios from 'axios'
import { useNavigate } from "react-router";
import RegisterProduct from './RegisterProduct'

const ContainerRegiterPRoduct = () => {
    const reference = useRef()
    const [image, setImage] = useState(null)
    const [localImageURL, setLocalImageURL] = useState('');
    
    // const [prevImage, setprevImage] = useState('')
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState('')
    const changeCurrentImage = async (urlImage) => {
        localImageURL && setLocalImageURL('')
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

    useEffect(()=>{
        if(image){
            const reader = new FileReader()
            reader.onloadend = ()=> {
                setCurrentImage(reader.result.toString())
                setLocalImageURL(reader.result.toString())
            }
            reader.readAsDataURL(image)
        }
    }, [image])
    
    const uploadFile = ()=> {
        reference.current.click()
    }
    
    const handleChangeUserImage = (event)=> {
        const file = event.target.files[0]
        if(file && file.type.substring(0,5)==='image'){
            // setLocalImageURL(file)
            setImage(file)
        } else {
            setLocalImageURL('')
            setImage(null)
        }
    }

    return (

        <div className='container mx-auto mt-22 min-height-full flex p-20 bg-white'>
            <div className='flex w-4/5 h-[100vh] items-center justify-center mb-8 drop-shadow-lg bg-white '>
                {!currentImage 
                    ? <>
                        <input 
                            type="file" 
                            accept='image/*' 
                            className='hidden' 
                            ref={reference} 
                            onChange={handleChangeUserImage}
                        />
                        <button 
                            className='w-fit bg-blue-600 px-5 py-3 font-bold text-white'
                            onClick={uploadFile}
                        >
                                Product image
                        </button> 
                    </>
                    :   <>
                            <img src={currentImage} alt="loginImage" className='relative object-cover h-full' />
                            {localImageURL && 
                                <button 
                                    className='bg-slate-200 border border-solid border-slate-300 rounded-sm px-2 py-1 hover:bg-red-500 font-semibold absolute top-[2%] left-[93%]'
                                    onClick={()=>{
                                        setCurrentImage('')
                                        setLocalImageURL('')
                                    }}
                                >
                                    X
                                </button>
                            }
                        </>
                    }
                
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
                        <RegisterProduct 
                            changeCurrentImage={changeCurrentImage} 
                            currentImage={currentImage} 
                            localImageURL={localImageURL} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerRegiterPRoduct