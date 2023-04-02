import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
import logGoogle from './../../images/google.svg';
import { registerUserAction } from './../../reduxToolkit/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { uploadImage } from '../../utils';
import GoogleButton from 'react-google-button';
import axios from 'axios';
import { toast } from "react-toastify";
import { useState } from 'react';
const { loginUserAction, loginUserGoogleAction } = require('./../../reduxToolkit/actions/userActions');


const Register = ({ image }) => {
    // const [submitedForm, setSubmitedForm] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [countrys, setCountrys] = useState([])


    const options = async () => {
        const list = []
        const option = await axios.get("https://restcountries.com/v3.1/all");
        option.data && option.data.map((prod, i) => {
            list.push(prod.name.common)
        })
        function comparar(a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }

        // Ordenar la lista alfabéticamente
        list.sort(comparar);
        setCountrys(list)
    }

    useEffect(() => {
        options()
    }, [])


    const handleGoogle = async () => {
        dispatch(loginUserGoogleAction()).then(() => {
            navigate('/').then(() => toast.success("Welcome!", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }))
        });

    }

    return (
        <Formik
            initialValues={{
                name: '',
                lastName: '',
                email: '',
                address: '',
                country: '',
                city: '',
                password: '',
                rePassword: ""
            }}

            validate={(values) => {
                const errors = {}
                if (!values.name) {
                    errors.name = "Please, input a name"
                }
                if (!values.email) {
                    errors.email = 'Please, input a email'
                    // } else if( !/^[a-zA-ZA-ÿ\s]{1,40}$/.test(values.email) ){
                    //     errors.email = 'The email only can characters or spaces'
                }

                if (!values.password) {
                    errors.password = 'Please, input a password'
                    // } else if( /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.password) ){
                    //     errors.password = 'The password not is valid'
                }
                if (values.password != values.rePassword) {
                    errors.password = 'Passwords do not match'
                    errors.rePassword = 'Passwords do not match'
                }
                return errors
            }}

            onSubmit={(values, { resetForm }) => {
                resetForm()

                console.log('Enviar Formulario');
                // dispatch(registerUserAction(values))
                if (image.length > 1) {
                    uploadImage(image, 'users').then(newURL => {
                        values = { ...values, profilePic: newURL }

                        dispatch(registerUserAction(values)).then(() => navigate('/'), (err) => toast.error("Email already registered", {
                            position: "bottom-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        }))
                    }
                    )

                } else {
                    dispatch(registerUserAction(values)).then(() => navigate('/'), (err) => toast.error("Email already registered", {
                        position: "bottom-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    }))
                }
                // setSubmitedForm(true)
                // setTimeout( ()=> setSubmitedForm(false), 2000)
            }}
        >
            {({ errors }) => (
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
                            <label htmlFor='lastName' className='block text-sm font-medium text-gray-700'>Last name</label>
                            <Field
                                type='text' n
                                id='lastName'
                                name='lastName'
                                placeholder='enter your last name ...'
                                className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            <ErrorMessage
                                name='lastName'
                                component={(() =>
                                    <div className='block text-sm font-medium text-red-700'>
                                        {errors.lastName}
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
                            <label htmlFor='address' className='block text-sm font-medium text-gray-700'>Address</label>
                            <Field
                                type='text' n
                                id='address'
                                name='address'
                                placeholder='enter your address ...'
                                className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            <ErrorMessage
                                name='address'
                                component={(() =>
                                    <div className='block text-sm font-medium text-red-700'>
                                        {errors.address}
                                    </div>
                                )}
                            />
                        </div>
                        <div>
                            <label htmlFor='country' className='block text-sm font-medium text-gray-700'>Country</label>
                            <Field
                                as='select'
                                name="country"
                                id="country"
                                // defaultValue={countries[10]} 
                                className='text-sm font-medium text-gray-700 mt-2 shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'>
                                {countrys && countrys.map((country, ind) => <option key={ind} value={country}>{country}</option>)}
                            </Field>
                        </div>
                        <div>
                            <label htmlFor='city' className='block text-sm font-medium text-gray-700'>City</label>
                            <Field
                                type='text' n
                                id='city'
                                name='city'
                                placeholder='enter your city ...'
                                className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            <ErrorMessage
                                name='address'
                                component={(() =>
                                    <div className='block text-sm font-medium text-red-700'>
                                        {errors.address}
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
                            <label htmlFor='rePassword' className='block text-sm font-medium text-gray-700'>Confirm Password</label>
                            <Field
                                type='password'
                                id='rePassword'
                                name='rePassword'
                                placeholder='re enter your password ...'
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
                        {/* {submitedForm && <p className='block text-sm font-medium text-green-700'>Successfully registered</p>} */}
                    </div>
                    <div className='flex justify-center p-4'>
                        <GoogleButton onClick={handleGoogle} />
                    </div>
                    {/* <div className='grid grid-cols-2 pt-10 '>
                        <Link to="/" className=' col-end-3'>
                            <button className='mt-4 w-full py-3 bg-slate-900 hover:bg-slate-800 text-white' type='button'>
                                    Home
                            </button>
                        </Link>
                    </div> */}
                </Form>
            )}
        </Formik>
    )
}

export default Register