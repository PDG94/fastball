import React from 'react'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import './widget.scss';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

function Widget({ type }) {
    let data;


    //temporaly
    const diff= "20%";
    const percentage = 100;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "see all users",
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
                link: "View all orders",
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
                link: "See details",
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
                link: "View all earnigns",
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
                <span className="counter">{data.isMoney && "$"}{percentage}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className='right'>
                <div className="percentage positive">
                    <ExpandLessOutlinedIcon />
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget