const { response } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async(req, res = response) => {

    // console.log(req.body)
    const { name, email, password, rol } = req.body;
    // console.log(name, email, password);

    try {

        // verificar el email si es que existe
        const usuario = await Usuario.findOne({ email })

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            })
        }

        //Crear usuario con el modelo
        const dbUser = new Usuario(req.body) //name, email, password

        //Encriptar la contraseña mediante un hash
        const numAletorio = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, numAletorio);

        //Generar el JWT
        const token = await generarJWT(dbUser.id, dbUser.name, dbUser.rol);
        //Crear usuario de base de datos
        await dbUser.save();
        //Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token: token
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }


}

const loginUsuario = async(req, res) => {

    const { email, password } = req.body;
    try {

        // verificar si es que existe el usuario
        const dbUser = await Usuario.findOne({ email: email })

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'Su cuenta no existe'
            })
        }

        //Confirmar si el password hace match con la base de datos, devuelve true o false
        const validPassword = bcrypt.compareSync(password, dbUser.password);
        console.log(!validPassword);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                smg: 'Su cuenta no existe'
            });
        }
        //Generar el jwt
        const token = await generarJWT(dbUser.id, dbUser.name, dbUser.rol);

        //Respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token: token
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        })
    }

}



module.exports = {
    crearUsuario,
    loginUsuario
}