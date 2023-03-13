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
        <h2 class="card-title pe-4 pt-2 pb-2">{name.slice(0,40)}...</h2>
      
        <button onClick={()=>blogdetails(_id)} className='btn btn-primary rounded-pill ms-auto'>Read More</button>
    
    </div>
         
              
           
           
                
         
       
    );
};

export default Blogsection;