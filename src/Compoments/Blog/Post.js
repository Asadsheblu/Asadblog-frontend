import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({posts}) => {
    const {_id,name,details,img}=posts
    const navigate=useNavigate()
   const blogdetails=(id)=>{
     navigate(`/news/${id}`)
   }
    return (
        <div className='row'>
        <div className='col-md-5'>
        <img src={img} className="thumbail"></img>
        </div>
        <div className='col-md-7'>
            <h2 className='fw-bold headline-title'>{name}</h2>
            <p className='pt-2'>{details.slice(0,505,)}</p>
            <div className='d-flex ms-auto'>
               <p> Moneday 2023</p>
               <button onClick={()=>blogdetails(_id)} className='btn btn-primary ms-auto'>Read More</button>
            </div>
        </div>

    </div>
    );
};

export default Post;