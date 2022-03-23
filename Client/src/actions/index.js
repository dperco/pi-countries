import axios from 'axios';


// export function getPaises(){
//     return async function(dispatch){
//         try{
//             const res= await axios.get("http://localhost:3001/api/countries/")
//             console.log(res.data,'axios')
//               return dispatch({
//                    type: 'GET_PAISES',
//                    payload: res.data
//              })
//             }
//           catch(error){ console.log(error)}

// }
// }
     
export function getPaises(){      //traer paises
     return async function(dispatch){

        return await axios
             .get("http://localhost:3001/api/countries")
             .then((res)=>{
               console.log(res.data)
                 dispatch({
                     type: 'GET_PAISES',
                     payload: res.data
                 })
             })
     }
};

export function filterCreated(payload){  //para  Crear y  filtrar x actividad
    return {
        type:'FILTER_CREATED',
        payload
    }
}
export function getActividad() {        //traer  actividades
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/api/tourisms");
        console.log(json.data);
        return dispatch({
            type:'GET_ACTIVITY',
            payload: json.data
})}};

export function getNameCountry(name){        //buscar pais x nombre
    return async function(dispatch){
       try{
            var json = await axios.get("http://localhost:3001/api/countries?name="+name);
           return dispatch({
               type: 'GET_NAME_COUNTRY',
               payload : json.data
           })

       }catch(error){
           console.log(error)
       }


    }
}

export function filterContinent(payload){     //filtrar x continente
            return {
                type:'FILTER_BY_CONTINENT',
                payload
            }
        };


export function filterActivity(payload){      // filtrar x actividad
     return{
         type:'FILTER_ACTIVITY',
         payload
     }
}

export function orderByName(payload){    //ordenar x abecedario
    return {
        type:'ORDER_BY_NAME',
        payload
    }
} 

export function orderByPopulation(payload){  //ordenar x cantidad de poblacion
    return {
        type:'ORDER_BY_POPULATION',
        payload
    }
} 

export function postPaises(payload){    // el post de paises
    return async  function (dispatch){
       try{
        let resp= await axios.post("http://localhost:3001/api/tourisms",payload);
        console.log(resp)
        return dispatch({
            type: 'POST_PAISES',
            payload: resp.data
        })
       }
       catch(error){
           console.log(error)
       }
    }
}
export function getDetail(id){    // el post de paises
        return async  function (dispatch){
        try{
            let json= await axios.get(`http://localhost:3001/api/${id}`);
            console.log(json.data)
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data 
            })
        }
        catch(error){
            console.log(error)
        }
    }
}

