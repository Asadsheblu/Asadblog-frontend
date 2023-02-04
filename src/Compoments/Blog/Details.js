import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import "./Details.css"
const Details = () => {
    const {Blogid}=useParams()
    console.log(Blogid);
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    const [details,setDetails]=useState({})
    useEffect(()=>{
        fetch(`https://skropay-blog-backend-asadsheblu.onrender.com/news/${Blogid}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return (
        <div className='container-fluid'>
        <div className='container-fluid bg-primary'>
        <button onClick={handlePrint} className="print__button">  Print </button> 
           <div  className='container p-5'>
           <h2  className='text-center text-white p-5'>{details?.name}</h2>
       
         
           </div>

        </div>
        <div ref={componentRef} className='container bg-light shadow news'>
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