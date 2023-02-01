import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import img1 from '../../img/1 (1).png'
import Blogsection from './Blogsection';
import Details from './Details';
import './Blog.css'

const Blog = () => {
    const [blog,setBlog]=useState([])
  
   useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res=>res.json())
       .then(data=>{
          
           setBlog(data)
       })
   },[])
     const navigate=useNavigate()
  const handelDetails=()=>{
    navigate('/details')
  }
    return (
        <div className='container mt-5'>
            <h6 className='text-center  headline'>OUR BLOG</h6>
            {
                blog.slice(0,1).map(news=>[
                    <h2 className='text-center fw-bold p-3 headline-title'>{news?.title}</h2>
                ])
            }
          
      {
        blog.slice(0,1).map(news1=>[
<div className='row'>
                        <div className='col-md-5'>
                        <img src={img1} className="thumbail"></img>
                        </div>
                        <div className='col-md-7'>
                            <h2 className='fw-bold headline-title'>{news1?.title}</h2>
                            <p className='pt-2'>{news1?.body}</p>
                            <div className='d-flex ms-auto'>
                               <p> Moneday 2023</p>
                               <button onClick={handelDetails} className='btn btn-primary ms-auto'>Read More</button>
                            </div>
                        </div>

                    </div>
        ])
      }
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                     
                    {
                        blog.slice(0,2).map(bloglists=><Blogsection key={bloglists?.id} bloglists={bloglists}/>)
                    }
                        </div>
                        
                        
        </div>
    );
};

export default Blog;