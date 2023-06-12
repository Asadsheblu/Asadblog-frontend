import React, { useEffect, useState } from 'react';

import { Facebook } from 'react-bootstrap-icons';

import Allspeaker from './Allspeaker';
import './Speaker.css'
const Speaker = () => {
  const [speaker,setSpeaker]=useState([])
  useEffect(()=>{
    fetch('https://asadblog-backend.onrender.com/speakers')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setSpeaker(data)
    })
  },[])
    return (
        <div className='container p-4'>
            <h6 className='text-center text-danger'>Speaker</h6>
            <h1 className='text-center fw-bold'>TALENTED SPEAKER</h1>
            
         
             <div className='row'>
          {
            speaker.map(singspeaker=><Allspeaker key={singspeaker?._id} singspeaker={singspeaker} ></Allspeaker>)
          }
                

            </div>
           
        </div>
    );
};

export default Speaker;