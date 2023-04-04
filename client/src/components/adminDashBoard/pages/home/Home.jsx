import './home.scss';
import Sidebar from './../sidebar/Sidebar';
import Widget from './../widget/Widget';
import Featured from '../featured/Featured';
import Chart from '../chart/Chart';
import Table from '../table/Table';
import { useEffect, useState } from 'react';
import {fetchOrder} from './../../../../reduxToolkit/actions/orderAction'
import { useDispatch } from 'react-redux';


function Home() {
  const [order, setOrder]=useState([])
  const [loading, setLoading]=useState(true);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchOrder()).then((res)=> setOrder(res.payload))
    
  }, [])

  const products = order.flatMap((order) => {
    if (order.Products && order.Products.length > 0) {
      return order.Products.map((product) => {
        return {
          ...product,
          createdAt: order.createdAt,
          id: order.id
        };
      });
    } else {
      return [];
    }
  });
  setTimeout(()=>{
    setLoading(false)
  },500)
  if(loading){
    return(
      <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          Loading...
        </div>
      </div>
    )
  }
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <div className='widgets'>
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earnings"/>
          <Widget type="balance"/>
        </div>
        <div className='charts'>
          <Featured/>
          <Chart aspect ={2/1} title ={'Last 6 months (Revenue)'}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest transactions</div>
          <Table products={products}/>
        </div>
      </div>
    </div>
  )
}

export default Home