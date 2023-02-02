import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./Blogsection.css"

const Blogsection = ({bloglists}) => {
    const {name,details,_id,img}=bloglists
    const navigate=useNavigate()
    const blogdetails=(id)=>{
      navigate(`/news/${id}`)
    }
    return (
        
            <div class="col pt-5">
     
      <img src={img} className="thumbail-blog"></img>
        <h2 class="card-title pe-5 pt-2 pb-2">{name}</h2>
        <p class="card-text pe-4">{details.slice(0,505)}</p>
        <button onClick={()=>blogdetails(_id)} className='btn btn-primary rounded-pill ms-auto'>Read More</button>
    
    </div>
         
              
           
           
                
         
        //  <div className='col-md-2 pt-5'>
        //  <h6 className='pt-5'>NEWSLETTER</h6>
       
        //  <div className='d-flex'>
        //  <input type='text' className='rounded-pill p-2'/> 
      
        //  <button className='rounded-pill p-2 subscribe btn btn-primary p-2'>Subscribe</button>
        //  </div>
        //  <h6 className='pt-2'>FOLLOW US</h6>
      
        //  <button className='rounded-pill ps-5 pe-5 pt-2 pb-2 w-100 mt-2'>Twitter</button>
        //  <button className='rounded-pill ps-5 pe-5 pt-2 pb-2 w-100 mt-2'>Instagram</button>
        //  <button className='rounded-pill ps-5 pe-5 pt-2 pb-2 w-100 mt-2'>Linkedin</button>
         
        //  </div> 
    );
};

export default Blogsection;