const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const FavoriteSchema = Schema({
    IdCharacter: {
      type: Number,
      require: true,
    },
    IdUser: {
      type: String,
      require: true
    },
    nameCharacter: {
        type: String,
        required: true
    },
    caracterUrlImagen: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Favorite', FavoriteSchema);