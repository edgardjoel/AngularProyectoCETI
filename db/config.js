const mongoose = require("mongoose");

const dbConexion = async() => {
    try {
        await mongoose.connect(process.env.BD_CNN);
        console.log('DB se conectó bien')
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')
    }
}

module.exports = {
    dbConexion
}