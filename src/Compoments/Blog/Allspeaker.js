import React from 'react';


import './Speaker.css'
const Allspeaker = ({singspeaker}) => {
    const {img,name,designation}=singspeaker
    return (
        <>
        
        <div className='col-lg-4 col-md-6 col-sm-6'>
                            <div class="speaker-card">
                                <div class="speaker-image">
                                    <img src={img} alt=""/>
                                        
                                            </div>
                                            <div class="speaker-info">
                                                <h5 class="speaker-name">{name}</h5>
                                                <p className='text-center'>{designation}</p>
                                                </div>
                                                </div>

                        </div>
                      
                        </>
    );
};

export default Allspeaker;