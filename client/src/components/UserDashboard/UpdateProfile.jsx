// import { uploadFile } from "../../Firebase/config";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

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

export default function UpdateInfoUser() {
  const navigate = useNavigate();
  const customerEmail = useSelector((state) => state.user.email);
  const customerName = useSelector((state) => state.user.name);
  const token = localStorage.getItem("token");
  const userID = useSelector((state) => state.user._id);

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    address: "",
    contry: "",
    city: "",
  });

//   const [file, setFile] = useState("");

  function handlerChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const updateValidator = async () => {
    const finalForm = {};
    if (form.name.length > 0) {
      finalForm.name = form.name;
    }
    if (form.lastName.length > 0) {
      finalForm.lastName = form.lastName;
    }
    if (form.address.length > 0) {
      finalForm.address = form.address;
    }
    if (form.contry.length > 0) {
        finalForm.contry = form.contry;
    }
    if (form.city.length > 0) {
        finalForm.city = form.city;
    }   

    // if (file && !isObjectEmpty(file)) {
    //   finalForm.profilepic = await uploadFile(file, userID);
    // }
    return finalForm;
  };

//   const isObjectEmpty = (objectName) => {
//     return (
//       objectName &&
//       Object.keys(objectName).length === 0 &&
//       objectName.constructor === Object
//     );
//   };

//   function changing(e) {
//     var pdrs = document.getElementById("file-up").files[0].name;
//     document.getElementById("infoUp").innerHTML = pdrs;
//     setFile(e.target.files[0]);
//     setForm({
//       ...form,
//       filename: e.target.files[0].name,
//     });
//   }

  const submitHandler = async (event) => {
    event.preventDefault();

    const info = await updateValidator();

    try{

      await axios.patch(
        `/users/${userID}`,
        info,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      await axios.post(
        "/dato",
        {
          name: customerName,
          email: customerEmail,
        }
      );

      toast.success("User update successfully!");
      navigate("/profile");

    } catch (error) {
      console.log(error);
    }    
  };

  return (
    <div className='mx-auto min-height-full flex'>
    <div className='hidden lg:block relative flex-1 h-full'>
        <img src={'https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,f_auto,h_710,q_auto,w_700/v1679507442/fastball/system/register_gpmyxn.webp'} alt="loginImage" className='w-[99%] h-full' />
    </div>
    <div className='flex-1 flex flex-col px-4 sm:px-6 lg:flex-none mt-8'>
        <div className='mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]'>
            <div className='flex items-center'>
                <div className='text-center lg:text-left'>
                    {/* <img src={ImgLogo} alt="LogoFastBall" className='bg-blue-700 h-12 w-auto m-auto lg:m-0' />                           */}
                </div>

                      <div className="">
                        <form className="" onSubmit={submitHandler}>
                          <Link to={"/profile"}>
                            <button className="">Back</button>
                          </Link>
                          <div className="">
                            <h1 className="">Update User</h1>

                            <div className="">
                              <span className="">Update Name</span>
                              <label className="">
                              </label>
                              <input
                                className=""
                                type="text"
                                placeholder="New Name"
                                value={form.name}
                                name="name"
                                onChange={(e) => handlerChange(e)}
                              />
                            </div>

                            <div className="">
                              <span className="">Update Surname</span>
                              <label className="">
                              </label>
                              <input
                                className=""
                                type="text"
                                placeholder="New Surname"
                                value={form.lastName}
                                name="lastName"
                                onChange={(e) => handlerChange(e)}
                              />
                            </div>

                            <div className="">
                              <span className="">Update Country</span>
                              <label className="">
                              </label>
                              <select name="contry" onChange={(e) => handlerChange(e)}>
                                {
                                  countries.map((e, i)=>{
                                    return(
                                        <option value={e} key={i}>{e}</option>
                                    )                            
                                })
                                }                                
                              </select>
                            </div>

                            <div className="">
                              <span className="">Update City</span>
                              <label className="">
                              </label>
                              <input
                                className=""
                                type="text"
                                placeholder="New City"
                                value={form.city}
                                name="city"
                                onChange={(e) => handlerChange(e)}
                              />
                            </div>         

                            <div className="">
                              <span className="">Update Address</span>
                              <label className="">
                              </label>
                              <input
                                className=""
                                type="text"
                                placeholder="New Address"
                                value={form.address}
                                name="address"
                                onChange={(e) => handlerChange(e)}
                              />
                            </div>   



                            <div className="">
                              <span className="">Update profile image</span>
                              {/* <input
                                id="file-up"
                                onChange={(e) => changing(e)}
                                type="file"
                                style={{ display: "none" }}
                              />
                              <div id="infoUp"></div> */}
                            </div>

                            <button type="submit" className="">
                              SUBMIT
                            </button>
                          </div>
                        </form>
                      </div>
                 </div>
                </div>
            </div>
        </div>
  );
}