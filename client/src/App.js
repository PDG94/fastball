import { Route, Routes } from 'react-router-dom';
import './App.css';
import Catalogue from './components/Catalogue/Catalogue';
import UserConnection from './components/UserConnection/UserConnection'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='catalogue' element={<Catalogue />} />
        <Route path='login' element={<UserConnection />} />
        <Route path='register' element={<UserConnection isLogin={false} />} />
      </Routes>
    </>
  );
}

export default App;
