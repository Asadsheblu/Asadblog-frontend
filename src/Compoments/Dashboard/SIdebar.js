import React from 'react';
import { Link } from 'react-router-dom';
import './Siderbar.css'
const SIdebar = () => {
    
    return (
       <>
       
<header>
   <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <Link 
          to=""
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <span>Main dashboard</span>
        </Link>
        <Link 
          to="/post"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <span>Create Post</span>
        </Link>
        <Link 
          to="/dashBlog"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <span>Admin Blog</span>
        </Link>
      
      </div>
    </div>
  </nav>
 


</header>



<main>
  <div className="container pt-4"></div>
</main>
 
</>
    );
};

export default SIdebar;