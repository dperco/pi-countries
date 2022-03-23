
import React from 'react';
import  { useEffect,Fragment,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {getPaises,filterContinent,getActividad,filterCreated,orderByName, orderByPopulation} from '../actions';
import Paginado from './Paginng';
import SearchBar from './Searchbar';
import './styles/Home.css'


export default function Home (){
    
  const dispatch = useDispatch ();
  const countries = useSelector((state)=> state.paises);
  const [currentPage,setcurrentPage]= useState(1);
  const [paisesPerPage,]= useState(10);   
  const indexlastCountry= currentPage * paisesPerPage ;
  const indexfirstCountry= indexlastCountry - paisesPerPage;
  let paisesPageActual=[];
  const  paginated=(NunberPage) => (setcurrentPage(NunberPage));
  const [,setOrder]=useState('');
  const [,setPop]=useState('');
 // const [name,setName]= useState('');
  const activity=useSelector((state)=> state.actividad);
  if (currentPage === 1){
       paisesPageActual=countries.slice(indexfirstCountry,indexlastCountry-1);
  }else{
     paisesPageActual=countries.slice(indexfirstCountry,indexlastCountry) ;
  }

     useEffect (()=>{ 
         dispatch(getPaises());  //traigo los paises  
    },[dispatch]);

    useEffect(()=>{
         dispatch(getActividad()); //traigo  las actividades
    },[dispatch]);

    function handleClick(e){   //resetea paises
        e.preventDefault();
        dispatch(getPaises())
    };
    
   function handleFilterByContinent(e){     //filtra x continente
        dispatch(filterContinent(e.target.value))

   };
   function handleFilterCreated(e){ 
        e.preventDefault();             //filtra x actividad
      dispatch(filterCreated(e.target.value));
          }

   function handleSort(e){            //ordena  por abecedario
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setcurrentPage(1)
        setOrder(`Orden ${e.target.value}`)
   };

   function handlePopul(e){      //ordena  por cant poblacion
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value));
        setcurrentPage(1);
        setPop(`Orden ${e.target.value}`);
   }
//    function handleInputChange(e){
//      e.preventDefault();
//      setName(e.target.value)
     
//  };
//  function handleSubmit(e){
//      e.preventDefault();
//      dispatch(getNameCountry(name))
//    };
   
    return (
        
       <div className='Container'>
            <h1>Traer Países</h1>
            <Link  to= '/home'>
            <button onClick={e => {handleClick(e)}}>
                Volver a cargar Países
            </button>
             </Link>
                  

                          <Link to ='/activity'>
                          <button > Crear Actividades </button> 
                          </Link>
             <div>
                <Link to='/'><button>Volver Inicio</button></Link>   
             </div>
             <SearchBar/>

            <div >  
                      
                 <select onChange={e => handlePopul(e)}>
                      <option>Filtrar por Cant Habitantes</option>
                      <option value='asc'>Países  más Habitados  </option>
                      <option value='desc'>Países menos Habitados</option>
                 </select>

                 <select onChange={e => handleSort(e)}>
                      <option>Ordenar Alfabeticamente</option>
                      <option value='asc'> Orden Alfab A-Z</option>
                      <option value='desc'>Orden Alfab Z-A</option>
                 </select>
                { activity}

                 <Link to='/home'>  
                 <select onChange={e => handleFilterByContinent(e)}>           
                      <option value='All'>Filtrar x Continentes</option>
                      <option value='Africa'>África</option>
                      <option value='Americas'>América</option>
                      <option value='Asia'>Asia</option>
                      <option value='Europe'>Europa</option>
                      <option value='Oceania'>Oceanía</option>
                      <option Value='Antarctic'>Antártida</option>
                 </select>
                </Link>
                
                <select  onChange={e=>handleFilterCreated(e)}>
                      <option>Actividades Turísticas</option>
                      <option value='verano'>Verano: vela,futbol,natacion,remo</option>
                      <option value='invierno'>Invierno: sky</option>
                      <option value='otoño'>Otoño : running ,treking</option>
                      <option value='primavera'>Primavera:remo </option>
                    
                      {/* <input type='text' placeholder='Buscar...' onChange={(e)=> handleInputChange(e)}/>
                      <button type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
                              */}
                   
                 </select>
                
                 <div  className='Paginado'>
                      
                    
                       <Paginado
                         paisesPerPpage={paisesPerPage}
                         countries={countries.length}              
                         paginado={paginated}                             
                       />
                     
                 </div>
                 
                 {
                
                <div className="body">
                     
                {
                   
                          
                          paisesPageActual?.map((c) => {
                               console.log(c.id)
                             return (
                           <Fragment> 
                              <div key= {c.id} className="Body">
                                   
                              <img src={c.flag} alt="bandera"  width='100px'  />
                              <br></br>
                              <span  align='midle'>Nombre : {c.name }</span>
                              <br></br>
                              < span align='center'>Continente : {c.continent}</span>
                              <br></br>
                              <br></br>
                              <Link to={`/home/${c.id}`}> <sp>Detalles </sp></Link>
                           </div>
                        
                            </Fragment>
                            );
                         }
                       )
                   
                    
                    
               }        
              </div>
                 }

            </div>

         
      
      </div> 

        
)    
}