import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Catalogue from './components/Catalogue/Catalogue';
import UserConnection from './components/UserConnection/UserConnection'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Detail from './components/Detail/Detail';
import Profile from './components/UserDashboard/profile/Profile'
import UpdateProfile from './components/UserDashboard/profile/UpdateProfile'
import Payment from './components/PasarelaStripe/PasarelaStripe'
// import RegisterProduct from './components/RegisterProduct/RegisterProduct'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartDetail from './components/Cart/CartDetails';
import Error404 from './components/Error404/Error404';
import DashBoard from './components/adminDashBoard/DashBoard'
import List from './components/adminDashBoard/pages/list/List';
import UserDashboard from './components/UserDashboard/UserDashboard'



import OrderHistory from './components/UserDashboard/orders/OrderHistory';
import OrderDetails from './components/UserDashboard/orders/OrderDetails'
import ViewReviews from './components/UserDashboard/Reviews/ViewReviews';
import ReviewDetails from './components/UserDashboard/Reviews/ReviewDetails'

import Products from './components/adminDashBoard/pages/products/Products'

import Single from './components/adminDashBoard/pages/single/Single';
import ProductDetail from './components/adminDashBoard/pages/productDetail/productDetail.jsx';
import ProductCreate from './components/adminDashBoard/pages/productCreate/productCreate';


import About from './components/About/About';
import Footer from './components/Footer/Footer';

import OrderDetail from './components/adminDashBoard/pages/ordersDetail/orderDetails'
import Orders from './components/adminDashBoard/pages/orders/Orders';
import Categories from './components/adminDashBoard/pages/categories/Categories';
const {loadUser} = require('./reduxToolkit/slices/userSlice').userActions;

function App() {
  let flag=false;
  
  const dispatch = useDispatch();

  const { email, isAdmin } = useSelector((state) => state.user);

  const token = localStorage.getItem('tokenAuth')  

  if(email)flag=true;
  
  useEffect(()=>{
     dispatch(loadUser(token));
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])
  return (
    <>
      <ToastContainer autoClose={1000} />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/catalogue' element={<Catalogue />} />
        <Route exact path='/login' element={<UserConnection />} />
        <Route exact path='/register' element={<UserConnection isLogin={false} />} />
        <Route exact path='/details/:id' element={<Detail />} />
        <Route path= '*' element= { <Error404 /> } /> 
        
        { isAdmin &&
          <>
            <Route exact path='/admin' element={<DashBoard/>}/>
            <Route exact path='/admin/users' element={<List/>}/>
            <Route exact path='/admin/users/:id' element={<Single/>}/>
            <Route exact path='/admin/products' element={<Products/>}/>
            <Route exact path='/admin/products/create' element={<ProductCreate/>}/>
            <Route exact path='/admin/products/:id' element={<ProductDetail/>}/>
            <Route exact path='/admin/orders' element={<Orders/>}/>
            <Route exact path='/admin/orders/:id' element={<OrderDetail/>}/>
            <Route exact path='/admin//categories' element={<Categories/>}/>
          </>
        }
        
        {
          flag &&
          <>
            <Route exact path='/userdashboard' element={<UserDashboard />} />          
            <Route exact path='/profile' element={<Profile />} />          
            <Route exact path='/profile/update' element={<UpdateProfile />} />
            <Route exact path='/profile/orders' element={<OrderHistory />} />
            <Route exact path='/profile/orders/:id' element={<OrderDetails />} />
            <Route exact path='/profile/reviews' element={<ViewReviews />} />
            <Route exact path='/profile/reviews/:id' element={<ReviewDetails />} />
            <Route exact path='/payment' element={<Payment />} />
            <Route path='/cartDetail' element={<CartDetail/>} /> 
          </>
        }        
      </Routes>
        <Footer></Footer>
    </>
  );
}

export default App;