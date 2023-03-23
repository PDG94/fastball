import React from 'react'
import ImgLogo from './../Images/fastball.png'
import Login from './Login'
import { Link } from 'react-router-dom'
import Register from './Register'

const UserConnection = ( {isLogin=true} ) => {

    return (
        <div className='container mx-auto mt-8 min-height-full flex'>
            <div className='hidden lg:block relative flex-1 mb-8'>
                <img src={isLogin? 'https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,f_auto,h_570,q_auto,w_700/v1679507441/fastball/system/login_lcywpk.webp' : 'https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,f_auto,h_710,q_auto,w_700/v1679507442/fastball/system/register_gpmyxn.webp'} alt="loginImage" className='w-3/2' />
            </div>
            <div className='flex-1 flex flex-col px-4 sm:px-6 lg:flex-none'>
                <div className='mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]'>
                    <div className='text-center lg:text-left'>
                        <img src={ImgLogo} alt="LogoFastBall" className='bg-blue-700 h-12 w-auto m-auto lg:m-0' />
                        <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>{isLogin ? 'LOGIN' : 'REGISTER'}</h2>
                        <p>
                            { isLogin ? 'New User? Register ' : 'Already have an account? '} 
                            <Link to={ isLogin ? '/register' : '/login' }>
                                <span className='font-medium text-sky-600 hover:text-sky-500'>{isLogin ? 'here' : 'log in'}</span>
                            </Link>
                        </p>
                    </div>
                    <div className='mt-6'>
                        { isLogin ? <Login /> : <Register />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserConnection