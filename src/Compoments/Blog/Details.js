import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Details.css"
const Details = () => {
    const {Blogid}=useParams()
    console.log(Blogid);
    const [details,setDetails]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/news/${Blogid}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return (
        <div className='container-fluid'>
        <div className='container-fluid bg-primary'>
           <div className='container p-5'>
           <h2 className='text-center text-white p-5'>{details?.name}</h2>
       
         
           </div>

        </div>
        <div className='container bg-light shadow news'>
            <div className='text-center'>
            <img className='img-fluid details-img' src={details?.img}></img>
            <p className='text-center  pb-5 fw-bold text-warning'>Author:{details?.author}</p>
            </div>
            <p className='p-5'>{details?.details}</p>
            <p className='p-5'>{details?.details}</p>
            <p className='p-5'>{details?.details}</p>

            </div>
        </div>
    );
};

export default Details;