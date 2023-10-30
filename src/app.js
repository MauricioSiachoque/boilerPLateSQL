//configuraciones de express

//---------------------- EXPRESS ---------------------- //


const express = require("express"); // importo el modulo de express
const cors = require("cors");        // importo el modulo de cors
const app = express();              // se ejecuta y guardamos en una variable  (guardamos una instancia de express)
const port = 3000;                  // constante del puerto que levantare en el servidor 


//  ---------------- MIDDLEWARES (configuraciones express)------------------------------------//

app.use(express.json());      // middleware para acepta jsons(body) en mios peticiciones http // 
app.use(cors());    //-------------PARA ACEPTAR PETICIONES del front o postman ---------------------//

// -------------------- vinculo mis modelos para usar rutas--------------------// 

const {User} = require ("./db")


// RUTAS // 

app.get("/users", async (req, res) => {
  const allUsers = await User.findAll(); 
  res.status(200).json(allUsers);
});

app.post("/users", async (req, res) => {
  const newUser = await User.create({ firstName: "sebastian", lastName: "ramos" });  // crear un usuario
  res.status(200).json("usuario creado con exito");
});

app.get("/", (req, res) => {
  res.send("Hello World, ruta inicial de ejemplo, bienvenido a la api de marketplace de protalento");
});


module.exports = {app, port};