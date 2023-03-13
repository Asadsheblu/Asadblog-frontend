import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Acheivement from '../../../../Blog/Achievement/Acheivement';
import Allblog from '../../../../Blog/Allblog';
import Blog from '../../../../Blog/Blog';
import Speaker from '../../../../Blog/Speaker';
import Banner from './Banner/Banner';
const Home = () => {
    return (
        <div>
          <Banner/>
          <Blog/>
          <Acheivement/>
          <Speaker/>
         
        </div>
    );
};

export default Home;