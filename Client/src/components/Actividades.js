import React from "react";
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {postPaises,getActividad} from '../actions/index';
import { useDispatch,useSelector } from 'react-redux';
 import './styles/Actividades.css';


 function validate (input){
   

   
  
     if(input.name.length < 3 || !isNaN(input.name) ){
         alert('nombre erroneo  deben ser mas de 3 letras');
        
     }
    
    if ( input.level < 1){
        alert('valor de nivel erroneo');
                      
    }
    
                
    if (input.time <= 0 ){
        alert('el tiempo debe ser mayor a 1 <br>');
        
    }
                        
    if(!isNaN(input.season)){
            alert('temporada incorrecta ,debe ingresar letras ');
                          
    }            
    
    if(input.countriId){
         alert('ingrese pais para cargar actividad ');
     
    }
    
    
    };
          


 export default function CrearActividades(){

    const dispatch= useDispatch(); 
    const paisesSeleccionados=useSelector((state => state.allPaises));
        const [,setError]= useState({});
        const [input ,setInput]=useState({
            name:"",
            level:"",
            time:"",
            season:"",
            countryId:[]
        });

       useEffect(()=>{
           dispatch(getActividad());
        },[dispatch]);

       function handleDelete(event){
           setInput({
               ...input,
               countryId: input.countryId.filter(elem => elem !== event)
           });
       };

       function handleChange(event){
             setInput ({
                 ...input,
                 [event.target.name]: event.target.value
             });
             console.log(input);
       };

       function handleSelect (event){
               setInput ({
                   ...input,
                   countryId:[...input.countryId,event.target.value]
               });
       };

    //    function handleSeason (event){
    //        setInput ({
    //           ...input,
    //           season:event.target.value 

    //        });
    //    };


    //    function handleLevel (event){
    //          setInput({
    //              ...input,
    //              level: event.target.value
    //          });
    //    };

       function handleSubmit (event){
           event.preventDefault();
           setError(validate({
               ...input,
               [event.target.value]:event.target.value
            }));
           dispatch(postPaises(input));
           console.log(input);
           alert('áctividad creada');
             setInput({
                name:"",
                level:"",
                time:"",
                season:"",
                countryId:[]
             })};
             
                
   return(
          <div className="body">
               <h1 className="Title">Crear Actividad</h1>
 
               <div >
                  <form  action=""  method="POST" id="form"  onSubmit="retur validate();">
                         <div className="grupo">
                             <label className="Text" >Actividad:</label>
                             <input   type='text'  value={input.name} name='name'  required min='3'
                             
                                    onChange={(event) => handleChange(event)}>                                      
                            </input>
                            <span className="barra"></span>
                      </div>
                      <br></br>
                        <div className="grupo">
                             <label className="Text">Level  :    </label>
                             <input type='number' value={input.level} name='level' required  max='2'
                                    onChange={(event) => handleChange(event)}>                                      
                            </input>
                            <span className="barra"></span>
                              {/* <select onChange={(event) => handleLevel(event)}>
                                  <option>Nivel Actividad</option>
                                  <option value='1'>1</option>
                                  <option value='2'>2</option>
                                  <option value='3'>3</option>
                                  <option value='4'>4</option>
                                  <option value='5'>5</option>
                              </select> */}
                         </div>
                         <br></br>
                         <div className="grupo">
                             <label className="Text">Tiempo :</label>
                             <input type='number' value={input.time} name='time' required min='3'
                            onChange={(event) => handleChange(event)}></input>
                             <span className="barra"></span>
                           </div>
                          <br></br>

                        <div className="grupo">
                            <label className="text">Season :</label>
                            <input type='text' value={input.season} name='season' required  min='5'
                    
                                    onChange={(event) => handleChange(event)}>                                      
                            </input>
                            <span className="barra"></span>
                            {/* <select onChange={(event) => handleSeason(event)}>
                                <option>Temporada</option>
                                <option value='verano'>Summer</option>
                                <option value='Otoño'>Fall</option>
                                <option value='Invierno'>Winter</option>
                                <option value='primavera'>Spring</option>
                            </select> */}
                          </div>

                          <br></br>

                          <div >
                            <label className="text">Countries: <select onChange={(event)=> handleSelect(event)}>
                              {
                                 paisesSeleccionados.map((event) => (                       //agregar evento a un pais
                                     <option value={event.id}>{event.name}</option>
                                 )) 
                              }
                            </select>

                            </label>
                            <br></br>
                            <br></br>
                           <button type='submit' onClick={(event)=> handleSubmit(event)}> Crear </button> 
                              <p className="warnings"  id="warnings"></p> 
                            <br></br>
                            <br></br>
                          </div>
                  

                  <div >
                     {
                         input.countryId.map(elem =>   //borrar  paises 
                            <div key={elem.name} >
                               <h6>{elem}</h6>
                               <button onClick={() => handleDelete(elem)}>X</button>
                            </div>
                            )
                     }
                  </div>
                 </form>

              </div>
              <br></br>
                 <div>
                  <Link to='/home'><button>Volver</button></Link>
                </div>
            
          </div>  

   )};