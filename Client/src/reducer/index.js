
const inicioState={
    paises:[],
    allPaises:[],
    actividad:[],
    detail:{}
}

function rootReducer (state=inicioState,action) {
    switch (action.type){
        case 'GET_PAISES':  //traigo los paises
               return{
                    ...state,
                    paises: action.payload,
                    allPaises:action.payload
                       
               };
        case 'GET_NAME_COUNTRY':       //busca  paises x nombre
            return{
                ...state,
                paises: action.payload

            };

        case 'FILTER_CREATED':          //filtra por actividades

            function filtactiv(tourisms,activ){
                const filactiv= tourisms.filter(({season})=> season === activ
            )
            return filactiv.length ? true : false;

             }
            const allpais=state.paises;
            
            let filtro= allpais.filter(({tourisms})=> filtactiv(tourisms,action.payload));
            if(!filtro.length){
                filtro=[1]
            }
             return action.payload === 'all'
             ? {...state}
             :{    
                 ...state,
                 paises: filtro
            
             };


         case 'GET_ACTIVITY':   //  trae las actividades
             
                return{
                  ...state,
                  actividad : action.payload
                };
       
        case 'FILTER_BY_CONTINENT':          //filtro x continente
                const allPai=state.paises;
                const estadoFiltrado= action.payload === 'All' ? allPai : 
                allPai.filter(el=> el.continent === action.payload)
                return{
                       ...state,
                       paises: estadoFiltrado
                    };
        
        case 'ORDER_BY_NAME':       //ordena por abecedario
                 let sorteArr= action.payload === 'asc' ?
                 state.paises.sort(function(a,b){
                     if(a.name > b.name){
                         return 1;
                     }
                     if(b.name > a.name){
                         return -1;
                     }
                      return 0;
                     
                 }) :
                 state.paises.sort(function(a,b){
                     if(a.name > b.name){
                         return -1;
                     }
                     if(b.name > a.name){
                         return 1;
                     }
                     return 0;
                 }) 
                 return{
                     ...state,
                     paises:sorteArr
                 } ;
                 
        case 'ORDER_BY_POPULATION':     //ordena x cantidad de poblacion
            const  popul= action.payload === 'desc' ? state.paises.sort((a,b) => a.population - b.population):
            state.paises.sort((a,b) => b.population - a.population)
            return{
                ...state,
                paises:popul
            };

        case 'POST_PAISES':      //  ruta del post  de paises
                return{
                    ...state
                };
        case 'GET_DETAIL':
         
             return{             
                  ...state,
                  detail: action.payload
               };
                  
        default : {
                return state;
              }
       
    }
};

export default rootReducer;