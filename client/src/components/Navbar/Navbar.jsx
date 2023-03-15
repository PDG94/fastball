import { useNavigate } from "react-router-dom";
import { auth } from "../../components/Firebase/config";
import { toast } from "react-toastify";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "../index";
import logo1 from "../Images/atleta.ico"
import logo2 from "../Images/cart.ico"
import logo3 from "../Images/user.ico"

const Navbar = ()=> {
    const navigate = useNavigate();
    
    
    const handleRefresh = () => {
        //dispatch(getProducts());
      };
    return(
        <div>
            <div>
                <Link to="/">
                    <div>
                    <img src={logo1} alt="atletaIcon" width="30" />
                    </div>
                </Link>
                
                <Link to="/Services" onClick={(e) => handleRefresh(e)}>
                    CATALOGUE
                </Link>
            </div>

            <div>
                <Link>
                    <div>
                    <img src={logo2} alt="cartIcon" width="30" />
                    </div>
                </Link>
                
                <div>
                    <img src={logo3} alt="userIcon" width="30" />
                </div>
            </div>
        </div>
    )
}

export default Navbar