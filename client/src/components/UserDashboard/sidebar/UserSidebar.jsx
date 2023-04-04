import React from 'react'
import './sidebar.scss'
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
        <div className='sidebar'>
            <div className='top'><spam className="logo">{name}</spam></div>
            <hr />
            <div className='center'>
                <ul>                    
                    <p className='title'>PROFILE</p>

                    <Link to="/profile">
                    <li>                        
                        <PersonOutlineOutlinedIcon className='icon' />                        
                        <span>Info</span>                        
                    </li>
                    </Link>

                    <Link to="/profile/update">
                    <li>                        
                        <AccountCircleOutlinedIcon className='icon'/>                        
                        <span>Edit Info</span>
                        
                    </li>
                    </Link>
                    
                    <p className='title'>ORDERS & REVIEWS</p>

                    <Link to="/profile/orders">
                    <li>
                        <CreditCardIcon className='icon'/>
                        <span>View Orders</span>
                    </li>
                    </Link>

                    <Link to="/profile/reviews">
                    <li>
                        <StoreMallDirectoryOutlinedIcon className='icon'/>
                        <span>View Reviews</span>
                    </li>
                    </Link>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar