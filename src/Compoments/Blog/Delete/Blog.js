import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Trash2Fill } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Blog = () => {
    const [delBlog,setDelblog]=useState([])
    
    useEffect(()=>{
        fetch('https://asadblog-backend.onrender.com/news')
        .then(res=>res.json())
        .then(data=>setDelblog(data))
    },[])
 const Deleted=(id)=>{
    fetch(`https://asadblog-backend.onrender.com/news/${id}`,{
        method:"DELETE",
       
      
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount<0){
            window.location.reload()
            toast("this product deleted sucessfuly")
        }
    })
 }
    return (
        <div className='container'>
            {
                delBlog.map(dashBlog=>
                <>
              
                    <table class="table">
                    <thead>
                      <tr>
                        
                        <th scope="col">Title</th>
                        <th scope="col">Deleted</th>
                        <th scope="col">Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                       
                        <td>{dashBlog?.name}</td>
                        <td><button  onClick={()=>Deleted(dashBlog?._id)} className='btn btn-light'><Trash2Fill className='text-danger fs-4'/></button> </td>
                        <td>Edit</td>
                    </tr>
                    </tbody>
                  </table>
                  </>
                )
            }
            
        </div>
    );
};

export default Blog;