const {DataTypes} = require("sequelize");


// se exporta una funcion a db.js que recibira sequelize como argumento y conectara

// modelos de sequelize // 


    module.exports = (sequelize)=> {
    sequelize.define('User', {
 
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING
      }, 
      }); 
  };