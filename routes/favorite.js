const { Router } = require('express');
const { check } = require('express-validator');
 const { crearFavorite,mostrarFavoritos,eliminarFavoritos} = require('../controllers/favorite');
 const { validarCampos } = require('../middlewares/validar-campo');
const { validarJWT } = require('../middlewares/validar-token');

//Rutas
const router = Router();

//POST
//controlador de esa ruta
//!Estructura: URL --> VALIDACIONES --> CONTROLADOR --> RESPUESTA

//! crear un nuevo favorito
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
//! Listar favorito
//! api/favorite/assdfsdfw9fehwer9gf
 router.get('/:idUser', [
     //check('token')
     //.notEmpty().withMessage('Es token es obligatorio'),
     validarCampos
 ], mostrarFavoritos);


 //! QUITAR FAVORITOS
 router.delete('/deleteFavorite',[
  check('IdCharacter')
  .notEmpty().withMessage('El Id del personaje es obligatorio'),

  check('IdUser')
  .notEmpty().withMessage('El Id del usuario es obligatorio'),
  
  validarCampos
 ],eliminarFavoritos)

//para exportar rutas
module.exports = router;