import './single.scss';
import Sidebar from '../sidebar/Sidebar'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserById, editUser } from '../../../../reduxToolkit/actions/userActions';
import { fetchOrderById } from '../../../../reduxToolkit/actions/orderAction';
import { useState } from 'react';
import Chart from '../chart/Chart';
import List from '../table/Table';
import { toast } from "react-toastify";
import Loading from '../loading/Loading';

const initialForm = {
}

function Single() {
  let { id } = useParams();
  const dispatch = useDispatch()
  let [user, setUser] = useState([]);
  const [orders, setOrders] = useState([]);
  let [changes, setChanges] = useState(initialForm);

  useEffect(() => {
    dispatch(getUserById(id)).then((response) => { setUser(response.payload) });
    dispatch(fetchOrderById(id)).then((response) => setOrders(response.payload));

  }, [])

  //Editar usuario
  const handleSubmit = (e) => {
    e.preventDefault();
    const userr = {
      email : user.email,
      isAdmin : user.isAdmin,
      id : id,
      changes : changes
    }
    dispatch(editUser(userr)).then((res)=> toast.success("User edited successfully!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  }))
  }



  const handleChange = (e) => {
    e.preventDefault();
    const {name, value } = e.target;
    
    setChanges({
      ...changes,
      [name]: value
    })
  }



  //Sacamos los productos de las ordenes 
  const products = orders.flatMap((order) => {
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


  const ordersByMonth = orders.reduce((acc, order) => {
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
  
  if (!user.name) {
    return (<div className='single'>
    <Sidebar />
    <div className="singleContainer">
      <Loading/>
    </div>
  </div>)
  }
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <button className='editButton' onClick={handleSubmit}>Edit</button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={user.profilePic} alt="photo" className='itemImage' />

              <div className="details">
                <form action="" >
                  <h1 className='itemTitle'>{user.name}</h1>
                  <div className="detailItem">
                    <span className='itemKey'>Last Name: </span>
                    <input type="text"
                      name = "lastName"
                      placeholder={user.lastName}
                      value={changes.lastName} 
                      onChange={handleChange}                    
                      />
                  </div>
                  <div className="detailItem">
                    <span className='itemKey'>Email: : </span>
                    <span>{user.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className='itemKey'>Contry: </span>
                    <input type="text"
                    value={changes.contry}
                    name='contry'
                    placeholder={user.contry}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="detailItem">
                    <span className='itemKey'>City: </span>
                    <input type="text" 
                    value={changes.city}
                    name='city'
                    placeholder={user.city}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="detailItem">
                    <span className='itemKey'>Address: </span>
                    <input type="text" 
                    value={changes.address} 
                    name='address'
                    placeholder={user.address}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="detailItem">
                    <span className='itemKey'>Is active: </span>
                    <input type="text"
                    name ={"active"}
                    value={changes.active}
                    placeholder={user.active ? "true": "false"}
                    onChange={handleChange}
                    />
                  </div><div className="detailItem">
                    <span className='itemKey'>Is admin: </span>
                    <input type="text"
                    name ={"isAdmin"}
                    value={changes.isAdmin}
                    placeholder={user.isAdmin ? "true": "false"}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="detailItem">
                    <span className='itemKey'>Created at: </span>
                    <span>{user.createdAt}</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={1.5 / 1} title='User Spending (Last 6 months)' data={data} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last products purchased</h1>
          <List products={products} customer={user} />
        </div>
      </div>
    </div>
  )
}

export default Single