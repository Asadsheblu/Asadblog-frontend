import React from 'react';
import "./Banner.css"
import banner from "../../../../../../img/banner.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Calendar, Diagram2Fill, Megaphone, PinMap } from 'react-bootstrap-icons';
const Banner = () => {
    return (
        <div className='container-fluid banner p-5'>
             <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
   
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <div className='container pt-5 pb-3'>
            <div className='row'>
            <div className='col-md-6 pt-5'>
                <h6 className='text-danger bannert1'> <Calendar className='text-danger'/>  JUNE 21,2023</h6>
                <h1 className='fw-bold pt-3 bannert2'>EVENT, MEETUP <br/> & <span className='text-danger'>CONFEERENCE</span> </h1>
                <div className='d-flex pt-3'>
                    <h5 className=''> <Diagram2Fill className='text-danger'/> 500 Seat</h5>
                    <h5 className=' mx-auto'> <Megaphone className='text-danger'/> 10 Speaker</h5>
                    </div>
                    <h5> <PinMap className='text-danger'/>  1356 Broadway, New York</h5>
             
              <div className='d-flex pt-3'>
              <button className='btn btn-danger text-white ps-3 pe-3'>BOOK NOW</button>
               <button className='text-danger mx-auto ps-3 pe-3'>VIEW DETAILS</button>
              </div>
                </div>
                <div className='col-md-6 pt-2'>
                <img src={banner} className='img-fluid'/>
            </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className='container pt-5 pb-3'>
            <div className='row'>
            <div className='col-md-6 pt-5'>
                <h6 className='text-danger bannert1'><Calendar className='text-danger'/> JUNE 21,2023</h6>
                <h1 className='fw-bold pt-3 bannert2'>EVENT, MEETUP <br/> & <span className='text-danger'>CONFEERENCE</span> </h1>
                <div className='d-flex pt-3'>
                    <h5 className=''> <Diagram2Fill className='text-danger'/> 500 Seat</h5>
                    <h5 className=' mx-auto'> <Megaphone className='text-danger'/> 10 Speaker</h5>
                    </div>
                    <h5> <PinMap className='text-danger'/>  1356 Broadway, New York</h5>
              <div className='d-flex pt-3'>
              <button className='btn btn-danger text-white ps-3 pe-3'>BOOK NOW</button>
               <button className='text-danger mx-auto ps-3 pe-3'>VIEW DETAILS</button>
              </div>
                </div>
                <div className='col-md-6'>
                <img src={banner} className='img-fluid'/>
            </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> 
                <div className='container pt-5 pb-3'>
            <div className='row'>
            <div className='col-md-6 pt-5'>
                <h6 className='text-danger bannert1'><Calendar className='text-danger'/> JUNE 21,2023</h6>
                <h1 className='fw-bold pt-3 bannert2'>EVENT, MEETUP <br/> & <span className='text-danger'>CONFEERENCE</span> </h1>
                <div className='d-flex pt-3'>
                    <h5 className=''> <Diagram2Fill className='text-danger'/> 500 Seat</h5>
                    <h5 className=' mx-auto'> <Megaphone className='text-danger'/> 10 Speaker</h5>
                    </div>
                    <h5> <PinMap className='text-danger'/>  1356 Broadway, New York</h5>
              <div className='d-flex pt-3'>
              <button className='btn btn-danger text-white ps-3 pe-3'>BOOK NOW</button>
               <button className='text-danger mx-auto ps-3 pe-3'>VIEW DETAILS</button>
              </div>
                </div>
                <div className='col-md-6'>
                <img src={banner} className='img-fluid'/>
            </div>
                </div>
            </div></SwiperSlide>
    </Swiper>
            
        </div>
    );
};

export default Banner;
