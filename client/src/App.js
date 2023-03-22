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
import Error404 from './components/Error404/Error404';
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
        <Route exact path='/' element={<Home />} />
        <Route exact path='/catalogue' element={<Catalogue />} />
        <Route exact path='/login' element={<UserConnection />} />
        <Route exact path='/register' element={<UserConnection isLogin={false} />} />
        <Route exact path='/details/:id' element={<Detail />} />
        <Route exact path='/create' element={<ContainerRegiterPRoduct />} />
        <Route path= '*' element= { <Error404 /> } /> 
      </Routes>
    </>
  );
}

export default App;
