
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Postroute = () => {

const imageKey="e8ca8a640563b5725a2d73fc6920af02"
const addPost=(e)=>{
    e.preventDefault()
    
    const name=e.target.name.value
    const details=e.target.details.value
   const location=e.target.location.value
   const time=e.target.time.value
   const seat=e.target.seat.value
   const type=e.target.type.value
   const speaker=e.target.speaker.value
   const sponsor=e.target.sponsor.value
    const image=e.target.image.files[0]
    const data={name,details,image,location,time,type,speaker,sponsor}
    
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
            const posts={
                name:name,
                details:details,
                location:location,
                time:time,
                seat:seat,
                type:type,
                speaker:speaker,
                sponsor:sponsor,
                img:img
            }
            fetch('https://asadblog-backend.onrender.com/news/',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(posts)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId){
                    window.location.reload()
                    toast.success("POST UPLOAD")
                    console.log(data);
                }
            })
      
        }
    })
   
            
    
            


        }
    
return ( 
    <div className='shadow w-100 mx-auto p-5'>
    <form onSubmit={addPost}>
    <div className="mb-3 mx-auto w-75">
<label for="exampleFormControlInput1" className="form-label">Blog Title</label>
<textarea name='name' className="form-control" id="exampleFormControlTextarea1" rows="2" required></textarea>
</div>
<div className="mb-3 mx-auto w-75">
<label for="exampleFormControlTextarea1" className="form-label">Blog Description</label>
<textarea name='details' className="form-control" id="exampleFormControlTextarea1" rows="7" required></textarea>
</div>

          <div className="mb-3 w-100">

          <input type="file" name='image' className="form-control w-50 mx-auto"/>  
          </div>

<div className="mb-3 w-100">
<input type="date" name="time" className="form-control w-50 mx-auto"></input> 
</div>
<div className="mb-3 mx-auto  w-75">
<label for="exampleFormControlInput1" className="form-label">Add Place</label>

<textarea name='location' className="form-control w-50" id="exampleFormControlTextarea1" rows="1" required></textarea>
</div>
<div className="mb-3 mx-auto  w-75">
<label for="exampleFormControlInput1" className="form-label">Add Seat</label>

<textarea name='seat' className="form-control w-50" id="exampleFormControlTextarea1" rows="1" required></textarea>
</div>
<div className="mb-3 mx-auto  w-75">
<label for="exampleFormControlInput1" className="form-label">Add Event Type</label>

<textarea name='type' className="form-control w-50" id="exampleFormControlTextarea1" rows="1"></textarea>
</div>
<div className="mb-3 mx-auto  w-75">
<label for="exampleFormControlInput1" className="form-label">Add Speaker</label>

<textarea name='speaker' className="form-control w-50" id="exampleFormControlTextarea1" rows="1"></textarea>
</div>
<div className="mb-3 mx-auto  w-75">
<label for="exampleFormControlInput1" className="form-label">Add Sponsor</label>

<textarea name='sponsor' className="form-control w-50" id="exampleFormControlTextarea1" rows="1"></textarea>
</div>
<input className="form-control mx-auto w-25 mt-3 rounded bg-primary text-white" type="submit" value="POST" />
<ToastContainer />
</form>
</div>
  );


}


     


export default Postroute;