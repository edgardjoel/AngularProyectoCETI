const { response } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req,res=response,next)=>{
  
  // const token = req.header('x-token');

  const {token } = req.body; //! Destructuracion ---_> const token = req.body.token

  console.log('El token esta '+token)

  if(!token){
    //! Status HTTP
    //! 400: Bad Request
    //! 401: Unauthorized
    //! 403: Forbidden
    //! 404: Not Found
    //! 500: Internal Server Error
    //! 501: Not Implemented
    //! 200 OK
    //! 201 Created
    //! 203 Non-Authoritative Information

    return res.status(401).json({
      ok:false,
      msg:"Error en el token"
    })
  }

  try {


    const {uid}=jwt.verify(token,process.env.SECRET_JWT_SEED)
    


  } catch (error) {
    console.log('ERRORRR')
    console.log(error)
    return res.status(401).json({
      ok:false,
      msg:'Token no válido!!!'
    })
  }
  

  //TODO OK!
  next();
}


module.exports={
  validarJWT
}