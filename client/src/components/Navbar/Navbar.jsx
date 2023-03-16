import { Link } from "react-router-dom";
import logo1 from "../Images/fastball.png"
import logo2 from "../Images/cart.ico"
import logo3 from "../Images/user.ico"

const Navbar = ()=> {
    return(
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
    </div>
    <div className="block lg:hidden">
    <button id='boton' className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
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
      
      <Link to="/cart">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 absolute right-20">
                     <img src={logo2} alt="cartIcon" width="30" />
                     </div>
                </Link>
                
                <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 absolute right-5">
                     <img src={logo3} alt="userIcon" width="30" />
                 </div>
    </div>
  
</nav>
    )
}

export default Navbar