import React, { useEffect, useRef, useState } from 'react';
import { BlockquoteLeft, Calendar2CheckFill, Calendar2Date, Check2Circle, Diagram2Fill, Image, InfoCircle, Lightning, Megaphone, PeopleFill, PinMap, StarFill, StarHalf } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import "./Details.css"
import Overview from './Overview';
import organize from "../../img/event-orgainizer.29f3266d.png"
import sign from "../../img/download.png"
const Details = () => {
    const {Blogid}=useParams()
    console.log(Blogid);
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    const [details,setDetails]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/news/${Blogid}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return (
      <div className='container-fluid'>
      <div className='container-fluid'>
     
         <div  className='container p-5'>
          <h1 className='title'>EVENT DETAILS</h1>

          <div className='row'>
          <div className='col-md-8'>
            <img src={details?.img} className="details-img"/>
            <div className='d-flex pt-2'>
            <h6 class="fw-bold"> <Calendar2CheckFill className='text-danger me-1'/>  {details?.time}</h6>
            <h5 class="fw-bold mx-auto text-danger"> <Diagram2Fill className='text-danger'/>  {details?.seat} Seat</h5>
            <h6 class="fw-bold mx-auto"> <PinMap className='text-danger'/>  {details?.location}</h6>
            </div>
            <hr/>
            <div className='row'>
              <div className='col-md-3'>
              <div className='d-flex'>
              <h6><BlockquoteLeft className='text-danger'/></h6>
            <div>
            <h6 className='fw-bold ps-2'>Event Type</h6>
            <h6>{details?.type}</h6>
            </div>
              </div>
              </div>
              <div className='col-md-3'>

              <div className='d-flex'>
              <h6><Megaphone className='text-danger'/></h6>
            <div>
            <h6 className='fw-bold ps-2'>Speaker</h6>
            <h6>{details?.speaker}</h6>
            </div>
              </div>
              </div>
              <div className='col-md-3'>
              <div className='d-flex'>
              <h6><Lightning className='text-danger'/></h6>
            <div>
            <h6 className='fw-bold ps-2'>Sponsor</h6>
            <h6>{details?.sponsor}</h6>
            </div>
              </div>
              </div>
              <div className='col-md-3'>
              <div className='d-flex'>
              <StarFill className='text-warning'/>
              <StarFill className='text-warning'/>
              <StarFill className='text-warning'/>
              <StarFill className='text-warning'/>
              <StarHalf className='text-warning'/>
              </div>
              <h6>478(rating)</h6>
              
              </div>
           
              <hr/>
              </div>
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
      <div>
        <InfoCircle/>
        <h6>Details</h6>
      </div>

    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
    <div>
        <Calendar2Date/>
        <h6>Schedule</h6>
      </div>

    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
    <div>
        <Image/>
        <h6>Gallery</h6>
      </div>

    </button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <h3>{details?.name}</h3>
      <p>{details?.details}</p>
      <Overview/>
<p>Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac placerat metus tortor eget magna. Donec mattis posuere pharetra. Donec vestibulum ornare velit ut sollicitudin. Pellentesque in faucibus purus.Nulla nisl tellus, hendrerit nec dignissim pellentesque.</p>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
<h6 className='text-danger fw-bold'>{details?.time}</h6>

  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>
            </div>
          <div className='col-md-4'>
          <div class="event-book-form">
            <div class="category-title">
              <i class="bi bi-bookmark-check"></i> 
              <h4 > <Check2Circle/>  Book This Event</h4>
              </div>
              <form action="#" id="event-book" class="event-book">
                <div class="primary-input-group">
                  <input type="text" id="e-name" placeholder="Your Full Name"/>
                  </div>
                  <div class="primary-input-group">
                    <input type="email" id="e-email" placeholder="Your Email"/>
                    </div>
                    <div class="primary-input-group">
                      <input type="tel" id="e-tel" placeholder="Phone"/>
                      </div>
                      <div class="primary-input-group">
                        <select class="primary-select">
                          <option>Select quantity</option>
                          <option value="0">Quantity 1</option>
                          <option value="1">Quantity 2</option>
                          <option value="2">Quantity 3</option>
                          </select>
                          </div>
                         
                            <div class="submit-btn">
                              <button type="submit" class="btn btn-danger text-white w-100">Submit Now</button>
                              </div>
                              </form>
                              </div>
                              <div class="event-book-form mt-4">
            <div class="category-title">
          
              <h4 > <PeopleFill/>Event Organized By</h4>
              </div>
              <div className='text-center pt-2'>
                  <img src={organize} className="img-fluid"/>
                  <h1>Matthew Luke</h1>
                  <h4>Event Lab</h4>
                  <img src={sign} className="img-fluid"/>
              </div>
             
                              </div>




            </div>

          </div>
     </div>
     </div>
      </div>
    );
};

export default Details;