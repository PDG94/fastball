import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='top'><spam className="logo">Admin</spam></div>
            <hr />
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span> <Link to={'/admin'}>Dashboard</Link> </span>
                    </li>
                    <p className='title'>LISTS</p>

                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span ><Link to={'/admin/users'}>Users</Link></span>
                    </li>
                    <li>
                        <StoreMallDirectoryOutlinedIcon className='icon'/>
                        <span> <Link to={'/admin/products'}>Products</Link> </span>
                    </li>
                    <li>
                        <CreditCardIcon className='icon'/>
                        <span> <Link to={'/admin/orders'}>Orders</Link> </span>
                    </li>
                    <p className='title'>USEFUL</p>

                    <li>
                        <AssessmentOutlinedIcon className='icon'/>
                        <span> <Link to={'/admin/categories'}>Categories</Link> </span>
                    </li>
                    <li>
                        <DiscountOutlinedIcon className='icon'/>
                        <span>Discounts</span>
                    </li>
                    <li>
                        <NotificationsOutlinedIcon className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className='title'>USER</p>

                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>
                        <span>Profile</span></li>

                </ul>
            </div>
            <div className='bottom'>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar