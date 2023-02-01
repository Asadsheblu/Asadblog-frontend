import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Details.css"
const Details = () => {
    const {blogId}=useParams()
    const [details,setDetails]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return (
        <div className='container-fluid'>
        <div className='container-fluid bg-primary'>
           <div className='container p-5'>
           <h2 className='text-center text-white p-5'>{details?.title}</h2>
           <p className='text-center text-white pb-5'>In Social Announcement/October 19,2023 / 2 min Read</p>
           </div>

        </div>
        <div className='container bg-light shadow news'>
            <p className='p-5'>{details?.body}</p>
            <p className='p-5'>{details?.body}</p>
            <p className='p-5'>{details?.body}</p>

            </div>
        </div>
    );
};

export default Details;