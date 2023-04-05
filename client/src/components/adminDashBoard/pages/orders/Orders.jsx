import React from 'react'
import { toast } from "react-toastify";
import { useEffect, useState } from 'react';
import {fetchOrder} from './../../../../reduxToolkit/actions/orderAction'
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Sidebar from '../sidebar/Sidebar';
import DataTable from '../dataTable/DataTable';

function Orders() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const order = useSelector((state)=>state.order.allOrders)
    const [filter, setFilter] = useState('');

    useEffect(()=>{
        dispatch(fetchOrder())
    },[])
    
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'orderNumber', headerName: 'Order Number', width: 350 },
        { field: 'totalAmount', headerName: 'Total Amount', width: 100 },
        { field: 'UserId', headerName: 'Id user', width: 200 },

    ];

    const actionColumn = [{
        field: "action", headerName: "Action", width: 100, renderCell: (row) => {
            return (
                <div className='cellAction'>
                    <div className="viewButton" > <Link to={`/admin/orders/${row.id}`}>View</Link> </div>
                    
                </div>
            )
        }
    }]
    const filteredRows = order && order.filter((row) =>
        Object.values(row).some(
            (value) =>
                value !== null &&
                value.toString().toLowerCase().includes(filter.toLowerCase())
        )
    );
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className='products'>
            <Sidebar />
            <div className="productsContainer">
                <div className='createProduct'><NavLink className='create' to={'/admin/products/create'}>Create product</NavLink></div>
                <DataTable filteredRows={filteredRows} users={order} columns={columns} actionColumn={actionColumn} filter={filter} handleFilterChange={handleFilterChange} />
            </div>
        </div>
    )
}

export default Orders