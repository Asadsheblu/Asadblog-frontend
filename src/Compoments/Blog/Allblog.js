import React, { useEffect, useState } from 'react';
import { Calendar, Calendar2CheckFill, Diagram2, Facebook, Instagram, Linkedin, PinMap, Share, Twitter } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FacebookShareButton, FacebookShareCount } from 'react-share';
import './Blogsection.css'

const Allblog = () => {
    const navigate=useNavigate()
    const blogdetails=(id)=>{
      navigate(`/news/${id}`)
    }
    const [blog,setBlog]=useState([])
  
   useEffect(()=>{
       fetch('https://asadblog-backend.onrender.com/news')
       .then(res=>res.json())
       .then(data=>{
           setBlog(data)
       })
     

   },[])
    return (
        <div className='container pt-5 pb-3'>
           <h6 className='text-center text-danger'>Events</h6>
          <h1 className='text-center fw-bold p-3'>POPULAR EVENT</h1>
         
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                blog.map(blogs=>
         
       
              <div class="col">
        <div class="card h-100 shadow rounded">
        <div class="event-thumb">
         <img className='img-fluid rounded' src={blogs?.img} alt="..."/>
         <div class="event-lavel">
            <Diagram2/> <span>{blogs?.seat} Seat</span>
            </div>
         </div>
          <div class="card-body">
            <div className='d-flex da-lo'>
            <p class="fw-bold"> <Calendar2CheckFill className='text-danger me-1'/>  {blogs?.time}</p>
            <p class="fw-bold mx-auto"> <PinMap className='text-danger'/>  {blogs?.location}</p>
            </div>
            <h5 class="event-title"> <Link className='text-decoration-none text-dark' to="/">{blogs?.name}</Link>  </h5>
           
         <div className='d-flex'>
         <button onClick={()=>blogdetails(blogs?._id)} className='btn btn-primary rounded'>Read More</button>
         <p className='ms-auto'> <Facebook/> <Instagram/> <Linkedin/> <Twitter/> <Share className='text-danger fs-6'/> </p>
        
         </div>
          </div>
        </div>
        </div>

                )
            }
            
       </div>
        
        </div>
    );
};

export default Allblog;