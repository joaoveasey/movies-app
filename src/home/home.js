import React, { useEffect, useState } from 'react';
import image from '../imgs/main-image.png'
import './home.css';

const Home = () => {
    

    return (
        <div className="home">
            <div className='main-image'>
               <img src={image} alt='Movies and popcorns' height={500} width={500} />
            </div>
            <div className='main-text'>
                <h1>Welcome to the Movies App</h1>
                <p>Here you can find the most popular and top rated movies</p>
            </div>
        </div>
    )
}

export default Home