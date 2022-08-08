const { response } = require("express");
const Favorite = require("../models/Favorite");
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const jwt = require("jsonwebtoken");
const crearFavorite = async(req, res = response) => {

    
   
     const { IdCharacter, IdUser, nameCharacter, caracterUrlImagen } = req.body;
    
     
     let valorBody = {
      IdCharacter, 
      IdUser, 
      nameCharacter, 
      caracterUrlImagen
     } 

  
    try {


        // verificar si el usuario ya tiene agregado el mismo id del personaje
         const favorite = await Favorite.findOne({ IdCharacter, IdUser})
         
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
            // uid: dbUser.id,
            // name: dbUser.name,
            // token: token
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
    
        const {idUser} = req.params.idUser;
        try {
    
            const favoritos = await Favorite.find({idUser });
    
            return res.json({
                ok: true,
                favoritos
            })
    
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador'
            })
        }
}

// const loginUsuario = async(req, res) => {

//     const { email, password } = req.body;
//     try {

//         // verificar si es que existe el usuario
//         const dbUser = await Usuario.findOne({ email: email })
//       // console.log(dbUser);
//         if (!dbUser) {
//             return res.status(400).json({
//                 ok: false,
//                 msg: 'Su cuenta no existe'
//             })
//         }

//         //Confirmar si el password hace match con la base de datos, devuelve true o false
//         const validPassword = bcrypt.compareSync(password, dbUser.password);
//         console.log(!validPassword);
//         if (!validPassword) {
//             return res.status(400).json({
//                 ok: false,
//                 smg: 'Su cuenta no existe'
//             });
//         }
//         //Generar el jwt
//         const token = await generarJWT(dbUser.id, dbUser.name, dbUser.rol);

//         //Respuesta del servicio
//         return res.json({
//             ok: true,
//             uid: dbUser.id,
//             name: dbUser.name,
//             token: token
//         })


//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             ok: false,
//             msg: "Hable con el administrador"
//         })
//     }

// }



module.exports = {
  crearFavorite,
  mostrarFavoritos
}