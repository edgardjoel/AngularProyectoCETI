const express = require("express");
const cors = require("cors");
const { dbConexion } = require('./db/config');
//Es para que tome la configuracion por defecto y lee el archivo de .env
require('dotenv').config()


//objeto especial que existe en node
// console.log(process.env);

//Crear servidor/aplicacion de express
const app = express();


//Base de datos
dbConexion();

//DIRECTORIO PUBLICO
app.use(express.static('public'));

//CORS
app.use(cors());


//Lectura del Body
app.use(express.json())

//USE ES UN MIDDLEWARE: Un middleware no es más que una función 
//que se ejecuta cuando el intérprete pase evaluando cada una de las líneas de código.

//RUTAS DE LAS PETICIONES: GET, POST, PUT
//Usuario
app.use('/api/auth', require('./routes/auth'));

//Favorito
app.use('/api/favorite', require('./routes/favorite'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})
//Levantar el servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor levantando en el puerto ${process.env.PORT}`);
})