const { response } = require("express");
const Favorite = require("../models/Favorite");
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const jwt = require("jsonwebtoken");


const crearFavorite = async(req, res = response) => {

     const { IdCharacter, IdUser, nameCharacter, caracterUrlImagen } = req.body; //! Destructuracion

     //! req.body.IdCharacter = IdCharacter;
        //! req.body.IdUser = IdUser;
            
    
     
     let valorBody = {
      IdCharacter, 
      IdUser, 
      nameCharacter, 
      caracterUrlImagen
     } 

  
    try {


        // verificar si el usuario ya tiene agregado el mismo id del personaje
        //!Favorito: Rick, usuario 1
        //! Favorito Morty, usuario 1

         //const favorite = await Favorite.findOne({ IdCharacter, IdUser})
         const favorite = await Favorite.findOne({ IdCharacter:IdCharacter, IdUser:IdUser})
         
        if (favorite) {
            return res.status(400).json({
                ok: false,
                msg: 'El personaje ya existe en favoritos'
            })
        }

        //Crear favorito con el modelo
        const dbFavorite = new Favorite(valorBody);

        
        //Crear usuario de base de datos
        await dbFavorite.save();
        //Generar respuesta exitosa
        return res.status(201).json({
            ok: true,  
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }


}


const mostrarFavoritos = async(req, res = response) => {
    
        const idUser = req.params.idUser;
        console.log('ID DEL USUARIO '+ idUser)
        try {
    
            const favorites = await Favorite.find({"IdUser":idUser });
            
    
            return res.json({
                ok: true,
                favorites //! favoritos: favoritos
            })
    
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador'
            })
        }
}

const eliminarFavoritos = async(req, res = response) => {
    
  const {IdCharacter,IdUser} = req.body
  console.log('CAPTURED')
  console.log(req.body)
  try {

      const favoritos = await Favorite.deleteOne({IdCharacter,IdUser});//! DEBERIA HACERSE ES UNA ELIMINACION LóGICA

      if (favoritos.deletedCount === 1) {
        return res.status(200).json({
          ok: true,
          msg: 'El favorito se elimino correctamente'
        })
      } else {
        return res.status(500).json({
          ok: false,
          msg: 'No se pudo eliminar'
        })
      }

  } catch (error) {
      console.log(error);
      return res.status(500).json({
          ok: false,
          msg: 'Por favor hable con el administrador'
      })
  }
}





module.exports = {
  crearFavorite,
  mostrarFavoritos,
  eliminarFavoritos
}