import './home.scss';
import Sidebar from './../sidebar/Sidebar';
import Widget from './../widget/Widget';
import Featured from '../featured/Featured';
import Chart from '../chart/Chart';
import Table from '../table/Table';
import { useEffect, useState } from 'react';
import { fetchOrder } from './../../../../reduxToolkit/actions/orderAction'
import { useDispatch } from 'react-redux';
import {getAllUsers} from './../../../../reduxToolkit/actions/userActions'
import Loading from '../loading/Loading';


function Home() {
  const [order, setOrder] = useState([])
  const [loading, setLoading] = useState(true);
  const [users, setusers] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrder()).then((res) => setOrder(res.payload))
    dispatch(getAllUsers()).then((res)=> setusers(res.payload));
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

  const ordersByMonth = order.reduce((acc, order) => {
    // Obtener el mes de la fecha de creación de la orden
    const month = new Date(order.createdAt).toLocaleString('default', { month: 'short' });
    // Incrementar el contador del mes correspondiente
    if (acc[month]) {
      acc[month] += 1;
    } else {
      acc[month] = 1;
    }
    return acc;
  }, {});

  // Crear un array de objetos con los datos para el gráfico
  const data = Object.keys(ordersByMonth).map(month => {
    return {
      name: month,
      total: ordersByMonth[month]
    }
  });

// Detalle de cifras 
  function calcularMontoTotalUltimoMes(orders) {
    const fechaActual = new Date();
    const ultimoMes = fechaActual.getMonth();
    const ultimoAnio = fechaActual.getFullYear();

    let sumaTotalUltimoMes = 0;
    let sumaTotalMesAnterior = 0;

    orders.forEach(order => {
      const fechaCreacion = new Date(order.createdAt);
      const mesCreacion = fechaCreacion.getMonth();
      const anioCreacion = fechaCreacion.getFullYear();
      const totalAmount = order.totalAmount;

      if (mesCreacion === ultimoMes && anioCreacion === ultimoAnio) {
        sumaTotalUltimoMes += totalAmount;
      } else if (mesCreacion === ultimoMes - 1 && anioCreacion === ultimoAnio) {
        sumaTotalMesAnterior += totalAmount;
      }
    });

    const diferencia = sumaTotalUltimoMes - sumaTotalMesAnterior;
    const porcentajeCrecimientoDecrecimiento = (diferencia / sumaTotalMesAnterior) * 100;

    return {
      sumaTotalUltimoMes,
      sumaTotalMesAnterior,
      diferencia,
      porcentajeCrecimientoDecrecimiento
    };
  }
  const total = calcularMontoTotalUltimoMes(order);

  //Total de ordenes
  function sumarTotalOrdenes(orders) {
    let total = 0;
  
    // Iterar a través de la lista de órdenes
    for (let i = 0; i < orders.length; i++) {
      total += 1
    }
  
    return total;
  }

  const totalOrders = sumarTotalOrdenes(order)

  function sumarTotalUsers(users) {
    let total = 0;
  
    // Iterar a través de la lista de órdenes
    for (let i = 0; i < users.length; i++) {
      total += 1
    }
  
    return total;
  }

  const totalUsers = sumarTotalUsers(users)

  //Loading
  setTimeout(() => {
    setLoading(false)
  }, 500)
  if (loading) {
    return (
      <div className='home'>
        <Sidebar />
        <div className="loadingContainer">
            <Loading/>
        </div>
      </div>
    )
  }
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <div className='widgets'>
          <Widget type="user" users={totalUsers}/>
          <Widget type="order" order={totalOrders}/>
          <Widget type="earnings" earnings ={total.sumaTotalUltimoMes}/>
          <Widget type="balance" balance={total.diferencia}/>
        </div>
        <div className='charts'>
          <Featured total={total} />
          <Chart aspect={2 / 1} title={'Last 6 months (Revenue)'} data={data} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest transactions</div>
          <Table products={products} />
        </div>
      </div>
    </div>
  )
}

export default Home