import React from 'react'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import './widget.scss';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import { Link, NavLink } from 'react-router-dom';

function Widget({ type, earnings, users, order, balance}) {
    let data;


    //temporaly
    const diff= "";
   

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: <NavLink to={'/admin/users'}>See all users</NavLink>,
                icon: (
                    <PersonOutlineOutlinedIcon className='icon' style={{
                        color : "crimson",
                        backgroundColor : "rgba(255,0,0,0.2)"
                    }}/>
                )
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: <NavLink to={'/admin/orders'}>View all orders</NavLink>,
                icon: (
                    <ShoppingCartOutlinedIcon className='icon' style={{
                        color : "goldenrod",
                        backgroundColor : "rgba(218,165,32,0.2)"
                    }}/>
                )
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                icon: (
                    <BalanceOutlinedIcon className='icon' style={{
                        color : "green",
                        backgroundColor : "rgba(0,128,0,0.2)"
                    }}/>
                )
            };
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                icon: (
                    <PaidOutlinedIcon className='icon' style={{
                        color : "purple",
                        backgroundColor : "rgba(128,0,128,0.2)"
                    }}/>
                )
            };
            break;
    }


    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{type === "earnings" ? earnings : type === "user" ? users : type === "order" ? order : type === "balance" ? balance : null}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className='right'>
                {/* <div className="percentage positive">
                    <ExpandLessOutlinedIcon />
                    {diff}
                </div> */}
                {data.icon}
            </div>
        </div>
    )
}

export default Widget