import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {logOut} from './../../Auth/firebase';
import logo1 from "../Images/fastball.png";
import { useEffect, useRef, useState } from "react";
import {logoutUserAction} from '../../reduxToolkit/actions/userActions'
const Navbar = ()=> {
  const user = useSelector((state)=> state.user) //Para comprobar si hay usaurio logeado
  const [showMenu, setShowMenu] = useState(false); //Nuestro estado del menu
  const [perfil,setPerfil]=useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const toggleMenu = () => {
    setShowMenu(!showMenu); //Para poder desplegar nuestro menu
  }
  const logOutt=async()=>{
    await logOut();
    dispatch(logoutUserAction());
    setShowMenu(false);
    navigate('/')
  }
  const menuRef = useRef(null);

  useEffect(() => {
    if(user.name){
        setPerfil(true);
      }
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) { //Para poder cerrar el dropdown cuando demos click en otra parte
        setShowMenu(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick); 

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [menuRef,user,perfil]);
    return(
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
        </div>
        <div className="block lg:hidden">
            <button id='boton' className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div className="text-sm lg:flex-grow">
            <Link to="/">
                <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    <img className='logo-1' src={logo1} alt="cartIcon" width="55" />
                </div>
            </Link>
            <div className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4 font-bold absolute left-40">
                <button className='btn btn-primary rounded-lg'>
                    <Link to="/">
                        Home
                    </Link>
                </button>
                <button className='btn btn-primary rounded-lg'>
                    <Link to="/catalogue">
                        Catalogue
                    </Link>
                </button>
            </div>
            {
            user && user.name?
            <div className=" lg:inline-block  mt-0  absolute right-20 rounded-xl m-2 shadow-sm" ref={menuRef}>
            <div className="relative">
            <button onClick={toggleMenu} className="flex border text-sm rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out shadow transform ">
            <img className="h-11 w-11 rounded-full border-gray" src={user.profilePic} alt="Profile" />
            </button>
                { showMenu ? (
                    <div className="absolute right-2 mt-2 border-2  py-2 w-36 bg-white rounded-lg shadow-xl " style={{zIndex: "999"}}>
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Link Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                    <div className="border-t border-gray-100"></div>
                    <button onClick={logOutt} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
                    </div>
                ) : null }
            </div>
            </div>
            :<div className="border lg:inline-block  lg:mt-0 absolute right-20  rounded-xl m-2 shadow-sm">
                <Link to='/login'>
                <button className="px-4 py-2 rounded-l-xl text-white m-0 bg-blue-600 hover:bg-blue-500 transition">
                    Sign In
                </button>
                </Link>    
                <Link to='/register'>
                <button className="px-4 py-2 rounded-r-xl bg-neutral-50 hover:bg-neutral-100 transition">Register
                </button>
                </Link>
            </div>
            }
            
        </div>
    </nav>
    )
}

export default Navbar