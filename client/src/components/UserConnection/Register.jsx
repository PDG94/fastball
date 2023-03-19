import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
import logGoogle from './../../images/google.svg';
import {registerUserAction} from './../../reduxToolkit/actions/userActions';
import {useNavigate} from 'react-router-dom';


const countries = [
    'Afghanistan',
    'Åland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Caribbean Netherlands',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Cook Islands',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czechia',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'DR Congo',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern and Antarctic Lands',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Ivory Coast',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'North Korea',
    'North Macedonia',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn Islands',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of the Congo',
    'Réunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'São Tomé and Príncipe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States Minor Outlying Islands',
    'United States Virgin Islands',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',    
  ]

const Register = () => {
    const [submitedForm, setSubmitedForm] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
            }}

            validate={ (values)=> {
                const errors = {}

                if( !values.email ){
                    errors.email = 'Please, input a email'}
                // } else if( !/^[a-zA-ZA-ÿ\s]{1,40}$/.test(values.email) ){
                //     errors.email = 'The email only can characters or spaces'
                // }

                if( !values.password){
                    errors.password = 'Please, input a password'
                } else if( /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.password) ){
                    errors.password = 'The password not is valid'
                }
                return errors
            }}

            onSubmit={ (values,{resetForm})=> {
                resetForm()
                console.log('Enviar Formulario');
                console.log(values)
                dispatch(registerUserAction(values)).then(()=> navigate('/')).catch((err)=>{})
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
                            <label htmlFor='lastName' className='block text-sm font-medium text-gray-700'>Last name</label>
                            <Field
                                type='text'n
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
                                type='text'n
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
                                defaultValue={countries[10]} 
                                className='text-sm font-medium text-gray-700 mt-2 shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'>
                                { countries.map( (country, ind) => <option key={ind} value={country}>{country}</option>)}
                            </Field>
                        </div>
                        <div>
                            <label htmlFor='city' className='block text-sm font-medium text-gray-700'>City</label>
                            <Field
                                type='text'n
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