const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tourisms', {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    }, 
    level :{
       type:DataTypes.INTEGER,
      
    },
    time:{
     type:DataTypes.INTEGER,
     
    },
    season:{
        type:DataTypes.STRING,
        
    },

    createdIdBd:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    }
    

  },
  {timestamps:false} //elimina datos innecesarios en la tabla
  
  );
};
