const mongoose = require("mongoose");

const dbConexion = async() => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log('DB se conectó')
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')
    }
}

module.exports = {
    dbConexion
}