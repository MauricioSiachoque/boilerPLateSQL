const {app,port} = require("./src/app");
const {sequelize} = require("./src/db");



// SINCRONIZACION base de datos y servidor express //

sequelize.sync({force:false}).then(

  app.listen(port, () => {
    console.log(`servidor levantado en el puerto: ${port}`);
  })
  
); // conecta mi instancia de sequelize con mi codigo // 

