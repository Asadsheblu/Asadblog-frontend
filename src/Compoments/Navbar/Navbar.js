import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      
      <nav className="navbar left navbar-expand-lg navbar-dark shadow fixed" id="mynav">
      <div className="container  navbars ">
          <Link className="text-decoration-none" to="/"><span class="text-primary fw-bold headline text-warning fs-1 logo">
            Event</span></Link>
              
          <button id="tog" className="navbar-toggler me-3 bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <Link className="nav-link active text-dark fw-bold" aria-current="page" to="/">HOME</Link>
          </li>
            <li className="nav-item">
     <Link className="nav-link  text-dark fw-bold" aria-current="page" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
     <Link className="nav-link  text-dark fw-bold" aria-current="page" to="/speaker">SPEAKER</Link>
            </li>
             
           <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" aria-current="page" to="/post">POST</Link>
            </li>
              
          </ul>

          </div>
      </div>

     
  </nav>
    );
};

export default Navbar;