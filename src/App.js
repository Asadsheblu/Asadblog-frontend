import logo from './logo.svg';
import './App.css';
import Navbar from './Compoments/Navbar/Navbar';
import Home from './Compoments/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Details from './Compoments/Blog/Details';
import Postroute from './Compoments/Blog/Postroute';

function App() {
  return (
    <div>
  
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog/:blogId' element={<Details />}></Route>
        <Route path='/news' element={<Postroute/>}></Route>
       </Routes>
       
    </div>
  );
}

export default App;
