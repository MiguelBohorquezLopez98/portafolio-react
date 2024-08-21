import React from 'react'
import image from '/img/imagen-prueba.jpg'

function Home() {
    return (
        <div>
            <div className='w-1/4'>
                <img src={image} alt="imagen-prueba" />
            </div>
            <div>
                <p>Hola mi nombre es Miguel</p>
            </div>
        </div>
    );
};

export default Home;