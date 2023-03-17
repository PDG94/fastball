import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
import logGoogle from './../../images/google.svg'

const Register = () => {
    const [submitedForm, setSubmitedForm] = useState(false)

    return (
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
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                            <Field
                                type='text'
                                id='name'
                                name='name'
                                placeholder='enter your name ...'
                                className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            <ErrorMessage 
                                name='name' 
                                component={(() => 
                                    <div className='block text-sm font-medium text-red-700'> 
                                        {errors.name}
                                    </div>
                                )}
                                
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                            <Field
                                type='email'
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
                                type='password'
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
                            <label htmlFor='rePassword' className='block text-sm font-medium text-gray-700'>Re-enter Password</label>
                            <Field
                                type='password'
                                id='rePassword'
                                name='rePassword'
                                placeholder='re-enter your password ...'
                                className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            <ErrorMessage 
                                name='rePassword' 
                                component={(() => 
                                    <div className='block text-sm font-medium text-red-700'> 
                                        {errors.rePassword}
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div>
                        <button className='mt-4 w-full py-3 bg-blue-800 hover:bg-blue-700 text-white' type='submit'>Register</button>
                        {submitedForm && <p className='block text-sm font-medium text-green-700'>Successfully registered</p>}
                    </div>
                    <div  className='grid grid-cols-4 pt-5 items-center' >
                        <span className='col-end-3'>-or register with-</span>
                        <Link to='/'>
                            <img  className='col-end-4 w-12' src={logGoogle} alt="google" />
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 pt-10 '>
                        <Link to="/" className=' col-end-3'>
                            <button className='mt-4 w-full py-3 bg-slate-900 hover:bg-slate-800 text-white' type='button'>
                                    Home
                            </button>
                        </Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Register