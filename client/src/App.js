import { Route, Routes } from 'react-router-dom';
import './App.css';
import Catalogue from './components/Catalogue/Catalogue';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='catalogue' element={<Catalogue></Catalogue>} ></Route>
    </Routes>
    </>
  );
}

export default App;
