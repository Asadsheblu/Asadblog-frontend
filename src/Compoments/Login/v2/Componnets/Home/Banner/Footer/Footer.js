import React from 'react';
import { Envelope, Facebook, Geo, Instagram, Linkedin, Telephone, Twitter } from 'react-bootstrap-icons';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
           <div class="footer-outer pt-120 gray-300">
           <div class="footer-area">
           <div class="container">
           <div class="footer-wrapper">
           <div class="footer-watermark">
          
           </div><div class="row">
           <div class="col-lg-3 col-md-6 col-sm-5 order-1">
           <div class="footer-widget mt-0">
           <h5 class="footer-widget-title">Quick Link</h5>
           <div class="footer-links"><ul class="link-list"><li><a class="footer-link" href="/about">About Us</a></li>
           <li><a class="footer-link" href="/">Event</a></li>
           <li><a class="footer-link" href="/">Schedule</a></li>
           <li><a class="footer-link" href="/">Our Support</a></li>
           <li><a class="footer-link" href="/">Speaker</a></li>
           <li><a class="footer-link" href="/">Sponsor</a></li>
           <li><a class="footer-link" href="/">Blog Grid</a></li>
           </ul>
           </div>
           </div>
           </div>
           <div class="col-lg-6 order-lg-2 order-3">
            <div class="footer-newslatter-wrapper text-center">
                <h3 className='text-white'>Subscribe Our Newsletter</h3>
                <h5 className='text-danger pt-2'>Don’t Miss Our Feature Update</h5>
                <form class="newslatter-form" action="#" id="newslatter-form">
                    <div class="newslatter-input-group d-flex">
                        <input type="email" placeholder="Enter Your Email"/>
                        <button type="submit">Subscribe</button>
                        </div>
                        </form>
                        </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-7 order-lg-3 order-2 ">
                            <div class="footer-widget">
                                <h5 class="footer-widget-title">Contact</h5>
                                <div class="footer-links">
                                    <ul class="link-list">
                                        <li class="contact-box">
                                            <div class="contact-icon">
                                                <Telephone className='text-white fs-6 me-2'/>
                                                </div>
                                                <div class="text-white">
                                                    <a className='text-white' href="/">+1 763-227-5032</a>
                                                    <br/>
                                                    <a className='text-white' href="/">+1 763-227-5032</a>
                                                    </div>
                                                    </li>
                                                    <li class="contact-box">
                                                        <div class="contact-icon">
                                                          <Envelope className='text-white fs-6 me-2'/>
                                                            </div>
                                                            <div class="contact-links">
                                                                <a className='text-white' href="/mailto:info@example.com">info@example.com</a>
                                                                <br/>
                                                                <a className='text-white' href="/">support@example.com</a>
                                                                </div>
                                                                </li>
                                                                <li class="contact-box">
                                                                    <div class="contact-icon">
                                                                    <Geo  className='text-white fs-6 me-2'/>
                                                                        </div>
                                                                        <div class="contact-links">
                                                                            <a className='text-white' href="/">2752 Willison Street Eagan, United State</a>
                                                                            </div>
                                                                            </li>
                                                                            </ul>
                                                                            </div>
                                                                            </div>
                                                                          
                                                                            </div>
                                                                            </div>
                                                                            <hr className='text-white'/>
                                                                            <h6 className='text-center text-white'>Copyright 2023 Asada| Design By Asad</h6>
                                                                         <div className='text-center'>
                                                                          
                                                                         <Facebook className='me-2 fs-4 text-white'/>                               
                                                                         <Instagram className='text-white me-2 fs-4'/>
                                                                         <Linkedin className='text-white me-2 fs-4'/>
                                                                         <Twitter className='text-white me-2 fs-4'/>

                                                                            </div>
                                                    
                                                                            </div>
                                                                            
                                                                             </div>
                                                                               </div>
                                                                                 </div> 
        </div>
    );
};

export default Footer;