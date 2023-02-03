import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blogsection.css'
const Allblog = () => {
    const navigate=useNavigate()
    const blogdetails=(id)=>{
      navigate(`/news/${id}`)
    }
    const [blog,setBlog]=useState([])
  
   useEffect(()=>{
       fetch('http://localhost:5000/news')
       .then(res=>res.json())
       .then(data=>{
           setBlog(data)
       })
     

   },[])
    return (
        <div className='container pt-5 pb-3'>
          
         
            <div className='row'>
            {
                blog.map(blogs=>
                   <div className='col-md-4 g-4 pb-3'>
                        <img className='thumbail-blog' src={blogs?.img}></img>
                        <h2 class="card-title pe-5 pt-2 pb-2">{blogs?.name.slice(0,40)}...</h2>
        <p class="card-text pe-4">{blogs?.details.slice(0,460)}...</p>
        <button onClick={()=>blogdetails(blogs?._id)} className='btn btn-primary rounded-pill ms-auto'>Read More</button>
                   </div>
                )
            }
            
       </div>
        
        </div>
    );
};

export default Allblog;