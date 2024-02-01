const express = require("express"); //! EXPRESS(framework de NodeJs) => SENCILLA MODELO VISTA CONTROLADOR
const cors = require("cors"); //! Validación de origen de solicitudes
const path = require("path");
const { dbConexion } = require("./db/config");
//! import => ES6 modules
//! require => CommonJs

//Es para que tome la configuracion por defecto y lee el archivo de .env
require("dotenv").config(); //! lee el archivo .env

//Crear servidor/aplicacion de express
const app = express(); //! Nodejs Framework -> MVC

//Base de datos
dbConexion(); //! Conexion a la base de datos

//DIRECTORIO PUBLICO
app.use(express.static("public")); //! La carpeta public se use como default para recursos estaticos

//CORS
// localhost:4200
constObject = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 20
};

app.use(
  // cors(constObject)
  cors()
  //! DOMINIO: .restaurantx.com
); //! Use cors, y se pueden filtrar origenes de peticiones

//Lectura del Body
app.use(express.json()); //! Puedo leer archivos JSON

//USE ES UN MIDDLEWARE: Un middleware no es más que una función
//que se ejecuta cuando el intérprete pase evaluando cada una de las líneas de código.

//RUTAS DE LAS PETICIONES: GET, POST, PUT
//! Usuario
//! Familia de rutas
app.use("/api/auth", require("./routes/auth"));

//! Favorito
app.use("/api/favorite", require("./routes/favorite"));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "public/index.html"));
// });

//!Levantar el servidor
app.listen(process.env.PORT || 5000, () => {
  console.log(`Servidor levantando en el puerto ${process.env.PORT || 5000}`);
});
