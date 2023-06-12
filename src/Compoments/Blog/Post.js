import React from 'react';
import { Calendar2CheckFill, Diagram2, Facebook, Instagram, Linkedin, PinMap, Share, Twitter } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({posts}) => {
    const {_id,name,time,img,location,seat}=posts
    const navigate=useNavigate()
   
    const blogdetails=(id)=>{
      navigate(`/news/${id}`)
    }
    return (
       
  <div class="col">
        <div class="card h-100 shadow rounded">
        <div class="event-thumb">
         <img className='img-fluid rounded' src={img} alt="..."/>
         <div class="event-lavel">
            <Diagram2/> <span>{seat} Seat</span>
            </div>
         </div>
          <div class="card-body">
            <div className='d-flex da-lo'>
            <p class="fw-bold"> <Calendar2CheckFill className='text-danger me-1'/>  {time}</p>
            <p class="fw-bold mx-auto"> <PinMap className='text-danger'/>  {location}</p>
            </div>
            <h5 class="event-title"> <Link className='text-decoration-none text-dark' to="/">{name}</Link>  </h5>
           
         <div className='d-flex'>
         <button onClick={()=>blogdetails(_id)} className='btn btn-primary rounded'>Read More</button>
         <p className='ms-auto'> <Facebook/> <Instagram/> <Linkedin/> <Twitter/> <Share className='text-danger fs-6'/> </p>
        
         </div>
          </div>
        </div>
        </div>

   
    );
};

export default Post;