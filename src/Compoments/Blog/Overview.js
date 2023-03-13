import React from 'react';
import { Check } from 'react-bootstrap-icons';
import img1 from "../../img/view1.e4b7b906.png"
import img2 from "../../img/view2.1ae15e37.png"
const Overview = () => {
    return (
        <div className='row'>
            <div className='col-md-6'>
            <h5 className='fw-bold'>Over View</h5>
            <div className='d-flex pb-2'>
         <h6>   <Check/></h6>
            <h6 className='fw-bold'>You Got Full Free Certificate.</h6>
            </div>
            <div className='d-flex pb-2'>
         <h6>   <Check/></h6>
            <h6 className='fw-bold'>Unlimited Coffe & Tea When U Boring.</h6>
            </div>
            <div className='d-flex pb-2'>
         <h6>   <Check/></h6>
            <h6 className='fw-bold'>Etiam Dictum, Dui Sit Amet Venenatis.</h6>
            </div>
            <div className='d-flex pb-2'>
         <h6>   <Check/></h6>
            <h6 className='fw-bold'>Class Aptent Taciti Sociosqu Ad Litora.</h6>
            </div>
            <div className='d-flex pb-2'>
         <h6>   <Check/></h6>
            <h6 className='fw-bold'>Lunch Suspendisse In Commodo Feli.</h6>
            </div>
            </div>
            <div className='col-md-6'>
            <div className='row'>
            <div className='col-md-6'>
                <img src={img1} className="img-fluid"/>
                </div>
            <div className='col-md-6'>
            <img src={img2} className="img-fluid"/>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Overview;