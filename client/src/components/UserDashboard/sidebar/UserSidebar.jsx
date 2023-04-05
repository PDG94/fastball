import React from 'react'
import './sidebarUser.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";

function Sidebar() {
    const { name } =
    useSelector((state) => state.user);
    return (
        <div className='sidebarr'>
            <div className='topp'><spam className="logoo">{name}</spam></div>
            <hr />
            <div className='centerr'>
                <ul>                    
                    <p className='titlee'>PROFILE</p>

                    <Link to="/profile">
                    <li>                        
                        <PersonOutlineOutlinedIcon className='iconn' />                        
                        <span>Info</span>                        
                    </li>
                    </Link>

                    <Link to="/profile/update">
                    <li>                        
                        <AccountCircleOutlinedIcon className='iconn'/>                        
                        <span>Edit Info</span>
                        
                    </li>
                    </Link>
                    
                    <p className='titlee'>ORDERS & REVIEWS</p>

                    <Link to="/profile/orders">
                    <li>
                        <CreditCardIcon className='iconn'/>
                        <span>View Orders</span>
                    </li>
                    </Link>

                    <Link to="/profile/reviews">
                    <li>
                        <StoreMallDirectoryOutlinedIcon className='iconn'/>
                        <span>View Reviews</span>
                    </li>
                    </Link>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar