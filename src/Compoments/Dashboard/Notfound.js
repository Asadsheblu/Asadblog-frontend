import React from 'react';
import { EmojiDizzyFill } from 'react-bootstrap-icons';

const Notfound = () => {
    return (
        <div className='container text-center'>
            <h1 className='p-5 fw-bold'>Data  Not Found <EmojiDizzyFill className='text-danger fs-1'/>  </h1>
        </div>
    );
};

export default Notfound;