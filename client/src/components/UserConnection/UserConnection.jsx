import React from 'react'
import './UserConnection.css'
import ImgLogo from './../Images/fastball.png'
import imgLogin from './../../images/login.webp'
import imgRegister from './../../images/register.webp'
import Login from './Login'
import { Link } from 'react-router-dom'
import Register from './Register'

const UserConnection = ( {isLogin=true} ) => {

    return (
        <div className='min-height-full flex m-0'>
            <div className='hidden lg:block relative h-full flex-1'>
                <img src={isLogin? imgLogin : imgRegister} alt="loginImage" className='width' />
            </div>
            <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none'>
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