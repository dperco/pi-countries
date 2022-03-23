const { Router } = require('express');
const { NoticeMessage } = require('pg-protocol/dist/messages');
const {Countries,Tourisms}=require('../db.js');

const router = Router();

router.get('/tourisms',(req,res,next) =>{   //muestra todas las actividades 
    
     return Tourisms.findAll({})
     .then ((tourisms) =>{
         res.json(tourisms)
     })
    .catch((error)=>{
          next(error)
    })
})

router.post('/tourisms',async(req,res,next) =>{   
    try{              //crea una actividad
    const {name,level,time,season,createdIdBd,countryId}=req.body;
      if(name,level,time,season){
               let newTorisms=await Tourisms.create({
                     name,level,time,season,createdIdBd
                   })

        try{
             let resp=await Countries.findAll({
                 where:{
                     id:countryId
                  }
             })
            await newTorisms.addCountries(resp)
            res.send(resp)
   
        }
        catch(error){
        next (error)
       }
    }else{
        res.status(404).send("error en el ingreso de campos")
    }
    }
    catch(error){
        next(error)
    }
   
     
});

router.put('/',(req,res,next) =>{
    res.send('soy /tourisms');
})

router.delete('/',(req,res,next) =>{
    res.send('soy /tourisms');
})



module.exports = router;