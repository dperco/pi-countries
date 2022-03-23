import React from 'react';
import './styles/Paginng.css';

export default function Paginado ({paisesPerPpage,countries,paginado}){
      const NumeroPage=[];
      for(let e=1 ; e <= Math.ceil(countries/paisesPerPpage);e++){ 
                  NumeroPage.push(e);  
      };
      return (      
                <ul className='paginado' >
                   {
                    NumeroPage && NumeroPage.map(num => (
                    <li>
                    <button key={num} onClick={()=>paginado(num)}>{num}</button>
                    </li>
                    ))
                   };
                </ul>
            );
      };