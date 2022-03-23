const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('countries', {
    id:{
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,  
      validate:{
        len:3
      } 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 

  
   flag:{
     type:DataTypes.STRING,
     allowNull:false,
    
         
   },
   continent:{
      type:DataTypes.STRING,
      allowNull:false
   },

   capital:{
     type:DataTypes.STRING,
     allowNull:false
   },

   subregion : { 
       type : DataTypes.STRING,
       allowNull:false

   },
   
  area :{
     type:DataTypes.FLOAT

  },
  population:{
     type:DataTypes.INTEGER
  },
 

  },
  {timestamps:false},//elimina datos que no sirven en la tabla
  
  );
};
