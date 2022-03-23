const { Router } = require('express');
const {Countries,Tourisms}=require('../db');
const {Op}=require('sequelize');
const router = Router();
const axios = require('axios');


// const getCountry = async () =>{
// try{
//    const {data}= await axios.get('https://restcountries.com/v3/all');
//    const apiInfo= await data.map((elem) =>{
//     return{
//             id: elem.cca3,
//             name: elem.name.common,
//             image_flag: elem.flags[1],
//             continent: elem.region,
//             capital: elem.capital ? elem.capital[0] : "ERROR  DATOS",
//             subregion: elem.subregion,
//             area: elem.area,
//             population: elem.population
//         };
//     });
//     await Countries.bulkCreate(apiInfo);
//    }
//    catch(error){
//        console.log(error);
//    }
//  };

//  const getBdcountry = async () => {
//         console.log
//         return await Countries.findAll({
//         })
//     };

//  const getAllcountry = async () =>{
//         const apiInfo= await getCountry();
//         const dbinfo= await getBdcountry();
//         const infoTot= apiInfo.concat(dbinfo);

//         return infoTot;
//  }


router.get('/countries',async(req,res,next) =>{  //muestra todos los paises Y SI NO EXISTE NOMBRE MUESTRA ERROR
    let {name} = req.query;
     if( name ){       
        try{
            //console.log('hola');
           const countryName= await Countries.findAll({  
               
               where :{
                   name :{ [Op.iLike]: '%'+ name + '%'}
               }  ,
               include :{model:Tourisms},                 
             });
          //console.log('hola');
         if(countryName.length === 0){
           return  res.status(404).send('Error no existe el pais')
         }else{
            //console.log('hola');
             res.send(countryName)
            }      
        }
        catch(error){
            res.status(404).send(error);
        }
      } else{

        const contries= await Countries.findAll({
            include:{model : Tourisms,},
        })
        res.send(contries);
        
    }
 });
 
router.get('/:id',async(req,res,next)=>{  //FILTRA UN PAIS POR ID
    try{
    let {id}=req.params;
    const countId= await Countries.findByPk(id,{
        include:Tourisms,         
    })
    
    return res.send(countId);
   }
   catch(error){
       next(error);
   }

})
router.post('/countries',async (req,res,next) =>{  
    
           //crea un pais
    try{
     const {id,name,flag,continent,capital,subregion,area,population}=req.body;
    const newCountries=await Countries.create({
        id,
        name,
        flag,
        continent,
        capital,
        subregion,
        area,
        population
    })
    res.send(newCountries)
    }catch(error){
        next(error)
    }
}),



     
    



router.post("/:countriesId/tourisms/:tourismsId",async(req,res,next)=>{  //le carga a   un pais  una actividad
    try{
       let {countriesId,tourismsId}=req.params;
       const countries=await Countries.findByPk(countriesId)
       await countries.addTourisms(tourismsId)
       res.send(200)

    }
    catch(error){
        next(error)
    }
})


// router.put('/',(req,res,next) =>{
//     res.send('soy /countires');
// })

// router.delete('/',(req,res,next) =>{
//     res.send('soy /countires');
// })


module.exports = router;