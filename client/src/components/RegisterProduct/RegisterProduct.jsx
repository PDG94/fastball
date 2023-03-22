import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { fetchCreateProduct} from "../../reduxToolkit/actions/productAction"
import { fetchCategory } from "../../reduxToolkit/actions/categoryAction";
import { useNavigate } from 'react-router';
import { uploadImage } from '../../utils';
const Register = ({changeCurrentImage}) => {
    const [submitedForm, setSubmitedForm] = useState(false)
    const { allCategories } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    const navigate = useNavigate
    useEffect(()=>{
        dispatch(fetchCategory())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Formik
            initialValues={{
                name:'', 
                image:'', 
                description:'', 
                price:'', 
                stock:'',
                categories:'',
            }}

            validate={ (values)=> {
                const errors = {}

                if( !values.name ){
                    errors.name = 'Please, input a name'
                }

                if( !values.image ){
                    errors.image = 'Please, input a image'
                }

                changeCurrentImage(values.image)
                
                if( !values.description ){
                    errors.description = 'Please, input a description'
                }

                if( !values.price ){
                    errors.price = 'Please, input a price'
                }

                if( !values.stock ){
                    errors.stock = 'Please, input a stock'
                }

                // if( !values.categories ){
                //     errors.categories = 'Please, select a category'
                // }
                return errors
            }}

            onSubmit={ (values,{resetForm})=> {
                resetForm()
                console.log('Enviar Formulario');
                setSubmitedForm(true)
                uploadImage(values.image)
                    .then( newURL => {
                        values = { ...values, image: newURL}
                        dispatch(fetchCreateProduct(values)).then(()=> console.log("entró al .then"), navigate('/catalogue'));
                        console.log('anduvooooooooooooooooooooooooo');
                        setTimeout( ()=> setSubmitedForm(false), 2000)
                    })
                return
            }}
        >
            {( {errors} ) => (
                <Form className='space-y-1'>
                    <div className='grid grid-cols-1 lg:gap-3 pt-8'>
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

                        <div>
                            <label htmlFor='categories' className='block text-sm font-medium text-gray-700'>Product Category</label>
                            <Field 
                                as='select'
                                type='text'
                                name="categories" 
                                id="categories"
                                className='text-sm font-medium text-gray-700 mt-2 shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'>
                                <option value='7aa8e1e3-a08a-40bf-8216-afd26c525259' >FUTBOL</option>
                                { allCategories && allCategories?.map((cat, ind)=> <option key={ind} value={cat.id} >{cat.name}</option>)}
                            </Field>
                            <ErrorMessage 
                                name='categories' 
                                component={(() => 
                                    <div className='block text-sm font-medium text-red-700'> 
                                        {errors.categories}
                                    </div>
                                )}                                
                            />
                        </div>

                    </div>
                    
                    <div className='px-8'>
                        <button className='mt-4 w-full py-3 bg-blue-800 hover:bg-blue-700 text-white' type='submit'>Register</button>
                        {submitedForm && <p className='block text-sm font-medium text-green-700'>Successfully registered</p>}
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Register