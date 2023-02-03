
import './App.css';

import Home from './Compoments/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Details from './Compoments/Blog/Details';
import Postroute from './Compoments/Blog/Postroute';
import Allblog from './Compoments/Blog/Allblog';

function App() {
  return (
    <div>
  
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/news/:Blogid' element={<Details />}></Route>
        <Route path='/post' element={<Postroute/>}></Route>
        <Route path='/blogs' element={<Allblog/>}></Route>
       </Routes>
       
    </div>
  );
}

export default App;
