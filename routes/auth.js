const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campo");

//Rutas
const router = Router();

//POST
//controlador de esa ruta
//! crear un nuevo usuario
//* /api/auth/new
router.post(
  "/new",
  [
    check("name")
      .notEmpty()
      .withMessage("El nombre es obligatorio")
      .isLength({ min: 1 })
      .withMessage("El name es mínimo de 6 caracteres"),

    check("email")
      .notEmpty()
      .withMessage("El email es obligatorio")
      .isEmail()
      .withMessage("Email ingresado no es valido"),

    check("password")
      .notEmpty()
      .withMessage("El password es obligatoria")
      .isLength({ min: 6 })
      .withMessage("El password es mínimo de 6 caracteres"),

    check("rol")
      .notEmpty()
      .withMessage("El rol es obligatorio")
      .isLength({ min: 1 })
      .withMessage("El rol es mínimo de 1 caracter"),

    validarCampos,
  ],
  crearUsuario
);

//POST
//! Login de usuario
//* /api/auth
router.post(
  "/",
  [
    check("email")
      .notEmpty()
      .withMessage("El email es obligatorio")
      .isEmail()
      .withMessage("Email ingresado no cumple con el formato"),

    check("password")
      .notEmpty()
      .withMessage("La contraseña es obligatoria")
      .isLength({ min: 6 })
      .withMessage("La contraseña es mínimo de 6 caracteres"),
    validarCampos,
  ],
  loginUsuario
);

//para exportar rutas
module.exports = router;
