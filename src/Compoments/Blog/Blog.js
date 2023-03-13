import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';

import './Blog.css'
import Post from './Post';


const Blog = () => {
    const [blog,setBlog]=useState([])
    const navigate=useNavigate()
    const handelAllblog=()=>{
        navigate('/blogs')
    }
   useEffect(()=>{
       fetch('http://localhost:5000/news')
       .then(res=>res.json())
       .then(data=>{
          
           setBlog(data)
       })
     

   },[])
   
    return (
        <div className='container mt-5'>
             <h6 className='text-center text-danger'>Events</h6>
          <h1 className='text-center fw-bold p-3'>POPULAR EVENT</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
          
      {
        blog.splice(0,6).map(posts=><Post key={posts?._id} posts={posts}/>)
        

      
        
      }
      </div>
      
                       <div className='text-end'>
                       <button onClick={handelAllblog} className='btn btn-primary rounded m-3'>Read More Blog</button>  
                       </div>    
                         
        </div>
    );
};

export default Blog;