import { Route, Routes } from 'react-router-dom';
import './App.css';
import Catalogue from './components/Catalogue/Catalogue';
import UserConnection from './components/UserConnection/UserConnection'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Detail from './components/Detail/Detail';
// import RegisterProduct from './components/RegisterProduct/RegisterProduct'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContainerRegiterPRoduct from './components/RegisterProduct/ContainerRegiterPRoduct';
import CartDetail from './components/Cart/CartDetails';
const {loadUser} = require('./reduxToolkit/slices/userSlice').userActions;

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(loadUser())
  }, [dispatch])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/login' element={<UserConnection />} />
        <Route path='/register' element={<UserConnection isLogin={false} />} />
        <Route path='/details/:id' element={<Detail />} />
        <Route path='/create' element={<ContainerRegiterPRoduct />} />
        <Route path='/cardDetail' element={<CartDetail/>} />

      </Routes>
    </>
  );
}

export default App;
