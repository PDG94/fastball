import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import {fetchOneOrder} from './../../../../reduxToolkit/actions/orderAction';
import OrderDetail from './../../../UserDashboard/OrderDetails'
import Sidebar from '../sidebar/Sidebar';
function OrderDetails() {
    const {id} = useParams();
    const dispatch=useDispatch()
    const [order, setOrder]=useState({})
    useEffect(()=>{
        dispatch(fetchOneOrder(id)).then((res)=> setOrder(res.payload.data));
    }, [])
    console.log({order})
  return (
    <div>
        <Sidebar/>
        <div>
            <OrderDetail order={order}/>
        </div>
    </div>
  )
}

export default OrderDetails