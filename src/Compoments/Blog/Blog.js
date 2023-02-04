import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import Blogsection from './Blogsection';
import Details from './Details';
import './Blog.css'
import Post from './Post';
import Subscribe from '../Subscribe/Subscribe';
import Allblog from './Allblog';

const Blog = () => {
    const [blog,setBlog]=useState([])
    const navigate=useNavigate()
    const handelAllblog=()=>{
        navigate('/blogs')
    }
   useEffect(()=>{
       fetch('https://skropay-blog-backend-asadsheblu.onrender.com/news')
       .then(res=>res.json())
       .then(data=>{
          
           setBlog(data)
       })
     

   },[])
   
    return (
        <div className='container mt-5'>
            <h6 className='text-center  headline'>OUR BLOG</h6>
            <h2 className='text-center fw-bold pb-5 pt-3 ps-5 pe-5  headline-title'>We simply set the state of the code and keep track of the changes.</h2>
           
          
      {
        blog.splice(0,1).map(posts=><Post key={posts?._id} posts={posts}/>)
        

      
      }
      <div className="shop">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                     
                    {
                        blog.slice(0,4).map(bloglists=><Blogsection key={bloglists?._id} bloglists={bloglists}/>)
                    }
                        </div>
                        <Subscribe/>
                        
                        </div>
                       <div className='text-end'>
                       <button onClick={handelAllblog} className='btn btn-primary rounded m-3'>Read More Blog</button>  
                       </div>    
                         
        </div>
    );
};

export default Blog;