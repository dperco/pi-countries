import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LandingPage.css'


export default function landingPage(){

    return (
            <div className='body'>
                <h1   color='black' > Bienvenidos a Countries </h1>
                 <p>Inf. gral. 
                     y turística </p>
                      <div >
                          <Link to ='/home'>
                          <button > Pagina Principal </button> 
                          </Link>
                          
                      </div>
                  <h5>by Daniel Perco</h5>
            </div>

        
    );
         
};