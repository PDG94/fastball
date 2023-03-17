import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import imgLogin from './../../images/login.jpg'
import './Login.css'
import ImgLogo from './../Images/fastball.png'

const Login = () => {
    const [submitedForm, setSubmitedForm] = useState(false)

    return (
        <div className='min-height-full flex m-0'>
            <div className='hidden lg:block relative h-full flex-1'>
                <img src={imgLogin} alt="loginImage" className='width' />
            </div>
            <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
                <div className='mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]'>
                    <div className='text-center lg:text-left'>
                        <img src={ImgLogo} alt="LogoFastBall" className='bg-blue-700 h-12 w-auto m-auto lg:m-0' />
                        <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>LOGIN</h2>
                        <p>
                            New User? Register 
                            <a href="./" className='font-medium text-sky-600 hover:text-sky-500'> here</a>
                        </p>
                    </div>
                    <div className='mt-6'>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}

                            validate={ (values)=> {
                                const errors = {}

                                if( !values.email ){
                                    errors.email = 'Please, input a email'
                                } else if( !/^[a-zA-ZA-ÿ\s]{1,40}$/.test(values.email) ){
                                    errors.email = 'The email only can characters or spaces'
                                }

                                if( !values.password){
                                    errors.password = 'Please, input a password'
                                } else if( /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.password) ){
                                    errors.password = 'The password not is valid'
                                }
                                return errors
                            }}

                            onSubmit={ (_,{resetForm})=> {
                                resetForm()
                                console.log('Enviar Formulario');
                                setSubmitedForm(true)
                                setTimeout( ()=> setSubmitedForm(false), 2000)
                            }}
                        >
                            {( {errors} ) => (
                                <Form className='space-y-1'>
                                    <div className='grid grid-cols-1 lg:gap-3'>
                                        <div>
                                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                                            <Field
                                                type='text'
                                                id='email'
                                                name='email'
                                                placeholder='enter your email ...'
                                                className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline'
                                            />
                                            <ErrorMessage 
                                                name='email' 
                                                component={(() => 
                                                    <div className='block text-sm font-medium text-red-700'> 
                                                        {errors.email}
                                                    </div>
                                                )}
                                                
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                                            <Field
                                                type='text'
                                                id='password'
                                                name='password'
                                                placeholder='enter your password ...'
                                                className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline'
                                            />
                                            <ErrorMessage 
                                                name='password' 
                                                component={(() => 
                                                    <div className='block text-sm font-medium text-red-700'> 
                                                        {errors.password}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                       <div>
                                            <button className='mt-4 w-full py-3 bg-blue-800 hover:bg-blue-700 text-white' type='submit'>Login in</button>
                                            {submitedForm && <p className='block text-sm font-medium text-green-700'>Successfully logged</p>}
                                       </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login