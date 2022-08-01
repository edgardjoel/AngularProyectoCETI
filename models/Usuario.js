const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: Number,
        require: true
    },
    estado: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('Usuario', UsuarioSchema);