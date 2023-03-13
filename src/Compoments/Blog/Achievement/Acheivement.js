import React from 'react';
import icon1 from "../../../img/icon1.png"
import icon2 from "../../../img/icon2.png"
import icon3 from "../../../img/icon3.png"
import icon4 from "../../../img/icon4.png"
import './Achievement.css'
const Acheivement = () => {
    return (
        <div className='achievement-area container-fluid'>
            <div className='container p-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='text-center'>
                    <img src={icon1} className="img-fluid" />
                    <h1 className='text-center text-white fw-bold'>100 +</h1>
                    <h3 className='text-center text-white'>Best Speaker</h3>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='text-center'>
                    <img src={icon2} className="img-fluid" />
                    <h1 className='text-center text-white fw-bold'>600 +</h1>
                    <h3 className='text-center text-white'>Ideal Event</h3>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='text-center'>
                    <img src={icon3} className="img-fluid" />
                    <h1 className='text-center text-white fw-bold'>200 +</h1>
                    <h3 className='text-center text-white'>New Schedule</h3>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='text-center'>
                    <img src={icon4} className="img-fluid" />
                    <h1 className='text-center text-white fw-bold'>300 +</h1>
                    <h3 className='text-center text-white'>New Schedule</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Acheivement;