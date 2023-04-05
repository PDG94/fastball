import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../sidebar/UserSidebar";
import "./homeProfile.scss";
import {
  getUserById,
  editUser,
} from "../../../reduxToolkit/actions/userActions";

const countries = [
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Caribbean Netherlands",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "DR Congo",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern and Antarctic Lands",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "North Korea",
  "North Macedonia",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn Islands",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of the Congo",
  "Réunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "São Tomé and Príncipe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States Minor Outlying Islands",
  "United States Virgin Islands",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const initialForm = {};

export default function UpdateInfoUser() {
  const dispatch = useDispatch();
  let [changes, setChanges] = useState(initialForm);

  const reference = useRef();
  const [image, setImage] = useState(null);
  const [prevImage, setprevImage] = useState("");

  const navigate = useNavigate();
  const customerEmail = useSelector((state) => state.user.email);
  const customerName = useSelector((state) => state.user.name);
  const userID = useSelector((state) => state.user._id);

  const uuser = useSelector((state) => state.user.singleUser);

  useEffect(()=>{
    dispatch(getUserById(userID))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setChanges({
      ...changes,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("llegue a submit 1", uuser);
    e.preventDefault();
    const userr = {
      // email: uuser.email,
      isAdmin: uuser.isAdmin,
      id: userID,
      changes: changes,
    };
    console.log("llegue a submit 2", userr);
    dispatch(editUser(userr)).then((res) =>
      toast.success("User edited successfully!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    );
    console.log("llegue a submit 3", userr);

    await axios.post("/data", {
      name: customerName,
      email: customerEmail,
    });
    console.log("llegue a submit 4")
    navigate("/profile")
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setprevImage(reader.result.toString());
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  const uploadFile = () => {
    reference.current.click();
  };

  const handleChangeUserImage = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      console.log("");
      setImage(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div>
      <div className="homee">
        <Sidebar />
        <div className="homeContainerr">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2">
              <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Update My Info
                  </h3>

                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Update Details and informations about user.
                  </p>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <input
                          className=""
                          type="text"
                          placeholder={uuser.name}
                          value={changes.name}
                          name="name"
                          onChange={(e) => handleChange(e)}
                        />
                      </dd>
                    </div>

                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Surname
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <input
                          className=""
                          type="text"
                          placeholder={uuser.lastName}
                          value={changes.lastName}
                          name="lastName"
                          onChange={(e) => handleChange(e)}
                        />
                      </dd>
                    </div>

                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <input
                          className=""
                          type="text"
                          placeholder={uuser.address}
                          value={changes.address}
                          name="address"
                          onChange={(e) => handleChange(e)}
                        />
                      </dd>
                    </div>

                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        City
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <input
                          className=""
                          type="text"
                          placeholder={uuser.city}
                          value={changes.city}
                          name="city"
                          onChange={(e) => handleChange(e)}
                        />
                      </dd>
                    </div>

                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Country
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <select
                          name="contry"
                          onChange={(e) => handleChange(e)}
                          className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          {countries.map((e, i) => {
                            return (
                              <option value={e} key={i}>
                                {e}
                              </option>
                            );
                          })}
                        </select>
                      </dd>
                    </div>

                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Profile Picture
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          ref={reference}
                          onChange={handleChangeUserImage}
                        />
                        <button
                          type="submit"
                          className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-300 rounded"
                          onClick={uploadFile}
                        >
                          Upload new Profile Picture
                        </button>
                      </dd>
                    </div>
                  </dl>
                  <br />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>

              {image && (
                <img
                  src={prevImage}
                  alt="profileImg"
                  className="p-2 border border-solid"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
