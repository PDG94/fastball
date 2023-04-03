import React from 'react'
import './sidebar.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useSelector } from "react-redux";

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

                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span>Info</span>
                    </li>
                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>
                        <span>Edit Info</span>
                    </li>

                    <p className='title'>ORDERS & REVIEWS</p>

                    <li>
                        <CreditCardIcon className='icon'/>
                        <span>View Orders</span>
                    </li>
                    <li>
                        <StoreMallDirectoryOutlinedIcon className='icon'/>
                        <span>View Reviews</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar