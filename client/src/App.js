import { Route, Routes } from 'react-router-dom';
import './App.css';
import Catalogue from './components/Catalogue/Catalogue';
import Login from './components/Login/Login'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='catalogue' element={<Catalogue></Catalogue>} ></Route>
        <Route path='login' element={<Login />} ></Route>
      </Routes>
    </>
  );
}

export default App;
