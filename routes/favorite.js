const { Router } = require('express');
const { check } = require('express-validator');
 const { crearFavorite} = require('../controllers/favorite');
 const { validarCampos } = require('../middlewares/validar-campo');
const { validarJWT } = require('../middlewares/validar-token');

//Rutas
const router = Router();

//POST
//controlador de esa ruta
//crear un nuevo favorito
router.post('/newFavorite', [
    
    validarJWT,
    
    check('IdCharacter')
    .notEmpty().withMessage('El Id del personaje es obligatorio'),

    check('IdUser')
    .notEmpty().withMessage('El Id del usuario es obligatorio'),
    
    check('nameCharacter')
    .notEmpty().withMessage('El nombre del personaje es obligatorio'),

    check('caracterUrlImagen')
    .notEmpty().withMessage('La url es obligatorio'),
    
    check('token')
    .notEmpty().withMessage('El token es obligatorio'),

    validarCampos

], crearFavorite);

//POST
//Listar favorito
// router.get('/', [
//     check('token')
//     .notEmpty().withMessage('Es token es obligatorio')
//     .isEmail().withMessage("Email ingresado no es valido"),
//     validarCampos
// ], loginUsuario);



//para exportar rutas
module.exports = router;