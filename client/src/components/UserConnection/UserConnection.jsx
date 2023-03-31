import React, { useEffect, useRef, useState } from 'react'
import ImgLogo from './../Images/fastball.png'
import userLogo from './../Images/user.ico'
import Login from './Login'
import { Link } from 'react-router-dom'
import Register from './Register'

const UserConnection = ( {isLogin=true} ) => {
    const reference = useRef()
    const [image, setImage] = useState(null)
    const [prevImage, setprevImage] = useState('')
    isLogin && image && setImage(null)

    const uploadFile = ()=> {
        reference.current.click()
    }

    useEffect(()=>{
        if(image){
            const reader = new FileReader()
            reader.onloadend = ()=> {
                setprevImage(reader.result.toString())
            }
            reader.readAsDataURL(image)
        }
    }, [image])
    
    useEffect(()=> {
        setImage(null)
    },[])
    
    const handleChangeUserImage = (event)=> {
        const file = event.target.files[0]
        if(file && file.type.substring(0,5)==='image'){
            setImage(file)
        } else {
            setImage(null)
        }
    }
    return (
        <div className='mt-[5.2%] mx-auto min-height-full flex'>
            <div className='hidden lg:block relative flex-1 h-full'>
                <img src={isLogin? 'https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,f_auto,h_570,q_auto,w_700/v1679507441/fastball/system/login_lcywpk.webp' : 'https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,f_auto,h_710,q_auto,w_700/v1679507442/fastball/system/register_gpmyxn.webp'} alt="loginImage" className='w-[99%] h-full' />
            </div>
            <div className='flex-1 flex flex-col px-4 sm:px-6 lg:flex-none mt-8'>
                <div className='mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]'>
                    <div className='flex items-center'>
                        <div className='text-center lg:text-left'>
                            {/* <img src={ImgLogo} alt="LogoFastBall" className='bg-blue-700 h-12 w-auto m-auto lg:m-0' /> */}
                            <h2 className='text-3xl font-extrabold text-gray-900'>{isLogin ? 'LOGIN' : 'REGISTER'}</h2>
                            <p>
                                { isLogin ? 'New User? Register ' : 'Already have an account? '} 
                                <Link to={ isLogin ? '/register' : '/login' }>
                                    <span className='font-medium text-sky-600 hover:text-sky-500'>{isLogin ? 'here' : 'log in'}</span>
                                </Link>
                            </p>
                        </div>
                        { !isLogin &&
                            <div className='flex flex-col items-center w-full'>
                                <input 
                                    src={userLogo} 
                                    type="file" 
                                    accept='image/*' 
                                    className='hidden' 
                                    ref={reference} 
                                    onChange={handleChangeUserImage}
                                />
                                <p className='text-sm font-medium text-gray-700 relative left-8'>Add profile image</p>
                                <img 
                                    src={image? prevImage : userLogo} 
                                    alt="img user"
                                    className='relative top-1 right-[-10%] w-24 cursor-pointer rounded-full w-12 h-24 object-cover bg-shadow-lg' 
                                    onClick={uploadFile}
                                />
                            </div>
                        }
                    </div>
                    <div className='mt-6'>
                        { isLogin ? <Login /> : <Register image={prevImage}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserConnection