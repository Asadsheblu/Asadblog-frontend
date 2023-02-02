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
           <p className='text-center text-white pb-5'>In Social Announcement/October 19,2023 / 2 min Read</p>
           </div>

        </div>
        <div className='container bg-light shadow news'>
            <p className='p-5'>{details?.details}</p>
            <p className='p-5'>{details?.details}</p>
            <p className='p-5'>{details?.details}</p>

            </div>
        </div>
    );
};

export default Details;