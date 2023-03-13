import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Speakeradd = () => {
    const imageKey="e8ca8a640563b5725a2d73fc6920af02"
    const addSpeaker=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const designation=e.target.designation.value
        const image=e.target.image.files[0]
        const speaker={name,designation,image}
        const formData=new FormData()
    formData.append('image',image)
    const url=`https://api.imgbb.com/1/upload?key=${imageKey}`
    fetch(url,{
        method:"POST",
        body:formData
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.success){
            const img=data.data.url
            console.log(img);
            const speakers={
                name:name,
                designation:designation,
                img:img
            }
            fetch("http://localhost:5000/speakers",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(speakers)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    window.location.reload()
                    toast.success("SPEKAR UPLOAD")
                    console.log(data);
                }
            })
            
        }
    })
    }
    return (
        <div className='shadow w-100 mx-auto p-5'>
        <form onSubmit={addSpeaker}>
        <div className="mb-3 mx-auto w-75">
    <label for="exampleFormControlInput1" className="form-label">Speaker Name</label>
    <textarea name='name' className="form-control" id="exampleFormControlTextarea1" rows="2" required></textarea>
    </div>
    <div className="mb-3 mx-auto w-75">
    <label for="exampleFormControlTextarea1" className="form-label">Speaker Designation</label>
    <textarea name='designation' className="form-control" id="exampleFormControlTextarea1" rows="7" required></textarea>
    </div>
    
              <div className="mb-3 w-100">
    
              <input type="file" name='image' className="form-control w-50 mx-auto"/>  
              </div>
    
   
    <input className="form-control mx-auto w-25 mt-3 rounded bg-primary text-white" type="submit" value="POST" />
    <ToastContainer />
    </form>
    </div>
    );
};

export default Speakeradd;