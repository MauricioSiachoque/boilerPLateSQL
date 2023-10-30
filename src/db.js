//  configuraciones bases de datos (sequelize SQL)
// Conexion y configuracion de sequelize // 

const { Sequelize } = require("sequelize");   // importo el modulo de sequelize     
const UserModel = require("./models/User");   // importar todos los modelos aqui

const sequelize = new Sequelize("postgres://postgres:1234@localhost:5432/market-protalento");         //con nuestras credenciales
                                                                                            
// Sincronizar mis modelos //
UserModel(sequelize);


// aca van las relaciones  // 
const {User} = sequelize.models   //separo  los modelos   [{User}, {Product},{Messages}]
// aca puedo hacer relaciones //
// User.hasMany(Products)


module.exports= { sequelize, ...sequelize.models };


