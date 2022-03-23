import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {getDetail} from '../actions';
import { useEffect } from 'react';
import './styles/Detail.css';

//import Paginado from './Paginng';



export default function Detail (props){
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch,props.match.params.id]);

    const filtrado=useSelector((state)=> state.detail);
    
// const [currentPage,setcurrentPage]= useState(1);
// const [paisesPerPage]= useState (10);
// const indexlastCountry= currentPage * paisesPerPage ;
// const indexfirstCountry= indexlastCountry - paisesPerPage;
// const paisesPageActual= countries.slice(indexfirstCountry,indexlastCountry);
// const  paginated=(NunberPage) => (setcurrentPage(NunberPage));

    return(      
        
           <div className='detalle'>
           
             
            
                 <div>
                  <img src={filtrado.flag } alt='' width='70px' height='70px'/>
                  <h5>Id : {filtrado.id}</h5>
                  <h5>País : {filtrado.name}</h5>   
                  <p>Continente: {filtrado.continent}</p>
                  <p>Capital: {filtrado.capital}</p>
                  <p>Subregión: {filtrado.subregion}</p>
                  <p>Superficie : {filtrado.area} Km2</p>
                  <p>Habitantes: {filtrado.population}</p>
                  <p>Actividades : {filtrado.tourisms?.map(e=> {
                           return(
                              <div>
                                 <p>Nombre:{e.name}</p>
                                 <p>Nivel Dificultad:{e.level}</p>
                                 <p>Duracion en Hs:{e.time}</p>
                                 <p>Temporada Turistica:{e.season}</p>
                              </div>

                           )

                  })}
                                  
                  </p>
                 
                </div>
            
                
                <Link to='/home' ><button>volver</button></Link>      
             </div>
                     
    )
    
}