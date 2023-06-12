
import './App.css';


import { Route, Routes } from 'react-router-dom';
import Details from './Compoments/Blog/Details';
import Postroute from './Compoments/Blog/Postroute';
import Allblog from './Compoments/Blog/Allblog';
import SIdebar from './Compoments/Dashboard/SIdebar';
import Navbar from './Compoments/Navbar/Navbar';
import Login from './Compoments/Login/Login';
import Home from './Compoments/Login/v2/Componnets/Home/Home';
import Footer from './Compoments/Login/v2/Componnets/Home/Banner/Footer/Footer';
import Speakeradd from './Compoments/Blog/Speakeradd';
import Speaker from './Compoments/Blog/Speaker';
import Allspeaker from './Compoments/Blog/Allspeaker';
import Blog from './Compoments/Blog/Delete/Blog';
import Notfound from './Compoments/Dashboard/Notfound';

function App() {
  return (
    <div>
<Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/news/:Blogid' element={<Details />}></Route>
        <Route path='/post' element={<Postroute/>}></Route>
        <Route path='/speakeradd' element={<Speakeradd/>}></Route>
        <Route path='/sidebar' element={<SIdebar/>}></Route>
        <Route path='/dashBlog' element={<Blog/>}></Route>
        <Route path='/blogs' element={<Allblog/>}></Route>
        <Route path='/speaker' element={<Speaker/>}></Route>
        <Route path='*' element={<Notfound/>}/>
       </Routes>
    <Footer/>   
    </div>
  );
}

export default App;
