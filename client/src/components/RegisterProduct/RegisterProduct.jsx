import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
// import { Link } from 'react-router-dom'

const Register = () => {
    const [submitedForm, setSubmitedForm] = useState(false)

    return (
        <Formik
            initialValues={{
                name:'', 
                image:'', 
                description:'', 
                price:'', 
                stock:'',
            }}

            validate={ (values)=> {
                const errors = {}

                if( !values.name ){
                    errors.name = 'Please, input a name'
                }

                if( !values.image ){
                    errors.image = 'Please, input a image'
                }

                if( !values.description ){
                    errors.description = 'Please, input a description'
                }

                if( !values.price ){
                    errors.price = 'Please, input a price'
                }

                if( !values.stock ){
                    errors.stock = 'Please, input a stock'
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
                            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Product Name</label>
                            <Field
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Enter product name ...'
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
                            <label htmlFor='image' className='block text-sm font-medium text-gray-700'>Image URL</label>
                            <Field
                                type='text'
                                id='image'
                                name='image'
                                placeholder='Enter product URL image ...'
                                className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            <ErrorMessage 
                                name='image' 
                                component={(() => 
                                    <div className='block text-sm font-medium text-red-700'> 
                                        {errors.image}
                                    </div>
                                )}                                
                            />
                        </div>

                        <div>
                            <label htmlFor='description' className='block text-sm font-medium text-gray-700'>Product Description</label>
                            <Field
                                type='text'
                                id='description'
                                name='description'
                                placeholder='Enter product description ...'
                                className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            <ErrorMessage 
                                name='description' 
                                component={(() => 
                                    <div className='block text-sm font-medium text-red-700'> 
                                        {errors.description}
                                    </div>
                                )}                                
                            />
                        </div>

                        <div>
                            <label htmlFor='price' className='block text-sm font-medium text-gray-700'>Product Price</label>
                            <Field
                                type='number'
                                id='price'
                                name='price'
                                placeholder='Enter product price ...'
                                className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            <ErrorMessage 
                                name='price' 
                                component={(() => 
                                    <div className='block text-sm font-medium text-red-700'> 
                                        {errors.price}
                                    </div>
                                )}                                
                            />
                        </div>

                        <div>
                            <label htmlFor='stock' className='block text-sm font-medium text-gray-700'>Product Stock</label>
                            <Field
                                type='number'
                                id='stock'
                                name='stock'
                                placeholder='Enter product stock ...'
                                className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            <ErrorMessage 
                                name='stock' 
                                component={(() => 
                                    <div className='block text-sm font-medium text-red-700'> 
                                        {errors.stock}
                                    </div>
                                )}                                
                            />
                        </div>
                    </div>
                    
                    <div>
                        <button className='mt-4 w-full py-3 bg-blue-800 hover:bg-blue-700 text-white' type='submit'>Register</button>
                        {submitedForm && <p className='block text-sm font-medium text-green-700'>Successfully registered</p>}
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Register