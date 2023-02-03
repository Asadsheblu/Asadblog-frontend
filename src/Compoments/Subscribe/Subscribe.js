import React from 'react';

const Subscribe = () => {
    return (
        <div className='container pt-5'>
           <h6 className='pt-5'>NEWSLETTER</h6> 
           <div className='d-flex'>
         <input type='text' className='rounded-pill pe-4'/> 
      
         <button className='rounded-pill p-2 subscribe btn btn-primary p-2'>Subscribe</button>
         </div>
         <h6 className='pt-2'>FOLLOW US</h6>
      
      <button className='rounded-pill ps-5 pe-5 pt-2 pb-2 w-100 mt-2'>Twitter</button>
      <button className='rounded-pill ps-5 pe-5 pt-2 pb-2 w-100 mt-2'>Instagram</button>
      <button className='rounded-pill ps-5 pe-5 pt-2 pb-2 w-100 mt-2'>Linkedin</button>
        </div>
    );
};

export default Subscribe;