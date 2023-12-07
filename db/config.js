const mongoose = require("mongoose"); //! MONGOOSE, SENCILLA LA SINTAXIS DE MONGODB

const dbConexion = async() => {
    try {
        await mongoose.connect(process.env.BD_CNN); //! DIRECCIÓN DE LA BD
        console.log('DB se conectó bien')
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')
    }
}

module.exports = {
    dbConexion
}